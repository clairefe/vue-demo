import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormDemo from '@/pages/FormDemo'
import SlotDemo from '@/pages/SlotDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'form',
      component: FormDemo
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotDemo
    }
  ]
})
