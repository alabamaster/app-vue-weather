<template>
	<the-loader :weather="!appWeather ? false : true"></the-loader>
	<the-header-vue
		:weather="appWeather"
		:units="currentUnits"
		:city-list="cityList"
		@toggle-units="toggleUnits"
		@change-city="changeCity"
		@my-location="dataUpdate(true)"
	></the-header-vue>
	<the-main-vue :weather="appWeather" :units="currentUnits"></the-main-vue>
	<the-footer-vue :weather="appWeather" :units="currentUnits"></the-footer-vue>
</template>

<script>
import TheLoader from "./components/TheLoader.vue";
import TheHeaderVue from "./components/TheHeader.vue";
import TheMainVue from "./components/TheMain.vue";
import TheFooterVue from "./components/TheFooter.vue";

export default {
	name: "App",
	components: {
		TheHeaderVue,
		TheMainVue,
		TheFooterVue,
		TheLoader,
	},
	data() {
		return {
			INTERVAL_UPDATE: 300000,
			cityList: null,
			currentCity: null,
			currentUnits: "c", // imperial = F , metric = C
			appWeather: null,
		};
	},
	mounted() {
		this.dataUpdate(),
		this.api_getCitys(),
		
		setInterval(() => {
			this.dataUpdate();
			console.log("5 minutes have passed! Update weather ...");
		}, this.INTERVAL_UPDATE);
	},
	methods: {
		async api_getCityName() {
			// if (this.appWeather) return this.currentCity;

			try {
				const response = await fetch("https://csonelove.ru/api_weather.php");
				// const data = await response.json();
				const data = JSON.parse(await response.json())

				// console.log(data);

				if (!response || data.status !== "success") {
					throw "Ошибка определения локации";
				}

				return data.city;
			} catch (error) {
				console.error(error);
			}
		},
		async api_getWeather() {
			try {
				const options = {
					key: "312c13866c8d4744930141056212905", // pls dont use him, po bratski
					q: this.currentCity,
					days: 1,
					aqi: "no",
					alerts: "no",
					lang: "ru",
				};
				const queryStr = Object.keys(options)
					.map((key) => key + "=" + options[key])
					.join("&");
				const response = await fetch(
					`https://api.weatherapi.com/v1/forecast.json?` + queryStr
				);
				const data = await response.json();

				if (!response || !data.location) {
					this.dataUpdate(true)
					alert("Ошибка получения данные о погоде");
					throw "Ошибка получения данные о погоде";
				}

				console.log(data);

				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async api_getCitys() {
			const response = await fetch("https://api.hh.ru/areas");
			const data = await response.json();
			const citys = [];

			data[0].areas.forEach((itemA) => {
				citys.push(itemA.name);
				if (itemA.areas.length) {
					itemA.areas.forEach((itemB) => citys.push(itemB.name));
				}
			});

			this.cityList = citys;
		},
		setModelValues(weather) {
			if (!weather) return false;

			const cur = weather.current;
			const forecastday = weather.forecast.forecastday[0];
			const nextHour = new Date(cur.last_updated_epoch * 1000).getHours()

			const { chance_of_rain } = forecastday.hour.find(item => new Date(item.time_epoch * 1000).getHours() >= nextHour)
			// console.log(forecastday.hour)
			
			return (this.appWeather = {
				city: weather.location.name,
				time: weather.location.localtime,
				about: cur.condition.text,
				wcode: cur.condition.code,
				icon: cur.condition.icon,
				humidity: cur.humidity, // влажность
				windSpeed: ((cur.wind_kph * 1000) / 3600).toFixed(1), // метров в секунду
				windDegree: cur.wind_degree,
				windDir: cur.wind_dir,
				precip: cur.precip_mm,
				sunrise: forecastday.astro.sunrise,
				sunset: forecastday.astro.sunset,
				chanceRain: chance_of_rain,
				isDay: cur.is_day,
				c: {
					feelslike: cur.feelslike_c,
					temp: cur.temp_c,
					pressure: (cur.pressure_mb * 3) / 4, // мм р.с.
				},
				f: {
					feelslike: cur.feelslike_f,
					temp: cur.temp_f,
					pressure: cur.pressure_mb, // гПА
				},
			});
		},
		dataUpdate(myLocation = false) {
			if (!this.currentCity || myLocation) {
				this.api_getCityName().then((city) => {
					this.currentCity = city;

					this.api_getWeather().then(
						(data) => (this.appWeather = this.setModelValues(data))
					);
				});
			} else {
				this.api_getWeather().then(
					(data) => (this.appWeather = this.setModelValues(data))
				);
			}
		},
		toggleUnits() {
			this.currentUnits = this.currentUnits === "c" ? "f" : "c";
		},
		changeCity(newCity) {
			this.currentCity = newCity;
			this.dataUpdate();
		},
		toggleThemeColor(memberForce = false) {
			const html = document.querySelector("html");

			if (memberForce) {
				if (!html.dataset.theme) {
					html.dataset.theme = "dark";
				} else {
					html.removeAttribute("data-theme");
				}
			}

			if (this.appWeather && !this.appWeather.isDay) {
				if (!html.dataset.theme) {
					html.dataset.theme = "dark";
				}
			}
		},
	},
	computed: {
		curreentTemp() {
			return !this.appWeather ? 0 : this.appWeather[this.currentUnits].temp;
		},
	},
	watch: {
		appWeather() {
			this.toggleThemeColor()
		}
	},
};
</script>
