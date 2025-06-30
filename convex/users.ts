import { query } from './_generated/server';
import { auth } from './auth';

// Add the following function to the file:
export const current = query({
  args: {},
  handler: async (ctx) => {
    const user = await auth.getUserId(ctx);
    if (user == null) return null;
    return await ctx.db.get(user);
  },
});
