import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
export default fp(async (app) => {
    await app.register(fastifyJwt, {
        secret: process.env.JWT_ACCESS_SECRET || "access-secret-change-me"
    });
    app.decorate('refresh', {
        sign: (payload, options) => {
            return app.jwt.sign(payload, {
                ...options,
                secret: process.env.JWT_REFRESH_SECRET || "refresh-secret-change-me" // Змінено key на secret, як вимагає fastify-jwt
            });
        },
        verify: (token, options) => {
            return app.jwt.verify(token, {
                ...options,
                secret: process.env.JWT_REFRESH_SECRET || "refresh-secret-change-me" // Змінено key на secret
            });
        }
    });
}, { name: 'jwt-plugin' });
//# sourceMappingURL=jwt.js.map