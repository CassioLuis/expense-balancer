<template>
  <v-container class="flex justify-center items-center h-screen">
    <v-col
      class="p-0"
      xs="12"
      sm="8"
      md="5"
      lg="4"
      xl="3"
      xxl="2"
    >
      <v-card
        class="p-10 border shadow-sm"
        elevation="0"
      >
        <router-view />
      </v-card>
    </v-col>
  </v-container>
</template>
