import { createApp } from 'vue'
import App from './App.vue'
// css初始化
import 'normalize.css'
import './assets/css/index.less'

import router from './router'

import { createPinia } from 'pinia'
const store = createPinia()

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
