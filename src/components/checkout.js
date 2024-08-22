import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../redux/slice'
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'
import OrderSummary from './orderSummery'


export default function Checkout() {
  const cartItems = useSelector( state => state.cart.cart)
  console.log(cartItems);
  const dispatch = useDispatch()

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize with quantity 1 for each item
      return acc;
    }, {})
  )

  const parsePrice = (priceString) => {
    // Remove currency symbol and commas, then parse to float
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ''))
  }
  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const  Subtotal = cartItems.reduce((total,item) => total + parsePrice(item.priceINR) * (quantities[item.id] || 1),0)
  const DeliveryCharge = 100
  const total = Subtotal + DeliveryCharge ;
  return (
    <div>
      <Header/>   
         <>
  <div className="container py-3  mt-80 ">
    <div className='text-center py-sm-4 py-0'>
    <h1 > <span className='border-red'>Shopping</span> Cart</h1>
    </div>
    <div className="row">
        <>
      <div className="col-12 col-sm-12 col-md-8 col-lg-8">
        <hr />
        <div className="cart-item py-2">
        {cartItems.length > 0 ? (
          <div className="row">
          {cartItems.map( item => { 
             return(
            <div className="col-12 col-sm-12 col-md-6 col-lg-10">
              <div className="d-flex justify-content-between mb-3">
                <img
                  className="cart-image d-block"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="mx-3">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <span className='d-flex align-items-center'>
                  <h5>{item.priceINR}</h5>  
                   <small >
                          <select
                            className="form-select w-0 ms-3 px-3 py-0"
                            value={quantities[item.id] || 1}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          >
                            {[1, 2, 3, 4].map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                        </small>
                        </span>
                  <small className="text-white px-2 py-1 d-inline-block rounded-3 mt-2 bg-c">
                    In Stock
                  </small>
                

                  <samll><button className="text-white bg-danger px-2 py-1 d-inline-block b-1 rounded-3 mt-2 remove_btn ms-3"   onClick={() => dispatch(removeFromCart({id: item.id}))} >Remove</button></samll>
                </div>
              </div>
            </div>
             )
          })}
          </div>
        ):(
          <div className="text-center">
          <h5>Your cart is empty.</h5>
        </div>
        )}
        </div>
        <hr />
       
      </div>
      </>
         <div className="col-12 col-sm-12 col-md-4 col-lg-4">
      <OrderSummary 
      subtotal={Subtotal}
      deliveryCharge={DeliveryCharge}
      total={total}
      />
       </div>
    </div>
  </div>
</>
<Footer/>
</div>
  )
}


