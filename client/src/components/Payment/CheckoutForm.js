import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setMessage(
        paymentIntent.status === "succeeded"
          ? "Your payment succeeded"
          : "Unexpected error occurred"
      );
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData"));

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    fetch("http://localhost:5000/addBookAppointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <p className="text-black mb-4">Complete your payment here!</p>
      <PaymentElement />
      <button
        className="primary-btn py-2 px-3 mt-3"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? "Loading..." : "Pay now"}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}
