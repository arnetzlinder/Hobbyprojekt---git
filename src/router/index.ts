import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path:'/about',
            name: 'about',
            component: () => import('../views/AboutMe.vue'),
        },
        {
            path:'/contact',
            name: 'contact',
            component: () => import('../views/ContactMe.vue'),
        }
    ],
});

export default router;