import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import fastifyJwt from "@fastify/jwt"

// Розширюємо типи Fastify, щоб компілятор знав про існування app.refresh та app.jwt
declare module 'fastify' {
  interface FastifyInstance {
    refresh: {
      sign: (payload: any, options?: any) => string;
      verify: (token: string, options?: any) => any;
    };
  }
}

export default fp(async (app: FastifyInstance) => { // <-- Додано тип : FastifyInstance
  await app.register(fastifyJwt, {
    secret: process.env.JWT_ACCESS_SECRET || "access-secret-change-me"
  })

  app.decorate('refresh', {
    sign: (payload: any, options?: any) => {
      return app.jwt.sign(payload, {
        ...options,
        secret: process.env.JWT_REFRESH_SECRET || "refresh-secret-change-me" // Змінено key на secret, як вимагає fastify-jwt
      })
    },
    verify: (token: string, options?: any) => {
      return app.jwt.verify(token, {
        ...options,
        secret: process.env.JWT_REFRESH_SECRET || "refresh-secret-change-me" // Змінено key на secret
      })
    }
  })
}, { name: 'jwt-plugin' })
