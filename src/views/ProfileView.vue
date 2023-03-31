<template>
  <main class="p-5">
    <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-5 items-start gap-6">
        <div class="col-span-3 bg-white p-4 rounded-lg shadow">
          <!-- Profile Details -->
          <div class="mb-6">
            <h2 class="text-xl mb-5">Your Profile</h2>
            <div class="mb-4">
              <input
                v-model="this.user.full_name"
                placeholder="Your Name"
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
            <!-- <div class="mb-4">
              <input
                placeholder="Your Phone"
                type="text"
                name="phone"
                class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
              />
            </div> -->
          </div>
          <!--/ Profile Details -->

          <!-- Billing Address -->
          <div class="mb-6">
            <h2 class="text-xl mb-5">Billing / Shipping Address</h2>
            <div class="flex gap-3">
              <div class="mb-4 flex-1">
                <input
                  v-model="this.user.address"
                  placeholder="Address 1"
                  type="text"
                  name="Address 1"
                  class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                />
              </div>
              <!-- <div class="mb-4 flex-1">
                <input
                  placeholder="Address 2"
                  type="text"
                  name="billing_address_2"
                  class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                />
              </div> -->
            </div>
            <!-- <div class="flex gap-3">
              <div class="mb-4 flex-1">
                <input
                  placeholder="City"
                  type="text"
                  name="billing_city"
                  class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                />
              </div>
              <div class="mb-4 flex-1">
                <input
                  placeholder="State"
                  type="text"
                  name="billing_state"
                  class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                />
              </div>
            </div>
            <div class="flex gap-3">
              <div class="mb-4 flex-1">
                <select
                  placeholder="Country"
                  type="text"
                  name="billing_country"
                  class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                >
                  <option value="">Country</option>
                  <option value="ge">Netherlands</option>
                  <option value="de">Germany</option>
                  <option value="in">China</option>
                  <option value="us">United Kingdom</option>
                  <option value="uk">United States</option>
                </select>
              </div>
              <div class="mb-4 flex-1">
                <input
                  placeholder="Zipcode"
                  type="text"
                  name="billing_zipcode"
                  class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                />
              </div>
            </div> -->
          </div>
          <!--/ Billing Address -->

          <!-- message -->
          <div v-if="message" class="text-green-500 text-sm">
            {{ message }}
          </div>
          <button
            @click="updateProfile"
            class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full"
          >
            Update
          </button>
        </div>

        <div class="col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 class="text-xl mb-5">Your Account</h2>
          <div class="mb-4">
            <input
              v-model="this.newPassword"
              type="password"
              name="newPassword"
              placeholder="New password"
              class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
          </div>
          <div class="mb-4">
            <input
              v-model="this.repeatPassword"
              type="password"
              name="repeatPassword"
              placeholder="Repeat new password"
              class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
          </div>
          <!-- message -->
          <div v-if="pwMessage" class="text-green-500 text-sm">
            {{ pwMessage }}
          </div>
          <div>
            <button
              @click="updatePassword"
              class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "ProfileView",
  data() {
    return {
      baseIMG: "/public/assets",
      user: {
        id: 0,
        full_name: "",
        email: "",
        // password: "",
        address: "",
        // image: "",
      },
      newPassword: "",
      repeatPassword: "",
      passwordsMatch: true,
      message: "",
      pwMessage: "",
    };
  },
  async beforeMount() {
    const userStore = useUserStore();
    const user = await userStore.getUserDetails();
    this.user = user;
    this.imageUrl = `${this.baseIMG}${this.user.image}`;
  },
  methods: {
    async updateProfile() {
      const userStore = useUserStore();
      this.message = await userStore.updateUserDetails(this.user);
    },
    async updatePassword() {

      const userStore = useUserStore();
      this.pwMessage = await userStore.updatePassword(this.newPassword);
    },
  },
};
</script>
