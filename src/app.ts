import express from "express";
import { requestId } from "./middleware/request-id.js";
import { healthRouter } from "./routes/health.js";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(requestId);
  app.use(healthRouter());
  return app;
}
