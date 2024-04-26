<template lang="">
  <div>hello world component</div>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
<style scoped></style>
