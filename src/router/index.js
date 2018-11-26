import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const  ListPage = r => require.ensure([], () => r(require('../views/list.vue')), 'list')
const  DetailPage = r => require.ensure([], () => r(require('../views/detail.vue')), 'detail')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListPage
    },
    {
      path : '/league/:name',
      name : 'Detail',
      component : DetailPage
    }
  ]
})
