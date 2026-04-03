import { reactive, readonly } from 'vue'

import {
  getDashboardActivityAction,
  getDashboardMetricsAction,
} from '../actions/dashboard.action'
import type { DashboardActivity, DashboardMetrics } from '../interfaces'

type DashboardState = {
  metrics: DashboardMetrics
  activities: DashboardActivity[]
  loading: boolean
}

const dashboardState = reactive<DashboardState>({
  metrics: {
    totalIssued: 0,
    issuedToday: 0,
  },
  activities: [],
  loading: false,
})

async function hydrateDashboard(): Promise<void> {
  dashboardState.loading = true

  try {
    const [metrics, activities] = await Promise.all([
      getDashboardMetricsAction(),
      getDashboardActivityAction(),
    ])

    dashboardState.metrics = metrics
    dashboardState.activities = activities
  } finally {
    dashboardState.loading = false
  }
}

export function useDashboardStore() {
  return {
    state: readonly(dashboardState),
    hydrateDashboard,
  }
}
