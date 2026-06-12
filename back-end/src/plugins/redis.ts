import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import fastifyRedis from "@fastify/redis"

export default fp(async (app: FastifyInstance) => { // <-- Додали тип : FastifyInstance
  await app.register(fastifyRedis, {
    host: process.env.REDIS_HOST || "127.0.0.1",   // Краще винести в env для Render
    port: Number(process.env.REDIS_PORT) || 6379
  })
}, { name: 'redis-plugin' })
