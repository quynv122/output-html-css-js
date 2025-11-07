<script setup lang="js">
import { ref } from 'vue';
    const num = ref(0)
</script>

<template>
    <h1>{{ num }}</h1>
    <p v-if= "num  >0 && num < 20">số đã lớn hơn 10. </p>
    <p v-else-if="num > 20 && num < 30">số đã lớn hơn 20.</p>
    <p v-else>số đã lớn hơn 30.</p>
    <button @click="num ++">
        + 1
    </button>   

</template>

<style scoped>

</style>