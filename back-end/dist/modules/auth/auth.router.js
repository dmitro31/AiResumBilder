import * as controller from "./auth.controller";
import { authHook } from "../../hooks/auth.hook";
import { roleHook } from "../../hooks/rool.hook";
export default async (app) => {
    app.post("/register", controller.register);
    app.post("/login", controller.login);
    app.post("/refresh", controller.refresh);
    app.post("/logout", {
        preHandler: [authHook]
    }, controller.logout);
    app.get("/me", {
        preHandler: [authHook]
    }, async (req) => {
        const user = req.user;
        return {
            id: user.userId,
            name: user.name,
            email: user.email,
            role: user.role
        };
    });
    app.get("/admin", {
        preHandler: [authHook, roleHook(["admin"])]
    }, async () => {
        return { message: "admin only" };
    });
};
//# sourceMappingURL=auth.router.js.map