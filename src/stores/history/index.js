import { defineStore } from 'pinia'

export const useHistory = defineStore('history', {
	state() {
		return {
			deposit: [
				{
					title: 'Kardus',
					description: '3kg Rp128.000-',
					thumbnail: '/kardus.png'
				},
				{
					title: 'Plastik',
					description: '1kg Rp45.000-',
					thumbnail: '/plastik.png'
				},
				{
					title: 'Botol',
					description: '3kg Rp128.000-',
					thumbnail: '/botol.png'
				},
				{
					title: 'Kaleng',
					description: '1kg RP45.000-',
					thumbnail: '/kaleng.png'
				}
			],
			carts: [
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 3,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 3,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 2,
					price: 75000,
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					amount: 1,
					price: 75000,
					timestamp: '20/03/2022'
				}
			]
		}
	}
})
