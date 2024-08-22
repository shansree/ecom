import React from 'react';
import slideimg2 from '../assets/images/slideimg2.png';
import slideimg1 from '../assets/images/slideimg1.png';
import slideimg3 from '../assets/images/slideimg3.png';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className='container'>
          <h2 className='ctg_h1  text-center'>
            <span className='border-red'>Shop</span> By Categories
          </h2>
          <div className='row my-5'>
            <div className='col-lg-4'>
              <div className='position-relative ctg_col1'>
                <img className='w-100 h-auto' src={slideimg2} alt='slideimg2' />
                <div
                  className='d-flex position-absolute ctg_h2'
                  onClick={() => navigate('/Womens')}
                >
                  <h3 className='m-0'>Women's Dresses</h3>
                  <FaArrowRight className='ctg_icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='position-relative ctg_col1'>
                <img className='w-100 h-auto' src={slideimg1} alt='slideimg1' />
                <div
                  className='d-flex position-absolute ctg_h2 '
                  onClick={() => navigate('/Mens')}
                >
                  <h3 className='m-0'>Men's Dresses</h3>
                  <FaArrowRight className='ctg_icon' />
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='position-relative ctg_col1'>
                <img className='w-100 h-auto' src={slideimg3} alt='slideimg3' />
                <div
                  className='d-flex position-absolute ctg_h2'
                  onClick={() => navigate('/Womens')}
                >
                  <h3 className='m-0'>Women's Tops</h3>
                  <FaArrowRight className='ctg_icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
