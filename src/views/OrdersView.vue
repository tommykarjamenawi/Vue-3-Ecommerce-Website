<template>
  <main class="p-5">
    <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 class="text-3xl font-bold mb-6">My Orders</h1>

      <div class="bg-white p-3 rounded-md shadow-md">
        <table class="table table-auto w-full">
          <thead class="border-b-2">
            <tr class="text-left">
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th class="w-64">Actions</th>
            </tr>
          </thead>
          <tbody v-for="order in this.orders" :key="order.id">
            <tr class="border-b">
              <td>
                <a
                  :href="`/orders/${order.id}`"
                  class="text-purple-600 hover:text-purple-500"
                >
                  #{{ order.id }}
                </a>
              </td>
              <td>May 3, 07:28PM</td>
              <td>
                <span class="bg-emerald-500 text-white p-1 rounded">Paid</span>
              </td>
              <td class="flex gap-3">
                <button
                  class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 py-1 px-2 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Invoice
                </button>
                <button class="btn-primary py-1 px-2 flex items-center">
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
                  Pay
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import { useOrderStore } from "@/stores/order";
import { useUserStore } from "@/stores/user";

export default {
  name: "OrdersView",
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    const userStore = useUserStore();
    const orderStore = useOrderStore();
    await orderStore.fetchOrders(userStore.id);
    this.orders = orderStore.getOrders;
  },
};
</script>
