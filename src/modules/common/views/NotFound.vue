<script setup lang="ts">
import AppButton from '../components/AppButton.vue'
import AppTopbar from '../components/AppTopbar.vue'
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar>
      <template #nav>
        <RouterLink
          class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          :to="{ name: 'login' }"
        >
          Volver a Login
        </RouterLink>
      </template>
    </AppTopbar>

    <main class="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-[1280px] place-items-center px-4 py-10 md:px-6">
      <section class="w-full max-w-2xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center shadow-sm md:p-12">
        <div class="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          <span class="material-symbols-outlined text-4xl">error</span>
        </div>

        <p class="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">Error de Navegacion</p>
        <h1 class="text-5xl font-black leading-none tracking-tight md:text-6xl">404</h1>
        <h2 class="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Pagina no encontrada</h2>

        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base">
          La ruta que intentaste abrir no existe o fue movida. Puedes volver al inicio de sesion o ir al panel principal.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <RouterLink :to="{ name: 'login' }">
            <AppButton>
              <span class="material-symbols-outlined text-[18px]">login</span>
              Ir a Login
            </AppButton>
          </RouterLink>

          <RouterLink :to="{ name: 'dashboard' }">
            <AppButton variant="secondary">
              <span class="material-symbols-outlined text-[18px]">dashboard</span>
              Ir al Dashboard
            </AppButton>
          </RouterLink>
        </div>
      </section>
    </main>
  </div>
</template>
