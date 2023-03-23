<template>
  <main class="p-5">
    <div class="container mx-auto">
      <!-- xl:gap-10 p-2 lg:p-4  -->
      <h1 class="text-3xl font-bold mb-6 text-center">Products</h1>
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
          <a :href="`/products/${product.id}`" class="block overflow-hidden">
            <img
              :src="`${this.baseIMG}${product.image}`"
              alt=""
              class="rounded-lg hover:scale-105 hover:rotate-1 transition-transform"
            />
          </a>
          <div class="p-4">
            <h3 class="text-lg">
              <a :href="`/products/${product.id}`">
                {{ product.description }}
              </a>
            </h3>
            <h5 class="font-bold">{{ product.price }}</h5>
          </div>
          <div class="flex justify-between py-3 px-4">
            <button
              class="w-10 h-10 rounded-full border border-1 border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              @click.prevent="
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.image,
                })
              "
              class="btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <!--/ Product Item -->
      </div>
      <!--/ Product List -->
    </div>
  </main>
</template>

<script>
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";

export default {
  name: "ProductsView",
  data() {
    return {
      baseIMG: "/src/assets",
      products: [],
      selectedProduct: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
        image: "",
      },
    };
  },
  async created() {
    const productStore = useProductStore();
    // fetch products
    await productStore.fetchProducts();
    this.products = productStore.getProducts;
  },
  methods: {
    addToCart(selectedProduct) {
      const cartStore = useCartStore();
      cartStore.addToCart(selectedProduct);
    },
  },
};
</script>
