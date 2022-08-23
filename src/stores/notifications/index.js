import { defineStore} from 'pinia'

export const useNotifications = defineStore('notifications', {
    state() {
        return {
            lists: [
                {
                title: 'Anda mendapatkan tambahan 50 poin',
                timestamp: '20/03/2022'
                },
                {
                title: 'Anda mendapatkan tambahan 50 poin',
                timestamp: '20/03/2022'
                },
                {
                title: 'Anda mendapatkan tambahan 50 poin',
                timestamp: '20/03/2022'
                }
            ]
        }
    }
})