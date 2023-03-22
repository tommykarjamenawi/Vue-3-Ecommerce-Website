import { defineStore } from "pinia";
import axios from "../axios-auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    email: "",
    role: "",
    token: "",
  }),
  getters: {
    loggedIn: (state) => state.email != "",
    getToken: (state) => state.token,
    getCurrentUserRole: (state) => state.role,
  },
  actions: {
    login(semail, spassword) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/login", {
            email: semail,
            password: spassword,
          })
          .then((res) => {
            console.log(res.data);
            this.email = res.data.email;
            this.role = res.data.role;
            this.token = res.data.jwt;

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("role", res.data.role);

            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    autoLogin() {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      const role = localStorage.getItem("role");
      if (token && email && role) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        this.token = token;
        this.email = email;
        this.role = role;
        console.log("auto login:" + this.email + " " + this.role);
      } else {
        this.role = 3; // guest
        console.log("auto login: " + this.role + " (guest)");
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      this.token = "";
      this.email = "";
      this.role = "";

      // go to login page
      this.$router.push("/login");
    },
  },
});
