// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Skull from '../components/Skull.vue'
// import AppAccounts from '../components/AppAccounts.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/skull',
//     name: 'Skull',
//     component: Skull
//   },
//   {
//     path: '/accounts',
//     name: 'AppAccounts',
//     component: AppAccounts
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router


import Vue from 'vue';
import VueRouter from 'vue-router';
import Skull from '../components/Skull.vue';
import AppAccounts from '../components/AppAccounts.vue';
import Home from '../components/Home.vue';  // Import the Home component
import NewAccount from '../components/NewAccount.vue';  // Import the NewAccount component

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home  // Home route added
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  },
  {
    path: '/new-account',
    name: 'NewAccount',
    component: NewAccount  // Route for creating a new account
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
