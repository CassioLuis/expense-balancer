<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref<string>('')

</script>
<template>
  <form>
    <v-row>
      <v-col cols="12">
        <h3
          class="mb-5 text-center py-4 text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
        >
          Esqueceu sua senha?
        </h3>
        <p>Basta digitar seu e-mail e enviaremos as instruções para redefinir sua senha!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="py-0"
      >
        <v-text-field
          class="my-3"
          prepend-inner-icon="mdi-email"
          hide-details="auto"
          label="e-mail"
          required
          v-model="email"
        />
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
          :disabled="!email"
        >
          Enviar
        </v-btn>
        <v-btn
          variant="plain"
          @click.prevent="router.push('/login')"
        >
          Voltar Para o Login
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>
