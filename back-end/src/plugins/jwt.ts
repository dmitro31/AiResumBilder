import fp from "fastify-plugin"
import jwt from "@fastify/jwt"

export default fp(async (app) => {
  app.register(jwt, {
    secret: process.env.JWT_ACCESS_SECRET!
  })

  app.register(jwt, {
    secret: process.env.JWT_REFRESH_SECRET!,
    namespace: "refreshJwt"
  })
})