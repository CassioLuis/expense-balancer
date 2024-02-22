<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import AxiosAdapter from '../infra/AxiosAdapter'
import { AuthService } from '@/service';

const router = useRouter()

const showPassword = ref<boolean>(false)

const credentials = reactive<any>({
  email: 'cassiocaruzo@gmail.com',
  password: '123456'
})

const apiService = new AuthService(new AxiosAdapter())

async function login () {
  try {
    await apiService.signin({ credentials })
    return router.push('/dashboard')
  } catch (e) {
    console.log(e)
  }
}

</script>

<template>
  <v-form @submit.prevent="login">
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
          label="Email"
          data-vv-name="email"
          required
          v-model="credentials.email"
        />
        <v-text-field
          label="Senha"
          required
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          v-model="credentials.password"
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
