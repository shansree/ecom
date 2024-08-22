import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import OrderSummary from '../components/orderSummery';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com'; // Import EmailJS
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handelshowButton = false;

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize with quantity 1 for each item
      return acc;
    }, {})
  );

  const parsePrice = (priceString) => {
    // Remove currency symbol and commas, then parse to float
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ''));
  };

  const Subtotal = cartItems.reduce(
    (total, item) =>
      total + parsePrice(item.priceINR) * (quantities[item.id] || 1),
    0
  );
  const DeliveryCharge = 100;
  const total = Subtotal + DeliveryCharge;

  const [formData, setFormData] = useState({
    firstName: '',
    number: '',
    address: '',
    country: '',
    state: '',
    zip: '',
    paymentMethod: 'Cash on Delivery',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    shippingSame: false,
    saveInfo: false,
  });


  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const checkFormComplete = () => {
      const requiredFields = ['firstName', 'number', 'address', 'country', 'state', 'zip'];
      return requiredFields.every((field) => formData[field].trim() !== '');
    };

    setIsFormComplete(checkFormComplete());
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        number: formData.number,
        address: formData.address,
        country: formData.country,
        state: formData.state,
        zip: formData.zip,
        paymentMethod: formData.paymentMethod,
        cardName: formData.cardName,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        shippingSame: formData.shippingSame ? 'Yes' : 'No',
        saveInfo: formData.saveInfo ? 'Yes' : 'No',
        subtotal: Subtotal,
        deliveryCharge: DeliveryCharge,
        total: total,
      };
    
    // Send email using EmailJS
    emailjs.send('service_95yrnu5', 'template_ggogexc', emailParams, 'sbTvVDtovUEhP0Mlu')
      .then((result) => {
        toast.success('Order Placed SuccessFully!');
        setFormData('')
        navigate('/')
       
      }, (error) => {
        alert('Error placing order.');
      });
  };
  return (
    <>
      <Header />
      <div className='mt-80'>
        <div className='py-4 text-center '>
          <h1><span className='border-red'>Checkout</span> Form</h1>
        </div>
      </div>

      <div className='container mb-5'>
        <div className='row check-layout'>
          <div className='col-md-4 order-2'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='mt-4 mt-sm-0'>Your Cart</span>
            </h4>
            <OrderSummary
              subtotal={Subtotal}
              deliveryCharge={DeliveryCharge}
              total={total}
              showButton={handelshowButton}
            />
          </div>

          <div className='col-md-8 order-1'>
            <h4 className='mb-3 mt-3  mt-sm-0 '>Billing Address</h4>
            <form onSubmit={handleSubmit} className='orderForm'>
              <div className='row'>
                <div className='col-lg-6 mb-4'>
                  <label htmlFor='firstName' className='lable-style'> First Name </label>
                  <input
                    type='text'
                    name='firstName'
                    className='form-control'
                    placeholder='First name'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className='mb-4 col-lg-6'>
                  <label htmlFor='number' className='lable-style'>Contact No</label>
                  <input
                    type='number'
                    name='number'
                    className='form-control'
                    placeholder='12345'
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-sm-12 mb-sm-0  mb-3'>
                  <label htmlFor='country' className='lable-style'>Country</label>
                  <select
                    name='country'
                    className='form-select'
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value=''>Choose...</option>
                    <option value='1'>India</option>
                    <option value='2'>Dubai</option>
                    <option value='3'>Austraila</option>
                  </select>
                </div>
                <div className='col-lg-4 col-sm-12 mb-sm-0  mb-3'>
                  <label htmlFor='state' className='lable-style'>State</label>
                  <select
                    name='state'
                    className='form-select'
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value=''>Choose...</option>
                    <option value='1'>Tamilnadu</option>
                    <option value='2'>Kerala</option>
                    <option value='3'>Karnataka</option>
                  </select>
                </div>
                <div className='col-lg-4 col-sm-12 mb-4'>
                  <label htmlFor='zip' className='lable-style'>Zip Code</label>
                  <input
                    type='text'
                    name='zip'
                    className='form-control'
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </div>
                <div className='mb-4 col-lg-12'>
                  <label htmlFor='address' className='lable-style'>Address</label>
                  <textarea
                    type='text'
                    name='address'
                    className='form-control'
                    placeholder='1234 Main St'
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <hr className='mb-4' />

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='shippingSame'
                    checked={formData.shippingSame}
                    onChange={handleChange}
                    id='flexCheckDefault'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckDefault'
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='saveInfo'
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    id='flexCheckChecked'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckChecked'
                  >
                    Save this information for next time
                  </label>
                </div>

                <hr className='mb-4 mt-4' />

                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='paymentMethod'
                    value='Credit card'
                    checked={formData.paymentMethod === 'Credit card'}
                    onChange={handleChange}
                    id='flexRadioDefault1'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexRadioDefault1'
                  >
                    Credit card (Default)
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='paymentMethod'
                    value='Debit card'
                    checked={formData.paymentMethod === 'Debit card'}
                    onChange={handleChange}
                    id='flexRadioDefault2'
                  />
                  <label
                    className='form-check-label '
                    htmlFor='flexRadioDefault2'
                  >
                    Debit card
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='paymentMethod'
                    value='Cash on Delivery'
                    checked={formData.paymentMethod === 'Cash on Delivery'}
                    onChange={handleChange}
                    id='flexRadioDefault3'
                  />
                  <label
                    className='form-check-label  lable-style'
                    htmlFor='flexRadioDefault3'
                  >
                    Cash on Delivery
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='paymentMethod'
                    value='Paypal'
                    checked={formData.paymentMethod === 'Paypal'}
                    onChange={handleChange}
                    id='flexRadioDefault4'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexRadioDefault4'
                  >
                    Paypal
                  </label>
                </div>

                {formData.paymentMethod === 'Credit card' && (
                  <>
                    <div className='row'>
                      <div className='col mb-4'>
                        <label className='lable-style' htmlFor='cardName'>Name on card</label>
                        <input
                          type='text'
                          name='cardName'
                          className='form-control'
                          value={formData.cardName}
                          onChange={handleChange}
                          aria-label='cardName'
                        />
                        <small className='text-muted'>
                          Full name, as displayed on the card
                        </small>
                      </div>

                      <div className='col mb-4'>
                        <label  className='lable-style' htmlFor='cardNumber'>Credit card Number</label>
                        <input
                          type='text'
                          name='cardNumber'
                          className='form-control'
                          value={formData.cardNumber}
                          onChange={handleChange}
                          aria-label='cardNumber'
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col mb-3'>
                        <label  className='lable-style' htmlFor='expiryDate'>Expiry Date</label>
                        <input
                          type='text'
                          name='expiryDate'
                          className='form-control'
                          value={formData.expiryDate}
                          onChange={handleChange}
                          aria-label='expiryDate'
                        />
                      </div>

                      <div className='col mb-3'>
                        <label  className='lable-style' htmlFor='cvv'>CVV</label>
                        <input
                          type='text'
                          name='cvv'
                          className='form-control'
                          value={formData.cvv}
                          onChange={handleChange}
                          aria-label='cvv'
                        />
                      </div>
                    </div>
                  </>
                )}

                <hr className='mb-4 mt-4' />

                <div className='text-center d-flex justify-content-center'>
                  <button className='btn bg-btn' type='submit'  disabled={!isFormComplete}>
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Order;
