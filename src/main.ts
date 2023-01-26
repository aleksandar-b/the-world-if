import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
const pinia = createPinia()
pinia.use(piniaPersist)

import './assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')


