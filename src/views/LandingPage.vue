<template>
  <v-row>
    <v-col cols="12">
      <v-btn @click="router.push('/login')">
        Login
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
