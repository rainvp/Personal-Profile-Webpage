import { createApp } from 'vue';
import App from './App.vue';
import CommentSection from './components/CommentSection.vue';
import About from './components/About.vue';
import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue';

const app = createApp(App);

app.component('CommentSection', CommentSection);
app.component('AboutSection', About);
app.component('BannerSection', Banner);
app.component('NavBar', Navbar);

app.mount('#app');
