import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/home/home.vue';
import Contact from './components/contact/contact.vue';
import Portfolio from './components/portfolio/portfolio.vue';
import Services from './components/services/services.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/portfolio', component: Portfolio },
  { path: '/services', component: Services },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);

app.use(router);

app.mount('#app');