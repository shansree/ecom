import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Newslatter = () => {
  return (
    <>
    <section>
  <div className="container">
    <div className="text-center newsltr_section mb-5">
      <h2 className="newsltr_h1 mb-4">Newsletter</h2>
      <h2 className="newsltr_h2 mb-5">
        Subscribe to get the latest updates and 20% Off first order
      </h2>
      <div className="d-flex input_content">
        <span className="email_input">
          <input
            type="email"
            className="mb-4"
            id="email"
            name="email"
            placeholder="Email Address"
          />
        </span>
        <span>
          <button type="button" className="banner_button  d-flex">
            <span className="pe-2 pb-1"> Subscribe </span>

            <FaArrowRight className='ps-2 pb-1' />
          </button>
        </span>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Newslatter