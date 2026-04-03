<script setup lang="ts">
import { computed, onMounted } from 'vue'

import ActivityItem from '../../common/components/ActivityItem.vue'
import AppButton from '../../common/components/AppButton.vue'
import AppCard from '../../common/components/AppCard.vue'
import AppTopbar from '../../common/components/AppTopbar.vue'
import IconField from '../../common/components/IconField.vue'
import StatusBadge from '../../common/components/StatusBadge.vue'
import { useDashboardStore } from '../stores/dashboard'

type SignatureRow = {
  title: string
  area: string
  signer: string
  date: string
  tone: 'pending' | 'success'
  badge: string
  icon: string
}

const signatures: SignatureRow[] = [
  {
    title: 'Firma Administrativa',
    area: 'Secretaría General',
    signer: 'Pendiente...',
    date: '--/--/----',
    tone: 'pending',
    badge: 'Estado: Pendiente',
    icon: 'admin_panel_settings',
  },
  {
    title: 'Firma Dirección de Bienestar',
    area: 'Bienestar Estudiantil',
    signer: 'Lic. Marta Díaz',
    date: '24/10/2025',
    tone: 'success',
    badge: 'Firmado',
    icon: 'verified_user',
  },
]

const dashboardStore = useDashboardStore()

onMounted(() => {
  void dashboardStore.hydrateDashboard()
})

function mapStatusTone(status: 'Acuñado' | 'Pendiente'): 'success' | 'pending' {
  return status === 'Pendiente' ? 'pending' : 'success'
}

const activityItems = computed(() =>
  dashboardStore.state.activities.map((activity) => ({
    ...activity,
    statusTone: mapStatusTone(activity.status),
  })),
)
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar user-name="Admin. Sistema" user-role="Administrador" :show-user="true">
      <template #nav>
        <a class="text-sm font-medium text-[var(--color-primary)]" href="#">Panel</a>
        <RouterLink
          class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          :to="{ name: 'academic-requests' }"
        >
          Certificaciones
        </RouterLink>
        <a class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]" href="#">
          Estudiantes
        </a>
        <a class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]" href="#">
          Configuración
        </a>
      </template>
    </AppTopbar>

    <main class="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-6 md:py-10">
      <section class="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-2 flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
            <span class="material-symbols-outlined text-[18px]">admin_panel_settings</span>
            <span>Panel Administrativo</span>
          </div>
          <h1 class="text-3xl font-black tracking-tight md:text-4xl">Emisión de Nueva Certificación</h1>
          <p class="mt-2 max-w-3xl text-base text-[var(--color-text-muted)] md:text-lg">
            Suba documentos académicos oficiales y acuñe credenciales verificadas en blockchain para graduados.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <AppButton variant="secondary">
            <span class="material-symbols-outlined text-[20px]">history</span>
            Ver Historial
          </AppButton>
          <AppButton>
            <span class="material-symbols-outlined text-[20px]">add_circle</span>
            Carga Masiva
          </AppButton>
        </div>
      </section>

      <section class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <div class="space-y-6 lg:col-span-8">
          <AppCard title="Carga de Documento" icon="upload_file">
            <div
              class="group cursor-pointer rounded-xl border-2 border-dashed border-(--color-border) bg-[var(--color-bg)] p-8 text-center transition-all hover:border-(--color-primary)/40 hover:bg-[var(--color-bg-soft)] md:p-10"
            >
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110"
              >
                <span class="material-symbols-outlined text-[32px]">cloud_upload</span>
              </div>
              <p class="mb-1 text-lg font-semibold">Arrastre y suelte el registro académico (PDF)</p>
              <p class="mb-6 text-sm text-[var(--color-text-muted)]">o haga clic para buscar en su computadora</p>
              <div
                class="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]"
              >
                <span class="material-symbols-outlined text-[16px]">info</span>
                Soportado: PDF, JPG, PNG (Max 10MB)
              </div>
            </div>

            <div class="mt-6 border-t border-(--color-border-strong) pt-4">
              <label class="mb-2 flex items-center gap-2 text-sm font-semibold">
                <span class="material-symbols-outlined text-[18px] text-[var(--color-secondary)]">fingerprint</span>
                Hash SHA-256 Generado
              </label>
              <div class="relative">
                <input
                  readonly
                  type="text"
                  value="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                  class="w-full rounded-lg border border-(--color-border) bg-[var(--color-bg-soft)] py-2.5 pl-4 pr-10 font-mono text-xs text-[var(--color-text-muted)]"
                />
                <button
                  type="button"
                  class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/10"
                >
                  <span class="material-symbols-outlined text-[18px]">content_copy</span>
                </button>
              </div>
              <p class="mt-2 text-xs text-[var(--color-text-muted)]">
                Esta huella digital criptográfica garantiza la integridad del documento antes de la certificación.
              </p>
            </div>
          </AppCard>

          <AppCard title="Metadatos del Estudiante" icon="edit_document">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <IconField label="Nombre Completo del Estudiante" icon="person">
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  class="w-full rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/70 focus:border-(--color-primary) focus:outline-none"
                />
              </IconField>

              <IconField label="Número de Carné" icon="badge">
                <input
                  type="text"
                  placeholder="Ej. 2023-00567"
                  class="w-full rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)]/70 focus:border-(--color-primary) focus:outline-none"
                />
              </IconField>

              <div class="md:col-span-2">
                <IconField label="Carrera" icon="school">
                  <select
                    class="w-full cursor-pointer appearance-none rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-10 text-sm text-[var(--color-text-main)] focus:border-(--color-primary) focus:outline-none"
                  >
                    <option selected disabled>Seleccione una carrera...</option>
                    <option>Técnico en Ingeniería de Software</option>
                    <option>Técnico en Redes Informáticas</option>
                    <option>Técnico en Electrónica Industrial</option>
                    <option>Técnico en Gastronomía</option>
                  </select>
                  <span
                    class="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                  >
                    expand_more
                  </span>
                </IconField>
              </div>

              <IconField label="Tipo de Título" icon="workspace_premium">
                <select
                  class="w-full cursor-pointer appearance-none rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-10 text-sm text-[var(--color-text-main)] focus:border-(--color-primary) focus:outline-none"
                >
                  <option>Técnico Superior</option>
                  <option>Diplomado</option>
                  <option>Certificado Profesional</option>
                </select>
                <span
                  class="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                >
                  expand_more
                </span>
              </IconField>

              <IconField label="Fecha de Emisión" icon="calendar_today">
                <input
                  type="date"
                  class="w-full rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm text-[var(--color-text-main)] focus:border-(--color-primary) focus:outline-none"
                />
              </IconField>
            </div>
          </AppCard>

          <AppCard title="Estado de Firma Institucional" icon="ink_pen">
            <div class="space-y-4">
              <article
                v-for="item in signatures"
                :key="item.title"
                class="flex flex-col justify-between gap-4 rounded-lg border border-(--color-border-strong) bg-[var(--color-bg)] p-4 sm:flex-row sm:items-center"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                  >
                    <span class="material-symbols-outlined text-[20px]">{{ item.icon }}</span>
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold">{{ item.title }}</h4>
                    <p class="text-xs text-[var(--color-text-muted)]">{{ item.area }}</p>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div class="text-xs text-[var(--color-text-muted)]">
                    <p class="font-medium text-[var(--color-text-main)]">Usuario firmante</p>
                    <p>{{ item.signer }}</p>
                  </div>
                  <div class="text-xs text-[var(--color-text-muted)]">
                    <p class="font-medium text-[var(--color-text-main)]">Fecha de firma</p>
                    <p>{{ item.date }}</p>
                  </div>
                  <StatusBadge :label="item.badge" :tone="item.tone" />
                </div>
              </article>
            </div>
          </AppCard>

          <AppCard title="Detalles de Blockchain" icon="token">
            <div class="mb-5 flex items-center justify-between gap-4">
              <p class="text-sm text-[var(--color-text-muted)]">Evidencia y estado de acuñación de la credencial.</p>
              <StatusBadge label="Estado: Pendiente" tone="pending" :pulse="true" />
            </div>

            <div
              class="space-y-4 rounded-lg border border-white/10 bg-[var(--color-surface-contrast)] p-5 font-mono text-sm text-[var(--color-text-inverse)]"
            >
              <div class="flex flex-col justify-between gap-2 border-b border-white/10 pb-3 md:flex-row md:items-center">
                <span class="text-white/60">Red Blockchain:</span>
                <div class="flex items-center gap-2">
                  <span class="h-2 w-2 rounded-full bg-emerald-500" />
                  <span class="font-bold">Ethereum Sepolia</span>
                </div>
              </div>

              <div class="border-b border-white/10 pb-3">
                <p class="mb-1 text-white/60">Dirección del Smart Contract:</p>
                <div class="flex items-center justify-between rounded border border-white/10 bg-white/5 p-2">
                  <span class="truncate text-xs text-[var(--color-secondary)]">
                    0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                  </span>
                  <button type="button" class="text-white/70 hover:text-white">
                    <span class="material-symbols-outlined text-[16px]">content_copy</span>
                  </button>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p class="mb-1 text-xs text-white/60">Hash de Transacción (txHash)</p>
                  <div class="flex h-8 items-center rounded border border-white/10 bg-white/5 px-3 text-xs italic text-white/45">
                    Pendiente de firma...
                  </div>
                </div>
                <div>
                  <p class="mb-1 text-xs text-white/60">Número de Bloque</p>
                  <div class="flex h-8 items-center rounded border border-white/10 bg-white/5 px-3 text-xs italic text-white/45">--</div>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col items-end gap-3">
              <div class="flex flex-wrap items-center gap-3">
                <AppButton variant="ghost">Cancelar</AppButton>
                <AppButton :disabled="true">
                  <span class="material-symbols-outlined">gavel</span>
                  Certificar en Blockchain
                </AppButton>
              </div>
              <p class="max-w-xl text-right text-xs font-medium text-[var(--color-primary)]">
                La certificación en blockchain solo se habilita cuando el documento ha sido firmado por las autoridades correspondientes.
              </p>
            </div>
          </AppCard>
        </div>

        <aside class="space-y-6 lg:col-span-4">
          <section class="overflow-hidden rounded-xl border border-(--color-border) bg-[var(--color-surface)] shadow-sm">
            <div
              class="flex items-center justify-between border-b border-(--color-border-strong) bg-[var(--color-surface-muted)] px-5 py-4"
            >
              <h3 class="flex items-center gap-2 text-lg font-bold">
                <span class="material-symbols-outlined text-[var(--color-primary)]">receipt_long</span>
                Actividad Reciente
              </h3>
              <span class="relative flex h-3 w-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>

            <div>
              <ActivityItem
                v-for="activity in activityItems"
                :key="activity.id"
                :status="activity.status"
                :status-tone="activity.statusTone"
                :time="activity.time"
                :student="activity.student"
                :program="activity.program"
                :hash-preview="activity.hashPreview"
              />
            </div>

            <div class="border-t border-(--color-border-strong) bg-[var(--color-surface-muted)] p-3 text-center">
              <button type="button" class="text-xs font-medium text-[var(--color-primary)] hover:underline">
                Ver Todas las Transacciones
              </button>
            </div>
          </section>

          <div class="grid grid-cols-2 gap-4">
            <article
              class="flex flex-col items-center justify-center rounded-xl border border-(--color-border) bg-[var(--color-surface)] p-4 text-center shadow-sm"
            >
              <p class="text-3xl font-black">{{ dashboardStore.state.metrics.totalIssued.toLocaleString() }}</p>
              <p class="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">Total Emitidos</p>
            </article>

            <article
              class="flex flex-col items-center justify-center rounded-xl border border-(--color-border) bg-[var(--color-surface)] p-4 text-center shadow-sm"
            >
              <p class="text-3xl font-black text-[var(--color-primary)]">{{ dashboardStore.state.metrics.issuedToday }}</p>
              <p class="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">Emitidos Hoy</p>
            </article>
          </div>
        </aside>
      </section>
    </main>
  </div>
</template>
