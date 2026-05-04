import "@fastify/jwt"

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      userId: string
      role?: string
    }
    user: {
      id: string
      name: string
      email: string
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
