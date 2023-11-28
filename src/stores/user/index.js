import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
	state() {
		return {
			fullname: 'Bagus Satoto',
			password: 'bagus1',
			username: 'bagus',
			highlights: [
				{
					title: 'Sampah disetor',
					value: 192,
					prefix: 'Kg'
				},
				{
					title: 'Poin diraih',
					value: 123,
					prefix: 'point'
				},
				{
					title: 'Produk dibeli',
					value: 74,
					prefix: 'produk'
				}
			]
		}
	},
	actions: {
		login( payload ) {
			const { username, password } = payload
			if ( username === this.username && password === this.password ) return true
			else return false
		}
	}
})
