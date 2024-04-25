<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
const msg = ref('hello world')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div ref="target">
    <div class="p-10">hello world</div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <h1>{{ msg }}</h1>
    <!-- <div msg="hello">hello</div> -->
    <HelloWorld msg="13">11111</HelloWorld>

    <RouterLink to="/">home</RouterLink>
    <RouterLink to="about">about</RouterLink>
    <p>x:{{ x }}</p>
    <p>y:{{ y }}</p>
    <p>isoutside：{{ isOutside }}</p>
  </div>
</template>

<style lang=""></style>
