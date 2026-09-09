import { describe, expect, it } from "vitest";
import { PaymentService } from "../../src/services/payment-service.js";

describe("PaymentService", () => {
  const service = new PaymentService();

  it("returns a payment by its public identifier", () => {
    expect(service.findById("pay_1001")).toMatchObject({
      id: "pay_1001",
      amountCents: 1299,
      status: "settled"
    });
  });

  it("returns undefined for an unknown identifier", () => {
    expect(service.findById("pay_missing")).toBeUndefined();
  });
});
