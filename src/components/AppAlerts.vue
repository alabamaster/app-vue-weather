<template>
	<div class="alerts" v-if="allAlerts.length">
		<div 
			class="alert" 
			v-for="(alert, idx) in allAlerts"
			:class="alert.class"
			:key="alert.mess" 
			:onload="$store.dispatch('asyncUnsetAlert', {id: idx, delay: 10})"
		>
			<div class="alert-icon"></div>
			<div class="alert-content">
				<!-- <div class="alert-title">Системное сообщение</div> -->
				<div class="alert-text" v-if="alert.html" v-html="alert.mess"></div>
				<div class="alert-text" v-else>{{ alert.mess }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		allAlerts() {
			return this.$store.state.alerts
		}
	}
}
</script>

<style lang="scss">
.alerts {
	position: fixed;
	bottom: 20px;
	right: 20px;
}
.alert {
	display: flex;
	align-items: center;

	min-height: 50px;
	width: 300px;

	border-radius: 4px;
	background: #fff;

	border: 1px solid #ccc;
	color: #444;

	margin-bottom: 10px;
	&:last-child {margin-bottom: 0;}

	transition: all .5s;

	position: relative;

	animation-name: alert;
	animation-duration: .5s;
	animation-fill-mode: forwards;

	box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);

	&.alert-danger {
		border-color: var(--danger-color);
		border-left-width: 4px;

		& .alert-title {
			color: var(--danger-color);
		}
		& .alert-icon {
			background-image: url(../assets/alerts/error.svg);
			background-size: cover;
		}
	}
	&.alert-info {
		border-color: #3498db;
		border-left-width: 4px;

		& .alert-title {
			color: #3498db;
		}
		& .alert-icon {
			background-image: url(../assets/alerts/info.svg);
			background-size: cover;
		}
	}
}
.alert-content {flex: 1 0 0}
.alert-icon {
	width: 24px;
	height: 24px;

	margin: 0 10px;
}
.alert-title {
	font-weight: bold;
	padding: 5px 5px 5px 0;
}
.alert-text {padding: 5px 5px 5px 0;}

@keyframes alert {
	from {right: -100%;}
	to {right: 0;}
}

@media screen and (max-width: 576px) {
	.alert {
		width: calc(100vw - 40px);
	}
}
</style>
