<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  options?: any
  series?: any
}>()
// const options = {
//   chart: {
//     type: 'line'
//   },
//   series: [{
//     name: 'sales',
//     data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//   }],
//   xaxis: {
//     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//   }
// }
</script>

<template>
  <v-card>
    <Chart
      width="500"
      type="bar"
      :options="options"
      :series="options?.series"
    />
  </v-card>
</template>
