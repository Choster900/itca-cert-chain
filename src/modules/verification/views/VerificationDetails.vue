<script setup lang="ts">
import { useRoute } from 'vue-router'

import AppButton from '../../common/components/AppButton.vue'
import AppCard from '../../common/components/AppCard.vue'
import AppTopbar from '../../common/components/AppTopbar.vue'

const route = useRoute()

const recordId = route.params.recordId as string | undefined
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar>
      <template #nav>
        <RouterLink class="text-sm font-medium text-[var(--color-primary)]" :to="{ name: 'verification-portal' }">
          Verificar Documento
        </RouterLink>
      </template>

      <template #actions>
        <RouterLink
          class="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-bold text-[var(--color-text-inverse)] transition-colors hover:bg-[var(--color-primary-hover)]"
          :to="{ name: 'login' }"
        >
          <span class="material-symbols-outlined text-[18px]">login</span>
          Iniciar Sesion
        </RouterLink>
      </template>
    </AppTopbar>

    <main class="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-4 py-6 md:px-6 lg:grid-cols-12 lg:p-10">
      <section class="lg:col-span-12 space-y-2">
        <p class="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
          Registro Academico Oficial
        </p>
        <h1 class="text-3xl font-bold md:text-4xl">Detalles de Verificacion Blockchain</h1>
        <p class="text-base text-[var(--color-text-muted)]">
          Prueba criptografica de logro academico{{ recordId ? ` para ID ${recordId}` : '' }}.
        </p>
      </section>

      <section class="space-y-6 lg:col-span-7">
        <div class="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1 shadow-sm">
          <article class="mx-auto max-w-2xl rounded-lg bg-[var(--color-surface)] p-6 md:p-8">
            <header class="mb-8 flex items-center justify-between border-b border-[var(--color-border)] pb-6">
              <div class="flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-[var(--color-primary)] text-white">
                  <span class="material-symbols-outlined text-3xl">school</span>
                </div>
                <div>
                  <h3 class="text-sm font-bold">ITCA-FEPADE</h3>
                  <p class="text-xs text-[var(--color-text-muted)]">Escuela Especializada en Ingenieria</p>
                </div>
              </div>
              <p class="font-mono text-xs text-[var(--color-text-muted)]">REF: CE-2023-889</p>
            </header>

            <h2 class="mb-8 text-center text-2xl font-bold uppercase tracking-wide text-[var(--color-primary)] md:text-3xl">
              Constancia de Egreso
            </h2>

            <p class="mb-6 text-lg leading-relaxed">
              La presente constancia certifica que el estudiante ha completado satisfactoriamente el plan de estudios correspondiente.
            </p>

            <div class="mb-4 py-2 text-center">
              <h3 class="inline-block border-b-2 border-[var(--color-border)] px-8 pb-2 text-2xl font-bold uppercase md:text-3xl">
                Alexandria J. Morgan
              </h3>
            </div>

            <p class="mb-2 text-center text-[var(--color-text-muted)]">En la carrera de:</p>
            <h4 class="mx-auto mb-10 max-w-lg text-center text-xl font-bold leading-snug">
              Ingenieria de Software y Sistemas de Informacion
            </h4>

            <p class="text-sm text-[var(--color-text-muted)]">
              Dado en San Salvador, a los 27 dias del mes de octubre de 2023.
            </p>
          </article>

          <div
            class="pointer-events-none absolute inset-1 flex items-center justify-center gap-4 rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <button
              type="button"
              class="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-bold text-[var(--color-primary)] transition-colors hover:bg-neutral-100"
            >
              <span class="material-symbols-outlined">zoom_in</span>
              Ver Completo
            </button>
            <button
              type="button"
              class="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <span class="material-symbols-outlined">download</span>
              PDF
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AppCard>
            <p class="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">ID del Emisor</p>
            <p class="font-mono text-sm">ITCA-FEPADE-001</p>
          </AppCard>
          <AppCard>
            <p class="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">ID del Estudiante</p>
            <p class="font-mono text-sm">{{ recordId ?? 'EST-2023-889' }}</p>
          </AppCard>
        </div>
      </section>

      <aside class="space-y-6 lg:col-span-5">
        <AppCard>
          <div class="mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-3xl text-[var(--color-primary)]">check_circle</span>
            <h2 class="text-xl font-bold">Estado de Verificacion</h2>
          </div>

          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-3 py-1 text-[var(--color-primary)]">
            <span class="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary)]" />
            <span class="text-sm font-bold">Verificado en Blockchain</span>
          </div>

          <div class="space-y-4 border-t border-[var(--color-border)] pt-4">
            <div>
              <p class="mb-1 text-sm font-medium text-[var(--color-text-muted)]">Red</p>
              <p class="font-mono text-sm font-bold text-[var(--color-secondary)]">Ethereum Sepolia</p>
            </div>
            <div>
              <p class="mb-1 text-sm font-medium text-[var(--color-text-muted)]">Direccion del Smart Contract</p>
              <code class="block rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-xs text-[var(--color-primary)]">
                0x123...456abc
              </code>
            </div>
            <div>
              <p class="mb-1 text-sm font-medium text-[var(--color-text-muted)]">Hash de Transaccion</p>
              <code class="block rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-xs text-[var(--color-primary)]">
                0x7f9a3...3a2b9c8d
              </code>
            </div>
          </div>
        </AppCard>

        <AppCard title="Verificacion de Integridad" icon="gavel">
          <div class="space-y-4">
            <div class="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
              <p class="mb-1 text-xs font-bold uppercase text-[var(--color-text-muted)]">Hash calculado del documento</p>
              <code class="font-mono text-xs">8a7d...9e2f</code>
            </div>
            <div class="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
              <p class="mb-1 text-xs font-bold uppercase text-[var(--color-text-muted)]">Hash registrado en blockchain</p>
              <code class="font-mono text-xs">8a7d...9e2f</code>
            </div>
          </div>
        </AppCard>

        <div class="grid grid-cols-2 gap-4">
          <AppButton variant="secondary">
            <span class="material-symbols-outlined">share</span>
            Compartir
          </AppButton>
          <AppButton variant="secondary">
            <span class="material-symbols-outlined">download</span>
            PDF
          </AppButton>
        </div>
      </aside>
    </main>
  </div>
</template>
