import { FastifyRequest, FastifyReply } from "fastify";
import * as service from "./auth.service"

export const register = async (req: FastifyRequest, reply: FastifyReply) => {

    const { email, password, name } = req.body as any

    const user = await service.registerUser(email, password, name)

    return reply.send(user)

}

export const login = async (req: FastifyRequest, reply: FastifyReply) => {
    const { email , password  } = req.body as any

    const tokens = await service.loginUser( req.server , email , password )

    return reply.send(tokens)
}

export const refresh = async (req: FastifyRequest, reply: FastifyReply) => {
  const { refreshToken } = req.body as any

  const tokens = await service.refreshTokens(req.server, refreshToken)

  return reply.send(tokens)
}

export const logout = async (req: FastifyRequest , reply: FastifyReply) => {
  const { userId } = req.user as { userId: string };  

  await service.logoutUser( req.server , userId);

  return reply.send({ message: "Logged out"});
}