<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppTopbar from '../../common/components/AppTopbar.vue'
import AppButton from '../../common/components/AppButton.vue'
import IconField from '../../common/components/IconField.vue'
import { loginAction } from '../actions/login.action'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const keepSession = ref(true)
const isSubmitting = ref(false)

async function handleSubmit(): Promise<void> {
  isSubmitting.value = true

  try {
    const session = await loginAction({
      email: email.value,
      password: password.value,
    })

    authStore.setSession(session)

    const redirectRoute =
      typeof route.query.redirect === 'string' ? route.query.redirect : null

    if (redirectRoute) {
      void router.push(redirectRoute)
      return
    }

    void router.push({ name: 'dashboard' })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar>
      <template #nav>
        <RouterLink
          class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          :to="{ name: 'verification-portal' }"
        >
          Verificar Documento
        </RouterLink>
        <a class="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]" href="#">
          Instituciones
        </a>
      </template>

      <template #actions>
        <div class="hidden items-center gap-2 md:flex">
          <RouterLink
            class="inline-flex items-center gap-1 rounded-lg border border-(--color-border) bg-[var(--color-surface)] px-3 py-2 text-sm font-medium text-[var(--color-text-main)] transition-colors hover:bg-[var(--color-bg-soft)]"
            :to="{ name: 'dashboard' }"
          >
            <span class="material-symbols-outlined text-[18px]">dashboard</span>
            Ir al Dashboard
          </RouterLink>
          <RouterLink
            class="inline-flex items-center gap-1 rounded-lg border border-(--color-border) bg-[var(--color-surface)] px-3 py-2 text-sm font-medium text-[var(--color-text-main)] transition-colors hover:bg-[var(--color-bg-soft)]"
            :to="{ name: 'academic-requests' }"
          >
            <span class="material-symbols-outlined text-[18px]">description</span>
            Portal Academico
          </RouterLink>
        </div>
      </template>
    </AppTopbar>

    <main class="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-[1440px] grid-cols-1 gap-8 px-4 py-8 md:px-6 lg:grid-cols-12 lg:items-center">
      <section class="space-y-6 lg:col-span-6 lg:pr-10">
        <div class="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
          <span class="material-symbols-outlined text-[16px]">encrypted</span>
          Acceso Seguro
        </div>

        <h2 class="text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Bienvenido al
          <span class="text-[var(--color-primary)]">portal de certificaciones ITCA-FEPADE</span>
        </h2>

        <p class="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
          Gestiona emisión, firma institucional y verificación de credenciales académicas con trazabilidad criptográfica en tiempo real.
        </p>

        <figure class="overflow-hidden rounded-xl border border-(--color-border) bg-[var(--color-surface)] p-5 shadow-sm">
          <img
            src="../../../assets/images/LogoITCA.png"
            alt="Logo oficial ITCA-FEPADE"
            class="mx-auto w-full max-w-sm object-contain"
            loading="lazy"
          />
          <figcaption class="mt-3 text-center text-xs font-medium text-[var(--color-text-muted)]">
            Escuela Especializada en Ingeniería ITCA-FEPADE
          </figcaption>
        </figure>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article class="rounded-xl border border-(--color-border) bg-[var(--color-surface)] p-4 shadow-sm">
            <p class="text-3xl font-black text-[var(--color-primary)]">1,248</p>
            <p class="mt-1 text-sm font-medium text-[var(--color-text-muted)]">Certificaciones emitidas</p>
          </article>

          <article class="rounded-xl border border-(--color-border) bg-[var(--color-surface)] p-4 shadow-sm">
            <p class="text-3xl font-black">99.98%</p>
            <p class="mt-1 text-sm font-medium text-[var(--color-text-muted)]">Integridad validada</p>
          </article>
        </div>
      </section>

      <section class="lg:col-span-6">
        <div class="rounded-2xl border border-(--color-border) bg-[var(--color-surface)] p-6 shadow-sm md:p-8">
          <header class="mb-6">
            <h3 class="text-2xl font-bold tracking-tight">Iniciar sesión</h3>
            <p class="mt-1 text-sm text-[var(--color-text-muted)]">Usa tus credenciales institucionales para continuar.</p>
          </header>

          <form class="space-y-5" @submit.prevent="handleSubmit">
            <IconField label="Correo institucional" icon="mail">
              <input
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="admin@itca.edu.sv"
                class="w-full rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm placeholder:text-[var(--color-text-muted)]/70 focus:border-(--color-primary) focus:outline-none"
                required
              />
            </IconField>

            <IconField label="Contraseña" icon="lock">
              <input
                v-model="password"
                type="password"
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full rounded-lg border border-(--color-border) bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm placeholder:text-[var(--color-text-muted)]/70 focus:border-(--color-primary) focus:outline-none"
                required
              />
            </IconField>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
              <label class="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <input
                  v-model="keepSession"
                  type="checkbox"
                  class="h-4 w-4 rounded border-(--color-border) text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                Mantener sesión activa
              </label>

              <a href="#" class="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                Recuperar acceso
              </a>
            </div>

            <AppButton type="submit" :disabled="isSubmitting" class="w-full justify-center py-3 text-base">
              <span class="material-symbols-outlined text-[20px]">login</span>
              {{ isSubmitting ? 'Ingresando...' : 'Entrar al panel' }}
            </AppButton>
          </form>

          <footer class="mt-6 border-t border-(--color-border-strong) pt-5">
            <p class="text-xs text-[var(--color-text-muted)]">
              Al continuar aceptas los lineamientos de seguridad institucional y trazabilidad de certificados.
            </p>
          </footer>
        </div>
      </section>
    </main>
  </div>
</template>
