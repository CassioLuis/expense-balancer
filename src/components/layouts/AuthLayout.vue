<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs'

const theme: any = useTheme()

</script>

<template>
  <v-container class="flex justify-center items-center h-screen">
    <v-col
      class="p-0"
      xs="12"
      sm="8"
      md="5"
      lg="4"
      xl="3"
      xxl="2"
    >
      <v-card
        class="p-10 border border-zinc-100"
        :class="{'border-zinc-800': theme.global.current.value.dark}"
        elevation="0"
      >
        <router-view />
      </v-card>
    </v-col>
  </v-container>
</template>
