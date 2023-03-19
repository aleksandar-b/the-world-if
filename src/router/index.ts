import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Page/Main.vue'
import DetailView from '../views/Page/Detail/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:id?/view',
            name: 'detail',
            component: DetailView
        },
        {
            path: '/:id?/:type?',
            name: 'home',
            component: HomeView
        },

    ]
})

export default router
