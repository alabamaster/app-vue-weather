<template>
	<main v-if="weather">
		<div class="container">
			<div class="weather">
				<!-- <div class="weaher-icon" v-html="weatherIcon"></div> -->
				<div class="weaher-icon">
					<img
						:src="
							!weather
								? 'https://cdn.weatherapi.com/weather/128x128/day/113.png'
								: weather.icon.replace('64x64', '128x128')
						"
						:alt="!weather ? 'Loading ...' : weather.about"
					/>
				</div>
				<div class="weather-temp">
					<span>{{ temp }}</span>
					<span>º</span>
				</div>
			</div>
			<div class="weather-about">{{ about }}</div>
		</div>
	</main>
</template>

<script>
export default {
	props: {
		weather: null,
		units: {
			type: String,
			required: true,
			default: "c",
		},
	},
	computed: {
		temp() {
			return !this.weather ? 20 : this.weather[this.units].temp.toFixed();
		},
		about() {
			return !this.weather ? "Загрузка ..." : this.weather.about;
		},
		weatherIcon() {
			if (!this.weather) return '<i class="bi bi-brightness-high"></i>';

			const jsonCodes = require("../weather_icons.json");
			let icon;

			const listIcons = [
				// ясно
				{
					ids: [113],
					iconD: '<i class="bi bi-brightness-high"></i>',
					iconN: '<i class="bi bi-moon"></i>',
				},
				// переменная облачность
				{
					ids: [116],
					iconD: '<i class="bi bi-cloud-sun"></i>',
					iconN: '<i class="bi bi-cloud-sun"></i>',
				},
				// пасмурно
				{
					ids: [119, 122],
					iconD: '<i class="bi bi-cloud"></i>',
					iconN: '<i class="bi bi-cloud"></i>',
				},
			];

			jsonCodes.forEach((itemA) => {
				if (itemA.code === this.weather.wcode) {
					listIcons.forEach((itemB) => {
						if (itemB.ids.indexOf(itemA.icon) !== -1) {
							icon = this.weather.isDay ? itemB.iconD : itemB.iconN;
						}
					});
				}
			});

			// console.log(icon);
			return icon;

			// return listIcons.find(obj => {
			// 	return obj.ids.find(item => item === this.weather.wcode)
			// })
		},
	},
};
</script>
