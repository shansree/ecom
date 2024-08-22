import React from 'react'
import doubleimg1 from '../assets/images/doubleimg1.png'
import doubleimg2 from '../assets/images/doubleimg2.png'
import { FaArrowRight } from "react-icons/fa";

const Lovedcollc = () => {
  return (
    <>
    <section className="position-relative collection_section pt-4">
  <div className="container">
    <h2 className="text-center collection_h1 mt-5 ">Most Loved Collections</h2>
    <div className="row my-5">
      <div className="col-lg-6">
        <div className="collection_col1">
          <div className="overflow-hidden">
            <img
              className="w-100"
              src={doubleimg1}
              alt="collectioni_img"
            />
          </div>
          <div className="d-flex justify-content-between px-3 my-4">
            <h3 className="collection_h2">Classic Knitwear Fashions</h3>
            <span>
            
              <FaArrowRight className='collection_icon' />
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="collection_col1">
          <div className="overflow-hidden">
            <img
              className="w-100"
              src={doubleimg2}
              alt="collectioni_img"
            />
          </div>
          <div className="d-flex justify-content-between px-3 my-4">
            <h3 className="collection_h2">Elasticated Bodice Dresses</h3>
            <span>
          
              <FaArrowRight className='collection_icon' />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Lovedcollc