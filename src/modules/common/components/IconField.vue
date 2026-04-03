<script setup lang="ts">
defineProps<{
  label: string
  icon: string
}>()
</script>

<template>
  <div class="space-y-2">
    <label class="text-sm font-semibold text-[var(--color-text-main)]">{{ label }}</label>
    <div class="relative">
      <span
        class="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[var(--color-text-muted)]"
      >
        {{ icon }}
      </span>
      <slot />
    </div>
  </div>
</template>
