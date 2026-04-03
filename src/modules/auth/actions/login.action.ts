import type { AuthSession, LoginPayload } from '../interfaces'
import { authAction, requestMockSession } from './auth.action'

export async function loginAction(payload: LoginPayload): Promise<AuthSession> {
  return authAction(() => requestMockSession(payload))
}
