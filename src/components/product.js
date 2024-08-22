import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allData from '../data.json';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

export function Product1() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();

  // Add to cart functionality
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  if (!Array.isArray(allData.all)) {
    return <div>Error: Product data is not an array</div>;
  }
  // filter functionality
  const filteredProducts = allData.all.filter((product) => {
    return (
      (!selectedSize || product.size === selectedSize) &&
      (!selectedColor || product.color === selectedColor)
    );
  });
  return (
    <div>
      <div className='container mb-5'>
        <h2 className='text-center mt-5 mb-4'>
          <h2 className='hotpick_h1 text-center my-5'>
            <span className='border-red'>Hot </span>Picks For You
          </h2>
        </h2>
        <div className='d-flex justify-content-center mb-4'>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className='form-select me-3 filter-dropdown'
          >
            <option value=''>Filter by Size</option>
            {[...new Set(allData.all.map((product) => product.size))].map(
              (size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              )
            )}
          </select>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className='form-select filter-dropdown'
          >
            <option value=''>Filter by Color</option>
            {[...new Set(allData.all.map((product) => product.color))].map(
              (color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              )
            )}
          </select>
        </div>
        <div className='row'>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className='col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3'
            >
              <div className='product'>
                <img src={product.imageUrl} alt={product.title} />
                <ul className='d-flex align-items-center justify-content-center list-unstyled icons'>
                  <li className='icon'>
                    <FaExpandArrowsAlt />
                  </li>
                  <li className='icon mx-3'>
                    <FaRegHeart />
                  </li>
                  <span onClick={() => handleAddToCart(product)}>
                    <li className='icon'>
                      <FaCartPlus />
                    </li>
                  </span>
                </ul>
              </div>
              <div className='tag bg-red'>sale</div>
              <div className='tab_h2 pt-4 pb-1'>{product.title}</div>
              <div className='d-flex align-content-center justify-content-center'>
                <span className='fas fa-star' />
                <FaStar className='fa-star' />
                <FaStar className='fa-star' />
                <FaStar className='fa-star' />
                <FaStar className='fa-star' />
                <FaStar className='fa-star' />
              </div>
              <div className='price'>{product.priceINR}</div>
              <div className='card3-size'>
                <p className='tab_h1'>{product.subtitle}</p>
                <p className='tab_h1'>Size:{product.size}</p>
              </div>
              <div>
                <p className='card-text'>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
