<script setup lang="ts">
import { inject, reactive } from 'vue'
import DefaultView from './DefaultView.vue'

const expenseService: any = inject('expenseService')

const { data } = await expenseService.getByUser()

console.log(data)
const api = reactive(data)

// watch(expenses, (vl) => {
//   console.log(vl)
//   // data.push(newVl)
// })

console.log(data)

</script>

<template>
  <DefaultView>
    <template #viewTitle>
      Despesas
    </template>
    <template #viewContent>
      {{ api }}
    </template>
  </DefaultView>
</template>
