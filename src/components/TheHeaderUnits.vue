<template>
	<div class="wrap-units">
		<div class="units">
			<button
				class="btn units_btn"
				:class="{ active: units === 'c' }"
				@click="$emit('toggle-units')"
			>
				C
			</button>
			<button
				class="btn units_btn"
				:class="{ active: units === 'f' }"
				@click="$emit('toggle-units')"
			>
				F
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["units"],
	emits: ["toggle-units"],
};
</script>
