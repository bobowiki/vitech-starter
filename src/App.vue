<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
  </div>
  <RouterView />
</template>

<style scoped></style>
