import { createRouter, createWebHistory } from 'vue-router'

import { authRoutes } from '../modules/auth/routes'
import { commonRoutes } from '../modules/common/routes'
import { dashboardRoutes } from '../modules/dashboard/routes'
import { studentsRoutes } from '../modules/students/router'
import { verificationRoutes } from '../modules/verification/routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    ...authRoutes,
    ...dashboardRoutes,
    ...studentsRoutes,
    ...verificationRoutes,
    ...commonRoutes,
  ],
})
