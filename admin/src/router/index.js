import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main.vue'),
    children: [
      // 分类页面
      { path: '/categories/create', component: () => import('../views/CategoriesCreate.vue') },
      { path: '/categories/edit/:id', component: () => import('../views/CategoriesCreate.vue'), props: true },
      { path: '/categories/list', component: () => import('../views/CategoriesList.vue') },
      // 物品页面
      { path: '/items/edit', component: () => import('../views/ItemEdit.vue') },
      { path: '/items/edit/:id', component: () => import('../views/ItemEdit.vue'), props: true },
      { path: '/items/list', component: () => import('../views/ItemList.vue') }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
