<script setup lang="ts">
import {SideMenu, ProfileMenu, AppBar } from '@/components'
import { inject } from 'vue'


const { isOpen }: any = inject('useSidebar')
const { isOpenSummary }: any = inject('useSummary')

</script>

<template>
  <v-layout>
    <v-navigation-drawer
      v-model="isOpen"
    >
      <ProfileMenu />

      <v-divider class="mx-4" />

      <SideMenu />
    </v-navigation-drawer>

    <AppBar />

    <v-main class="flex h-screen w-screen overflow-y-auto">
      <v-container class="py-16 lg:px-16 md:px-8 sm:px-4">
        <router-view />
      </v-container>
    </v-main>
    <v-navigation-drawer
      :width="350"
      location="right"
      v-model="isOpenSummary"
    >
      <v-card class="p-16 h-full rounded-none">
        Summary
      </v-card>
    </v-navigation-drawer>
  </v-layout>
</template>
