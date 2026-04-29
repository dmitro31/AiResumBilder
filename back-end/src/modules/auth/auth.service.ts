import { prisma } from "../../prisma"
import { hashPassword, comparePassword } from "../../utils/hash"
import { FastifyInstance } from "fastify"


export const registerUser = async (email: string, password: string , name: string) => {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error("User exists")

  const hashed = await hashPassword(password)

  return prisma.user.create({
    data: { email, password: hashed , name }
  })
}

export const loginUser = async (
  app: FastifyInstance,
  email: string,
  password: string,
) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error("Invalid credentials")

  const valid = await comparePassword(password, user.password!)
  if (!valid) throw new Error("Invalid credentials")

const accessToken = app.jwt.sign(
  {
    userId: user.id,
    role: "user"
  },
  { expiresIn: "15m" }
)

  const refreshToken = app.refreshJwt.sign(
  { userId: user.id },
  { expiresIn: "7d" }
)

  

  await app.redis.set(
    `refresh:${user.id}`,
    refreshToken,
    "EX",
    60 * 60 * 24 * 7
  )

  return { accessToken, refreshToken }
}

export const refreshTokens = async (
  app: FastifyInstance,
  token: string
) => {
const payload = app.refreshJwt.verify<{ userId: string }>(token)

  const saved = await app.redis.get(`refresh:${payload.userId}`)
  if (!saved || saved !== token) {
    throw new Error("Invalid refresh token")
  }

  const accessToken = app.jwt.sign(
    { userId: payload.userId },
    { expiresIn: "15m" }
  )

  return { accessToken }
}

export const logoutUser = async (
  app: FastifyInstance,
  userId: string
) => {
  await app.redis.del(`refresh:${userId}`)
}