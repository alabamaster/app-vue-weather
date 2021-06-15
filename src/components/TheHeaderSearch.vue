<template>
	<div class="wrap-search" :class="{ show: searchIsActive }">
		<form @submit.prevent="submit">
			<div class="city-search">
				<!-- <input
					type="text"
					placeholder="Введите город"
					class="city-search_input"
					v-model.trim="inputQuery"
					@input="inputSearch"
					@keyup.esc="$emit('toggle-search')"
				/> -->
				<input 
					type="text" 
					placeholder="Введите город" 
					class="city-search_input" 
					@input="inputEvent"
					:value="inputQuery"
				>
				<button type="submit" class="city-search_btn">ОК</button>
			</div>
		</form>
		<div class="search-results" v-if="inputQuery.length > 1 && resultsArr.length">
			<div
				class="search-results_item"
				v-for="(item, idx) in resultsArr"
				:key="idx"
				@click="$store.commit('setSearchInputQuery', item), resultsArr = []"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["searchIsActive", "cityList"],
	emits: ["toggle-search", "change-city"],
	data() {
		return {
			// inputQuery: '',
			resultsArr: [],
		};
	},
	computed: {
		inputQuery() {
			return this.$store.state.inputQuery
		}
	},
	methods: {
		inputSearch() {
			this.resultsArr = this.cityList
				.filter(item => item.toLowerCase().indexOf(this.inputQuery.toLowerCase()) !== -1)
		},
		inputEvent(event) {
			this.resultsArr = this.cityList
				.filter(item => item.toLowerCase().indexOf(this.inputQuery.toLowerCase()) !== -1)

			this.$store.commit('setSearchInputQuery', event.target.value.trim())
		},
		submit() {
			if (!this.inputQuery.length) {
				return this.$store.commit('pushAlert', {
					class: 'alert-danger',
					mess: 'Введите название города!',
					html: false
				})
			}

			this.$store.commit('setCurrentCity', this.inputQuery)
			this.$store.dispatch('api_getWeather')

			this.$emit("toggle-search");
			
			// this.$emit("change-city", this.inputQuery);
		},
	}
};
</script>
