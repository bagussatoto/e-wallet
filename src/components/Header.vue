<template>
	<HeaderBar>
        <template v-slot:start>
            <section class="flex items-center gap-3">
                <i v-if="useArrow" @click="router.go(-1)" class="active:scale-95 duration-300 fa fa-arrow-left"></i>
                <div>
                    <h1 class="font-semibold text-xl">{{ title }}</h1>
                    <p class="text-sm">{{ sub }}</p>
                </div>
            </section>
        </template>
    </HeaderBar>
</template>

<script setup>

import HeaderBar from '@/components/HeaderBar.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    sub: {
        type: String,
        default: 'sub'
    },
    useArrow: {
        type: Boolean,
        default: true
    }
})
const router = useRouter()

</script>
