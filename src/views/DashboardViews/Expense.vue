<script setup lang="ts">
import { inject, ref } from 'vue'
import DefaultView from './DefaultView.vue'
import ExpensesUseCase from '@/application/useCases/ExpensesUseCase'

const expensesUseCase: any = inject('expensesUseCase') as ExpensesUseCase

const iniDate = '2024-01-01T12:00:00Z'
const finDate = '2024-01-31T12:00:00Z'

const api = ref(null)

async function teste () {
  api.value = await expensesUseCase.getAnalitics(iniDate, finDate)
}

</script>

<template>
  <DefaultView>
    <template #viewTitle>
      Despesas
    </template>
    <template #viewContent>
      <v-btn @click="teste">
        teste
      </v-btn>
      {{ api }}
    </template>
  </DefaultView>
</template>
