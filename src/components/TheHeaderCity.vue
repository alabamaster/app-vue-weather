<template>
	<div class="wrap-city" :class="{ hide: searchIsActive }">
		<div class="current-city">{{ city }}</div>
		<div class="city-buttons">
			<button class="btn city-buttons_btn" @click="$emit('toggle-search')">
				<i class="bi bi-search"></i>
				<span>Сменить город</span>
			</button>
			<button class="btn city-buttons_btn" @click="$emit('my-location')">
				<i class="bi bi-geo-alt"></i>
				<span>Мое местоположение</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["city", "searchIsActive"],
	emits: ["toggle-search", "my-location"],
};
</script>
