import { query } from './_generated/server';
import { getAuthUserId } from '@convex-dev/auth/server';

// Add the following function to the file:
export const current = query({
  args: {},
  handler: async (ctx) => {
    const user = await getAuthUserId(ctx);
    if (user == null) return null;
    return await ctx.db.get(user);
  },
});
