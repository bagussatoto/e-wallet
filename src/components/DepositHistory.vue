<template>
	<main class="mt-3">
		<section v-for="(item, x) in depositHistory" :key="x">
			<List>
				<template v-slot:start>
					<section class="flex items-center gap-3">
						<img :src="item.thumbnail" width="75" class="bg-secondary p-1">
						<div>
							<h1 class="font-medium text-gray-300 text-lg">{{ item.title }}</h1>
							<small class="text-gray-400 font-medium">{{ item.description }}</small>
						</div>
					</section>
				</template>
				<template v-slot:end>
					<span class="mr-5">
						<i class="fa fa-arrow-right text-xl text-success"></i>
					</span>
				</template>
			</List>
		</section>
	</main>
</template>

<script setup>

import { computed } from 'vue'
import { useHistory } from '@/stores/history'
import List from '@/components/List.vue'

const history = useHistory()
const depositHistory = computed(() => history.deposit)

</script>
