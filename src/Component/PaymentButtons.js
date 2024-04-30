import React from 'react';
import paypalLogo from './image/paypal-blue-logo-text-19568.svg';
import stripeLogo from './image/stripe-blue-logo-19554.svg';
import payoneerLogo from './image/payoneer-credit-card-payment-method-19707.svg';
const PaymentButtons = ({ onSelectPaymentMethod }) => {
  const handlePayPalPayment = () => {
    onSelectPaymentMethod('PayPal');
  };

  const handleStripePayment = () => {
    onSelectPaymentMethod('Stripe');
  };

  const handlePayoneerPayment = () => {
    onSelectPaymentMethod('Payoneer');
  };

  return (
    <div className='payment'>
      <div className='payment-buttons'>
        <button className='paypal-button' onClick={handlePayPalPayment}>
          <img src={paypalLogo} alt="PayPal" />
        </button>
        <button className='stripe-button' onClick={handleStripePayment}>
          <img src={stripeLogo} alt="Stripe" />
        </button>
        <button className='payoneer-button' onClick={handlePayoneerPayment}>
          <img src={payoneerLogo} alt="Payoneer" />
        </button>
      </div>
    </div>
  );
};

export default PaymentButtons;
