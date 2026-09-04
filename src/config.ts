import defaultConfig from "../config/default.json" with { type: "json" };
import testConfig from "../config/test.json" with { type: "json" };

export interface AppConfig {
  serviceName: string;
  port: number;
  logLevel: string;
  payments: { currency: string };
}

export function loadConfig(environment = process.env.NODE_ENV ?? "development"): AppConfig {
  const fileConfig = environment === "test" ? testConfig : defaultConfig;
  return {
    ...fileConfig,
    port: Number(process.env.PORT ?? fileConfig.port),
    logLevel: process.env.LOG_LEVEL ?? fileConfig.logLevel
  };
}
