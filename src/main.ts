import { createApp } from 'vue'
import Lego from './index'
import App from './App.vue'
const app = createApp(App)
app.use(Lego)
app.mount('#app')
