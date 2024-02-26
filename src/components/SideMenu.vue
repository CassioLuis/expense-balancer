<script setup lang="ts">
import DashboardRoutes from '../router/dashboardRoutes'

</script>

<template>
  <v-list
    class="p-4"
    density="compact"
    nav
  >
    <v-list-subheader>Home</v-list-subheader>
    <v-list-item
      v-for="({ path, name, meta }) of DashboardRoutes"
      :key="name"
      :title="name"
      :active="$route.path === path"
      :to="path"
    >
      <template #prepend>
        <svg
          class="mx-3 h-5"
          xmlns="http://www.w3.org/2000/svg"
          :viewBox="meta.svg?.viewBox"
          :fill="meta.svg?.fill"
          :stroke="meta.svg?.stroke"
          :stroke-width="meta.svg?.strokeWidth"
          :stroke-linecap="(meta.svg?.strokeLinecap as any)"
          :stroke-linejoin="(meta.svg?.strokeLinejoin as any)"
        >
          <path
            v-for="(svgPath, pathIdx) of (meta.svg)?.paths"
            :key="pathIdx"
            :d="svgPath"
          />
        </svg>
      </template>
    </v-list-item>
    <v-list-subheader>Gestão</v-list-subheader>
  </v-list>
</template>
../router/DashboardLayoutRoutes/dashboardRoutes
../router/dashboardRoutes
