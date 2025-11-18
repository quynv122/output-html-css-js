<script setup lang="js">
import { inject } from 'vue';

const userInfo = inject("userInfo")
</script>


<template>
    <div class="container">
        <h1>User Info</h1>
        <ul>
            <li>{{ userInfo.name }}</li>
            <li>{{ userInfo.age }}</li>
            <li>{{ userInfo.address }}</li>
        </ul>
    </div>
</template>