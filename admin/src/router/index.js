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
      { path: '/items/list', component: () => import('../views/ItemList.vue') },
      // 英雄页面
      { path: '/heroes/edit', component: () => import('../views/HeroCreate.vue') },
      { path: '/heroes/edit/:id', component: () => import('../views/HeroCreate.vue'), props: true },
      { path: '/heroes/list', component: () => import('../views/HeroList.vue') },
      // 文章页面
      { path: '/articles/edit', component: () => import('../views/ArticleCreate.vue') },
      { path: '/articles/edit/:id', component: () => import('../views/ArticleCreate.vue'), props: true },
      { path: '/articles/list', component: () => import('../views/ArticleList.vue') },
      // 广告位页面
      { path: '/ads/edit', component: () => import('../views/AdCreate.vue') },
      { path: '/ads/edit/:id', component: () => import('../views/AdCreate.vue'), props: true },
      { path: '/ads/list', component: () => import('../views/AdList.vue') },
      // 管理员页面
      { path: '/admin_user/edit', component: () => import('../views/AdminUserCreate.vue') },
      { path: '/admin_user/edit/:id', component: () => import('../views/AdminUserCreate.vue'), props: true },
      { path: '/admin_user/list', component: () => import('../views/AdminUserList.vue') }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
