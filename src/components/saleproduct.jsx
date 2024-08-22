import React, { useState } from 'react'
import mainc from '../assets/images/mainc-1.jpg'
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';
import { toast } from 'react-toastify';
import allData from '../data.json';
import ImageModal from './imagemodel';

const Saleproduct = () => {
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // useState is correctly placed
  
    const handleShowModal = (product) => {
      setSelectedProduct(product);
      setModalShow(true);
    };


  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedProduct(null);
  };

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      toast.success('Added to cart!');
    };
  
    if (!Array.isArray(allData.all)) {
      return <div>Error: Product data is not an array</div>;
    }
   

    // Filter products based on the search query
    const filteredProducts = allData.all.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Determine the products to display: all products if no search query, otherwise filtered products
    const productsToShow = searchQuery ? filteredProducts : allData.all;

    const clearSearch = () => setSearchQuery('');
  return (
  <>
  
  <section className="my-5">
  <div className="container">
    <div className='d-md-flex   justify-content-center mt-lg-5 mb-lg-5 mt-0 mb-0'>
  <h2 className='text-center '>
          <span className='border-red pe-2'>Flash</span> Sale
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
    <div className="row">
    {productsToShow.map(product => (
      <div key={product.id} className="col-lg-3 col-sm-6">
        <div className="navcol">
          <div className="position-relative">
            <img
              className="w-100 card_img"
              src={product.imageUrl}
              alt={product.title}
              onClick={() => handleShowModal(product)}
            />
            <span className="discount position-absolute">50% OFF</span>
            <span className="like_icon">
              {/* <i className="far fa-heart p-0 position-absolute bg-white" /> */}
              <CiHeart className='p-0 position-absolute bg-white like_icon'/>
            </span>
          </div>
          <div className="tab_contents mb-4">
            <ul className="tab_circle d-flex p-0 my-3">
              <li className="color1" />
              <li className="color2" />
              <li className="color3" />
              <li className="color4" />
            </ul>
            <h6 className="tab_h1">{product.subtitle}</h6>
            <h6 className="tab_h2">{product.title}</h6>
            <div className='d-flex justify-content-between   align-items-center'>
                <div>
              <span className="tab_price">{product.priceINR}</span>
              <span className="tab_price1">$30.00</span>
              </div>
              <div>
                <button  onClick={() => handleAddToCart(product)} className='btnp2' >add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
  {selectedProduct && (
        <ImageModal
          show={modalShow}
          handleClose={handleCloseModal}
          imageUrl={selectedProduct.imageUrl}
          title={selectedProduct.title}
        />
      )}
</section>

  </>
  )
}

export default Saleproduct