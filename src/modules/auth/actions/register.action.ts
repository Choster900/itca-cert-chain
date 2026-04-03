import type { ClientRegistrationPayload } from '../interfaces'
import { authAction, requestMockRegistration } from './auth.action'

export async function registerAction(
  payload: ClientRegistrationPayload,
): Promise<{ created: boolean }> {
  return authAction(() => requestMockRegistration(payload))
}
