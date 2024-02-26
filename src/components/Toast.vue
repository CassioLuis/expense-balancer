<script setup lang="ts">
import { inject } from 'vue'

const { onToast, toastMessage, timeOut }: any = inject('useToast')

</script>

<template>
  <v-snackbar
    v-model="onToast"
    density="compact"
    location="top right"
    :timeout="timeOut"
    color="red"
  >
    <v-icon>mdi-shield-alert</v-icon>
    {{ toastMessage }}
    <template #actions>
      <v-btn
        icon="mdi-close"
        density="compact"
        variant="text"
        vertical
        class="text-xs"
        @click="onToast = !onToast"
      />
    </template>
  </v-snackbar>
</template>
