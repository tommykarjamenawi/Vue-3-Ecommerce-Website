<template>
  <nav class="bg-gray-900 text-gray-400">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <!------------------ Primary Buttons-------------------->
        <div class="hidden md:flex flex items-center space-x-1">
          <a href="#" class="py-5 px-2 hover:text-gray-600">Feature</a>
          <a href="#" class="py-5 px-2 hover:text-gray-600">Pricing</a>
        </div>

        <!------------------ Company Logo-------------------->
        <div>
          <a href="#" class="flex items-center py-5 px-2 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span class="font-extrabold uppercase text-xl">TK SHOP</span>
          </a>
        </div>

        <!------------------ Secondary Buttons-------------------->
        <div class="hidden md:flex flex items-center space-x-1">
          <a href="#" class="py-5 px-3 hover:text-gray-600">Login</a>
          <a
            href="#"
            class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded shadow duration-300"
          >
            Signup
          </a>
        </div>

        <!------------------ Mobile Buttons-------------------->

        <div class="md:hidden flex items-center">
          <button onclick="{}" class="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--------------------- Mobile Menu --------------------->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
        ><i class="fas fa-home mr-2"></i>Home</a
      >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
        ><i class="fas fa-shopping-bag mr-2"></i>Products</a
      >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
        ><i class="fas fa-shopping-cart mr-2"></i>Cart</a
      >
    </div>
  </nav>
</template>

<script></script>
