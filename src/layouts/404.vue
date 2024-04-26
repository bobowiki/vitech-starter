<template>
  <div><h1>404</h1></div>
  <router-view></router-view>
  <button @click="router.back()">返回</button>
</template>
<script setup lang="ts">
const router = useRouter()
</script>
<style></style>
