<script setup lang="js">
import { defineEmits, defineProps } from 'vue';
const emit = defineEmits(['onDelete'])
const product = defineProps({ products: Array });

</script>

<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Color</th>
          <th>Last update</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price.toLocaleString("vi-VN") }} đ</td>
          <td>{{ product.color }}</td>
          <td>{{ product.updatedAt }}</td>
          <td>
            <button @click="$emit('onDelete', product.id)">
              Delete
            </button>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  background: #f7f8fa;
  min-height: 100vh;
}

table {
  border-collapse: collapse;
  width: 80%;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
}

thead {
  background: #007bff;
  color: white;
}

th,
td {
  text-align: left;
  padding: 14px 18px;
  border-bottom: 1px solid #e0e0e0;
}

th {
  font-size: 16px;
  letter-spacing: 0.5px;
}

td {
  font-size: 15px;
  color: #333;
}

tbody tr:hover {
  background: #d1ddf8;
  transition: 0.4s ease;
}

tbody tr:last-child td {
  border-bottom: none;
}
</style>
