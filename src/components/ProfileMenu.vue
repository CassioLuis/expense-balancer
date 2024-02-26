<script setup lang="ts">
const items = ['Profile', 'Configurações', 'Sair']

</script>

<template>
  <v-list class="p-4">
    <v-card elevation="0">
      <v-list-item
        class="font-semibold"
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        title="Cassio Luis"
      >
        <template #subtitle>
          <span class="flex items-center justify-between">
            Founder of App
            <v-menu
              location="bottom"
              elevation="0"
            >
              <template #activator="{ props }">
                <v-btn
                  class="h-6 w-6"
                  icon="mdi-chevron-down"
                  size="small"
                  variant="tonal"
                  v-bind="props"
                />
              </template>
              <v-list
                elevation="0"
                class="shadow-md"
                density="compact"
              >
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title class="font-semibold text-sm">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
        </template>
      </v-list-item>
    </v-card>
  </v-list>
</template>
