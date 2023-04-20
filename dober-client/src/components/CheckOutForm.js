import React, {useState, useEffect} from 'react';
import {AddressElement, PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';

const CheckOutForm = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1099,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
    }
  }, [stripe]);

  // Use a traditional checkout form.
  return (
    <form>
        <AddressElement options={{mode: 'shipping'}} />
    </form>
  );
}
export default CheckOutForm