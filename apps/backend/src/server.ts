import Fastify from "fastify";
import cors from "@fastify/cors";

async function buildApp() {
  const app = Fastify({ logger: true });
  await app.register(cors);
  return app;
}

const app = await buildApp();

app.get("/health", async () => ({ status: "ok" }));

await app.listen({ port: 3000, host: "0.0.0.0" });
console.log("🚀 TDG backend running on http://localhost:3000");