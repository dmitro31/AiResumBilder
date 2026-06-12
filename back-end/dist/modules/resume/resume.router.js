import { authHook } from "../../hooks/auth.hook";
import * as controller from "./resume.controller";
const authPreHandler = async (request, reply) => {
    if (request.method === 'OPTIONS')
        return;
    await authHook(request, reply);
};
export default async (app) => {
    app.post("/", {
        preHandler: [authPreHandler]
    }, controller.create);
    app.get("/", {
        preHandler: [authPreHandler]
    }, controller.getAll);
    app.get("/:id", {
        preHandler: [authPreHandler]
    }, controller.getOne);
    app.put("/:id", {
        preHandler: [authPreHandler]
    }, controller.update);
    app.delete("/:id", {
        preHandler: [authPreHandler]
    }, controller.remove);
};
//# sourceMappingURL=resume.router.js.map