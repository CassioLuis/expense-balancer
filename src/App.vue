<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { currentRoute } = useRouter()

const layout = computed(() => currentRoute.value.meta.layout || 'DefaultLayout')
</script>

<template>
  <v-app>
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>
