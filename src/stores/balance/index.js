import { defineStore } from 'pinia'

export const useBalance = defineStore('balance', {
	state() {
		return {
			current: 1456889,
			points: 1200,
			trend: {
				title: 'up',
				percent: 23.4,
				prefix: '%',
				value: 45000
			}
		}
	}
})
