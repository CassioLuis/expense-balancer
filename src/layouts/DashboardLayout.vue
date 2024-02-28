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
      <!-- <v-col
        xs="12"
        sm="12"
        md="8"
        lg="8"
        class="py-10 px-16"
      > -->
      <v-container class="py-16 px-16">
        <router-view />
      </v-container>
      <!-- </v-col> -->
    </v-main>
    <v-navigation-drawer
      location="right"
      v-model="isOpenSummary"
    >
      <!-- <v-col
        xs="12"
        sm="12"
        md="4"
        lg="4"
        class="p-0 h-full border"
      > -->
      <v-card class="p-16 h-full rounded-none">
        Summary
      </v-card>
      <!-- </v-col> -->
    </v-navigation-drawer>
  </v-layout>
</template>
