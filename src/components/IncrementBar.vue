<style scoped>

.button {
    @apply bg-secondary px-2 active:scale-95 duration-300;
}

</style>

<template>
    <main class="text-green-600 text-lg flex gap-3">
        <span @click="action(false)" class="button">-</span>
        <span class="text-gray-300 font-medium text-lg">{{ amount }}</span>
        <span @click="action" class="button">+</span>
    </main>
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
    value: {
        type: Number,
        default: 1
    }
})

const amount = ref(props.value)

const action = (increment = true) => {
    if (increment) amount.value++
    else {
        if (amount.value > 0) amount.value--
    }
}

</script>
