<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div>hello world</div>
  <h1 className="text-3xl font-bold underline">hello tailwindcss</h1>
  <HelloWorld msg="123">11111</HelloWorld>
  <RouterLink to="/">home</RouterLink>
  <RouterLink to="about">about</RouterLink>
</template>

<style scoped></style>
