import type { RouteRecordRaw } from 'vue-router'

import { isAuthenticatedGuard } from '../../auth/guards/is-authenticated.guard'
import AcademicRequestsView from '../views/AcademicRequests.vue'
import ProfileView from '../views/Profile.vue'

export const studentsRoutes: RouteRecordRaw[] = [
  {
    path: '/academic-requests',
    name: 'academic-requests',
    component: AcademicRequestsView,
    beforeEnter: isAuthenticatedGuard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: isAuthenticatedGuard,
  },
]
