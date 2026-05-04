import fp from "fastify-plugin"
import fastifyJwt from "@fastify/jwt"

export default fp(async (app) => {
  await app.register(fastifyJwt, {
    secret: process.env.JWT_ACCESS_SECRET || "access-secret-change-me"
  })

  app.decorate('refresh', {
    sign: (payload: any, options?: any) => {
      return app.jwt.sign(payload, {
        ...options,
        key: process.env.JWT_REFRESH_SECRET || "refresh-secret-change-me"
      })
    },
    verify: (token: string, options?: any) => {
      return app.jwt.verify(token, {
        ...options,
        key: process.env.JWT_REFRESH_SECRET || "refresh-secret-change-me"
      })
    }
  })
}, { name: 'jwt-plugin' })