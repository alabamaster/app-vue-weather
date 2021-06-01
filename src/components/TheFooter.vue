<template>
	<footer v-if="weather">
		<div class="container">
			<div class="wrap-statistic">
				<ul class="statistic-list">
					<li class="statistic-item">
						<div class="item-title">Ветер</div>
						<div class="item-value">
							{{ windSpeed }} м/c, {{ windDegree }}
						</div>
					</li>
					<li class="statistic-item">
						<div class="item-title">Давление</div>
						<div class="item-value">
							{{ pressure }} {{ units === "c" ? "мм рт. ст." : "гПА" }}
						</div>
					</li>
					<li class="statistic-item">
						<div class="item-title">Влажность</div>
						<div class="item-value">{{ humidity }}%</div>
					</li>
					<li class="statistic-item">
						<div class="item-title">Вероятность дождя</div>
						<div class="item-value">{{ chanceRain }}%</div>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	props: ["weather", "units"],
	computed: {
		windSpeed() {
			return !this.weather ? 0 : this.weather.windSpeed;
		},
		windDegree() {
			const directions = [
				"северный",
				"северо-восточный",
				"восточный",
				"юго-восточный",
				"южный",
				"юго-западный",
				"западный",
				"северо-западный",
			];
			return !this.weather
				? "северный"
				: `${directions[(this.weather.windDegree / 45) | 0]}`;
		},
		pressure() {
			return !this.weather
				? 700
				: this.weather[this.units].pressure.toFixed();
		},
		humidity() {
			return !this.weather ? 0 : this.weather.humidity.toFixed();
		},
		chanceRain() {
			return !this.weather ? 0 : this.weather.chanceRain;
		},
	}
};
</script>
