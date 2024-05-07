import './assets/main.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

library.add(faUser, faClock);
const app = createApp(App);

app.use(router);

app.mount('#app');
