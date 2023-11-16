import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/todos",
        component: () => import('./views/Todos.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;