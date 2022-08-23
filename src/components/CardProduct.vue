<template>
    <List v-if="showCard">
        <template v-slot:start>
            <div class="flex items-center gap-3 mt-3">
                <img src="/product.jpg" class="rounded-lg" width="70" />
                <div class="text-gray-300">
                    <h1 class="font-medium">{{ cart.title }}</h1>
                    <p class="text-sm">Rp.{{ cart.price.toLocaleString('id') }}</p>
                </div>
            </div>
        </template>
        <template v-slot:end>
            <section class="text-right mt-5">
                <IncrementBar class="w-full mb-3" :value="cart.amount" />
                <i @click="expand = !expand" :class="expand ? 'fa-chevron-up' : 'fa-chevron-down'" class="fa text-gray-300"></i>
            </section>
        </template>
        <template v-slot:bottom>
            <div @click="showCard = !showCard" v-if="expand" class="active:scale-75 duration-300 py-1 text-gray-300 duration-300 w-full bg-red-500 mt-3 rounded-lg text-center">
                <i class="text-xs fa fa-trash"></i>
                <span class="ml-1">Delete</span>
            </div>
        </template>
    </List>
</template>

<script setup>

import { ref } from 'vue'
import List from '@/components/List.vue'
import IncrementBar from '@/components/IncrementBar.vue'

const expand = ref(false)
const showCard = ref(true)

const props = defineProps({
    cart: {
        type: Object
    }
})

</script>
