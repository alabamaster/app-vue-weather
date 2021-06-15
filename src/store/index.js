import { toHandlers } from '@vue/runtime-core'
import { createStore } from 'vuex'

export default createStore({
	// state: {
	// },
	// mutations: {
	// },
	// actions: {
	// },
	// modules: {
	// }
	state() {
		return {
			// current data
			cityList: null,
			currentCity: 'unknown',
			currentUnits: 'c', // imperial = F , metric = C
			appWeather: null,

			// search
			searchIsActive: false,
			searchQuery: '',

			// alerts
			alerts: [],
		}
	},
	mutations: {
		// alerts
		pushAlert(state, alert) {
			state.alerts.push({
				class: alert.class,
				mess: alert.mess,
				html: alert.html
			})
		},
		unsetAlert(state, idx) {
			state.alerts.splice(idx, 1)
		},

		// city
		setCurrentCity(state, city) {
			state.currentCity = city
		},
		setCityList(state, payload) {
			state.cityList = payload
		},
		setAppWeather(state, weather) {
			if (!weather) return false;

			const cur = weather.current;
			const forecastday = weather.forecast.forecastday[0];
			const nextHour = new Date(cur.last_updated_epoch * 1000).getHours()

			const { chance_of_rain } = forecastday.hour.find(item => new Date(item.time_epoch * 1000).getHours() >= nextHour)

			// this.dispatch('setBodyImage', chance_of_rain)
			
			state.appWeather = {
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
			}
		},
		setCurrentUnit(state, unit) {
			state.currentUnits = unit
		},

		// search
		setSearchInputQuery(state, payload) {
			state.inputQuery = payload
		}
	},
	getters: {
		currentCity(state) {
			return state.currentCity
		},
		appWeather(state) {
			return state.appWeather
		},
		currentTemp(state, getters) {
			return !getters.appWeather ? 0 : getters.appWeather[state.currentUnits].temp
		},
		currentUnits(state) {
			return state.currentUnits
		},

		// alerts
		getAlerts(state) {
			return state.alerts
		}
	},
	actions: {
		async api_getCitys(context) {
			try {
				const response = await fetch("https://api.hh.ru/areas");
				const data = await response.json();
				const citys = [];

				// console.log(data);

				if (response.status !== 200 || !response.ok) {
					const mess = 'Не удалось получить список городов с https://api.hh.ru/areas'
					context.commit('pushAlert', {
						class: 'alert-danger',
						mess: mess,
						html: false
					})
					throw mess;
				}

				data[0].areas.forEach((itemA) => {
					// citys.push(itemA.name);
					
					// if (itemA.areas.length) {
						citys.push(itemA.name);

						itemA.areas.forEach((itemB) => {
							if (itemB.name.indexOf('(') === -1) {
								citys.push(itemB.name)
							}
						});
					// }
				});

				context.commit('setCityList', citys)
			} catch (error) {
				console.log(error);
			}
		},
		async api_getCityName(context) {
			try {
				const response = await fetch("https://csonelove.ru/api_weather.php");
				const data = JSON.parse(await response.json())

				// console.log(data);

				if (!response || data.status !== "success") {
					const mess = 'Ошибка при определении локации'
					context.commit('pushAlert', {
						class: 'alert-danger',
						mess: mess,
						html: false
					})
					throw mess;
				}

				context.commit('setCurrentCity', data.city)
				context.commit('setSearchInputQuery', data.city)
				this.dispatch('api_getWeather')
			} catch (error) {
				console.error(error);
			}
		},
		async api_getWeather(context) {
			try {
				const options = {
					key: "312c13866c8d4744930141056212905", // pls dont use him, po bratski
					q: this.getters.currentCity,
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
				
				// console.log(data);

				if (!response || !data.location) {
					const mess = 'Не удалось получить данные о погоде, возможно ошибка в названии города'
					context.commit('pushAlert', {
						class: 'alert-danger',
						mess: mess,
						html: false
					})
					context.dispatch('api_getCityName')
					throw mess
				}

				// console.log(data);
				this.commit('setAppWeather', data)

				// return data;
			} catch (error) {
				console.log(error);
			}
		},
		dataUpdate(context, myLocation = false) {
			if (context.getters.currentCity || myLocation) {
				context.dispatch('api_getCityName')
			} else {
				context.dispatch('api_getWeather')
			}
		},
		asyncUnsetAlert(context, payload) {
			setTimeout(() => context.commit('unsetAlert', payload.id), payload.delay * 1000)
		},
		setBodyImage(_, rainChance) {
			const body = document.querySelector('body')

			if (rainChance > 50) {
				body.style.backgroundImage = 'url(https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg)'
				body.style.backgroundSize = 'cover'
			} else {
				body.removeAttribute('style')
			}
		}
	}
})
