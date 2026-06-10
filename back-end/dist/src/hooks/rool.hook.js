"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleHook = void 0;
const roleHook = (roles) => {
    return async (req, reply) => {
        const user = req.user;
        if (!user.role || !roles.includes(user.role)) {
            return reply.code(403).send({
                message: "Forbidden"
            });
        }
    };
};
exports.roleHook = roleHook;
//# sourceMappingURL=rool.hook.js.map