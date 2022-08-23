<template>
	
	<section class="mt-20 text-gray-300">
		<Header title="Keranjang" sub="Lihat semua keranjang disini" />
	</section>
	<section class="mt-20 mb-20">
		<template v-for="(cart, x) in carts" :key="x">
			<CardProduct :cart="cart" />
		</template>		
	</section>
	<section class="mt-10 fixed bottom-0 left-0 right-0 bg-primary">
		<section class="responsive-container px-4 py-3 pb-6">
			<div class="w-full flex justify-between text-gray-300">
				<span>Total :</span>
				<span>Rp.145.000,00-</span>
			</div>
			<button class="active:ring-2 ring-green-200 duration-300 mt-3 bg-green-600 py-3 rounded-full w-full flex flex-col items-center">
				<span class="font-semibold text-gray-300">
					<LoadAction :isLoad="isLoad" :isSuccess="isSuccess" :isFail="isFail" @click="checkout" action="CHECKOUT"  />
				</span>
			</button>
		</section>
	</section>
</template>

<script setup>

import Header from '@/components/Header.vue'
import CardProduct from '@/components/CardProduct.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHistory } from '@/stores/history'
import List from '@/components/List.vue'
import IncrementBar from '@/components/IncrementBar.vue'
import LoadAction from '@/components/LoadAction.vue'

const emits = defineEmits(['back'])
const history = useHistory()
const carts = computed(() => history.carts)
const router = useRouter()

const isLoad = ref(false)
const isSuccess = ref(false)
const isFail = ref(false)
const msgErr = ref('')

const checkout = () => {
    [ isLoad.value, isFail.value, isSuccess.value, msgErr.value ] = [ true, false, false, '' ]
    setTimeout(() => {
        router.push({ name: 'Home' })
    }, 300)
}

</script>
