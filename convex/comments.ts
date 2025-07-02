import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { auth } from './auth';

export const create = mutation({
  args: {
    blogId: v.id('blogs'),
    body: v.string(),
    rating: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');
    const blog = await ctx.db.get(args.blogId);
    if (!blog) return 'Blog not found. Please refresh the page.';
    const commentId = await ctx.db.insert('comments', {
      blogId: args.blogId,
      userId,
      body: args.body,
      rating: args.rating,
      updatedAt: Date.now(),
    });
    return commentId;
  },
});

export const update = mutation({
  args: {
    commentId: v.id('comments'),
    body: v.string(),
    rating: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');

    const existing = await ctx.db.get(args.commentId);
    if (!existing) throw new Error('Comment not found');
    if (existing.userId !== userId) throw new Error('Permission denied');

    await ctx.db.patch(args.commentId, {
      body: args.body,
      rating: args.rating,
      updatedAt: Date.now(),
    });

    return args.commentId;
  },
});

export const remove = mutation({
  args: {
    commentId: v.id('comments'),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');

    const existing = await ctx.db.get(args.commentId);
    if (!existing) throw new Error('Comment not found');
    if (existing.userId !== userId) throw new Error('Permission denied');

    await ctx.db.delete(args.commentId);

    return args.commentId;
  },
});
