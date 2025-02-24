import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('@/pages/MainPage.vue'),
    },
    {
        path: '/elite-player',
        name: 'ElitePlayerPage',
        component: () => import('@/pages/ElitePlayerPage.vue'),
    },
    {
        path: '/login',
        name: 'UserLogin',
        component: () => import('@/pages/auth/UserLogin.vue'),
        alias: '/sign-in', // /sign-in으로도 접근 가능
    },
    {
        path: '/register',
        name: 'UserRegister',
        component: () => import('@/pages/auth/UserRegister.vue'),
        alias: '/sign-up', // /sign-up으로도 접근 가능
    },
    {
        path: '/detail/:section',  // 동적 라우팅 추가
        name: 'DetailPage',
        component: () => import('@/pages/DetailPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
