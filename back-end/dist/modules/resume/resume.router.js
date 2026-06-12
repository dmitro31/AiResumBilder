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
const auth_hook_1 = require("../../hooks/auth.hook");
const controller = __importStar(require("./resume.controller"));
const authPreHandler = async (request, reply) => {
    if (request.method === 'OPTIONS')
        return;
    await (0, auth_hook_1.authHook)(request, reply);
};
exports.default = async (app) => {
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