import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
//import { useSession } from '@/stores/session'
//import { computed } from 'vue'

const routes = [
	{
		name: 'Home',
		path: '/home',
		component: Home
	},
	{
		name: 'Login',
		path: '/',
		component: () => import('@/views/Login.vue')
	},
	{
		name: 'Marketplace',
		path: '/market',
		component: () => import('@/views/MarketPlace.vue')

	},
	{
		name: 'Profile',
		path: '/profile',
		component: () => import('@/views/Profile.vue')
	},
	{
		name: 'Deposit',
		path: '/deposit',
		component: () => import('@/views/Deposit.vue')
	},
	{
		name: 'Transfer',
		path: '/transfer',
		component: () => import('@/views/Transfer.vue')
	},
	{
		name: 'WithDraw',
		path: '/withdraw',
		component: () => import('@/views/Withdraw.vue')
	},
	{
		name: 'ChangePoint',
		path: '/change-point',
		component: () => import('@/views/ChangePoint.vue')
	},
	{
		name: 'Notifications',
		path: '/notifications',
		component: () => import('@/views/Notifications.vue')
	},
	{
		name: 'Carts',
		path: '/carts',
		component: () => import('@/views/Carts.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

/*Nav guard
const session = useSession()
const isAuthenticated = computed(() => session.login)

router.beforeEach((to, next) => {
	console.log(isAuthenticated.value)
}) */

export default router
