"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.store = exports.signOut = exports.signIn = exports.auth = void 0;
var _1 = require("");
var server_1 = require("@convex-dev/auth/server");
exports.auth = (_a = (0, server_1.convexAuth)({
    providers: [_1.default],
    // Optional: Implement createOrUpdateUser callback for custom user management
    // callbacks: {
    //   async createOrUpdateUser(ctx, args) { /* ... */ },
    // },
}), _a.auth), exports.signIn = _a.signIn, exports.signOut = _a.signOut, exports.store = _a.store, exports.isAuthenticated = _a.isAuthenticated;
