<template>
  <!-- navbar -->
  <app-nav-bar />

  <!-- router -->
  <RouterView />
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";
import { useUserStore } from '@/stores/user'

export default {
  name: "App",
  components: {
    AppNavBar,
  },
  mounted() {
    const userStore = useUserStore();
    userStore.autoLogin();
  },
};
</script>
