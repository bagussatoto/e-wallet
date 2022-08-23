import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
	state() {
		return {
			fullname: 'John Doe',
			password: 'user1234',
			username: 'user',
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
