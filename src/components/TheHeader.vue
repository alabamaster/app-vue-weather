<template>
	<header v-if="weather">
		<div class="container">
			<div class="wrap-header">
				<div class="wrap-city-and-search">
					<the-header-search-vue
						:searchIsActive="searchIsActive"
						:city-list="cityList"
						@toggle-search="toggleSearch"
						@change-city="changeCity"
					></the-header-search-vue>
					<the-header-city-vue
						:searchIsActive="searchIsActive"
						@toggle-search="toggleSearch"
						@my-location="$store.dispatch('api_getCityName')"
					></the-header-city-vue>
				</div>
				<the-header-units-vue></the-header-units-vue>
			</div>
		</div>
	</header>
</template>

<script>
import TheHeaderCityVue from "./TheHeaderCity.vue";
import TheHeaderSearchVue from "./TheHeaderSearch.vue";
import TheHeaderUnitsVue from "./TheHeaderUnits.vue";

export default {
	components: {
		TheHeaderUnitsVue,
		TheHeaderSearchVue,
		TheHeaderCityVue,
	},
	emits: ["change-city", "my-location"],
	props: {
		weather: null,
		units: {
			type: String,
			required: true,
			default: "c",
		},
		cityList: null,
	},
	data() {
		return {
			searchIsActive: false,
		};
	},
	methods: {
		toggleSearch() {
			this.searchIsActive = !this.searchIsActive;
		},
		changeCity(city) {
			this.$emit("change-city", city);
		},
	},
	computed: {
		city() {
			return !this.weather ? "Краснодар" : this.$store.getters.currentCity;
		},
	},
};
</script>
