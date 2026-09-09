import { describe, expect, it } from "vitest";
import { loadConfig } from "../../src/config.js";

describe("configuration", () => {
  it("loads the test profile with environment overrides", () => {
    const originalPort = process.env.PORT;
    process.env.PORT = "4100";
    expect(loadConfig("test")).toMatchObject({
      serviceName: "northstar-payments-api-test",
      port: 4100,
      payments: { currency: "USD" }
    });
    process.env.PORT = originalPort;
  });
});
