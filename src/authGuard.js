import { useUserStore } from '@/stores/user'
export function requireAuth(to, from, next) {
  const currentUser = useUserStore().getCurrentUserRole;
  if (currentUser == 1 || currentUser == 2) {
    // User is authorized, proceed to the route
    next();
  } else {
    // User is not authorized, redirect to the login page
    next("/login");
  }
}
