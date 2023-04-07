<template>
  <main class="p-5">
    <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 class="text-3xl font-bold mb-6">Order #{{ order_id }} Details</h1>

      <div class="bg-white p-3 rounded-md shadow-md">
        <div>
          <table class="table-sm">
            <tbody>
              <tr>
                <td class="font-bold">Order #</td>
                <td>{{ order_id }}</td>
              </tr>
              <tr>
                <td class="font-bold">Status</td>
                <td>
                  <span class="bg-emerald-500 text-white p-1 rounded"
                    >Paid</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="my-5" />

        <!-- Order Items -->
        <div v-for="orderItem in this.orderItems" :key="orderItem.id">
          <!-- Product Item -->
          <div class="flex gap-6">
            <div class="w-16 h-16 flex items-center border border-gray-300">
              <img :src="`${this.baseIMG}${orderItem.image}`" alt="" />
            </div>
            <div class="flex-1 flex flex-col justify-between pb-3">
              <h3 class="text-ellipsis mb-4">
                {{ orderItem.name }}
              </h3>
            </div>
            <div class="flex flex-col justify-between items-end pb-3 w-32">
              <div class="text-lg mb-4">Amount: {{ orderItem.quantity }}</div>
            </div>
          </div>
          <!--/ Product Item -->
          <hr class="my-2" />
        </div>
        <!--/ Order Items -->

        <!-- <div class="border-t border-gray-300 pt-4">
          <button
            type="submit"
            class="btn-primary bg-purple-200 flex justify-center items-center w-full py-3 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Proceed to Pay
          </button>
        </div> -->
      </div>
    </div>
  </main>
</template>

<script>
import { useOrderStore } from "@/stores/order";

export default {
  name: "AppOrderDetails",
  data() {
    return {
      baseIMG: "/src/assets",
      orderItems: [],
      order_id: this.$route.params.id,
    };
  },
  async mounted() {
    const orderStore = useOrderStore();
    this.orderItems = await orderStore.fetchOrder(this.order_id);
    console.log(this.orderItems);
  },
};
</script>
