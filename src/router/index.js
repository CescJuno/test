import Vue from 'vue'
import Router from 'vue-router'
import Bible from '@/components/Bible'
import About from '@/components/About'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:type/:bid',
      name: 'Bible',
      props: true,
      component: Bible
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/detail/:bid',
      name: 'Detail',
      props: true,
      component: Detail
    }
  ]
})
