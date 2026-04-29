import Fastify from "fastify"
import redis from "./plugins/redis"
import jwt from "./plugins/jwt"
import authRoutes from "./modules/auth/auth.router"

import cors from "@fastify/cors"

export const buildApp = async () => {
  const app = Fastify()

  await app.register(cors, {
    origin: true,
    credentials: true
  })

  await app.register(redis)
  await app.register(jwt)
  await app.register(authRoutes, { prefix: "/auth" })

  return app
}