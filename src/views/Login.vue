<style scoped>

.input-wrapper {
    @apply w-full h-16 flex items-center mb-3 rounded-lg overflow-hidden gap-2;
}

input {
    @apply text-gray-300 active:ring-1 focus:ring-1 ring-green-500 duration-300 rounded-lg w-full bg-secondary h-full px-3 focus:ring-2 active:ring-2 ring-secondary;
}

</style>

<template>
    <main>
        <section class="mt-16 text-gray-300 text-center w-10/12 mx-auto">
            <h1 class="font-semibold text-lg">Echo Wallet</h1>
            <p class="text-sm">Maksimalkan sampah anda menjadi sebuah peluang</p>
        </section>
            
        <section class="mt-10">
            <form @submit.prevent="login" action="">
                <div class="input-wrapper">
                    <input v-model="form.username" type="text" placeholder="Username">
                </div>
                <div class="input-wrapper">
                    <input v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Password">
                    <span @click="showPassword = !showPassword" class="bg-green-500 rounded-lg w-3/12 h-full grid place-items-center">
                        <i :class="showPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa text-lg"></i>
                    </span>
                </div>
                <section>
                    <button class="w-full bg-green-500 font-semibold text-gray-800 py-3 rounded-lg mt-6">
                        <LoadAction :isLoad="isLoad" :isSuccess="isSuccess" :isFail="isFail" action="LOGIN" />
                    </button>
                    <small class="mt-3 block text-red-600 font-medium">{{ msgErr }}</small>
                </section>
            </form>
        </section>

        <section class="mt-24 text-gray-300">
            <div class="flex gap-3">
                <span class="bg-secondary rounded-lg grid place-items-center w-2/12 p-1">
                    <i class="fas fa-lightbulb text-sm"></i>
                </span>
                <p class="text-sm w-10/12">
                    Belum punya akun ? Silahkan lakukan pendaftaran di Unit Bank Sampah terdekat
                </p>
            </div>
                
            <div class="flex gap-3 mt-5 h-10">
                <span class="bg-secondary rounded-lg grid place-items-center w-2/12 p-1">
                    <i class="fas fa-lightbulb text-sm"></i>
                </span>
                <p class="text-sm w-10/12">
                    Lupa kata sandi ? Lakukan pemulihan <a href="" class="text-blue-500">disini</a>
                </p>
            </div>
        </section>
    </main>
</template>

<script setup>

import { ref, reactive } from 'vue'
import { useUser } from '@/stores/user'
import { useRouter } from 'vue-router'
import LoadAction from '@/components/LoadAction.vue'

const user = useUser()
const router = useRouter()

const form = reactive({
    username: '',
    password: ''
})

const isLoad = ref(false)
const isSuccess = ref(false)
const isFail = ref(false)
const msgErr = ref('')

const login = () => {
    [ isLoad.value, isFail.value, isSuccess.value, msgErr.value ] = [ true, false, false, '' ]
    setTimeout(() => {
        if ( user.login( form ) ) {
            [ isLoad.value, isSuccess.value ] = [ false, true ]
            router.push({ name: 'Home' })
        }
        else {
            [ isLoad.value, isFail.value, msgErr.value ] = [ false, true, 'Username atau password salah' ]
        }
    }, 300)
}

const showPassword = ref(false)
</script>
