"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("convex/server");
var server_2 = require("@convex-dev/auth/server");
var values_1 = require("convex/values");
var schema = (0, server_1.defineSchema)(__assign(__assign({}, server_2.authTables), { users: (0, server_1.defineTable)({
        email: values_1.v.string(),
        fullName: values_1.v.string(),
        password: values_1.v.string(),
        profession: values_1.v.string(),
        introduction: values_1.v.string(),
    }), blogs: (0, server_1.defineTable)({
        title: values_1.v.string(),
        content: values_1.v.string(),
        blogImage: values_1.v.optional(values_1.v.id('_storage')),
        userId: values_1.v.id('users'),
        tags: values_1.v.array(values_1.v.string()),
        updatedAt: values_1.v.optional(values_1.v.number()),
    }).index('by_userId', ['userId']), comments: (0, server_1.defineTable)({
        blogId: values_1.v.id('blogs'),
        userId: values_1.v.id('users'),
        body: values_1.v.string(),
        rating: values_1.v.optional(values_1.v.number()),
        updatedAt: values_1.v.optional(values_1.v.number()),
    }).index('by_blog', ['blogId']) }));
exports.default = schema;
