// App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Q9cHWK28V3iJjZihIi694KfGUQCu267cQdteKkeveabPcsS0AJmrNMoY4bvA03VnE1kO3E2QLmnFJ1Ev3ugvxkV00bO5x9PuL');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default App;
