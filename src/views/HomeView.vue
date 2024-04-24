<script setup lang="ts">
// 最新的vue组件不需要进行export 组件导出了
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="main">
    <HelloWorld :msg="'hello'" />
  </div>
</template>
<style lang="scss">
.main {
  color: red;
}
</style>
