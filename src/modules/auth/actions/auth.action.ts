import { backendApi } from '../../../api/backendApi'
import type { AuthSession, ClientRegistrationPayload, LoginPayload } from '../interfaces'

export async function authAction<T>(handler: () => Promise<T>): Promise<T> {
  return handler()
}

export async function requestMockSession(payload: LoginPayload): Promise<AuthSession> {
  const apiOrigin = backendApi.defaults.baseURL ?? 'local'
  const timestamp = Date.now()

  return {
    accessToken: `${apiOrigin}-session-${timestamp}`,
    user: {
      email: payload.email,
      fullName: 'Admin Sistema',
      role: 'admin',
    },
  }
}

export async function requestMockRegistration(
  payload: ClientRegistrationPayload,
): Promise<{ created: boolean }> {
  const validPayload = Boolean(payload.email && payload.password && payload.fullName)

  return {
    created: validPayload,
  }
}
