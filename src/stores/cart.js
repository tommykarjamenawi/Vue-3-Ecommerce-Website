import { defineStore } from "pinia";
import axios from "../axios-auth";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    cartCount: 0,
  }),
  getters: {
    getCart: (state) => state.cart,
    getCartCount: (state) => state.cartCount,
  },
  computed: {
    // calculate total number of items in cart
    cartCount() {
      return this.cart.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
    // calculate total price of items in cart
    cartTotal() {
      return this.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
  actions: {
    addToCart(product) {
      // product contains: id, name, price, quantity, image
      // check if product already exists in cart and update quantity
      const productExists = this.cart.find((p) => p.id === product.id);

      if (productExists) {
        // update quantity
        productExists.quantity += product.quantity;
      } else {
        // add to cart
        this.cart.push(product);
      }
      // save cart to local storage
      this.saveCart();

      console.log(this.cart);
    },
    removeFromCart(product) {
      // remove product from cart
      this.cart = this.cart.filter((p) => p.id !== product.id);
      // save cart to local storage
      this.saveCart();

      console.log(this.cart);
    },
    updateQuantity(product, quantity) {
      // update quantity of product in cart
      const productExists = this.cart.find((p) => p.id === product.id);
      productExists.quantity = quantity;
      // save cart to local storage
      this.saveCart();

      console.log("update quantity is: " + quantity);
    },
    clearCart() {
      // clear cart
      this.cart = [];
      // save cart to local storage
      this.saveCart();

      console.log(this.cart);
    },
    checkout() {
      // checkout cart
      return new Promise((resolve, reject) => {
        axios
          .post("/orders", {
            products: this.cart,
          })
          .then((res) => {
            console.log(res.data);
            this.clearCart();
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    // load cart from local storage
    loadCart() {
      const cart = localStorage.getItem("cart");
      if (cart) {
        this.cart = JSON.parse(cart);
      }
    },
    // save cart to local storage
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});
