import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@fontsource-variable/bricolage-grotesque'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import './assets/tokens.css'
import './assets/base.css'

createApp(App).use(createPinia()).use(router).mount('#app')
