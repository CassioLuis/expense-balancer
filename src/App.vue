<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Toast from '@/components/Toast.vue'


const { currentRoute } = useRouter()

const layout = computed(() => currentRoute.value.meta.layout || 'DefaultLayout')

</script>

<template>
  <v-app>
    <v-main>
      <Toast />
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>
