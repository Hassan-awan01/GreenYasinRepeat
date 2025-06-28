import { mutation } from './_generated/server';
import { v } from 'convex/values';
import { getAuthUserId } from '@convex-dev/auth/server';

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    blogImage: v.optional(v.id('_storage')),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error('Unauthorized');

    const blogId = await ctx.db.insert('blogs', {
      title: args.title.trim(),
      content: args.content.trim(),
      blogImage: args.blogImage,
      userId,
      tags: args.tags,
    });

    return blogId;
  },
});
