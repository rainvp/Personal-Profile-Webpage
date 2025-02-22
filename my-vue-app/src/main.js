import { createApp } from 'vue'

import App from './App.vue'
import CommentSection from './components/CommentSection.vue'
import About from './components/About.vue'
import Banner from './components/Banner.vue'
import Navbar from './components/Navbar.vue'

const app = createApp(App)
app.component('food-item', CommentSection)
app.component('food-item', About)
app.component('food-item', Banner)
app.component('food-item', Navbar)

app.mount('#app')
