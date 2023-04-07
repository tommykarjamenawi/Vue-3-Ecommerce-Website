import { createRouter, createWebHistory } from "vue-router";
import { requireAuth } from "@/authGuard.js";

// Dynamic import (lazy loading)
const Home = () => import("@/views/HomeView.vue");
const About = () => import("@/views/AboutView.vue");
const Login = () => import("@/views/LoginView.vue");
const Register = () => import("@/views/RegisterView.vue");
const Products = () => import("@/views/ProductsView.vue");
const Product = () => import("@/views/ProductView.vue");
const Profile = () => import("@/views/ProfileView.vue");
const Cart = () => import("@/views/CartView.vue");
const Orders = () => import("@/views/OrdersView.vue");
const OrderDetails = () => import("@/views/OrderDetailsView.vue");
const PasswordReset = () => import("@/views/PasswordResetView.vue");
const Admin = () => import("@/views/AdminView.vue");
// const AdminUsers = () => import("@/components/AppUsersTable.vue");
// const AdminProducts = () => import("@/components/AppProductsTable.vue");
// const AdminOrders = () => import("@/components/AppOrdersTable.vue");
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
    beforeEnter: requireAuth,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
    beforeEnter: requireAuth,
  },
  {
    name: "order-details",
    path: "/orders/:id",
    component: OrderDetails,
    beforeEnter: requireAuth,
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
    beforeEnter: requireAuth, // protect the route
  },
  {
    name: "invoice",
    path: "/invoice",
    component: Invoice,
  },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
  },
  {
    name: "users",
    path: "/admin/users",
    component: Admin,
  },
  {
    name: "products",
    path: "/admin/products",
    component: Admin,
  },
  {
    name: "orders",
    path: "/admin/orders",
    component: Admin,
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
