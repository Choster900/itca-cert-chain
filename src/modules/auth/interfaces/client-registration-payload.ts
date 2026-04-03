export interface ClientRegistrationPayload {
  email: string
  password: string
  fullName: string
  role: 'admin' | 'staff' | 'viewer'
}
