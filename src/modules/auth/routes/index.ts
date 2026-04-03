import type { RouteRecordRaw } from 'vue-router'

import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
]
