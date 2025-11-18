<script setup>
import { ref } from "vue";
const show = ref(true);
</script>

<template>
  <button @click="show = !show">Vue Transition</button>

  <transition name="fade">
    <div class="container" v-show="show">
      <div class="popup">
        <h1>Notifications</h1>
        <button @click="show = false">Close</button>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.container {
  position: relative;
}
.popup{
 position: absolute;
 top:200px;   
 left: calc(50% - 150px);
 width: 300px;
 background-color: rgb(86, 97, 93);

}

</style>
