<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    icon?: string
  }>(),
  {
    title: '',
    icon: '',
  },
)
</script>

<template>
  <section class="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
    <header v-if="title" class="mb-6 flex items-center gap-2">
      <span v-if="icon" class="material-symbols-outlined text-[var(--color-primary)]">{{ icon }}</span>
      <h3 class="text-lg font-bold tracking-tight text-[var(--color-text-main)]">{{ title }}</h3>
    </header>

    <slot />
  </section>
</template>
