import Vue from 'vue'
import Router from 'vue-router'
import MVVM2_1 from '@/components/MVVM2_1'
import MVVM2_2 from '@/components/MVVM2_2'
import MVVM2_3 from '@/components/MVVM2_3'
import MVVM2_4 from '@/components/MVVM2_4'
import MVVM3_1 from '@/components/MVVM3_1'
import select_2_1 from '@/components/MVVM31/select_2_1'
import select_3 from '@/components/MVVM31/select_3'


Vue.use(Router)

let main = new Router({
  routes: [
    {
      path: '/',
      redirect:{
        path: '/MVVM3_1',
      },
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
    {
      path: '/MVVM3_1',
      name: 'MVVM3_1',
      component: MVVM3_1,
      children: [
        {
          path: '/select_2_1',
          name: 'select_2_1',
          component: select_2_1,
          children:[
            {
              path: '/select_3',
              name: 'select_3',
              component: select_3,
            }
          ]
        },
      ],
    },
  ],
});

export default main;
