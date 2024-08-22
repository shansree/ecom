import React from 'react'
import fitimg2 from '../assets/images/fitimg2.png'

const Discount = () => {
  return (
    <>
    <section className="my-5">
  <div className="d-flex justify-content-center discount_sec  ">
    <div className="img_border">
      <img src={fitimg2} alt="sale-pic" />
    </div>
    <div>
      <h3 className="discount_h1">UP TO</h3>
      <h2 className="d-flex">
        <span className="discount_h2">30%</span>
        <span className="discount_h3">OFF</span>
      </h2>
      <h3 className="discount_h4">EVERYTHING</h3>
    </div>
  </div>
</section>

    </>
  )
}

export default Discount