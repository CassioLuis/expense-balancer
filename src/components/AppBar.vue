<script setup lang="ts">
import { inject } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const { Sun, Moon, ChevronRight }: any = inject('icons')

const { isOpen }: any = inject('useSidebar')

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar
    title="Expense Organize"
  >
    <template #prepend>
      <v-btn
        icon
        @click="isOpen = !isOpen"
      >
        <ChevronRight :class="{ 'rotate-180': isOpen }" />
      </v-btn>
    </template>
    <v-btn
      density="comfortable"
      @click="toggleTheme"
      icon
    >
      <Moon
        v-if="theme.global.current.value.dark"
        class="text-sm w-5 text-purple-500"
      />
      <Sun
        v-else
        class="text-sm w-5 text-orange-500"
      />
    </v-btn>
  </v-app-bar>
</template>
