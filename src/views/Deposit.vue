<style scoped>

.input-wrapper {
	@apply flex flex-col h-20 text-gray-300;
}

input[type=text], select {
	@apply bg-secondary border border-gray-700 text-gray-300 rounded-lg h-full mt-2 text-sm px-2 py-3;
}

</style>
<template>
	<main>
		<Header title="Setor" sub="Setor sampah anda disini" />
		<section class="text-gray-300 mt-20">
			<h1 class="text-lg font-medium">Formulir</h1>
			<p class="text-xs">
				<i class="fas fa-lightbulb mr-1"></i>
				Silahkan isi form dibawah ini dengan benar
			</p>
		</section>
		<form class="mt-8 w-full flex flex-wrap justify-between">
			<div class="input-wrapper w-5/12">
				<label>kg sampah</label>
				<input type="text" placeholder="Berat sampah" />
			</div>
			<div class="input-wrapper w-5/12">
				<label>Metode</label>
				<select>
					<option>Metode setor</option>
					<option>Antar sendiri</option>
					<option>Jemput petugas</option>
				</select>
			</div>
			<div class="input-wrapper mt-8 mb-3 w-full">
				<label>Pilih lokasi penjemputan</label>
				<select>
					<option>Unit Bank sampah</option>
					<option>Unit Handil Bakti</option>
					<option>Unit Alalak</option>
				</select>
			</div>
			<p class="text-xs text-gray-300">
				<i class="fas fa-lightbulb mr-1"></i>
				Hanya untuk metode pengantaran <strong>antar sendiri</strong>
			</p>
		</form>
		<section class="mt-12">
			<h1 class="font-medium text-gray-300 text-lg">Kategori sampah</h1>
			<TrashCategory />
			<section class="w-full mt-10">
				<button class="bg-green-600 text-gray-300 font-semibold px-3 py-2 w-full rounded-full">Setor</button>
			</section>
		</section>
	</main>
</template>
<script setup>

import Header from '@/components/Header.vue'
import TrashCategory from '@/components/TrashCategory.vue'

</script>
