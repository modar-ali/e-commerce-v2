export interface NormalizedError {
  status: number
  message: string
  errors: Record<string, string[]> | null
}
