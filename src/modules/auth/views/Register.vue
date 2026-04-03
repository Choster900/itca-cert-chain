<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '../../common/components/AppButton.vue'
import AppTopbar from '../../common/components/AppTopbar.vue'
import IconField from '../../common/components/IconField.vue'
import { registerAction } from '../actions/register.action'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')

async function handleRegister(): Promise<void> {
  const result = await registerAction({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
    role: 'staff',
  })

  if (result.created) {
    void router.push({ name: 'login' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
    <AppTopbar />

    <main class="mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-xl items-center px-4 py-8">
      <form class="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm" @submit.prevent="handleRegister">
        <h1 class="text-3xl font-bold">Crear cuenta</h1>
        <p class="mt-1 text-sm text-[var(--color-text-muted)]">Modulo Auth - Registro base</p>

        <div class="mt-6 space-y-4">
          <IconField label="Nombre completo" icon="person">
            <input v-model="fullName" class="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm" required />
          </IconField>
          <IconField label="Correo" icon="mail">
            <input v-model="email" type="email" class="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm" required />
          </IconField>
          <IconField label="Contrasena" icon="lock">
            <input v-model="password" type="password" class="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-4 text-sm" required />
          </IconField>
        </div>

        <AppButton type="submit" class="mt-6 w-full justify-center">Registrarme</AppButton>
      </form>
    </main>
  </div>
</template>
