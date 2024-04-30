import React, { useState } from 'react';
import paypalLogo from './image/paypal-blue-logo-text-19568.svg';
import stripeLogo from './image/stripe-blue-logo-19554.svg';
import payoneerLogo from './image/payoneer-credit-card-payment-method-19707.svg';

const PaymentButtons = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayPalPayment = () => {
    // Redirect to PayPal dashboard
    window.open('https://www.paypal.com/us/webapps/mpp/payflow-payment-gateway');
  };

  const handleStripePayment = () => {
    // Redirect to Stripe dashboard or payment page
    window.open('https://stripe.com/in/payments');
  };

  const handlePayoneerPayment = () => {
    // Redirect to Payoneer dashboard or payment page
    window.open('https://discover.payoneer.com/get-paid/get-paid-samea-en?utm_medium=cpc&utm_source=Google&utm_campaign=Reg_SE_GEN_SAM_IN_PureBrand&utm_content=exact_payoneer&utm_term=payoneer&Placement=&Keyword=e&CampaignID=21024497180&utm_id=21024497180&utm_agid=159782269158&creative=690937884930&gclid=EAIaIQobChMI64SmqYzGhQMVf6pmAh1BrAZSEAAYASAAEgI32_D_BwE');
  };

  const handleSubmit = () => {
    if (selectedMethod === 'paypal') {
      handlePayPalPayment();
    } else if (selectedMethod === 'stripe') {
      handleStripePayment();
    } else if (selectedMethod === 'payoneer') {
      handlePayoneerPayment();
    }
  };

  return (
    <div className='payment'>
      <div className='payment-buttons'>
        <div className='payment-option'>
          <input
            type='radio'
            id='paypal'
            name='paymentMethod'
            value='paypal'
            checked={selectedMethod === 'paypal'}
            onChange={() => setSelectedMethod('paypal')}
          />
          <label htmlFor='paypal' className='payment-label'>
            <img src={paypalLogo} alt='PayPal' className='payment-image' />
          </label>
          <button className='paypal-button' onClick={handlePayPalPayment} style={{ display: 'none' }}></button>
        </div>
        <div className='payment-option'>
          <input
            type='radio'
            id='stripe'
            name='paymentMethod'
            value='stripe'
            checked={selectedMethod === 'stripe'}
            onChange={() => setSelectedMethod('stripe')}
          />
          <label htmlFor='stripe' className='payment-label'>
            <img src={stripeLogo} alt='Stripe' className='payment-image' />
          </label>
          <button className='stripe-button' onClick={handleStripePayment} style={{ display: 'none' }}></button>
        </div>
        <div className='payment-option'>
          <input
            type='radio'
            id='payoneer'
            name='paymentMethod'
            value='payoneer'
            checked={selectedMethod === 'payoneer'}
            onChange={() => setSelectedMethod('payoneer')}
          />
          <label htmlFor='payoneer' className='payment-label'>
            <img src={payoneerLogo} alt='Payoneer' className='payment-image' />
          </label>
          <button className='payoneer-button' onClick={handlePayoneerPayment} style={{ display: 'none' }}></button>
        </div>
      </div>
      <button className='submitb' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PaymentButtons;
