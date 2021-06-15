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
	<app-alerts></app-alerts>
</template>

<script>
import TheLoader from "./components/TheLoader.vue";
import TheHeaderVue from "./components/TheHeader.vue";
import TheMainVue from "./components/TheMain.vue";
import TheFooterVue from "./components/TheFooter.vue";
import AppAlerts from './components/AppAlerts.vue';

export default {
	name: "App",
	components: {
		TheHeaderVue,
		TheMainVue,
		TheFooterVue,
		TheLoader,
		AppAlerts,
	},
	data() {
		return {
			INTERVAL_UPDATE: 300000,
		};
	},
	mounted() {
		this.$store.dispatch('api_getCitys'),
		this.$store.dispatch('api_getCityName'),
		
		setInterval(() => {
			this.$store.dispatch('dataUpdate')
			this.$store.commit('pushAlert', {
				class: 'alert-info',
				mess: '<b>Прошло 5 минут</b> <br> Обновление данных ...',
				html: true
			})
		}, this.INTERVAL_UPDATE);
	},
	methods: {
		// dataUpdate(myLocation = false) {
		// 	if (!this.$store.getters.currentCity || myLocation) {
		// 		this.$store.dispatch('api_getCityName')
		// 	} else {
		// 		this.$store.dispatch('api_getWeather')
		// 	}
		// },
		toggleUnits() {
			this.currentUnits = this.currentUnits === "c" ? "f" : "c";
		},
		changeCity(newCity) {
			this.$store.commit('setCurrentCity', newCity)
			// this.dataUpdate();
			this.$store.dispatch('dataUpdate')
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

		appWeather() {
			return this.$store.getters.appWeather
		},
		currentUnits() {
			return this.$store.state.currentUnits
		},
		cityList() {
			return this.$store.state.cityList
		}
	},
	watch: {
		appWeather() {
			this.toggleThemeColor()
		}
	},
};
</script>
