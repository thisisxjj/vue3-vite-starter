import { createApp } from 'vue'
import App from '@/App'
import { setupStore } from '@/store'

const app = createApp(App)

setupStore(app)

app.mount('#app')
