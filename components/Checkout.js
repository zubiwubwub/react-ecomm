import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import nProgress from 'nprogress';
import { useState } from 'react';
import SickButton from './styles/SickButton';

const { default: styled } = require('styled-components');

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const elements = useElements();
  const stripe = useStripe();

  async function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    setLoading(true);
    console.log('Gotta work on that');
    // 2 start the page transition
    nProgress.start();
    // 3 cereate payment method via stripe, token created if succesful
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    // 4 handle any errors from stripe
    if (error) {
      setError(error);
    }
    // 5 send token from step 3 to our keystone, via custom mutation!
    // 6 change the page to view order
    // 7 close the cart
    // 8 turn the loader off
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      <CardElement />
      <SickButton>Pay now</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };
