// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';  // Home page component
import AppAccounts from './components/AppAccounts.vue';  // Accounts component

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/accounts',
            name: 'Accounts',
            component: AppAccounts
        }
    ]
});
