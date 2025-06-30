import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { auth } from './auth';
import { paginationOptsValidator } from 'convex/server';
import { Doc } from './_generated/dataModel';

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    blogImage: v.optional(v.id('_storage')),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
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

export const update = mutation({
  args: {
    blogId: v.id('blogs'),
    title: v.string(),
    content: v.string(),
    blogImage: v.optional(v.id('_storage')),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');

    const blog = await ctx.db.get(args.blogId);
    if (!blog) throw new Error('Blog not Found');

    if (userId != blog.userId) throw new Error('Unauthorized');

    if (args.blogImage) {
      await ctx.db.patch(args.blogId, {
        title: args.title.trim(),
        content: args.content.trim(),
        blogImage: args.blogImage,
        userId,
        tags: args.tags,
      });
      return args.blogId;
    }
    await ctx.db.patch(args.blogId, {
      title: args.title.trim(),
      content: args.content.trim(),
      userId,
      tags: args.tags,
    });
    return args.blogId;
  },
});

export const remove = mutation({
  args: {
    blogId: v.id('blogs'),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');
    const blog = await ctx.db.get(args.blogId);
    if (!blog) throw new Error('Blog not Found');

    if (userId != blog.userId) throw new Error('Unauthorized');
    if (blog.blogImage) await ctx.storage.delete(blog.blogImage);
    await ctx.db.delete(args.blogId);
    return args.blogId;
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query('blogs')
      .order('desc') // or 'asc' if you want oldest first
      .paginate(args.paginationOpts);

    return {
      ...results,
      page: await Promise.all(
        results.page.map(
          async (blog): Promise<Doc<'blogs'> & { imageUrl?: string }> => {
            const imageUrl = blog.blogImage
              ? ((await ctx.storage.getUrl(blog.blogImage)) ?? undefined)
              : undefined;

            return {
              ...blog,
              imageUrl,
            };
          },
        ),
      ),
    };
  },
});

export const getById = query({
  args: {
    blogId: v.id('blogs'),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');
    const blog = await ctx.db.get(args.blogId);
    if (!blog) throw new Error('Blog not Found');
    return blog;
  },
});

export const getByIdAndComments = query({
  args: {
    blogId: v.id('blogs'),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) throw new Error('Unauthorized');

    const blog = await ctx.db.get(args.blogId);
    if (!blog) throw new Error('Blog not Found');

    const comments = await ctx.db
      .query('comments')
      .withIndex('by_blog', (q) => q.eq('blogId', args.blogId))
      .order('desc')
      .collect();

    const enrichedComments = await Promise.all(
      comments.map(async (comment) => {
        const user = await ctx.db.get(comment.userId);
        return {
          ...comment,
          user: user
            ? { fullName: user.fullName, profession: user.profession }
            : null,
        };
      }),
    );

    return {
      blog,
      comments: enrichedComments,
    };
  },
});
