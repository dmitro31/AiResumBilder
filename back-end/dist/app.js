"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = void 0;
const fastify_1 = __importDefault(require("fastify"));
const redis_1 = __importDefault(require("./plugins/redis"));
const jwt_1 = __importDefault(require("./plugins/jwt"));
const auth_router_1 = __importDefault(require("./modules/auth/auth.router"));
const cors_1 = __importDefault(require("@fastify/cors"));
const ai_router_1 = require("./modules/ai/ai.router");
const resume_router_1 = __importDefault(require("./modules/resume/resume.router"));
const buildApp = async () => {
    const app = (0, fastify_1.default)({ logger: true });
    await app.register(cors_1.default, {
        origin: true,
        credentials: true
    });
    await app.register(redis_1.default);
    await app.register(jwt_1.default);
    await app.register(auth_router_1.default, { prefix: "/auth" });
    app.register(ai_router_1.aiRoutes);
    app.register(resume_router_1.default, {
        prefix: "/resume"
    });
    await app.ready();
    console.log('JWT decorator:', !!app.jwt);
    console.log('Refresh decorator:', !!app.refresh);
    console.log('Redis decorator:', !!app.redis);
    return app;
};
exports.buildApp = buildApp;
//# sourceMappingURL=app.js.map