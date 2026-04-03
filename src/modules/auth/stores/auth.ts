import { computed, reactive, readonly } from 'vue'
import type { AuthSession, AuthState } from '../interfaces'

const AUTH_STORAGE_KEY = 'auth_session'

const authState = reactive<AuthState>({
  accessToken: null,
  user: null,
})

function hydrateSession(): void {
  const storedSession = localStorage.getItem(AUTH_STORAGE_KEY)

  if (!storedSession) {
    return
  }

  try {
    const parsed = JSON.parse(storedSession) as AuthSession
    authState.accessToken = parsed.accessToken
    authState.user = parsed.user
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }
}

function setSession(session: AuthSession): void {
  authState.accessToken = session.accessToken
  authState.user = session.user
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
}

function clearSession(): void {
  authState.accessToken = null
  authState.user = null
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

const isAuthenticated = computed(() => Boolean(authState.accessToken))

export function useAuthStore() {
  return {
    state: readonly(authState),
    isAuthenticated,
    hydrateSession,
    setSession,
    clearSession,
  }
}
