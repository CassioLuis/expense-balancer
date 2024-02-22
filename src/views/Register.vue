<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm, useField } from 'vee-validate'
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { Loader2 }: any = inject('icons')
const zodValidation: any = inject('zodSchemas')

const validationSchema = toTypedSchema(zodValidation.registration())
const { handleSubmit, errors, meta, isSubmitting } = useForm({ validationSchema })

const { value: name } = useField('name')
const { value: lastName } = useField('lastName')
const { value: email } = useField('email')
const { value: terms } = useField('terms')
const { value: password } = useField('password')
const { value: passwordConfirm } = useField('passwordConfirm')


const onSubmit = handleSubmit(register)

async function register () {
  console.log('ola')
}

const showPassword = ref<boolean>(false)
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="12">
        <h3 class="text-center py-4 text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Cadastro
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="space-y-4"
      >
        <v-text-field
          label="Name"
          required
          :error-messages="errors.name"
          v-model="name"
        />
        <v-text-field
          label="Sobrenome"
          required
          :error-messages="errors.lastName"
          v-model="lastName"
        />
        <v-text-field
          label="E-mail"
          required
          :error-messages="errors.email"
          v-model="email"
        />
        <v-text-field
          label="Senha"
          required
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          :error-messages="errors.password"
          v-model="password"
        />
        <v-text-field
          label="Confirme a Senha"
          required
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          :error-messages="errors.passwordConfirm"
          v-model="passwordConfirm"
        />
        <v-checkbox
          type="checkbox"
          required
          :error-messages="errors.terms"
          v-model="terms"
        >
          <template #label>
            Eu li e concordo com os
            <a
              target="_blank"
              href="https://vuetifyjs.com"
              class="font-semibold"
              @click.stop
            >
              <p class="pl-2">Termos de Uso</p>
            </a>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="flex flex-col gap-4"
      >
        <v-btn
          class="w-full shadow-sm"
          variant="tonal"
          type="submit"
          :disabled="!meta.valid"
        >
          <span v-if="!isSubmitting">Registrar</span>
          <Loader2
            v-else
            class="animate-spin"
          />
        </v-btn>
        <div class="flex justify-center items-center gap-1">
          <p>
            Já possui uma conta ?
          </p>
          <v-btn
            variant="plain"
            @click.prevent="router.push('/login')"
          >
            Acessar Conta
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>
