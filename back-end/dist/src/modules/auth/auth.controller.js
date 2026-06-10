"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = exports.register = void 0;
const service = __importStar(require("./auth.service"));
const register = async (req, reply) => {
    console.log(req.body);
    const { email, password, name } = req.body;
    const result = await service.registerUser(req.server, email, password, name);
    return reply.send(result);
};
exports.register = register;
const login = async (req, reply) => {
    const { email, password } = req.body;
    const result = await service.loginUser(req.server, email, password);
    return reply.send(result);
};
exports.login = login;
const refresh = async (req, reply) => {
    const { refreshToken } = req.body;
    const result = await service.refreshTokens(req.server, refreshToken);
    return reply.send(result);
};
exports.refresh = refresh;
const logout = async (req, reply) => {
    const { userId } = req.user || {};
    if (!userId)
        return reply.status(401).send({ message: "Не авторизовано" });
    await service.logoutUser(req.server, userId);
    return reply.send({ message: "Вихід виконано успішно" });
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map