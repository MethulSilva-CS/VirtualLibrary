// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Import the router
import router from '../src/components/router'

// Tell Vue to use the router
createApp(App)
  .use(router)
  .mount('#app')
