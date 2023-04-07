<template>
  <h1 class="font-bold text-2xl text-gray-700">Products</h1>

  <!-- Product List -->
  <div
    class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 border"
  >
    <!-- Product Item -->
    <div
      v-for="product in this.products"
      :key="product.id"
      class="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
    >
      <a :href="`/admin/products/${product.id}`" class="block overflow-hidden">
        <img
          :src="`${this.baseIMG}${product.image}`"
          alt=""
          class="rounded-lg hover:scale-105 hover:rotate-1 transition-transform"
        />
      </a>
      <div class="p-4">
        <a class="text-xl font-bold" :href="`/admin/products/${product.id}`">
          {{ product.name }}
        </a>
        <h3 class="text-lg">
          <a :href="`/admin/products/${product.id}`">
            {{ product.description }}
          </a>
        </h3>
        <h5 class="font-bold">{{ product.price }}</h5>
      </div>
      <div class="flex justify-between py-3 px-4"></div>
    </div>
    <!--/ Product Item -->
    <!-- add product -->
    <a
      href="/admin/products/add"
      class="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
    >
      <a href="/admin/products/add" class="block p-4 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
          alt="Add Product"
          class="w-12 mx-auto mb-2"
        />
        <span class="text-gray-600">Add Product</span>
      </a>
    </a>
  </div>
  <!--/ Product List -->
</template>

<script>
import { useProductStore } from "@/stores/product";
export default {
  name: "AppOrdersTable",
  data() {
    return {
      products: [],
      baseIMG: "/src/assets",
    };
  },
  async mounted() {
    this.products = await useProductStore().getAllProducts();
  },
};
</script>
