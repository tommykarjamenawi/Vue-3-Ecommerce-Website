<template>
  <h1 class="font-bold text-2xl text-gray-700">Users</h1>

  <div
    class="flex flex-col flex-grow border-4 border-gray-400 border-dashed rounded mt-4"
  >
    <!-- start table -->
    <div class="overflow-x-auto border-4">
      <!-- add user button -->
      <div class="flex items-center">
        <button
          @click.prevent="addUser()"
          type="button"
          class="px-4 py-2 border rounded-md border-gray-100 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-opacity-75 focus:ring-violet-400 hover:text-white"
        >
          Add User +
        </button>
      </div>
      <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <tr>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              #
            </th>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Full Name
            </th>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Email
            </th>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Address
            </th>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Role
            </th>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Image
            </th>
            <th
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
            >
              Actions
            </th>
            <th class="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody
          class="divide-y divide-gray-200"
          v-for="user in this.users"
          :key="user.id"
        >
          <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {{ user.id }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {{ user.full_name }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
              {{ user.email }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
              {{ user.address }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
              {{ user.role }}
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
              {{ user.image }}
            </td>
            <td class="whitespace-nowrap px-4 py-2">
              <router-link
                :to="{ name: 'user', params: { id: user.id } }"
                class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Edit
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- pagination start -->
      <div class="flex justify-center space-x-1 dark:text-gray-100">
        <button
          title="previous"
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          title="Page 1"
          class="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
        >
          1
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 2"
        >
          2
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 3"
        >
          3
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 4"
        >
          4
        </button>
        <button
          title="next"
          type="button"
          class="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
    <!-- end table -->
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  name: "AppUsersTable",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    this.users = await useUserStore().getAllUsers();
    console.log(this.users);
  },
  methods: {
    logout() {
      useUserStore().logout();
    },
    loggedIn() {
      return useUserStore().loggedIn;
    },
    addUser() {
      this.$router.push({ name: "addUser" });
    },
  },
};
</script>
