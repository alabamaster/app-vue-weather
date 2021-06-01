<template>
	<div class="wrap-loader" :class="{hide: weather}">
		<div class="loader"></div>
	</div>
</template>

<script>
export default {
	props: ['weather']
}
</script>
