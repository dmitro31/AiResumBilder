export const authHook = async (req, reply) => {
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
export const optionalAuthHook = async (req, reply) => {
    if (req.method === 'OPTIONS') {
        return;
    }
    return authHook(req, reply);
};
//# sourceMappingURL=auth.hook.js.map