import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useMemo } from 'react';
import './SplitForm.css';

const useOptions = () => {

    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize: "18",
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      []
    );
  
    return options;
  };

const SplitForm = ({paymentSuccess, setPaymentSuccess, paymentError, setPaymentError}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    payload.error && setPaymentError(payload.error.message);
    payload.error && setPaymentSuccess(null);
    payload.paymentMethod && setPaymentSuccess(payload.paymentMethod.id);
    payload.paymentMethod && setPaymentError(null);
    console.log("[PaymentMethod]", payload);
  };
    return (
        <form onSubmit={handleSubmit} className="row">
            <label className="stripe-lebel col-md-6">
                Card number
                <CardNumberElement
                options={options}
                onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}
                />
            </label>
            <label className="stripe-lebel col-md-6">
                Expiration date
                <CardExpiryElement
                options={options}
                onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}
                />
            </label>
            <label className="stripe-lebel col-md-6">
                CVC
                <CardCvcElement
                options={options}
                onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}
                />
            </label>
            <div className="pt-4 col-md-6">
                <button className="stripe-btn px-5" type="submit" disabled={!stripe}>
                    Pay
                </button>&nbsp;
            </div>
            <p>Your Service Charge Will be {} </p>
        </form>
    );
};

export default SplitForm;