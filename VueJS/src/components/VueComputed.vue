<script setup>
import { ref, computed } from "vue"

const price = ref(20000000)
const tax = ref(0.1)

const total = computed(() => {
  return price.value + price.value * tax.value
})
</script>

<template>
  <p>Giá: {{ price }}đ</p>
  <p>Thuế: {{ tax * 100 }}%</p>
  <p><strong>Tổng: {{ total.toLocaleString() }}đ</strong></p>
</template>
