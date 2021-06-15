<template>
	<div class="wrap-units">
		<div class="units">
			<button 
				class="btn units_btn" 
				:class="{ active: $store.getters.currentUnits === 'c' }" 
				@click="$store.commit('setCurrentUnit', 'c')"
			>C</button>
			<button 
				class="btn units_btn" 
				:class="{ active: $store.getters.currentUnits === 'f' }" 
				@click="$store.commit('setCurrentUnit', 'f')"
			>F</button>
		</div>
	</div>
</template>
