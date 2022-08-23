<style scoped>

@keyframes spinner {
	from {
		transform: rotate(0deg)
	} to {
		transform: rotate(360deg)
	}
}

.spinner {
	animation: spinner .45s ease infinite;
}

</style>

<template>
	<section>
		<span v-if="isLoad && !isSuccess && !isFail"> 
			<i class="fa fa-spinner spinner"></i>
		</span>
		<span v-else-if="!isLoad && !isSuccess && !isFail"> 
			{{ props.action }}
		</span>
		<span v-else-if="isFail">
			<i class="fa fa-times"></i>
		</span>
		<span v-else>
			<i class="fa fa-check"></i>
		</span>
	</section>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
	action: {
		type: String,
		default: 'Tap here'
	},
	isLoad: {
		type: Boolean,
		default: false
	},
	isSuccess: {
		type: Boolean,
		default: false
	},
	isFail: {
		type: Boolean,
		default: false
	}
})

</script>