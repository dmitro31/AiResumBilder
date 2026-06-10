"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const start = async () => {
    try {
        const app = await (0, app_1.buildApp)();
        await app.listen({ port: 4000, host: '0.0.0.0' });
        console.log("🚀 Server is running on http://localhost:4000");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
console.log(process.env.JWT_ACCESS_SECRET);
console.log(process.env.JWT_REFRESH_SECRET);
start();
//# sourceMappingURL=server.js.map