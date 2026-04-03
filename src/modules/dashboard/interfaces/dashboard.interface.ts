export interface DashboardMetrics {
  totalIssued: number
  issuedToday: number
}

export interface DashboardActivity {
  id: string
  status: 'Acuñado' | 'Pendiente'
  student: string
  program: string
  hashPreview: string
  time: string
}
