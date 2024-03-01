import App from '@/App.vue';
import routes from '@/routes';
import '@/style.css';
import { createApp } from 'vue';

createApp(App).use(routes).mount('#app');
