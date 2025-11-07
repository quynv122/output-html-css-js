<script setup lang="js">
    const products = [
  { name: "Tai nghe Bluetooth Sony WH-1000XM5", price: 8990000 },
  { name: "Điện thoại Samsung Galaxy S24 Ultra", price: 28990000 },
  { name: "Laptop MacBook Air M3 2025", price: 32990000 },
  { name: "Chuột Logitech MX Master 3S", price: 2590000 },
  { name: "Màn hình LG UltraGear 27GL850", price: 8990000 },
  { name: "Bàn phím Keychron K6 Pro", price: 2990000 },
  { name: "Máy ảnh Sony Alpha ZV-E10", price: 16990000 },
];
</script>

<template>
    <div class="container">
    <h2>V-for render danh sách sản phẩm</h2>
   <ul class="list">
    <li class="item" v-for="product in products">
        <p>Tên sản phẩm:  {{ product.name }} </p>
        <p>Giá bán: {{ product.price }}đ</p>

    </li>
   </ul>
    </div>
   

</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.list{
    list-style-type: none;
}
.item{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color:black;
    border-bottom: 1px solid white;
    padding: 0 20px;
}
</style>