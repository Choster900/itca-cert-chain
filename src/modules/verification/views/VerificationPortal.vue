<script setup lang="ts">
import AppButton from '../../common/components/AppButton.vue'
import AppCard from '../../common/components/AppCard.vue'
import AppTopbar from '../../common/components/AppTopbar.vue'
import IconField from '../../common/components/IconField.vue'
import StatusBadge from '../../common/components/StatusBadge.vue'

type RecordStatus = 'success' | 'pending'

type CertifiedRecord = {
  id: string
  hash: string
  studentId: string
  program: string
  date: string
  statusLabel: string
  statusTone: RecordStatus
}

const latestRecords: CertifiedRecord[] = [
  {
    id: '20230015',
    hash: '0x7f...3a21',
    studentId: '20230015',
    program: 'Ingenieria de Sistemas',
    date: '24 Oct, 2023',
    statusLabel: 'Verificado',
    statusTone: 'success',
  },
  {
    id: '20230042',
    hash: '0x4b...9c88',
    studentId: '20230042',
    program: 'Gastronomia',
    date: '23 Oct, 2023',
    statusLabel: 'Verificado',
    statusTone: 'success',
  },
  {
    id: '20230103',
    hash: '0x1d...5e90',
    studentId: '20230103',
    program: 'Tecnico Automotriz',
    date: '23 Oct, 2023',
    statusLabel: 'Procesando',
    statusTone: 'pending',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar>
      <template #nav>
        <RouterLink class="text-sm font-medium text-[var(--color-primary)]" :to="{ name: 'verification-portal' }">
          Verificar Documento
        </RouterLink>
        <a class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]" href="#">
          Instituciones
        </a>
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

    <main class="flex-1">
      <section class="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] py-12 lg:py-16">
        <div class="mx-auto w-full max-w-[1100px] px-4 md:px-6">
          <div class="mb-10 text-center">
            <h1 class="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style="font-family: var(--font-serif)">
              Portal de Verificacion de Constancias
            </h1>
            <p class="mx-auto max-w-3xl text-lg text-[var(--color-text-muted)]">
              Ingrese el codigo unico de la constancia o suba un PDF para validar autenticidad e integridad en la cadena de bloques institucional.
            </p>
          </div>

          <div class="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl">
            <div class="flex gap-1 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)] p-1">
              <button type="button" class="flex-1 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-3 text-sm font-bold text-[var(--color-primary)]">
                Busqueda por Codigo
              </button>
              <button type="button" class="flex-1 rounded-md px-3 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)]">
                Validacion por Archivo
              </button>
            </div>

            <div class="grid gap-8 p-6 md:grid-cols-2 md:p-8">
              <div class="space-y-6">
                <IconField label="Codigo de Constancia" icon="qr_code">
                  <input type="text" value="ITCA-2024-X8J9-LM2P" class="h-12 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm" />
                </IconField>

                <div>
                  <p class="mb-2 text-sm font-semibold">Subir Documento (PDF)</p>
                  <div class="group cursor-pointer rounded-lg border-2 border-dashed border-[var(--color-border)] p-6 text-center transition-colors hover:bg-[var(--color-bg-soft)]">
                    <span class="material-symbols-outlined mb-2 text-4xl text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-primary)]">upload_file</span>
                    <p class="text-sm font-medium">Arrastre su archivo aqui o haga clic para examinar</p>
                    <p class="mt-1 text-xs text-[var(--color-text-muted)]">Solo formato PDF (Max 10MB)</p>
                  </div>
                </div>

                <AppButton class="w-full justify-center py-4 text-base">
                  <span class="material-symbols-outlined">verified_user</span>
                  Verificar Integridad
                </AppButton>
              </div>

              <AppCard title="Estado de Validacion" icon="shield_locked">
                <div class="space-y-4">
                  <div>
                    <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Hash Calculado del Documento</p>
                    <div class="break-all rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-xs text-[var(--color-text-muted)]">
                      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </div>
                  </div>

                  <div>
                    <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Hash en Blockchain (Ethereum)</p>
                    <div class="break-all rounded border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-xs text-[var(--color-text-muted)]">
                      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    </div>
                  </div>

                  <div class="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-center dark:border-emerald-900/30 dark:bg-emerald-900/20">
                    <div class="mb-2 inline-flex rounded-full bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-300">
                      <span class="material-symbols-outlined text-[28px]">check_circle</span>
                    </div>
                    <p class="text-sm font-bold text-emerald-800 dark:text-emerald-300">Integridad Confirmada</p>
                    <p class="mt-1 text-xs text-emerald-700 dark:text-emerald-400">Documento autentico y certificado en blockchain</p>
                  </div>
                </div>
              </AppCard>
            </div>
          </div>

          <div class="mt-8 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm">
                <thead class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                  <tr>
                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Hash</th>
                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">ID Estudiante</th>
                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Programa</th>
                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Fecha</th>
                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Estado</th>
                    <th class="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Accion</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[var(--color-border)]">
                  <tr v-for="record in latestRecords" :key="record.id" class="transition-colors hover:bg-[var(--color-bg-soft)]">
                    <td class="px-6 py-4">
                      <div class="inline-flex items-center gap-2 rounded bg-[var(--color-primary)]/10 px-2 py-1 font-mono text-sm text-[var(--color-primary)]">
                        <span class="material-symbols-outlined text-[16px]">key</span>
                        {{ record.hash }}
                      </div>
                    </td>
                    <td class="px-6 py-4 font-medium">{{ record.studentId }}</td>
                    <td class="px-6 py-4 text-[var(--color-text-muted)]">{{ record.program }}</td>
                    <td class="px-6 py-4 text-[var(--color-text-muted)]">{{ record.date }}</td>
                    <td class="px-6 py-4">
                      <StatusBadge :label="record.statusLabel" :tone="record.statusTone" :pulse="record.statusTone === 'pending'" />
                    </td>
                    <td class="px-6 py-4 text-right">
                      <RouterLink :to="{ name: 'verification-details', params: { recordId: record.id } }" class="inline-flex text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]">
                        <span class="material-symbols-outlined">visibility</span>
                      </RouterLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
