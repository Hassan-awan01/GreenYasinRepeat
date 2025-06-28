import { Password } from '../node_modules/@convex-dev/auth//providers/Password';

import { convexAuth } from '@convex-dev/auth/server';

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
  // Optional: Implement createOrUpdateUser callback for custom user management
  // callbacks: {
  //   async createOrUpdateUser(ctx, args) { /* ... */ },
  // },
});
