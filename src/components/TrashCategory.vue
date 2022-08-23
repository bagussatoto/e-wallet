<template>
	<main class="mt-4 text-gray-300">
		<template v-for="item in trashCategory" :key="item.id">
			<List>
				<template v-slot:start>
					<section class="flex items-center gap-3 w-8/12">
						<img :src="item.thumbnail" width="65" class="bg-secondary p-2" />
						<div>
							<h1 class="font-semibold">{{ item.name }}</h1>
							<p class="font-medium text-xs">{{ item.description }}</p>
						</div>
					</section>
				</template>
				<template v-slot:end>
					<span class="bg-green-600 text-xs w-3/12 text-center px-2 py-1 rounded-full">
						+ {{ item.point }} point
					</span>
				</template>
			</List>
		</template>
	</main>
</template>

<script setup>

import List from '@/components/List.vue'
import trashCategory from '@/contents/trashCategory.js'

</script>
