<template>
  <div class="flex flex-col gap-6">
    <v-row dense>
      <v-col cols="12">
        <h1 class="text-2xl font-medium">
          <slot name="viewTitle" />
        </h1>
      </v-col>
    </v-row>
    <v-row
      dense
      class="flex justify-between gap-3"
    >
      <slot name="viewContent" />
    </v-row>
  </div>
</template>
