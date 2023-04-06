<template>
  <!-- navbar -->
  <app-nav-bar />

  <!-- router -->
  <RouterView />
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";
import { useUserStore } from "@/stores/user";
import { useCartStore } from "./stores/cart";
import { useProductStore } from "./stores/product";

export default {
  name: "App",
  components: {
    AppNavBar,
  },
  data() {
    return {
      userStore: null,
      useCartStore: null,
      useProductStore: null,
    };
  },
  mounted() {
    // auto login
    this.userStore = useUserStore();
    this.userStore.autoLogin();

    // load cart from local storage
    this.useCartStore = useCartStore();
    this.useCartStore.loadCart();

    // load orders from local storage if user is logged in
    if (this.userStore.isLoggedIn) {
      this.userStore.loadOrders();
    }

    // initialize product store
    this.useProductStore = useProductStore();
  },
};
</script>
