import type { RouteRecordRaw } from 'vue-router'

import VerificationDetailsView from '../views/VerificationDetails.vue'
import VerificationPortalView from '../views/VerificationPortal.vue'

export const verificationRoutes: RouteRecordRaw[] = [
  {
    path: '/verification-portal',
    name: 'verification-portal',
    component: VerificationPortalView,
  },
  {
    path: '/verification-details/:recordId?',
    name: 'verification-details',
    component: VerificationDetailsView,
  },
]
