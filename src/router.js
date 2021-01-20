import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
import Mail from './views/Mail'
import NotFound from './views/NotFound'
import AppEmailBody from './components/AppEmailBody'

const router =  createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/dashboard', component: Dashboard },
    { path: '/mail', component: Mail, children: [
      { path: ':mailId', component: AppEmailBody, props: true }, 
    ]},
    { path: '/forget', component: Forget, meta: {
      cantEnter: true
    } },
    { path: '/:notFOund(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    next(false)
  } else {
    next()
  }
})

export default router