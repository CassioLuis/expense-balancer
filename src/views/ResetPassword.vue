<template>
  <form>
    <v-row>
      <v-col
        cols="12"
        class="py-0"
      >
        <p class="py-4 text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Esqueceu sua senha?
        </p>
        <v-text-field
          label="E-mail"
          required
        />
        <p>Basta digitar seu e-mail e enviaremos as instruções para redefinir sua senha!</p>
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
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

</script>
