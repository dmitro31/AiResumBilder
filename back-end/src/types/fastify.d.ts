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
    refresh: {
      sign: typeof import("@fastify/jwt").FastifyJWT["sign"]
      verify: typeof import("@fastify/jwt").FastifyJWT["verify"]
    }
  }
}