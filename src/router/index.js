import { createRouter, createWebHistory } from "vue-router";

// Dynamic import (lazy loading)
const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/AboutView.vue");
const Login = () => import("@/views/LoginView.vue");
const Register = () => import("@/views/RegisterView.vue");
const Products = () => import("@/views/ProductsView.vue");
const Product = () => import("@/views/ProductView.vue");
const Profile = () => import("@/views/ProfileView.vue");
const Cart = () => import("@/views/CartView.vue");
const Watchlist = () => import("@/views/WatchlistView.vue");
const Orders = () => import("@/views/OrdersView.vue");
const OrderDetails = () => import("@/views/OrderDetailsView.vue");
const PasswordReset = () => import("@/views/PasswordResetView.vue");
const Admin = () => import("@/views/AdminView.vue");
const Invoice = () => import("@/views/InvoiceView.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    name: "products",
    path: "/products",
    component: Products,
  },
  {
    name: "product",
    path: "/products/:id",
    component: Product,
  },
  {
    name: "profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "watchlist",
    path: "/watchlist",
    component: Watchlist,
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
  },
  {
    name: "order-details",
    path: "/orders/:id",
    component: OrderDetails,
  },
  {
    name: "password-reset",
    path: "/password-reset",
    component: PasswordReset,
  },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
  },
  {
    name: "invoice",
    path: "/invoice",
    component: Invoice,
  },
  {
    path: "/:catchAll(.*)*", // catch all 404
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
