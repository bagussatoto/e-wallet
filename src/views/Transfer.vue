<template>
    <main class="text-gray-300">
        <Header title="Kirim Uang" sub="Gunakan saldo anda untuk berkirim uang" />
        <section class="mt-20">
            <h1 class="text-lg font-medium">Daftar rekening anda</h1>
            <p class="text-xs mb-5">
				<i class="fas fa-lightbulb mr-1 text-green-500"></i>
				Silahkan memilih rekening tujuan
			</p>
            <template v-for="card in 6" :key="card">
                <List>
                    <template v-slot:start>
                        <section class="mt-2">
                            <p class="font-semibold">Jordy Alba</p>
                            <small class="text-xs">Transfer terakhir pada 12/2/2022</small>
                        </section>
                    </template>
                    <template v-slot:end>
                        <section class="flex items-center gap-3">
                         <img width="50" src="/bank.png" alt="">
                         <i class="fa fa-chevron-right"></i>
                        </section>
                    </template>
                </List>
            </template>           
        </section>
        <section class="mt-10">
            <h1 class="text-lg font-medium">Lainnya</h1>
            <p class="text-xs mb-5">
                <i class="fas fa-lightbulb mr-1 text-green-500"></i>
                Ingin menggunakan layanan lain ?
            </p>
            <List>
                <template v-slot:start>
                    <section class="mt-2">
                        <p class="font-semibold">Tarik tunai</p>
                    </section>
                </template>
                <template v-slot:end>
                    <i class="fa fa-chevron-right mt-2"></i>
                </template>
            </List>
            <List>
                <template v-slot:start>
                    <section class="mt-2">
                        <p class="font-semibold">Tukar point</p>
                    </section>
                </template>
                <template v-slot:end>
                    <i class="fa fa-chevron-right mt-2"></i>
                </template>
            </List>
        </section>
        <HelpCenter />
    </main>
</template>

<script setup>

import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import HelpCenter from '@/components/HelpCenter.vue'

</script>
