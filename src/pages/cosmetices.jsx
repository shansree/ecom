import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import { toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';
import allData from '../data.json';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Cosmetices = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  if (!Array.isArray(allData.Cosmetics)) {
    return <div>Error: Product data is not an array</div>;
  }
    // Filter products based on the search query
    const filteredProducts = allData.Cosmetics.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Determine the products to display: all products if no search query, otherwise filtered products
    const productsToShow = searchQuery ? filteredProducts : allData.Cosmetics;
  
    const clearSearch = () => setSearchQuery('');
  return (
    <>
      <Header/>
    <div>
      <div className='container mb-lg-5 mt-105'>
      <div className='d-md-flex   justify-content-center mt-lg-5 mb-lg-5 mt-0 mb-0'>
        <h2 className='text-center '>
          <span className='border-red pe-2'>Essential</span> Dress Cosmetics
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
          {/* {allData.Cosmetics.map(product => (
            <div key={product.id} className='col-12 col-sm-8 col-md-6 col-lg-4'>
              <div className='card'>
                <img
                  className='card-img'
                  src={product.imageUrl}
                  alt={product.title}
                />
                <div className=''>
                  <a href={product.link} className='card-link text-danger like'>
                    <i className='fas fa-heart' />
                  </a>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>{product.title}</h4>
                  <h6 className='card-subtitle mb-2 text-muted'>
                    {product.subtitle}
                  </h6>
                  <p className='card-text'>
                    {product.description}
                  </p>
                  <div className='buy d-flex justify-content-between align-items-center'>
                    <div className='price text-success'>
                      <h5 className='mt-4'>{product.priceINR}</h5>
                    </div>
                    <button onClick={() => handleAddToCart(product)} className='btn bg-btn mt-3'>
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
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
    <Footer/>
    </>
  
  )
}

export default Cosmetices