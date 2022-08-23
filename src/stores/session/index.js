import { defineStore } from 'pinia'

export const useSession = defineStore('session', {
	state() {
		return {
			login: false
		}
	},
	actions: {
		hasLogin() {
			this.login = true
		},
		hasLogout() {
			this.login = false
		}
	}
})
