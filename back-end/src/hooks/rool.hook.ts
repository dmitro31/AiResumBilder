import { FastifyRequest, FastifyReply } from "fastify"

export const roleHook = (roles: string[]) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const user = req.user as { userId: string; role?: string }

    if (!user.role || !roles.includes(user.role)) {
      return reply.code(403).send({ message: "Forbidden" })
    }
  }
}