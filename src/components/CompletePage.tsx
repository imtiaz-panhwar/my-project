"use client";

import { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: "Payment succeeded",
    iconColor: "#30B130",
    icon: "✔️",
  },
  processing: {
    text: "Your payment is processing.",
    iconColor: "#6D6E78",
    icon: "ℹ️",
  },
  requires_payment_method: {
    text: "Your payment was not successful, please try again.",
    iconColor: "#DF1B41",
    icon: "❌",
  },
  default: {
    text: "Something went wrong, please try again.",
    iconColor: "#DF1B41",
    icon: "❌",
  }
} as const; // Ensure object keys are treated as literals

export default function CompletePage() {
  const stripe = useStripe();

  const [status, setStatus] = useState<keyof typeof STATUS_CONTENT_MAP>("default");
  const [intentId, setIntentId] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) return;
      setStatus(paymentIntent.status as keyof typeof STATUS_CONTENT_MAP);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  return (
    <div id="payment-status">
      <div id="status-icon" style={{ backgroundColor: STATUS_CONTENT_MAP[status]?.iconColor || "#DF1B41" }}>
        {STATUS_CONTENT_MAP[status]?.icon}
      </div>
      <h2 id="status-text">{STATUS_CONTENT_MAP[status]?.text}</h2>
      {intentId && (
        <div id="details-table">
          <table>
            <tbody>
              <tr>
                <td className="TableLabel">id</td>
                <td id="intent-id" className="TableContent">{intentId}</td>
              </tr>
              <tr>
                <td className="TableLabel">status</td>
                <td id="intent-status" className="TableContent">{status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
