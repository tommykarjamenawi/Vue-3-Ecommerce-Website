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
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + res.data.jwt;
            resolve();
          })
          .catch((error) => {
            if (error.response.status === 401) {
              // handle invalid login error
              console.log(error.response.data);
              reject(error.response.data);
            } else {
              // handle other errors
              console.log(error);
              reject(error);
            }
          });
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
      // remove all traces of user from local storage and state
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      this.token = "";
      this.email = "";
      this.role = "";

      // clears the console
      console.clear();
      // go to login page using router to /login
      router.push({ name: "login" });
    },
    register(user) {
      return new Promise((resolve, reject) => {
        axios
          .post("/users", user)
          .then((res) => {
            console.log(res.data);
            resolve();
          })
          .catch((error) => reject(error));
      });
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
    async getAllUsers() {
      const res = await axios.get("/users");
      // console.log(res.data);
      return res.data;
    },
    async updateUser(user) {
      const res = await axios.put("/users/" + user.id, user);
      console.log(res.data);
      return res.data.message;
    },
    async getUser(id) {
      const res = await axios.get("/users/" + id);
      // console.log(res.data);
      return res.data;
    },
    async deleteUser(id) {
      const res = await axios.delete("/users/" + id);
      console.log(res.data);
      return res.data.message;
    },
  },
});
