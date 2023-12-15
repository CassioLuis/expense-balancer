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
        <v-card-title
          class="mb-6"
        >
          <div>
            <h3 class="mb-0 text-center">
              Login
            </h3>
          </div>
        </v-card-title>
        <router-view />
      </v-card>
    </v-col>
  </v-container>
</template>
