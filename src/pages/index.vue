<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
const msg = ref('hello world')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div ref="target">
    <div class="p-10">hello world</div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <h1>{{ msg }}</h1>
    <i-fa-solid-dice-five />
    <i-mdi-drama-masks></i-mdi-drama-masks>
    <i-mdi-account style="color: red; font-size: 1.5rem"></i-mdi-account>
    <HelloWorld msg="'hhhhh'"></HelloWorld>
    <UserComponent></UserComponent>
    <!-- <HelloWorld msg="13">11111</HelloWorld> -->
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="about">about</RouterLink>
    <p>x:{{ x }}</p>
    <p>y:{{ y }}</p>
    <p>isoutside：{{ isOutside }}</p>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <div class="i-solar:4k-bold"></div>
    <div class="i-solar:airbuds-case-bold-duotone" style="color: orange"></div>
  </div>
</template>

<style lang=""></style>
