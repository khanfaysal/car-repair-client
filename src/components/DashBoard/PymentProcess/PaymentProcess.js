import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import SplitForm from '../SplitForm/SplitForm';

const stripePromise = loadStripe("pk_test_51Ie26ALstiLgnyqZMmk2IeNmMgksuMkDLbueiU4sI35XDbzX1OqOVlaS9fYxHNuQFT74rVPujJx2mkbiCfjurtRz00NtPnzWVz");

const PaymentProcess = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  return (
    <>
      <Elements stripe={stripePromise}>
        <SplitForm
          paymentSuccess={paymentSuccess} setPaymentSuccess={setPaymentSuccess}
          paymentError={paymentError} setPaymentError={setPaymentError}
        ></SplitForm>
        <div className="text-center">
          {
            paymentError && <p className="text-danger">{paymentError}</p>
          }
          {
            paymentSuccess && <p className="text-success">Your payment succeeded.</p>
          }
        </div>
      </Elements>
    </>
  );
};

export default PaymentProcess;