<script setup lang="ts">
import { inject } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const { Sun, Moon, ChevronRight, Menu }: any = inject('icons')

const { isOpen }: any = inject('useSidebar')
const { isOpenSummary }: any = inject('useSummary')

const theme = useTheme()

function toggleTheme () {
  if (theme.global.name.value === 'dark') {
    theme.global.name.value = 'light'
    localStorage.setItem('theme', 'light')
    return
  }
  theme.global.name.value = 'dark'
  localStorage.setItem('theme', 'dark')
}
</script>

<template>
  <v-app-bar title="Expense Organize">
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
    <v-btn
      density="comfortable"
      @click="isOpenSummary = !isOpenSummary"
      icon
    >
      <Menu class="text-sm w-5" />
    </v-btn>
  </v-app-bar>
</template>
