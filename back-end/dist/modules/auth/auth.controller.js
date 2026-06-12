import * as service from "./auth.service";
export const register = async (req, reply) => {
    console.log(req.body);
    const { email, password, name } = req.body;
    const result = await service.registerUser(req.server, email, password, name);
    return reply.send(result);
};
export const login = async (req, reply) => {
    const { email, password } = req.body;
    const result = await service.loginUser(req.server, email, password);
    return reply.send(result);
};
export const refresh = async (req, reply) => {
    const { refreshToken } = req.body;
    const result = await service.refreshTokens(req.server, refreshToken);
    return reply.send(result);
};
export const logout = async (req, reply) => {
    const { userId } = req.user || {};
    if (!userId)
        return reply.status(401).send({ message: "Не авторизовано" });
    await service.logoutUser(req.server, userId);
    return reply.send({ message: "Вихід виконано успішно" });
};
//# sourceMappingURL=auth.controller.js.map