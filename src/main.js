import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-in-out'
})

createApp(App)
  .use(router)
  .mount('#app')
