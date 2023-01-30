import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LP7J5SCrxnwvMpd7FrlT84DQKsED3q8QjDU3L0jV7IEw3ECM78c1PXvLxlmw6fmvJfmahSQ2yPlb0XZiLqJlgjp00l0YyjrBR');
  }

  return stripePromise;
}

export default getStripe;