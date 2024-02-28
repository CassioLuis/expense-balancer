<script setup lang="ts">

class ChartConfig {
  bar: any
  area: any
  cols: any

  constructor(private readonly type: any, private readonly series: any, private readonly xaxis: any) {
    this.bar = {
      series: this.series,
      cols: {
        xs: '12',
        sm: '12',
        md: '6',
        lg: '6'
      },
      chartOptions: {
        grid: {
          show: true
        },
        chart: {
          height: 'auto',
          width: '100%',
          type: this.type
        },
        xaxis: this.xaxis,
        // responsive: [
        //   /*
        //     xs  < 600px
        //     sm	600px > < 960px
        //     md  960px > < 1280px
        //     lg	1280px > < 1920px
        //     xl	1920px > < 2560px
        //     xxl	> 2560px
        //   */
        //   {
        //     breakpoint: 1000, // <1000
        //     options: {
        //       chart: {
        //         height: '100%',
        //         width: '100%',
        //       }
        //     }
        //   }
        // ]
      }
    }
    this.area = {
      series: this.series,
      cols: {
        xs: '12',
        sm: '12',
        md: '6',
        lg: '6'
      },
      chartOptions: {
        grid: {
          show: false
        },
        chart: {
          height: 'auto',
          width: '100%',
          type: this.type
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: this.xaxis,
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        }
      }
    }
  }
}

const areaChart = new ChartConfig('area',
  [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
)

const barChart = new ChartConfig('bar',
  [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
)


const charts = [
  areaChart.area,
  barChart.bar
]
</script>

<template>
  <v-container>
    <v-row
      dense
      class="flex justify-between"
    >
      <v-col
        v-for="({ cols, chartOptions, series }, idx) in charts"
        :key="idx"
        :xs="cols.xs"
        :sm="cols.sm"
        :md="cols.md"
        :lg="cols.lg"
      >
        <v-card class="transition-none">
          <ChartComponent
            class="p-10 shadow-sm"
            :type="chartOptions.chart.type"
            :width="chartOptions.chart.width"
            :height="chartOptions.chart.height"
            :options="chartOptions"
            :series="series"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
