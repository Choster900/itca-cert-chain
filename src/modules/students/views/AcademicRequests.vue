<script setup lang="ts">
import AppButton from '../../common/components/AppButton.vue'
import AppTopbar from '../../common/components/AppTopbar.vue'
import StatusBadge from '../../common/components/StatusBadge.vue'

type RequestItem = {
  id: string
  date: string
  type: string
  paymentStatus: string
  paymentTone: 'success' | 'pending'
  actionLabel: string
}

const requestHistory: RequestItem[] = [
  {
    id: 'req-1',
    date: '26 Oct, 2023',
    type: 'Constancia de Notas',
    paymentStatus: 'Pendiente de pago',
    paymentTone: 'pending',
    actionLabel: 'Ver Boleta',
  },
  {
    id: 'req-2',
    date: '25 Oct, 2023',
    type: 'Constancia de Horario',
    paymentStatus: 'Pago Validado',
    paymentTone: 'success',
    actionLabel: 'En proceso de emision',
  },
  {
    id: 'req-3',
    date: '15 Oct, 2023',
    type: 'Constancia de Estudio',
    paymentStatus: 'Pago Validado',
    paymentTone: 'success',
    actionLabel: 'Descargar',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar user-name="Carlos Martinez" user-role="Ingenieria en Sistemas" :show-user="true">
      <template #nav>
        <a class="border-b-2 border-(--color-primary) pb-0.5 text-sm font-bold text-[var(--color-primary)]" href="#">
          Academico
        </a>
        <a class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]" href="#">
          Financiero
        </a>
        <a class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]" href="#">
          Tramites
        </a>
      </template>

      <template #actions>
        <button type="button" class="relative rounded-full p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]">
          <span class="material-symbols-outlined">notifications</span>
          <span class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
        </button>
      </template>
    </AppTopbar>

    <main class="mx-auto w-full max-w-[1280px] px-4 py-10 md:px-6">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside class="hidden lg:col-span-3 lg:block">
          <nav class="space-y-1">
            <a class="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-text-main)] transition-all hover:bg-[var(--color-surface)] hover:shadow-sm" href="#">
              <span class="material-symbols-outlined text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]">dashboard</span>
              Resumen General
            </a>
            <a class="flex items-center gap-3 rounded-lg border-l-4 border-(--color-secondary) bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] shadow-sm" href="#">
              <span class="material-symbols-outlined text-[var(--color-primary)]">description</span>
              Solicitud de Constancias
            </a>
            <a class="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-text-main)] transition-all hover:bg-[var(--color-surface)] hover:shadow-sm" href="#">
              <span class="material-symbols-outlined text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]">history_edu</span>
              Historial de Notas
            </a>
            <a class="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-text-main)] transition-all hover:bg-[var(--color-surface)] hover:shadow-sm" href="#">
              <span class="material-symbols-outlined text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]">account_balance_wallet</span>
              Pagos y Aranceles
            </a>
          </nav>

          <div class="mt-8 rounded-xl border border-(--color-primary)/10 bg-[var(--color-primary)]/5 p-5">
            <h3 class="mb-2 flex items-center gap-2 text-sm font-bold text-[var(--color-primary)]">
              <span class="material-symbols-outlined text-lg">help</span>
              Ayuda
            </h3>
            <p class="mb-4 text-xs leading-relaxed text-[var(--color-text-muted)]">
              Si tienes problemas con tu solicitud, contacta al registro academico.
            </p>
            <a class="text-xs font-semibold text-[var(--color-primary)] underline" href="#">Ver preguntas frecuentes</a>
          </div>
        </aside>

        <section class="space-y-8 lg:col-span-9">
          <article class="group relative overflow-hidden rounded-xl border border-(--color-border) bg-[var(--color-surface)] shadow-sm">
            <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-secondary)]" />

            <div class="p-6 md:p-8">
              <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 class="mb-2 text-2xl font-bold" style="font-family: var(--font-serif)">Solicitud de Constancia Academica</h2>
                  <p class="text-sm text-[var(--color-text-muted)]">Complete el formulario para iniciar el proceso de solicitud y pago en ventanilla.</p>
                </div>
                <div class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700 dark:border-blue-900/40 dark:bg-blue-900/20 dark:text-blue-300">
                  <span class="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                  Ciclo Activo 02-2023
                </div>
              </div>

              <form class="space-y-6">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div class="space-y-6">
                    <div>
                      <label class="mb-2 block text-sm font-semibold">Tipo de Constancia</label>
                      <div class="relative">
                        <select class="block w-full appearance-none rounded-lg border border-(--color-border) bg-[var(--color-bg)] p-3 pr-10 text-sm">
                          <option selected disabled>Seleccione una opcion...</option>
                          <option>Constancia de Estudio con Notas</option>
                          <option>Constancia de Egreso</option>
                          <option>Constancia de Buena Conducta</option>
                          <option>Constancia de Horario de Clases</option>
                        </select>
                        <span class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--color-text-muted)]">
                          <span class="material-symbols-outlined text-xl">expand_more</span>
                        </span>
                      </div>
                    </div>

                    <div>
                      <label class="mb-2 block text-sm font-semibold">Carrera</label>
                      <input
                        readonly
                        value="Tecnico en Ingenieria de Sistemas Informaticos"
                        class="block w-full cursor-not-allowed rounded-lg border border-(--color-border) bg-[var(--color-bg-soft)] p-3 text-sm text-[var(--color-text-muted)]"
                      />
                    </div>

                    <div>
                      <label class="mb-2 block text-sm font-semibold">Numero de Carnet</label>
                      <div class="relative">
                        <span class="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[var(--color-text-muted)]">
                          badge
                        </span>
                        <input
                          readonly
                          value="20210458"
                          class="block w-full cursor-not-allowed rounded-lg border border-(--color-border) bg-[var(--color-bg-soft)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-muted)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex h-full flex-col justify-between rounded-xl border border-dashed border-(--color-border) bg-[var(--color-bg)] p-5">
                    <div>
                      <h3 class="mb-4 border-b border-(--color-border) pb-2 text-lg font-bold" style="font-family: var(--font-serif)">Resumen de Solicitud</h3>

                      <div class="flex items-center justify-between border-b border-(--color-border) py-3">
                        <span class="text-sm text-[var(--color-text-muted)]">Estado de Solvencia</span>
                        <StatusBadge label="Solvente" tone="success" />
                      </div>

                      <div class="flex items-center justify-between border-b border-(--color-border) py-3">
                        <span class="text-sm text-[var(--color-text-muted)]">Costo Referencial</span>
                        <span class="text-sm font-bold">$5.00</span>
                      </div>

                      <div class="border-b border-(--color-border) py-3">
                        <span class="mb-1 block text-sm text-[var(--color-text-muted)]">Metodo de Pago</span>
                        <span class="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
                          <span class="material-symbols-outlined text-base">storefront</span>
                          Cancelacion en Ventanilla Institucional
                        </span>
                      </div>

                      <div class="border-b border-(--color-border) py-3">
                        <span class="mb-1 block text-sm text-[var(--color-text-muted)]">Estado de Pago</span>
                        <span class="inline-flex items-center gap-1 text-xs font-semibold text-yellow-700 dark:text-yellow-300">
                          <span class="material-symbols-outlined text-sm">pending</span>
                          Pendiente de Validacion por Finanzas
                        </span>
                      </div>

                      <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-[var(--color-text-muted)]">Entrega Estimada</span>
                        <span class="text-sm font-medium">3 dias habiles post-pago</span>
                      </div>
                    </div>

                    <div class="mt-6 border-t border-(--color-border) pt-4">
                      <div class="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900/40 dark:bg-yellow-900/15">
                        <p class="flex items-start gap-2 text-xs text-yellow-800 dark:text-yellow-200">
                          <span class="material-symbols-outlined mt-0.5 text-sm">info</span>
                          La solicitud sera procesada cuando el pago sea confirmado por el area financiera.
                        </p>
                      </div>

                      <AppButton class="w-full justify-center py-3.5">
                        <span class="material-symbols-outlined">send</span>
                        Enviar Solicitud
                      </AppButton>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </article>

          <article class="overflow-hidden rounded-xl border border-(--color-border) bg-[var(--color-surface)] shadow-sm">
            <header class="flex items-center justify-between border-b border-(--color-border) p-6">
              <h3 class="text-lg font-bold" style="font-family: var(--font-serif)">Estado de Mis Solicitudes</h3>
              <div class="flex gap-2">
                <button type="button" class="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]">
                  <span class="material-symbols-outlined">filter_list</span>
                </button>
                <button type="button" class="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]">
                  <span class="material-symbols-outlined">refresh</span>
                </button>
              </div>
            </header>

            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm">
                <thead class="border-b border-(--color-border) bg-[var(--color-bg)] text-xs uppercase">
                  <tr>
                    <th class="px-6 py-4 font-bold tracking-wider text-[var(--color-text-muted)]">Fecha</th>
                    <th class="px-6 py-4 font-bold tracking-wider text-[var(--color-text-muted)]">Tipo de Constancia</th>
                    <th class="px-6 py-4 font-bold tracking-wider text-[var(--color-text-muted)]">Estado de Pago</th>
                    <th class="px-6 py-4 text-right font-bold tracking-wider text-[var(--color-text-muted)]">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[var(--color-border)]">
                  <tr v-for="row in requestHistory" :key="row.id" class="transition-colors hover:bg-[var(--color-bg-soft)]">
                    <td class="px-6 py-4">{{ row.date }}</td>
                    <td class="px-6 py-4">
                      <div class="font-medium">{{ row.type }}</div>
                      <div v-if="row.id === 'req-3'" class="mt-1 flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                        <span class="material-symbols-outlined text-[14px] text-[var(--color-primary)]">token</span>
                        Certificada en Ethereum Sepolia
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <StatusBadge :label="row.paymentStatus" :tone="row.paymentTone" :pulse="row.paymentTone === 'pending'" />
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button
                        type="button"
                        class="rounded border border-(--color-primary)/20 bg-[var(--color-primary)]/5 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10"
                      >
                        {{ row.actionLabel }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <footer class="flex justify-center border-t border-(--color-border) bg-[var(--color-bg)] px-6 py-4">
              <a href="#" class="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]">
                Ver todo el historial
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </footer>
          </article>
        </section>
      </div>
    </main>

    <footer class="mt-auto border-t border-(--color-border) bg-[var(--color-surface)] py-8">
      <div class="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-4 text-sm text-[var(--color-text-muted)] md:flex-row md:px-6">
        <p>© 2026 ITCA-FEPADE. Todos los derechos reservados.</p>
        <div class="flex gap-6">
          <a href="#" class="transition-colors hover:text-[var(--color-primary)]">Politicas de Privacidad</a>
          <a href="#" class="transition-colors hover:text-[var(--color-primary)]">Terminos de Uso</a>
          <a href="#" class="transition-colors hover:text-[var(--color-primary)]">Soporte</a>
        </div>
      </div>
    </footer>
  </div>
</template>
