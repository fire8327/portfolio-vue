import { createApp } from 'vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'atropos/css'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig({
    plugins: [
      createAutoAnimatePlugin({
      })
    ]
}))
app.mount('#app')
