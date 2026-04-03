<script setup lang="ts">
import { computed } from 'vue'

type BadgeTone = 'success' | 'warning' | 'pending' | 'info' | 'danger'

const props = withDefaults(
  defineProps<{
    label: string
    tone?: BadgeTone
    pulse?: boolean
  }>(),
  {
    tone: 'info',
    pulse: false,
  },
)

const toneClasses: Record<BadgeTone, string> = {
  success: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/25 dark:text-emerald-300 dark:border-emerald-900/40',
  warning: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/25 dark:text-amber-300 dark:border-amber-900/40',
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/25 dark:text-yellow-300 dark:border-yellow-900/40',
  info: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/25 dark:text-blue-300 dark:border-blue-900/40',
  danger: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/25 dark:text-red-300 dark:border-red-900/40',
}

const classes = computed(() => {
  return `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses[props.tone]}`
})
</script>

<template>
  <span :class="classes">
    <span
      class="h-1.5 w-1.5 rounded-full"
      :class="[
        tone === 'success' && 'bg-emerald-500',
        tone === 'warning' && 'bg-amber-500',
        tone === 'pending' && 'bg-yellow-500',
        tone === 'info' && 'bg-blue-500',
        tone === 'danger' && 'bg-red-500',
        pulse && 'animate-pulse',
      ]"
    />
    {{ label }}
  </span>
</template>
