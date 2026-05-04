import fp from "fastify-plugin"
import fastifyRedis from "@fastify/redis"

export default fp(async (app) => {
  await app.register(fastifyRedis, {
    host: "127.0.0.1",
    port: 6379
  })
}, { name: 'redis-plugin' })