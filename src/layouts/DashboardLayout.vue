<script setup lang="ts">
import {SideMenu, ProfileMenu, AppBar } from '@/components'
import { inject } from 'vue'


const { isOpen }: any = inject('useSidebar')

</script>

<template>
  <v-layout>
    <v-navigation-drawer
      v-model="isOpen"
      floating
    >
      <ProfileMenu />

      <v-divider class="mx-4" />

      <SideMenu />
    </v-navigation-drawer>

    <AppBar />

    <v-main class="d-flex align-center justify-center h-screen">
      <router-view />
    </v-main>
  </v-layout>
</template>
