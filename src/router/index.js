import { createRouter, createWebHistory } from 'vue-router'


const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/home',
            name: 'home',
            component: () => import('../components/Home.vue')
        },
        {
            path: '/web1',
            name: 'web1',
            component: () => import('../components/web1.vue')
        },
        {
            path: '/BlogHome',
            name: 'BlogHome',
            component: () => import('../components/BlogHome.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router