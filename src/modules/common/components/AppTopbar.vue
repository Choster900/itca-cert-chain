<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

withDefaults(
  defineProps<{
    userName?: string
    userRole?: string
    showUser?: boolean
  }>(),
  {
    userName: '',
    userRole: '',
    showUser: false,
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-[var(--color-border-strong)] bg-[var(--color-surface)]/95 px-4 py-3 backdrop-blur md:px-6"
  >
    <div class="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
      <div class="flex items-center gap-3 text-[var(--color-primary)]">
        <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
          <span class="material-symbols-outlined text-[22px]">school</span>
        </div>
        <div>
          <h1 class="text-base font-bold leading-tight text-[var(--color-text-main)] md:text-lg">ITCA-FEPADE</h1>
          <p class="text-xs font-medium text-[var(--color-text-muted)]">Certificación Blockchain</p>
        </div>
      </div>

      <div class="hidden items-center gap-8 lg:flex">
        <nav class="flex items-center gap-6">
          <slot name="nav" />
        </nav>
      </div>

      <div class="flex items-center gap-3 md:gap-4">
        <slot name="actions" />

        <div v-if="showUser" class="hidden items-center gap-3 border-l border-[var(--color-border)] pl-4 md:flex">
          <div class="text-right">
            <p class="text-sm font-semibold text-[var(--color-text-main)]">{{ userName }}</p>
            <p class="text-xs text-[var(--color-text-muted)]">{{ userRole }}</p>
          </div>
          <div class="h-9 w-9 rounded-full bg-[var(--color-bg)]" />
        </div>

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
