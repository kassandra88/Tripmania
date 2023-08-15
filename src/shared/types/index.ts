export interface Error {
  message?: string
  statusCode?: number
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error'
