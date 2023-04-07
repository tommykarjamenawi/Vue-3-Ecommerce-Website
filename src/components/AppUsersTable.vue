<template>
  <h1 class="font-bold text-2xl text-gray-700">Users</h1>

  <div class="flex flex-col flex-grow rounded mt-4">
    <!-- start table -->
    <div class="overflow-x-auto border-4">
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
