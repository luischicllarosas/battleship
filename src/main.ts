import { createApp } from 'vue'
import App from './App.vue'
// Custom
import './assets/global.css'
import 'bulma'
import './plugins/firebase'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
