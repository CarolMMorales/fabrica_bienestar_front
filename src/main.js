import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n/index.js'

const app = createApp(App)

window.axios = axios;
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
window.axios.defaults.headers.common['Accept'] ='application/json'
window.axios.defaults.headers.common['Content-Type']='application/json'
window.axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

const pinia = createPinia()
pinia.use(({store}) =>{
store.router = markRaw(router)
});
pinia.use(createPersistedState)

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.use(i18n)

app.mount('#app')



import "bootstrap/dist/js/bootstrap.js";