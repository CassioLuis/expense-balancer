<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import AxiosAdapter from '../infra/AxiosAdapter'
import { AuthService } from '@/service';
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const router = useRouter()

const showPassword = ref<boolean>(false)

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().email({ message: 'E-mail inválido' }),
    password: z.string().min(6, { message: 'Senha inválida' })
  })
)

const { handleSubmit, errors, meta, isSubmitting } = useForm({ validationSchema })

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit(login)

const apiService = new AuthService(new AxiosAdapter())

async function login () {
  try {
    await apiService.signin({ email: email.value, password: password.value })
    return router.push('/dashboard')
  } catch (e) {
    console.log(e)
  }
}

</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="12">
        <h3
          class="mb-5 text-center py-4 text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
        >
          Login
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="py-0"
      >
        <v-text-field
          class="mb-4"
          label="Email"
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
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="flex justify-between items-center"
      >
        <v-checkbox
          value="1"
          label="Lembrar Senha"
          type="checkbox"
          required
          class="p-0 flex items-center"
        />
        <v-btn
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
          class="w-full shadow-sm"
          variant="tonal"
          type="submit"
          :disabled="!meta.valid"
        >
          <span v-if="!isSubmitting">Entrar</span>
          <span
            v-else
            class="mdi mdi-loading"
          />
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
        class="py-4 flex justify-center items-center gap-2"
      >
        <v-btn
          variant="tonal"
          icon="mdi mdi-google"
        />
        <v-btn
          variant="tonal"
          icon="mdi mdi-facebook"
        />
        <v-btn
          variant="tonal"
          icon="mdi mdi-linkedin"
        />
      </v-col>
    </v-row>
  </v-form>
</template>
