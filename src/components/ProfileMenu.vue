<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router';

const authUseCase: any = inject('authUseCase')
const router = useRouter()

const items = [
  { name: 'Profile' },
  { name: 'Configurações' },
  {
    name: 'Sair',
    action: () => {
      authUseCase.signout()
      router.push('/login')
    }
  }
]

</script>

<template>
  <v-list class="p-4">
    <v-card>
      <v-list-item
        class="font-semibold"
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        title="Cassio Luis"
      >
        <template #subtitle>
          <span class="flex items-center justify-between">
            Founder of App
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  class="h-6 w-6 bg-purple-500 text-white font-semibold"
                  icon="mdi-chevron-down"
                  size="small"
                  v-bind="props"
                />
              </template>
              <v-list class="shadow-md">
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title
                    @click="item.action"
                    class="font-semibold text-sm"
                  >{{ item.name
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
        </template>
      </v-list-item>
    </v-card>
  </v-list>
</template>
