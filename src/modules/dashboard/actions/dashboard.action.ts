import { backendApi } from '../../../api/backendApi'
import type { DashboardActivity, DashboardMetrics } from '../interfaces'

export async function getDashboardMetricsAction(): Promise<DashboardMetrics> {
  const mockBase = backendApi.defaults.baseURL ?? '/api'
  const seed = mockBase.length

  return {
    totalIssued: 1248 + seed,
    issuedToday: 24,
  }
}

export async function getDashboardActivityAction(): Promise<DashboardActivity[]> {
  return [
    {
      id: '1',
      status: 'Acuñado',
      student: 'Ana Maria Lopez',
      program: 'Ingenieria de Software',
      hashPreview: '0x71C...9A23',
      time: 'hace 2 min',
    },
    {
      id: '2',
      status: 'Acuñado',
      student: 'Carlos Eduardo Ruiz',
      program: 'Electronica Industrial',
      hashPreview: '0x82B...4F91',
      time: 'hace 45 min',
    },
    {
      id: '3',
      status: 'Pendiente',
      student: 'Sofia Martinez',
      program: 'Gastronomia',
      hashPreview: 'Confirmando transaccion...',
      time: 'hace 1 hr',
    },
    {
      id: '4',
      status: 'Acuñado',
      student: 'Roberto Sanchez',
      program: 'Administracion de Redes',
      hashPreview: '0xA4D...1C55',
      time: 'hace 3 hrs',
    },
  ]
}
