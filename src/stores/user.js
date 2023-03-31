import { defineStore } from "pinia";
import axios from "../axios-auth";
import router from "@/router/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: 0,
    full_name: "",
    email: "",
    role: "",
    token: "",
  }),
  getters: {
    loggedIn: (state) => state.email != "",
    getToken: (state) => state.token,
    getCurrentUserRole: (state) => state.role,
    getCurrentUserId: (state) => state.id,
    getCurrentUserFullName: (state) => state.full_name,
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
            this.id = res.data.id;
            this.full_name = res.data.full_name;
            this.email = res.data.email;
            this.role = res.data.role;
            this.token = res.data.jwt;

            localStorage.setItem("token", res.data.jwt);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("full_name", res.data.full_name);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("role", res.data.role);

            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    autoLogin() {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      const full_name = localStorage.getItem("full_name");
      const email = localStorage.getItem("email");
      const role = localStorage.getItem("role");
      if (token && email && role) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        this.token = token;
        this.id = id;
        this.full_name = full_name;
        this.email = email;
        this.role = role;
        console.log("auto login:" + this.email + " " + this.role);
        console.log({
          token: token,
          id: id,
          full_name: full_name,
          email: email,
          role: role,
        });
      } else {
        this.role = 3; // guest
        console.log("auto login: guest");
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      this.token = "";
      this.email = "";
      this.role = "";

      // go to login page using router to /login
      router.push({ name: "login" });
    },
    async getUserDetails() {
      const res = await axios.get("/users/" + this.id);
      console.log("getUserDetails below...");
      console.log(res.data);
      // put data in a user object
      const user = {
        id: res.data.id,
        full_name: res.data.full_name,
        email: res.data.email,
        // password: res.data.password,
        address: res.data.address,
        // role: res.data.role,
        // image: res.data.image,
      };
      return user;
    },
    async updateUserDetails(user) {
      const res = await axios.put("/users/" + this.id, user);
      console.log(res.data);
      return res.data.message;
    },
    async updatePassword(password) {
      const res = await axios.put("/users/" + this.id + "/password", {
        password: password,
      });
      console.log(res.data);
      return res.data.message;
    },
  },
});
