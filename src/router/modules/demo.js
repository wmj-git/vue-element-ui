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
      name: 'ChartDemo',
      meta:
          {
            title: '账户管理',
            icon: 'chart'
          }
    },
    {
      path: 'demo-table',
      component: () => import('@/views/myLayout/role'),
      name: 'TableDemo',
      meta:
        {
          title: '角色管理',
          icon: 'table'
        }
    },
    {
      path: 'demo-table2',
      component: () => import('@/views/myLayout/table_base'),
      name: 'TableBase',
      meta:
        {
          title: '权限管理',
          icon: 'table'
        }
    },
    {
      path: 'demo-table3',
      component: () => import('@/views/myLayout/table_new'),
      name: 'TableNew',
      meta:
        {
          title: '日志管理',
          icon: 'table'
        }
    }
  ]
}
export default demoRouter
