<template>
  <main class="p-5">
    <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 class="text-3xl font-bold mb-6">Your Cart Items</h1>

      <div class="bg-white p-4 rounded-lg shadow">
        <!-- Product Items -->
        <div>
          <!-- Product Item -->
          <div
            v-for="product in this.cart"
            :key="product.id"
            class="flex flex-col sm:flex-row items-center gap-4"
          >
            <img :src="`${this.baseIMG}${product.image}`" class="w-36" alt="" />
            <div class="flex flex-col justify-between">
              <div class="flex justify-between mb-3 gap-2">
                <h3>
                  {{ product.name }}
                </h3>
                <span class="text-lg font-semibold">
                  ${{ product.price * product.quantity }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  Qty:
                  <select
                    v-model="product.quantity"
                    class="ml-2 border border-gray-300 rounded-md px-3 py-3"
                    @change="updateQuantity(product, $event.target.value)"
                  >
                    <option
                      v-for="quantity in this.quantities"
                      :key="quantity"
                      :value="quantity"
                    >
                      {{ quantity }}
                    </option>
                  </select>
                </div>
                <a href="#" class="text-purple-600 hover:text-purple-500"
                  >Remove</a
                >
              </div>
            </div>
          </div>
          <!--/ Product Item -->
          <hr class="my-5" />
        </div>
        <!--/ Product Items -->

        <div class="border-t border-gray-300 pt-4">
          <!-- clear cart button -->
          <button
            @click.prevent="clearCart()"
            class="btn-primary w-50 py-3 text-lg"
          >
            Clear Cart
          </button>
          <div class="flex justify-between">
            <span class="font-semibold">Subtotal</span>
            <span class="text-xl" :value="total.toFixed(2)"
              >${{ total.toFixed(2) }}</span
            >
          </div>
          <p class="text-gray-500 mb-6">
            Shipping and taxes calculated at checkout.
          </p>

          <button
            class="btn-primary w-full py-3 text-lg"
            @click.prevent="checkout()"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCartStore } from "@/stores/cart";

export default {
  name: "CartView",
  data() {
    return {
      baseIMG: "/src/assets",
      cart: [],
      quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      total: 0,
    };
  },
  async created() {
    this.getCartData();
  },
  methods: {
    removeFromCart(product) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(product);
    },
    updateQuantity(product, quantity) {
      const cartStore = useCartStore();
      cartStore.updateQuantity(product, quantity);

      this.getCartData();
    },
    clearCart() {
      const cartStore = useCartStore();
      cartStore.clearCart();

      this.cart = [];
    },
    checkout() {
      const cartStore = useCartStore();
      cartStore.checkout();
      // go to homepage
      this.$router.push("/");
    },
    totalPrice() {
      // loop through cart and add up the total
      this.total = 0;
      this.cart.forEach((product) => {
        this.total += product.price * product.quantity;
      });
    },
    getCartData() {
      // get cart from store
      const cartStore = useCartStore();
      this.cart = cartStore.cart;
      // console.log(this.cart);
      this.totalPrice();
    },
  },
};
</script>
