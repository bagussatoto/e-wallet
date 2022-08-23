<template>
    <main class="text-gray-300">
        <Header title="Tarik Tunai" sub="Tarik saldo anda dalam bentuk tunai" />
        <section class="mt-20">
            <h1 class="text-lg font-medium">Pilih metode</h1>
            <p class="text-xs mb-5">
				<i class="fas fa-lightbulb mr-1 text-green-500"></i>
				Silahkan memilih metode penarikan anda
			</p>
        </section>
        <section class="mt-6">
            <h1 class="text-sm font-medium mb-4 text-green-500">Bank Transfer</h1>
            <template v-for="card in 4" :key="card">
                <List>
                    <template v-slot:start>
                        <section class="mt-2">
                            <img src="/bank.png" width="80" alt="" />
                        </section>
                    </template>
                    <template v-slot:end>
                        <section class="mt-2">
                            <i class="fa fa-chevron-right"></i>
                        </section>
                    </template>
                </List>
            </template>
        </section>

        <section class="mt-6">
            <h1 class="text-sm text-green-500 font-medium mb-4">Lainnya</h1>
            <template v-for="card in 4" :key="card">
                <List>
                    <template v-slot:start>
                        <section class="mt-2">
                            <img src="/dana.png" width="80" alt="" />
                        </section>
                    </template>
                    <template v-slot:end>
                        <section class="mt-2">
                            <i class="fa fa-chevron-right"></i>
                        </section>
                    </template>
                </List>
            </template>
        </section>
        <HelpCenter />
    </main>
</template>

<script setup>

import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import HelpCenter from '@/components/HelpCenter.vue'

</script>