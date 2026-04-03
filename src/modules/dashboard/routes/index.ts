import type { RouteRecordRaw } from 'vue-router'

import { isAuthenticatedGuard } from '../../auth/guards/is-authenticated.guard'
import DashboardView from '../views/Dashboard.vue'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    beforeEnter: isAuthenticatedGuard,
  },
]
