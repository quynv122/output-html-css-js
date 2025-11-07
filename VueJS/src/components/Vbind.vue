<script setup lang="js">
const alt = "đây là ảnh"
const src = "https://i.postimg.cc/9XG0HTMC/logo.png/"
const imageWidth = "70px"
const headerClassName = 'header header-mobile'
</script>

<template>
  <!--  v-bind gán class động cho header -->
  <header :class="headerClassName">
    <!-- v-bind gán thuộc tính html, style động cho img -->
    <img :alt="alt" :src="src" :style="{ width: imageWidth }" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
}
</style>
