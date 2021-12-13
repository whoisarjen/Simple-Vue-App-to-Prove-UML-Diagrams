import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Simple-Vue-App-to-Prove-UML-Diagrams/',
    name: 'CheckHistory',
    component: () => import('../views/CheckHistory.vue')
  },
  {
    path: '/Simple-Vue-App-to-Prove-UML-Diagrams/deposit',
    name: 'Deposit',
    component: () => import('../views/Deposit.vue')
  },
  {
    path: '/Simple-Vue-App-to-Prove-UML-Diagrams/withdraw',
    name: 'Withdraw',
    component: () => import('../views/Withdraw.vue')
  },
  {
    path: '/Simple-Vue-App-to-Prove-UML-Diagrams/loan',
    name: 'Loan',
    component: () => import('../views/Loan.vue')
  },
  {
    path: '/Simple-Vue-App-to-Prove-UML-Diagrams/transfer',
    name: 'Transfer',
    component: () => import('../views/Transfer.vue')
  },
  {
    path: '/Simple-Vue-App-to-Prove-UML-Diagrams/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
