import "dotenv/config"; 
import { buildApp } from "./app";

const start = async () => {
  try {
    const app = await buildApp();
    await app.listen({ port: 3001, host: '0.0.0.0' });
    console.log("🚀 Server is running on http://localhost:3001");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
