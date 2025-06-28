import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';
import { v } from 'convex/values';

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    email: v.string(),
    fullName: v.string(),
    password: v.string(),
    profession: v.string(),
    introduction: v.string(),
  }),
  blogs: defineTable({
    title: v.string(),
    content: v.string(),
    blogImage: v.optional(v.id('_storage')),
    userId: v.id('users'),
    tags: v.array(v.string()),
    updatedAt: v.optional(v.number()),
  }).index('by_userId', ['userId']),

  comments: defineTable({
    blogId: v.id('blogs'),
    userId: v.id('users'),
    body: v.string(),
    rating: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  }).index('by_blog', ['blogId']),
});

export default schema;
