<!-- <script setup lang="ts">
import { defineProps } from 'vue'
import defaultConfigs from '@/vue-apexcharts-config'

const props = defineProps<{
  options?: any
  series?: any
}>()

const barConfig = {
  series: props.series,
  chartOptions: {
    chart: {
      type: 'bar'
    }
  }
}
</script>

<template>
  <v-card>
    <ChartComponent
      type="bar"
      class="p-10"
      :options="defaultConfigs"
      :series="barConfig?.series"
    />
  </v-card>
</template> -->
