import { prisma } from "../../prisma";
import { hashPassword, comparePassword } from "../../utils/hash";
export const registerUser = async (app, email, password, name) => {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
        throw new Error("Користувач з таким email вже існує");
    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
        data: { email, password: hashed, name },
    });
    const accessToken = app.jwt.sign({ userId: user.id, role: "user" }, { expiresIn: "15m" });
    const refreshToken = app.refresh.sign({ userId: user.id }, { expiresIn: "7d" });
    await app.redis.set(`refresh:${user.id}`, refreshToken, "EX", 60 * 60 * 24 * 7);
    return {
        accessToken,
        refreshToken,
        user: { id: user.id, email: user.email, name: user.name },
    };
};
export const loginUser = async (app, email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("Невірний email або пароль");
    const valid = await comparePassword(password, user.password);
    if (!valid)
        throw new Error("Невірний email або пароль");
    const accessToken = app.jwt.sign({ userId: user.id, role: "user" }, { expiresIn: "15m" });
    const refreshToken = app.refresh.sign({ userId: user.id }, { expiresIn: "7d" });
    await app.redis.set(`refresh:${user.id}`, refreshToken, "EX", 60 * 60 * 24 * 7);
    return {
        accessToken,
        refreshToken,
        user: { id: user.id, email: user.email, name: user.name },
    };
};
export const refreshTokens = async (app, token) => {
    const payload = app.refresh.verify(token);
    const saved = await app.redis.get(`refresh:${payload.userId}`);
    if (!saved || saved !== token) {
        throw new Error("Сесія застаріла, увійдіть знову");
    }
    const accessToken = app.jwt.sign({ userId: payload.userId, role: "user" }, { expiresIn: "15m" });
    return { accessToken };
};
export const logoutUser = async (app, userId) => {
    await app.redis.del(`refresh:${userId}`);
};
//# sourceMappingURL=auth.service.js.map