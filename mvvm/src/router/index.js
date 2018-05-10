import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/components/demo'
import MVVM2_1 from '@/components/MVVM2_1'
import MVVM2_2 from '@/components/MVVM2_2'
import MVVM2_3 from '@/components/MVVM2_3'
import MVVM2_4 from '@/components/MVVM2_4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path: '/MVVM2_1',
      name: 'MVVM2_1',
      component: MVVM2_1
    },
    {
      path: '/MVVM2_2',
      name: 'MVVM2_2',
      component: MVVM2_2
    },
    {
      path: '/MVVM2_3',
      name: 'MVVM2_3',
      component: MVVM2_3
    },
    {
      path: '/MVVM2_4',
      name: 'MVVM2_4',
      component: MVVM2_4
    },
  ]
})
