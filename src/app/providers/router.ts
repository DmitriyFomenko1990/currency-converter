import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage.vue'
import ConvertPage from '@/pages/convert/ConvertPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/convert', component: ConvertPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
