import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'major',
    component: () => import('../views/Major.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('../views/home/Home.vue') },
      { path: '/articles/:id', name: 'article', component: () => import('../views/article/Article.vue'), props: true }
    ]
  },
  { path: '/heroes/:id', name: 'hero', component: () => import('../views/hero/Hero.vue'), props: true }
]
const router = new VueRouter({
  routes
})

export default router
