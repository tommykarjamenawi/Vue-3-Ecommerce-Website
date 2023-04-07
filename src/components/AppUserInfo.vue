<template>
  <h1 class="font-bold text-2xl text-gray-700">User Details #{{ user.id }}</h1>

  <div
    class="flex flex-col flex-grow border-4 border-gray-400 border-dashed rounded mt-4"
  >
    <!-- start user information editable -->
    <section class="p-6 bg-indigo-400">
      <fieldset
        class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-indigo-300"
      >
        <div class="space-y-2 col-span-full lg:col-span-1">
          <p class="font-medium">Personal Inormation</p>
          <p class="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            fuga autem eum!
          </p>
        </div>
        <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div class="col-span-full sm:col-span-3">
            <label for="firstname" class="text-sm">Full name</label>
            <input
              v-model="this.user.full_name"
              id="full_name"
              type="text"
              placeholder="Full name"
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="lastname" class="text-sm">Email</label>
            <input
              v-model="this.user.email"
              id="email"
              type="email"
              placeholder="Email"
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full">
            <label for="address" class="text-sm">Address</label>
            <input
              v-model="this.user.address"
              id="address"
              type="text"
              placeholder="Address"
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full">
            <div class="flex items-center space-x-2">
              <button
                @click.prevent="updateUser()"
                type="button"
                class="px-4 py-2 border rounded-md border-gray-100 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-opacity-75 focus:ring-violet-400 hover:text-white"
              >
                Update
              </button>
              <!-- delete user button -->
              <button
                @click.prevent="deleteUser()"
                type="button"
                class="px-4 py-2 border rounded-md border-gray-100 bg-red-300 hover:bg-red-400 focus:outline-none focus:ring focus:ring-opacity-75 focus:ring-violet-400 hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </section>
    <!-- end user information editable -->
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  name: "AppUserInfo",
  data() {
    return {
      user: {
        id: 0,
        full_name: "",
        email: "",
        password: "",
        address: "",
        role: "",
        image: "",
      },
    };
  },
  async mounted() {
    this.user = await useUserStore().getUser(this.$route.params.id);
  },
  methods: {
    async updateUser() {
      const message = await useUserStore().updateUser(this.user);
      console.log(message);
      this.$router.push("/admin/users");
    },
    async deleteUser() {
      await useUserStore().deleteUser(this.user.id);
      this.$router.push("/admin/users");
    },
  },
};
</script>
