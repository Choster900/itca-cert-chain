import type { NavigationGuardWithThis } from 'vue-router'
import { useAuthStore } from '../stores/auth'

export const isAuthenticatedGuard: NavigationGuardWithThis<undefined> = (to) => {
  const authStore = useAuthStore()
  authStore.hydrateSession()

  if (authStore.isAuthenticated.value) {
    return true
  }

  return {
    name: 'login',
    query: {
      redirect: to.fullPath,
    },
  }
}
