<template>
  <!-- navbar -->
  <header
    class="sticky top-0 flex justify-between bg-slate-800 shadow-md text-white items-center"
  >
    <div class="font-serif">
      <router-link :to="{ name: 'home' }" class="block text-2xl font-bold pl-5">
        TK SHOP
      </router-link>
    </div>
    <div
      class="block fixed z-10 top-0 left-0 bottom-0 height h-full w-[220px] transition-all bg-slate-900 md:hidden"
      v-if="showMobileDropdown"
    >
      <ul>
        <li>
          <router-link
            :to="{ name: 'home' }"
            href="/src/index.html"
            class="block py-2 px-3 transition-colors hover:bg-slate-800"
            >Home mobile</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'products' }"
            href="#"
            class="block py-2 px-3 transition-colors hover:bg-slate-800"
            >Products mobile</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'about' }"
            href="#"
            class="block py-2 px-3 transition-colors hover:bg-slate-800"
            >About mobile</router-link
          >
        </li>
      </ul>
      <ul>
        <li>
          <router-link
            :to="{ name: 'cart' }"
            class="flex items-center py-2 px-3 transition-colors hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2 -mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart mobile
          </router-link>
        </li>
        <li class="relative">
          <a
            href="#"
            class="flex justify-between items-center py-2 px-3 hover:bg-slate-800"
          >
            <span class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Account mobile
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <ul class="z-10 right-0 bg-slate-800 py-2">
            <li>
              <router-link
                :to="{ name: 'profile' }"
                class="flex items-center px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                My Profile mobile
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'watchlist' }"
                class="flex items-center px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
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
                Watchlist mobile
              </router-link>
            </li>
            <li class="hover:bg-slate-900">
              <router-link
                :to="{ name: 'orders' }"
                class="flex items-center px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                My Orders mobile
              </router-link>
            </li>
            <li class="hover:bg-slate-900">
              <a
                @click.prevent="logout"
                class="flex items-center px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout mobile
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/src/login.html"
            class="flex items-center py-2 px-3 transition-colors hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login mobile
          </a>
        </li>
        <li class="px-3 py-3">
          <router-link
            :to="{ name: 'register' }"
            class="block text-center text-white bg-emerald-600 py-2 px-3 rounded shadow-md hover:bg-emerald-700 active:bg-emerald-800 transition-colors w-full"
          >
            Register now mobile
          </router-link>
        </li>
      </ul>
    </div>
    <!-- PC navbar -->
    <nav class="hidden md:block">
      <ul class="grid grid-flow-col items-center">
        <li>
          <router-link
            :to="{ name: 'home' }"
            class="block px-3 py-2 hover:bg-slate-900"
            ><i class="fas fa-home mr-2"></i>Home PC</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'products' }"
            class="block px-3 py-2 hover:bg-slate-900"
            ><i class="fa-solid fa-layer-group mr-2"></i>Products
            PC</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'about' }"
            class="block px-3 py-2 hover:bg-slate-900"
            ><i class="fa-sharp fa-solid fa-circle-info mr-2"></i>About
            PC</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="hidden md:block">
      <ul class="grid grid-flow-col items-center">
        <li>
          <router-link
            :to="{ name: 'cart' }"
            class="inline-flex items-center px-3 py-2 hover:bg-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart PC
          </router-link>
        </li>
        <!-- My Account -->
        <li class="relative">
          <a
            href="#"
            class="flex items-center px-3 py-2 pr-5 hover:bg-slate-900"
            @click.prevent="toggleDropdown"
          >
            <span class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Account PC
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <ul
            class="absolute z-10 right-0 bg-slate-800 py-2 w-48"
            v-if="showDropdown"
          >
            <li>
              <router-link
                :to="{ name: 'profile' }"
                class="flex px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                My Profile PC
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'watchlist' }"
                class="flex items-center px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
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
                Watchlist PC
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'orders' }"
                class="flex px-3 py-2 hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                My Orders PC
              </router-link>
            </li>
            <li>
              <a
                class="flex px-3 py-2 hover:bg-slate-900"
                @click.prevent="logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout PC
              </a>
            </li>
          </ul>
        </li>
        <li>
          <router-link
            :to="{ name: 'login' }"
            class="flex items-center px-3 py-2 hover:bg-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login PC
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'register' }"
            class="inline-flex items-center text-white bg-emerald-600 py-2 px-3 m-1 rounded shadow-md hover:bg-emerald-700 active:bg-emerald-800 transition-colors mx-5"
          >
            Register now PC
          </router-link>
        </li>
      </ul>
    </nav>
    <button class="p-4 block md:hidden" @click.prevent="toggleMobileDropdown">
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </header>
</template>

<script>
import { useUserStore } from '@/stores/user'
export default {
  name: "AppNavBar",
  data() {
    return {
      hamburger: false,
      showDropdown: false,
      showMobileDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      if (this.showDropdown) {
        this.showDropdown = false;
      } else {
        this.showDropdown = true;
      }
    },
    toggleMobileDropdown() {
      if (this.showMobileDropdown) {
        this.showMobileDropdown = false;
      } else {
        this.showMobileDropdown = true;
      }
    },
    logout() {
      useUserStore.logout();
    },
  },
};
</script>
