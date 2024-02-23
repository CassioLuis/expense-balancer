<script setup lang="ts">
import { useTheme } from 'vuetify'
import { ref, inject } from 'vue'

const { Sun, Moon, BarChart3, ListChecks, NotebookPen, ChevronRight }: any = inject('icons')

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const drawer = ref(true)

</script>

<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      floating
    >
      <v-list-item class="p-4">
        <v-card elevation="0">
          <v-list-item
            class="font-semibold"
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            title="Cassio Luis"
          >
            <template #subtitle>
              <span class="flex items-center justify-between">
                Founder of App
                <v-btn
                  class="h-6 w-6"
                  icon="mdi-chevron-down"
                  size="small"
                  variant="tonal"
                />
              </span>
            </template>
          </v-list-item>
        </v-card>
      </v-list-item>

      <v-divider class="mx-4" />

      <v-list
        class="p-4"
        density="compact"
        nav
      >
        <v-list-subheader>Home</v-list-subheader>
        <v-list-item
          title="Dashboard"
          value="dashboard"
        >
          <template #prepend>
            <BarChart3
              class="mr-1 h-4"
            />
          </template>
        </v-list-item>
        <v-list-subheader>Gestão</v-list-subheader>
        <v-list-item
          title="Despesas"
          value="expenses"
        >
          <template #prepend>
            <NotebookPen class="mr-1 h-4" />
          </template>
        </v-list-item>
        <v-list-item
          title="Categorias"
          value="category"
        >
          <template #prepend>
            <ListChecks class="mr-1 h-4" />
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      flat
      title="Expense Organize"
    >
      <template #prepend>
        <v-btn icon>
          <ChevronRight
            @click="drawer = !drawer"
            :class="{'rotate-180': drawer}"
          />
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

    <v-main class="d-flex align-center justify-center h-screen">
      <router-view />
    </v-main>
  </v-layout>
</template>
