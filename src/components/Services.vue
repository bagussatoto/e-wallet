<template>
	 <main class="flex justify-between gap-3 mt-3">
		<template v-for="(service, x) in services" :key="x">
			<IconMenu :source="service" />
		</template>
	</main>
</template>

<script setup>

import IconMenu from '@/components/IconMenu.vue'

const services = [
	{
		name: 'Setor',
		to: 'Deposit'
	},
	{
		name: 'Kirim Uang',
		to: 'Transfer'
	},
	{
		name: 'Tarik Tunai',
		to: 'WithDraw'
	},
	{
		name: 'Tukar Poin',
		to: 'ChangePoint'
	}
]

</script>
