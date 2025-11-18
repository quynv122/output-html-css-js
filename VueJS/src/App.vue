<script setup>
import VBind from "./components/Vbind.vue";
import Vfor from "./components/Vfor.vue";
import Vif from "./components/Vif.vue";
import VShow from "./components/VShow.vue";
import VueComputed from "./components/VueComputed.vue";
import VueEvents from "./components/VueEvents.vue";
import VueForm from "./components/VueForm.vue";
import VuePropEmit from "./components/VuePropEmit.vue";
import VueProvideInject from "./components/VueProvideInject.vue";
import { RouterView, RouterLink, useRouter  } from "vue-router";
import { provide } from "vue";
import VueTransition from "./components/VueTransition.vue";

const router = useRouter()
// Prop for <VuePropEmit/>
const products = [
  {
    name: "iPhone 15 Pro",
    price: 32990000,
    color: "Titan Gray",
    updatedAt: "2025-11-01",
    id: "823767224",
  },
  {
    name: "iPhone 15 Pro Max",
    price: 36990000,
    color: "Natural Titanium",
    updatedAt: "2025-11-02",
    id: "12321",
  },
  {
    name: "iPhone 15",
    price: 24990000,
    color: "Pink",
    updatedAt: "2025-11-03",
    id: "123123",
  },
  {
    name: "iPhone 15 Plus",
    price: 26990000,
    color: "Blue",
    updatedAt: "2025-11-04",
    id: "48y9834534534218",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 30990000,
    color: "Titan Gray",
    updatedAt: "2025-11-05",
    id: "4545234",
  },
  {
    name: "Samsung Galaxy S24+",
    price: 25990000,
    color: "Violet",
    updatedAt: "2025-11-06",
    id: "234523452345",
  },
  {
    name: "Samsung Galaxy Z Fold6",
    price: 42990000,
    color: "Phantom Black",
    updatedAt: "2025-11-07",
    id: "123445674",
  },
  {
    name: "Samsung Galaxy Z Flip6",
    price: 26990000,
    color: "Mint",
    updatedAt: "2025-11-08",
    id: "7487437",
  },
  {
    name: "Google Pixel 9 Pro",
    price: 25990000,
    color: "Obsidian",
    updatedAt: "2025-11-09",
    id: "812384761",
  },
  {
    name: "Google Pixel 9",
    price: 19990000,
    color: "Porcelain",
    updatedAt: "2025-11-10",
    id: "98342587234",
  },
];

const handleDeleteProduct = (id) => {
  console.log('xóa sản phẩm có id:', id);
};

const userInfo = {
  name: 'Nguyễn Văn Quý',
  age: 23,
  address: 'Hà Nội'
}

provide('userInfo',userInfo)


</script>

<template>
   <nav>
    <RouterLink to="/">Home</RouterLink> 
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/price">Price</RouterLink>
  </nav>
  <VueTransition/>
  <RouterView />

</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}
</style>
    