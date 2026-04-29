import "@fastify/jwt"

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      userId: string
      role?: string
    }
    user: {
      userId: string
      role?: string
    }
  }
}

declare module "fastify" {
  interface FastifyInstance {
    jwt: { sign: (payload: object, options: object) => string; verify: <T>(token: string) => T };
    refreshJwt: { sign: (payload: object, options: object) => string; verify: <T>(token: string) => T };
    redis: any;
  }
}