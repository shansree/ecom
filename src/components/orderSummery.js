import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({
  subtotal,
  deliveryCharge,
  total,
  showButton = true,
}) => {
  return (
    <div className='bg-light rounded-3 p-4 '>
      <h6 className='mb-4'>Order Summary</h6>
      <div className='d-flex justify-content-between align-items-center'>
        <div>Subtotal</div>
        <div>
          <strong>Rs. {subtotal}</strong>
        </div>
      </div>
      <hr />
      <div className='d-flex justify-content-between align-items-center'>
        <div>Delivery Charge</div>
        <div>
          <strong>Rs. {deliveryCharge}</strong>
        </div>
      </div>
      <hr />
      <div className='d-flex justify-content-between align-items-center'>
        <div>Total</div>
        <div>
          <strong>Rs. {total}</strong>
        </div>
      </div>
      {showButton && (
        <Link to='/Order'>
          <button className='btn bg-c w-100 mt-4 text-white'>Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default OrderSummary;
