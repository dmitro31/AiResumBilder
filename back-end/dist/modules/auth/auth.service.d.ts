import { FastifyInstance } from "fastify";
export declare const registerUser: (app: FastifyInstance, email: string, password: string, name: string) => Promise<{
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}>;
export declare const loginUser: (app: FastifyInstance, email: string, password: string) => Promise<{
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}>;
export declare const refreshTokens: (app: FastifyInstance, token: string) => Promise<{
    accessToken: string;
}>;
export declare const logoutUser: (app: FastifyInstance, userId: string) => Promise<void>;
//# sourceMappingURL=auth.service.d.ts.map