import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import allData from '../data.json';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Kids = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  // Add to cart functionality
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  if (!Array.isArray(allData.kids)) {
    return <div>Error: Product data is not an array</div>;
  }

  // Filter products based on the search query
  const filteredProducts = allData.kids.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine the products to display: all products if no search query, otherwise filtered products
  const productsToShow = searchQuery ? filteredProducts : allData.kids;

  const clearSearch = () => setSearchQuery('');
  return (
    <>
      <Header />
      <div>
        <div className='container mb-lg-5 mt-105'>
          <div className='d-md-flex   justify-content-center mt-lg-5 mb-lg-5 mt-0 mb-0'>
            <h2 className='text-center '>
              <span className='border-red pe-2'>Tiny</span>Trends The Latest in
              Kids' Dress
            </h2>
            <div className='position-relative my-4 my-md-0'>
              <input
                type='text'
                placeholder='Search products...'
                className='form-control w-100 ms-0 ms-sm-3  search-field'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type='button'
                  className='btn btn-link position-absolute search-close '
                  onClick={clearSearch}
                >
                  x
                </button>
              )}
            </div>
          </div>

          <div className='row'>
            {productsToShow.map((product) => (
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
                </div>
                <div>
                  <p className='card-text'>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kids;
