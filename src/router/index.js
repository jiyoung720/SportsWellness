import { createRouter, createWebHistory } from 'vue-router';
import ElitePlayerPage from '@/pages/ElitePlayerPage.vue';

const routes = [
    {
        path: '/',
        name: 'ElitePlayerPage',
        component: ElitePlayerPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
