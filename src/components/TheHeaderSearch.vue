<template>
	<div class="wrap-search" :class="{ show: searchIsActive }">
		<form @submit.prevent="submit">
			<div class="city-search">
				<input
					type="text"
					placeholder="Введите город"
					class="city-search_input"
					v-model.trim="inputQuery"
					@input="inputSearch"
					@keyup.esc="$emit('toggle-search')"
				/>
				<button type="submit" class="city-search_btn">ОК</button>
			</div>
		</form>
		<div
			class="search-results"
			v-if="inputQuery.length && resultsArr.length"
		>
			<div
				class="search-results_item"
				v-for="(item, idx) in resultsArr"
				:key="idx"
				@click="(inputQuery = item), (resultsArr = [])"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["searchIsActive", "cityList", "city"],
	emits: ["toggle-search", "change-city"],
	data() {
		return {
			inputQuery: this.city,
			resultsArr: [],
		};
	},
	methods: {
		inputSearch() {
			this.resultsArr = this.cityList.filter(
				(item) =>
					item.toLowerCase().indexOf(this.inputQuery.toLowerCase()) !== -1
			);
		},
		submit() {
			this.$emit("toggle-search");
			this.$emit("change-city", this.inputQuery);
		},
	}
};
</script>
