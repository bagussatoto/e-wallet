<template>
	<HeaderBar class="z-20">
		<template v-slot:start>
			<div class="flex w-7/12 gap-3">
				<span>
					<img src="/avatar.jpg" class="rounded-full" width="50" />
				</span>
				<div class="text-gray-300">
					<p class="font-semibold text-xl">{{ fullname }}</p>
					<small class="font-medium text-sm">Hay, selamat pagi</small>
				</div>
			</div>
		</template>
		<template v-slot:end>
			<div class="text-lg text-gray-300">
				<span class="mr-5 relative active:scale-95 duration-300" @click="navigate('Notifications')">
					<span
						style="width:20px; height:20px" 
						class="bg-red-500 text-gray-300 grid place-items-center absolute left-1 -top-3 text-xs rounded-full">{{ amountNotif.length}}</span>
					<i class="fa fa-bell"></i>
				</span>
				<i @click="showFloatingBtn = !showFloatingBtn" class="relative fa fa-ellipsis-h">
					<div v-if="showFloatingBtn" class="absolute right-0 top-6 text-base font-medium bg-secondary flex flex-col gap-2 px-2 py-1 rounded">
						<span>Logout</span>
						<span>Refresh</span>
					</div>
				</i>
			</div>
		</template>
	</HeaderBar>
</template>

<script setup>

import { computed, ref } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
import { useUser } from '@/stores/user'
import { useNotifications} from '@/stores/notifications'
import { useRouter } from 'vue-router'

const showFloatingBtn = ref(false)
const user = useUser()
const router = useRouter()
const notifications = useNotifications()

const navigate = path => {
	setTimeout(() => {
		router.push({ name: path })
	}, 300)
}

//Getter
const fullname = computed(() => user.fullname)
const amountNotif = computed(() => notifications.lists)

</script>
