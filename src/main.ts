import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

import 'element-plus/dist/index.css';

// eslint-disable-next-line import/order
import App from './App.vue';
// css初始化
import 'normalize.css';
import './assets/css/index.less';

import router from './router';

const store = createPinia();

const app = createApp(App);

app.use(router);
app.use(store);

app.use(ElementPlus);

app.mount('#app');
