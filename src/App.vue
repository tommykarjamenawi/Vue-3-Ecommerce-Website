<template>
  <!-- navbar -->
  <app-nav-bar />

  <!-- router -->
  <RouterView />
  
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";

export default {
  name: "App",
  components: {
    AppNavBar,
  },
};
</script>
