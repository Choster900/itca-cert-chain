import type { RouteRecordRaw } from 'vue-router'

import NotFoundView from '../views/NotFound.vue'

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
]
