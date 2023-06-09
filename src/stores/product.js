import { defineStore } from "pinia";
import axios from "../axios-auth";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    product: {
      id: 0,
      name: "",
      description: "",
      image: "",
      category: "",
      brand: "",
      price: 0,
    },
  }),
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("/products");
        console.log(response);
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProduct(id) {
      try {
        const response = await axios.get(`/products/${id}`);
        console.log(response);
        this.product = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllProducts() {
      try {
        const response = await axios.get("/products");
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getProductDetails(id) {
      try {
        const response = await axios.get(`/products/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct(product) {
      try {
        const response = await axios.put(`/products/${product.id}`, product);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        const response = await axios.delete(`/products/${id}`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async addProduct(product) {
      try {
        const response = await axios.post("/products", product);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
