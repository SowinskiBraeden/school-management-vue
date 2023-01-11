import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/student/login',
    name: 'studentLogin',
    component: () => import('../views/StudentLogin.vue')
  },
  {
    path: '/student/dashboard',
    name: 'studentDashboard',
    component: () => import('../views/StudentDashboard.vue')
  },
  {
    path: '/teacher/login',
    name: 'teacherLogin',
    component: () => import('../views/TeacherLogin.vue')
  },
  {
    path: '/teacher/dashboard',
    name: 'teacherDashboard',
    component: () => import('../views/TeacherDashboard.vue')
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'adminDashboard',
    component: () => import('../views/AdminDashboard.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
