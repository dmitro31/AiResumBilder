"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalAuthHook = exports.authHook = void 0;
const authHook = async (req, reply) => {
    try {
        console.log("AUTH:", req.headers.authorization);
        await req.jwtVerify();
        console.log("USER:", req.user);
    }
    catch (err) {
        console.log(err);
        return reply.code(401).send({
            message: "Unauthorized"
        });
    }
};
exports.authHook = authHook;
const optionalAuthHook = async (req, reply) => {
    if (req.method === 'OPTIONS') {
        return;
    }
    return (0, exports.authHook)(req, reply);
};
exports.optionalAuthHook = optionalAuthHook;
//# sourceMappingURL=auth.hook.js.map