// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue'),
      },
      {
        path: 'post',
        name: 'Post',
        component: () => import('@/views/Post.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/Product.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/Cart.vue'),
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('@/views/Shop.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
