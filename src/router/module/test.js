export default [
  {
    /***
     * 测试页面
     * */
    path: '/',
    name: 'Test',
    component: () => import('@/pages/test.vue')
    // meta: { // 与ios联调
    //   title: '测试页面',
    //   subRoot: false
    // }
  }
]
