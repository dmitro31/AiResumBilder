import Fastify from "fastify"
import redis from "./plugins/redis"
import jwt from "./plugins/jwt"
import authRoutes from "./modules/auth/auth.router"
import cors from "@fastify/cors"

export const buildApp = async () => {
  const app = Fastify({ logger: true })

  await app.register(cors, {
    origin: true,
    credentials: true
  })

  await app.register(redis)
  await app.register(jwt)
  await app.register(authRoutes, { prefix: "/auth" })

  await app.ready()

  console.log('JWT decorator:', !!app.jwt)
  console.log('Refresh decorator:', !!app.refresh)
  console.log('Redis decorator:', !!app.redis)

  return app
}