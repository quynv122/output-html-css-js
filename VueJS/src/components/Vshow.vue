<script setup>
import { ref } from "vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";

const theme = ref("light");
</script>

<template>
  <div class="container">
    <div class="icon">

    <!-- Vshow ẩn hiện icon  -->
      <SunIcon v-show="theme === 'light'" />
      <MoonIcon v-show="theme === 'dark'" />
    </div>


    <button
      @click="theme = (theme === 'light' ? 'dark' : 'light')"
      class="button"
    >
      {{ theme === "light" ? "Chuyển sang Dark 🌙" : "Chuyển sang Light ☀️" }}
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 200px;
  height: 200px;
}
button {
  margin-top: 50px;
  transition: 0.2s;
  padding: 20px 40px;
  border-radius: 30px;
}
</style>
