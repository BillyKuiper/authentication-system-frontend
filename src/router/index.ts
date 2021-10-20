import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Autherized from '@/views/Autherized.vue'

const routes: Array<RouteRecordRaw> = [
  {path: "", component: Home},
  {path: "/register", component: Register},
  {path: "/login", component: Login},
  {path: "/autherized", component: Autherized}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
