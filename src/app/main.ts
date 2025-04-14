import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './providers/router'
import { createDiscreteApi } from 'naive-ui'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
