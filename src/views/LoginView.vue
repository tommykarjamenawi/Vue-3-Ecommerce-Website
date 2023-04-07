<template>
  <main class="p-5">
    <form action="" method="post" class="w-[400px] mx-auto p-6 my-16">
      <h2 class="text-2xl font-semibold text-center mb-5">
        Login to your account
      </h2>
      <p class="text-center text-gray-500 mb-6">
        or
        <router-link
          :to="{ name: 'register' }"
          class="text-sm text-purple-700 hover:text-purple-600"
          >create new account</router-link
        >
      </p>
      <div class="mb-4">
        <input
          id="loginEmail"
          type="email"
          name="email"
          v-model="email"
          placeholder="Your email address"
          class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
        />
      </div>
      <div class="mb-4">
        <input
          id="loginPassword"
          type="password"
          name="password"
          v-model="password"
          placeholder="Your password"
          class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
        />
      </div>

      <div class="flex justify-between items-center mb-5">
        <div class="flex items-center">
          <input
            id="loginRememberMe"
            type="checkbox"
            class="mr-3 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
          />
          <label for="loginRememberMe">Remember Me</label>
        </div>
        <router-link
          :to="{ name: 'password-reset' }"
          class="text-sm text-purple-700 hover:text-purple-600"
          >Forgot Password?</router-link
        >
      </div>
      <button
        @click.prevent="login"
        class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full"
      >
        Login
      </button>
    </form>
  </main>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      console.log("sent login request: " + this.email + " " + this.password);
      const userStore = useUserStore();
      userStore
        .login(this.email, this.password)
        .then(() => {
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },
  },
};
</script>
