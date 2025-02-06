import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ElitePlayerPage from '@/pages/ElitePlayerPage.vue';

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage, // 메인 페이지 경로 설정
    },
    
    {
        path: '/elite-player',
        name: 'ElitePlayerPage',
        component: ElitePlayerPage,  // 엘리트 선수 페이지 경로 설정
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
