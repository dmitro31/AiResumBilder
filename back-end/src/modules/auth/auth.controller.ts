import { FastifyRequest, FastifyReply } from "fastify";
import * as service from "./auth.service";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password, name } = req.body as any;
  const result = await service.registerUser(req.server, email, password, name);
  return reply.send(result);
};

export const login = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = req.body as any;
  const result = await service.loginUser(req.server, email, password);
  return reply.send(result);
};

export const refresh = async (req: FastifyRequest, reply: FastifyReply) => {
  const { refreshToken } = req.body as any;
  const result = await service.refreshTokens(req.server, refreshToken);
  return reply.send(result);
};

export const logout = async (req: FastifyRequest, reply: FastifyReply) => {
  const { userId } = (req.user as any) || {};
  if (!userId) return reply.status(401).send({ message: "Не авторизовано" });

  await service.logoutUser(req.server, userId);
  return reply.send({ message: "Вихід виконано успішно" });
};
