import "dotenv/config"; 
import { buildApp } from "./app";

const start = async () => {
  try {
    const app = await buildApp();
    await app.listen({ port: 4000, host: '0.0.0.0' });
    console.log("🚀 Server is running on http://localhost:4000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

console.log(process.env.JWT_ACCESS_SECRET)
console.log(process.env.JWT_REFRESH_SECRET)

start();
