<template lang="">
  <div>hello world</div>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
<style scoped></style>
