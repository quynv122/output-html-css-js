<script setup lang="js">
import { ref } from 'vue';

const count = ref(0)

const increase = () => count.value++
const decrease = () => count.value--
const reset = () => count.value = 0
</script>

<template>

    <div class="container">
        <h1 
        style="font-size: 100px;"
        :class="{ textGreen: count > 0, textRed: count < 0 }"
            >{{ count }}</h1>
        <div class="actions">
            <button @click="decrease">Decrease</button>
            <button @click="reset">Reset</button>
            <button @click="increase">Increase</button>
        </div>
    </div>

</template>

<style scoped> 
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.actions{
    display: flex;
    gap: 20px;
}
.actions button{
    border-radius: 30px;
    padding: 15px 60px;
}
.textGreen{
    color: green;
}
.textRed{
    color: red;
}
</style>