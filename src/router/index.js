import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router