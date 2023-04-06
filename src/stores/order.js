import { defineStore } from "pinia";
import axios from "../axios-auth";

export const useOrderStore = defineStore("order", {
  state: () => ({
    orders: [], // orders is an array of orders
  }),
  getters: {
    getOrders: (state) => state.orders,
  },
  actions: {
    async fetchOrders(id) {
      try {
        
        const response = await axios.get("/orders?user_id=" + id);
        // console.log(response);
        this.orders = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchOrder(id) {
      try {
        const response = await axios.get(`/orders/${id}`);
        // console.log(response);
        // this.order = response.data;
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
