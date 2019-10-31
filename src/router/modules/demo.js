/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const demoRouter = {
  path: '/myLayout',
  component: Layout,
  redirect: '/myLayout/demo-chart',
  name: 'demo',
  meta: {
    title: 'demo',
    icon: 'tab'
  },
  children: [
    {
      path: 'demo-chart',
      component: () => import('@/views/myLayout/mychart/base_chart'),
      name: 'chartDemo',
      meta:
          {
            title: 'chart Demo',
            icon: 'chart'
          }
    },
    {
      path: 'demo-table',
      component: () => import('@/views/myLayout/table'),
      name: 'TableDemo',
      meta:
        {
          title: 'table Demo',
          icon: 'table'
        }
    },
    {
      path: 'demo-table2',
      component: () => import('@/views/myLayout/table_base'),
      name: 'TableBase',
      meta:
        {
          title: 'Base Table',
          icon: 'table'
        }
    },
    {
      path: 'demo-table3',
      component: () => import('@/views/myLayout/table_new'),
      name: 'TableNew',
      meta:
        {
          title: 'New Table',
          icon: 'table'
        }
    }
  ]
}
export default demoRouter
