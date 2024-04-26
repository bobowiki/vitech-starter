<template>
  <div>
    <button @click="handleClick">click me</button>
  </div>
</template>
<script setup lang="ts">
const num = ref(0)
// const emits = defineEmits<{ (e: 'clickCount', num: number): void }>()
const emits = defineEmits<{ clickCount: [num: number] }>()
const handleClick = () => {
  console.log('click')
  emits('clickCount', ++num.value)
}
</script>
<style lang="ts"></style>
