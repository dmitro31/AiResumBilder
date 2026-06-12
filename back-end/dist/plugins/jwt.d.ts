import { FastifyInstance } from "fastify";
declare module 'fastify' {
    interface FastifyInstance {
        refresh: {
            sign: (payload: any, options?: any) => string;
            verify: (token: string, options?: any) => any;
        };
    }
}
declare const _default: (app: FastifyInstance) => Promise<void>;
export default _default;
//# sourceMappingURL=jwt.d.ts.map