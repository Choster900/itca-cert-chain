export interface LoginPayload {
  email: string
  password: string
}

export interface AuthUser {
  email: string
  fullName: string
  role: 'admin' | 'staff' | 'viewer'
}

export interface AuthSession {
  accessToken: string
  user: AuthUser
}

export interface AuthState {
  accessToken: string | null
  user: AuthUser | null
}
