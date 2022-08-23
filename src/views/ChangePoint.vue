<template>
    <main class="text-gray-300">
        <Header title="Tukar Poin" sub="Dapatkan item menarik disini" />
        <section class="mt-20 flex flex-wrap justify-between">
            <template v-for="card in 12">
                <div class="w-5/12 flex flex-col mb-4">
                    <span class="bg-secondary rounded-lg px-2 py-8 grid place-items-center">
                        <i class="text-gray-600 fa fa-camera"></i>
                    </span>
                    <div class="mt-3">
                        <p class="text-sm">Voucher kuota 3GB</p>
                        <p class="text-xs text-green-500 font-medium flex justify-between items-center">
                            400 point
                            <i class="fa fa-chevron-right"></i>
                        </p>
                    </div>
                </div>
            </template>
        </section>
        <HelpCenter />
    </main>
</template>

<script setup>

import Header from '@/components/Header.vue'
import HelpCenter from '@/components/HelpCenter.vue'

</script>
