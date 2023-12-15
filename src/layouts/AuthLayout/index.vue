<template>
  <v-container class="flex justify-center items-center h-full">
    <v-col
      sm="9"
      md="6"
      lg="5"
    >
      <v-card
        class="p-10 border shadow-sm"
        elevation="0"
      >
        <v-card-title
          class="mb-6"
        >
          <div>
            <h3 class="headline mb-0 text-center">
              Login
            </h3>
          </div>
        </v-card-title>
        <router-view />
      </v-card>
    </v-col>
  </v-container>
</template>
