<template>
  <main class="p-5">
    <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 class="text-3xl font-bold mb-6">
        Create a new product
      </h1>

      <!-- start user information editable -->
      <section class="p-6 bg-indigo-400">
        <fieldset
          class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-indigo-300"
        >
          <div class="space-y-2 col-span-full lg:col-span-1">
            <p class="font-medium">Product Information</p>

          </div>
          <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div class="col-span-full sm:col-span-3">
              <label for="name" class="text-sm">Name</label>
              <input
                v-model="this.product.name"
                id="name"
                type="text"
                placeholder="Name"
                class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div class="col-span-full sm:col-span-3">
              <label for="description" class="text-sm">Description</label>
              <input
                v-model="this.product.description"
                id="description"
                type="text"
                placeholder="Description"
                class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <!-- image field -->
            <div class="col-span-full">
              <label for="category" class="text-sm">Category</label>
              <!-- casual/formal -->
              <select
                v-model="this.product.category"
                id="category"
                class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              >
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
              </select>
            </div>
            <div class="col-span-full">
              <label for="brand" class="text-sm">Brand</label>
              <input
                v-model="this.product.brand"
                id="brand"
                type="text"
                placeholder="Brand"
                class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div class="col-span-full">
              <label for="price" class="text-sm">Price</label>
              <input
                v-model="this.product.price"
                id="price"
                type="text"
                placeholder="Price"
                class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div class="col-span-full">
              <div class="flex items-center space-x-2">
                <button
                  @click.prevent="addProduct()"
                  type="button"
                  class="px-4 py-2 border rounded-md border-gray-100 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-opacity-75 focus:ring-violet-400 hover:text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </section>
      <!-- end user information editable -->
    </div>
  </main>
</template>

<script>
import { useProductStore } from "@/stores/product";

export default {
  name: "AppProductAdd",
  data() {
    return {
      baseIMG: "/src/assets",
      product: {
        id: 0,
        name: "",
        description: "",
        image: "",
        category: "",
        brand: "",
        price: 0,
      },
    };
  },
  async mounted() {
  },
  methods: {
    async addProduct() {
      const productStore = useProductStore();

      if (this.product.category === "casual") {
        this.product.image = "/img/shop/image 5.png";
      } else if (this.product.category === "formal") {
        this.product.image = "/img/shop/Rectangle 38.png";
      }

      await productStore.addProduct(this.product);
      this.$router.push("/admin/products");
    },
  },
};
</script>
