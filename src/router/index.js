import { createRouter, createWebHistory } from 'vue-router'


const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/start/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../components/start/Register.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../components/Home.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/web1',
            name: 'web1',
            component: () => import('../components/web1.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/menu',
            name: 'menu',
            component:() => import('../components/Menu.vue'),
            children:[
                {
                    path: 'bloghome',
                    name: 'bloghome',
                    component: () => import('../components/BlogHome.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'note',
                    name: 'note',
                    component : () => import("../components/Note.vue"),
                    meta: { requiresAuth: true }
                }
            ]  
        },
     
        {
            path: '/',
            redirect: '/login'
        }
    ]
})
router.beforeEach((to, from, next) => {
    // 检查目标路由是否需要认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 检查是否有token
        if (!localStorage.getItem('token')) {
            // 没有token，重定向到登录页
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            // 有token，允许访问
            next()
        }
    } else {
        // 不需要认证的路由，直接放行
        next()
    }
})
export default router