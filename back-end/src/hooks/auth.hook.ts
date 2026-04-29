import { FastifyRequest, FastifyReply } from "fastify"

export const authHook = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    await req.jwtVerify()
  } catch {
    return reply.code(401).send({ message: "Unauthorized" })
  }
}