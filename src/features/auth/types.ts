export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  phone_number: number
  email_verified_at: Date | null
  isAdmin: number | null
}

export interface AuthResponse {
  status?: string
  message: string | null
}

export interface RegisterResponse extends AuthResponse {
  user: User
  access_token: string
}

export interface LoginResponse extends RegisterResponse {}

export interface RegisterForm {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
  wants_notifications: boolean
}

export interface LoginForm {
  email: string
  password: string
}
