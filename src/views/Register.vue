<template>
  <form>
    <v-text-field
      label="Name"
      required
    />
    <v-text-field
      label="Sobrenome"
      required
    />
    <v-text-field
      label="CPF"
      required
    />
    <v-text-field
      label="E-mail"
      required
    />
    <v-text-field
      label="Senha"
      required
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      @click:append-inner="visible = !visible"
    />
    <v-text-field
      label="Confirme a Senha"
      required
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      @click:append-inner="visible = !visible"
    />
    <v-checkbox
      type="checkbox"
      required
    >
      <template #label>
        Eu li e concordo com os
        <a
          target="_blank"
          href="https://vuetifyjs.com"
          class="font-semibold"
          @click.stop
        >
          Termos de Uso
        </a>
      </template>
    </v-checkbox>
    <v-row>
      <v-col
        cols="12"
        class="flex flex-col gap-4"
      >
        <v-btn
          variant="tonal"
        >
          Register
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
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const visible = ref(false)
</script>
