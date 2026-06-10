import { FastifyReply, FastifyRequest } from "fastify"

export const authHook = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    console.log("AUTH:", req.headers.authorization)

    await req.jwtVerify()

    console.log("USER:", req.user)
  } catch (err) {
    console.log(err)

    return reply.code(401).send({
      message: "Unauthorized"
    })
  }
}

export const optionalAuthHook = async (req: FastifyRequest, reply: FastifyReply) => {
  if (req.method === 'OPTIONS') {
    return
  }
  return authHook(req, reply)
}