import { Router } from "express";
import { PaymentService } from "../services/payment-service.js";

export function paymentsRouter(paymentService = new PaymentService()) {
  const router = Router();

  router.get("/api/payments/:id", (req, res) => {
    const payment = paymentService.findById(req.params.id);
    if (!payment) {
      res.status(404).json({ error: "payment_not_found" });
      return;
    }
    res.json({ data: payment, requestId: res.locals.requestId });
  });

  return router;
}
