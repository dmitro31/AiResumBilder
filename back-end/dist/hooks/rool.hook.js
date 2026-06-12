export const roleHook = (roles) => {
    return async (req, reply) => {
        const user = req.user;
        if (!user.role || !roles.includes(user.role)) {
            return reply.code(403).send({
                message: "Forbidden"
            });
        }
    };
};
//# sourceMappingURL=rool.hook.js.map