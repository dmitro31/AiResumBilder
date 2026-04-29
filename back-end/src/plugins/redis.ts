import fp from "fastify-plugin"
import redis from "@fastify/redis"

export default fp(async (app) => {
  app.register(redis, {
    host: "127.0.0.1",
    port: 6379
  })
})