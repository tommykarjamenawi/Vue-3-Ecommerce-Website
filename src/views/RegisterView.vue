<template>
  <main class="p-5">
    <form action="" method="post" class="w-[400px] mx-auto p-6 my-16">
      <h2 class="text-2xl font-semibold text-center mb-4">Create an account</h2>
      <p class="text-center text-gray-500 mb-3">
        or
        <router-link
          :to="{ name: 'login' }"
          class="text-sm text-purple-700 hover:text-purple-600"
          >login with existing account</router-link
        >
      </p>
      <div class="mb-4">
        <input
          v-model="this.user.full_name"
          placeholder="Your name"
          type="text"
          name="name"
          class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="this.user.email"
          placeholder="Your Email"
          type="email"
          name="email"
          class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="this.user.password"
          placeholder="Password"
          type="password"
          name="password"
          class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="repeatPassword"
          placeholder="Repeat Password"
          type="password"
          name="password"
          class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
        />
      </div>

      <button
        @click.prevent="register()"
        class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full"
      >
        Signup
      </button>
    </form>
  </main>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        full_name: "",
        email: "",
        password: "",
      },
      repeatPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    register() {
      if (this.user.password !== this.repeatPassword) {
        this.errorMessage = "Passwords mus tbe the same";
        return;
      }
      const userStore = useUserStore();
      userStore
        .register(this.user)
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
        });
    },
  },
};
</script>
