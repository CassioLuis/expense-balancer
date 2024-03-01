<script lang="ts" setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import Cookies from 'js-cookie'

const showPassword = ref<boolean>(false)
const router = useRouter()

const authService: any = inject('authService')
const zodValidation: any = inject('zodSchemas')

const validationSchema = toTypedSchema(zodValidation.credentials())
const { handleSubmit, errors, meta, isSubmitting } = useForm({ validationSchema })

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit(login)

async function login () {
  const user = {
    email: email.value,
    password: password.value
  }

  const reponse = await authService.signin(user)
  Cookies.set('access-token', reponse.token, { expires: 1 })
  return router.push('/dashboard')
}

</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="12">
        <h3
          class="text-center py-4 text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
        >
          Login
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="space-y-4 flex flex-col justify-center"
      >
        <v-text-field
          label="Email"
          type="email"
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
        <v-btn
          class="mt-0"
          variant="plain"
          @click.prevent="router.push('/resetPassword')"
        >
          Esqueceu sua senha ?
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="flex flex-col gap-4"
      >
        <v-btn
          :loading="isSubmitting"
          class="w-full shadow-sm antialiased"
          variant="tonal"
          type="submit"
          :disabled="!meta.valid"
        >
          Entrar
        </v-btn>
        <v-btn
          variant="plain"
          @click.prevent="router.push('/registration')"
        >
          Cadastrar-se
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="flex items-center"
      >
        <v-divider class="border-opacity-100" />
        <p class="px-2 leading-relaxed whitespace-nowrap">
          ou acesse com
        </p>
        <v-divider class="border-opacity-100" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="py-4 flex justify-center items-center gap-4 relative"
      >
        <img
          src="/google_2504914.png"
          alt=""
          class="border h-10 cursor-pointer rounded-xl hover:shadow-xl transition-all duration-300"
        >
        <img
          src="/facebook_2504903.png"
          alt=""
          class="border h-10 cursor-pointer rounded-xl hover:shadow-xl transition-all duration-300"
        >
        <img
          src="/linkedin_2504923.png"
          alt=""
          class="border h-10 cursor-pointer rounded-xl hover:shadow-xl transition-all duration-300"
        >
      </v-col>
    </v-row>
  </v-form>
</template>
