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
        <v-btn
          target="_blank"
          href="https://vuetifyjs.com"
          elevation="0"
          variant="text"
          color="orange lighten-4"
          @click.stop
        >
          Termos de Uso
        </v-btn>
      </template>
    </v-checkbox>
    <v-row>
      <v-col
        cols="12"
        class="flex flex-col gap-4"
      >
        <v-btn
          variant="flat"
          elevation="0"
          color="orange lighten-4"
        >
          register
        </v-btn>
        <div class="flex justify-center items-center gap-1">
          <p>
            Já possui uma conta ?
          </p>
          <v-btn
            variant="plain"
            color="orange lighten-4"
            elevation="0"
            @click.prevent="router.push('/login')"
          >
            acessar conta
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
