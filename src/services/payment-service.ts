export type PaymentStatus = "authorized" | "settled" | "refunded";

export interface Payment {
  id: string;
  amountCents: number;
  currency: string;
  status: PaymentStatus;
  merchantReference: string;
  createdAt: string;
}

const payments: Payment[] = [
  {
    id: "pay_1001",
    amountCents: 1299,
    currency: "USD",
    status: "settled",
    merchantReference: "order-4821",
    createdAt: "2026-08-28T09:12:00.000Z"
  },
  {
    id: "pay_1002",
    amountCents: 8750,
    currency: "USD",
    status: "authorized",
    merchantReference: "order-4829",
    createdAt: "2026-08-29T16:41:00.000Z"
  },
  {
    id: "pay_1003",
    amountCents: 4200,
    currency: "USD",
    status: "refunded",
    merchantReference: "order-4810",
    createdAt: "2026-08-30T11:05:00.000Z"
  }
];

export class PaymentService {
  findById(id: string): Payment | undefined {
    return payments.find((payment) => payment.id === id);
  }
}
