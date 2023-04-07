<template>
  <h1 class="font-bold text-2xl text-gray-700">Products</h1>

  <div
    class="flex flex-col flex-grow border-4 border-gray-400 border-dashed rounded mt-4"
  >
    <!-- stats start -->
    <div
      class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 pb-6"
    >
      <!-- start cards -->
      <router-link
        :to="{ name: 'adminProductDetails', params: { id: product.id } }"
        v-for="product in products"
        :key="product.id"
        class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-indigo-600 dark:text-gray-100"
      >
        <div
          class="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            class="h-9 w-9 dark:text-gray-800"
          >
            <polygon
              points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"
            ></polygon>
            <path
              d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"
            ></path>
            <path
              d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <p class="text-3xl font-semibold leading-none">
            product #{{ product.id }}
          </p>
          <p class="capitalize">ordered by: {{ product.name }}</p>
        </div>
      </router-link>
    </div>
    <!-- stats end -->
  </div>
</template>

<script>
import { useProductStore } from "@/stores/product";
export default {
  name: "AppOrdersTable",
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await useProductStore().getAllProducts();
  },
};
</script>