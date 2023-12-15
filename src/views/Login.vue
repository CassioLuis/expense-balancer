<template>
  <form>
    <v-row>
      <v-col
        cols="12"
        class="py-0"
      >
        <v-text-field
          label="Name"
          data-vv-name="name"
          required
        />
        <v-text-field
          label="Senha"
          required
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible"
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
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const visible = ref(false)
</script>
