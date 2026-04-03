<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { getTheme, toggleTheme, type ThemeMode } from '../../../theme/theme'

const currentTheme = ref<ThemeMode>('light')

onMounted(() => {
  currentTheme.value = getTheme()
})

function handleToggleTheme(): void {
  currentTheme.value = toggleTheme()
}
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-main)] transition-colors hover:bg-[var(--color-bg-soft)]"
    :aria-label="currentTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    @click="handleToggleTheme"
  >
    <span class="material-symbols-outlined text-[20px]">
      {{ currentTheme === 'dark' ? 'light_mode' : 'dark_mode' }}
    </span>
  </button>
</template>
