<script setup lang="ts">
import { inject } from 'vue'

const { Bar, Doughnut }: any = inject('Chart')

const bar = {
  data: {
    labels: ['January', 'February', 'March', 'January', 'February', 'March'],
    datasets: [{ data: [40, 20, 12, 40, 20, 12] }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
  }
}

const doughnut = {
  data: {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
        labels: {
          color: 'white',
          font: {
            size: 14,
          }
        }
      }
    }
  }
}
</script>

<template>
  <v-row
    dense
    class="flex justify-between"
  >
    <h1 class="pl-3 font-semibold text-xl mb-4">
      Dashboard
    </h1>
    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="12"
      class="p-3"
    >
      <v-card class="p-10 shadow-sm rounded-xl">
        <v-card-title class="mb-10 p-0">
          Resumo Mensal
        </v-card-title>
        <div class="w-full h-full flex flex-wrap justify-center gap-2">
          <Doughnut
            class="h-36 w-36"
            :data="doughnut.data"
            :options="doughnut.options"
          />
          <Doughnut
            class="h-36 w-36"
            :data="doughnut.data"
            :options="doughnut.options"
          />
          <Doughnut
            class="h-36 w-36"
            :data="doughnut.data"
            :options="doughnut.options"
          />
        </div>
      </v-card>
    </v-col>
    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="12"
      class="p-3"
    >
      <v-card class="p-10 shadow-sm rounded-xl">
        <v-card-title>BarChart</v-card-title>
        <Bar
          :data="bar.data"
          :options="bar.options"
        />
      </v-card>
    </v-col>
  </v-row>
</template>
