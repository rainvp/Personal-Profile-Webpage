import { createApp } from 'vue';

import App from './App.vue';
import CommentSection from './components/CommentSection.vue';
import NavbarBanner from './components/NavbarBanner.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

AOS.init();

app.component('CommentSection', CommentSection);
app.component('NavbarBanner', NavbarBanner);

app.mount('#app');
