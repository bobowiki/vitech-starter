<script setup lang="tsx">
import { RouterLink } from 'vue-router/auto'
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    // onNeedRefresh() {
    //   console.log('need fresh')
    // },
    onRegisteredSW(url, registration) {
      setInterval(() => {
        registration && registration.update()
      })
      console.log(url, registration)
    }
  })
})
const msg = ref('hello world')
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
// 报错一个setup 不允许有多个导出
// export default defineComponent({
//   name: 'HomeIndex'
// })
// defineOptions({
//   name: 'HomeIndex'
// })
// jsx 报错需要进行处理哦，在tsconfig.node.json 中加入 jsx: "preserve"
// defineRender(() => {
//   return <div>hello 123</div>
// })
const handleClick = (num: number) => {
  console.log(num)
}
</script>

<template>
  <div ref="target">
    <UserChild @click-count="handleClick"></UserChild>
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
    <div
      class="i-twem oji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
    />
    <div class="i-solar:4k-bold"></div>
    <div class="i-solar:airbuds-case-bold-duotone" style="color: orange"></div>
    <ReloadPropmt />
    hello world yikai hhhhh
  </div>
</template>

<style lang=""></style>
<route lang="yaml">
meta:
  layout: default
</route>
<!-- <script lang="ts">
export default defineComponent({
  name: 'HomeIndex'
})
</script> -->
