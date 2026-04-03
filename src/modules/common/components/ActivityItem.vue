<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'

withDefaults(
  defineProps<{
    status: string
    statusTone?: 'success' | 'pending' | 'warning'
    time: string
    student: string
    program: string
    hashPreview: string
  }>(),
  {
    statusTone: 'success',
  },
)
</script>

<template>
  <article class="border-b border-[var(--color-border-strong)] p-4 transition-colors hover:bg-[var(--color-bg)]">
    <div class="mb-2 flex items-start justify-between gap-3">
      <StatusBadge :label="status" :tone="statusTone" />
      <span class="text-xs text-[var(--color-text-muted)]">{{ time }}</span>
    </div>

    <p class="text-sm font-medium text-[var(--color-text-main)]">
      Certificado para <span class="font-bold">{{ student }}</span>
    </p>
    <p class="mt-1 text-xs text-[var(--color-text-muted)]">{{ program }}</p>

    <div
      class="mt-3 flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-2 py-2 text-xs font-mono text-[var(--color-text-muted)]"
    >
      <span class="material-symbols-outlined text-[14px]">link</span>
      <span class="truncate">{{ hashPreview }}</span>
      <button class="ml-auto rounded p-1 text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10">
        <span class="material-symbols-outlined text-[14px]">content_copy</span>
      </button>
    </div>
  </article>
</template>
