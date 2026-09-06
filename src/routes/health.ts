import { Router } from "express";
import { loadConfig } from "../config.js";

export function healthRouter() {
  const router = Router();
  router.get("/health", (_req, res) => {
    res.json({
      status: "ok",
      service: loadConfig().serviceName,
      uptimeSeconds: Math.round(process.uptime())
    });
  });
  return router;
}
