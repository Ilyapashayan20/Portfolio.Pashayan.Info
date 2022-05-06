import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App)
app.use(router).mount('#app')
app.AOS = new AOS.init({ disable: "phone" });