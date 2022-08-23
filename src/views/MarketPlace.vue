<template>
    <main class="pt-20"> 
        <HeaderMarket />
        <section class="mt-20 flex flex-wrap justify-between">
            <template v-for="(card, x) in 6" :key="x">
                <div class="w-5/12 mb-10">
                    <img src="/product.jpg" class="w-full mb-2 rounded-lg" />
                    <div class="text-sm flex items-center justify-between">
                        <span class="text-gray-300">
                            <h1 class="font-medium">Tas plastik</h1>
                            <p class="text-gray-400">Rp.75.000,00,-</p>
                        </span>
                        <i class="fa fa-arrow-right text-lg text-green-600"></i>
                    </div>
                </div>
            </template>
        </section>
    </main>
</template>

<script setup>

import HeaderMarket from '@/components/HeaderMarket.vue'

</script>
