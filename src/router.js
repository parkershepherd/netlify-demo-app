import VueRouter from 'vue-router'
import Vue from 'vue'

import HomePage from '@/pages/HomePage'
import FaqPage from '@/pages/FaqPage'
import ContactPage from '@/pages/ContactPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/faq', component: FaqPage },
    { path: '/contact', component: ContactPage },
  ]
})