<template>
  <!-- tailwind sidebar with main content -->
  <div class="flex h-screen bg-gray-200">
    <!-- sidebar -->
    <div class="flex flex-col flex-shrink-0 w-64 bg-blue-300 border-r">
      <div class="flex items-center justify-center h-16 flex-shrink-0 border-b">
        <span class="text-xl font-semibold text-gray-700">Admin</span>
      </div>
      <div class="flex-1 overflow-y-auto hover:overflow-y-scroll">
        <nav class="flex flex-col py-4 space-y-1">
          <router-link
            to="/admin"
            class="flex items-center px-6 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
            :class="{ 'bg-gray-100 text-gray-900': $route.path === '/admin' }"
          >
            <span class="ml-2">Dashboard</span>
          </router-link>
          <router-link
            to="/admin/users"
            class="flex items-center px-6 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
            :class="{
              'bg-gray-100 text-gray-900': $route.path === '/admin/users',
            }"
          >
            <span class="ml-2">Users</span>
          </router-link>
          <router-link
            to="/admin/roles"
            class="flex items-center px-6 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
            :class="{
              'bg-gray-100 text-gray-900': $route.path === '/admin/roles',
            }"
          >
            <span class="ml-2">Roles</span>
          </router-link>
          <router-link
            to="/admin/permissions"
            class="flex items-center px-6 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
            :class="{
              'bg-gray-100 text-gray-900': $route.path === '/admin/permissions',
            }"
          >
            <span class="ml-2">Permissions</span>
          </router-link>
        </nav>
      </div>
    </div>
    <!-- main content -->
    <div class="flex-1 p-6 bg-cyan-50">
      <router-view>Main Content</router-view>
    </div>
  </div>
</template>
