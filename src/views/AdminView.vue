<template>
  <!-- component -->
  <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <aside
      class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500"
    >
      <div class="sidebar-header flex items-center justify-center py-4">
        <div class="inline-flex">
          <a href="#" class="inline-flex flex-row items-center">
            <svg
              class="w-10 h-10 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <span
              class="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase"
              >TK SHOP</span
            >
          </a>
        </div>
      </div>
      <div class="sidebar-content px-4 py-6">
        <ul class="flex flex-col w-full">
          <li class="my-px">
            <router-link
              :to="{ name: 'admin' }"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span class="ml-3">Dashboard</span>
            </router-link>
          </li>
          <li class="my-px">
            <span
              class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
              >Data</span
            >
          </li>
          <li class="my-px">
            <router-link
              :to="{ name: 'adminProducts' }"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </span>
              <span class="ml-3">Products</span>
            </router-link>
          </li>
          <li class="my-px">
            <router-link
              :to="{ name: 'adminOrders' }"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <span class="ml-3">Orders</span>
            </router-link>
          </li>
          <li class="my-px">
            <router-link
              :to="{ name: 'users' }"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span
                class="flex items-center justify-center text-lg text-gray-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span class="ml-3">Users</span>
            </router-link>
          </li>
          <li class="my-px">
            <span
              class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
              >Account</span
            >
          </li>
          <li class="my-px">
            <a
              @click="logout()"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span
                class="flex items-center justify-center text-lg text-red-400"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span class="ml-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <main
      class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
    >
      <header class="header bg-white shadow py-4 px-4">
        <div class="header-content flex items-center flex-row">
          <form action="#">
            <div class="hidden md:flex relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                id="search"
                type="text"
                name="search"
                class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
                placeholder="Search..."
              />
            </div>
            <div class="flex md:hidden">
              <a
                href="#"
                class="flex items-center justify-center h-10 w-10 border-transparent"
              >
                <svg
                  class="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
          </form>
          <div class="flex ml-auto">
            <a href="" class="flex flex-row items-center">
              <img
                src=""
                alt=""
                class="h-10 w-10 bg-gray-200 border rounded-full"
              />
              <span class="flex flex-col ml-2">
                <span
                  class="truncate w-20 font-semibold tracking-wide leading-none"
                  >{{ adminName }}</span
                >
                <span
                  class="truncate w-20 text-gray-500 text-xs leading-none mt-1"
                  >{{ adminRole }}</span
                >
              </span>
            </a>
          </div>
        </div>
      </header>

      <!-- MAIN CONTENT START -->
      <div class="main-content flex flex-col flex-grow p-4">
        <!-- HERE IS DYNAMIC CONTENT -->
        <app-dashboard v-if="isDashboard()"/>
        <app-users-table v-if="isUsers()" />
        <app-products-table v-if="isProducts()" />
        <app-orders-table v-if="isOrders()" />
        <app-user-info v-if="isUser()" />
        <app-order-details v-if="isOrder()" />
        <app-product-details v-if="isProduct()" />
        <app-add-product v-if="isAddProduct()" />
      </div>
      <!-- MAIN CONTENT END -->
      <footer class="footer px-4 py-6">
        <div class="footer-content">
          <p class="text-sm text-gray-600 text-center">
            © TK SHOP 2023. All rights reserved.
            <a href="">by Tommy Karjamenawi</a>
          </p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
import AppDashboard from "@/components/AppDashboard.vue";
import AppUsersTable from "@/components/AppUsersTable.vue";
import AppProductsTable from "@/components/AppProductsTable.vue";
import AppOrdersTable from "@/components/AppOrdersTable.vue";
import AppUserInfo from "../components/AppUserInfo.vue";
import AppOrderDetails from "../components/AppOrderDetails.vue";
import AppProductDetails from "../components/AppProductDetails.vue";
import AppAddProduct from "../components/AppAddProduct.vue";
export default {
  name: "AppAdminView",
  data() {
    return {
      totalUsers: 0,
      totalOrders: 0,
      totalProducts: 0,
      totalCustomers: 0,
      adminName: "",
      adminRole: "",
    };
  },
  components: {
    AppDashboard,
    AppUsersTable,
    AppProductsTable,
    AppOrdersTable,
    AppUserInfo,
    AppOrderDetails,
    AppProductDetails,
    AppAddProduct,
  },
  mounted() {
    this.useUserStore = useUserStore();
    // check for role
    if (this.useUserStore.role !== "1") {
      this.$router.push({ name: "home" });
    } else {
      this.adminName = this.useUserStore.full_name
      this.adminRole = this.useUserStore.role;
    }
  },
  methods: {
    loggedIn() {
      return useUserStore().loggedIn;
    },
    logout() {
      useUserStore().logout();
      this.$router.push({ name: "home" });
    },
    isDashboard() {
      return this.$route.name === "admin";
    },
    isUsers() {
      return this.$route.name === "users";
    },
    isProducts() {
      return this.$route.name === "adminProducts";
    },
    isOrders() {
      return this.$route.name === "adminOrders";
    },
    isOrder() {
      return this.$route.name === "adminOrderDetails";
    },
    isUser() {
      return this.$route.name === "user";
    },
    isProduct() {
      return this.$route.name === "adminProductDetails";
    },
    isAddProduct() {
      return this.$route.name === "adminProductsAdd";
    },
  },
};
</script>
