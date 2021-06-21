import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import("views/home/Home")
  },
  {
    path: '/cart',
    component: () => import("views/cart/Cart")
  },
  {
    path: '/category',
    component: () => import("views/category/Category")
  },
  {
    path: '/profile',
    component: () => import("views/profile/Profile")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
