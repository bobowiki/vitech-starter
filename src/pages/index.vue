<script setup lang="tsx">
import { RouterLink } from 'vue-router/auto'
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
      console.log(url, registration)
    }
  })
})
</script>

<template>
  <div></div>
</template>

<style></style>
<route lang="yaml">
meta:
  layout: default
</route>
<!-- <script lang="ts">
export default defineComponent({
  name: 'HomeIndex'
})
</script> -->
