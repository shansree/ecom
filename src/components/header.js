import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/style.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/images/logo1.avif';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className='desktop-header fade-in-down'>
        <DesktopHeader
          cartItems={cartItems}
          isActive={isActive}
          navigate={navigate}
        />
      </div>
      <div className='mobile-header'>
        <MobileHeader
          cartItems={cartItems}
          isActive={isActive}
          navigate={navigate}
        />
      </div>
    </>
  );
}

function DesktopHeader({ cartItems, isActive, navigate }) {
  return (
    <div className='container mb-2'>
      <nav className='navbar navbar-expand-md navbar-light bg-white'>
        <div className='container-fluid p-0'>
          <div className='col-lg-2'>
            <a className='navbar-brand text-uppercase fw-bold' href='#'>
              {/* <span className="border-red pe-2">New</span>Product */}
              <img src={logo} className='logo' />
            </a>
          </div>
          <div className='col-lg-7'>
            <div className='collapse navbar-collapse' id='myNav'>
              <div className='navbar-nav ms-auto'>
                <a
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={() => navigate('/')}
                  aria-current='page'
                >
                  Home
                </a>
                <a
                  className={`nav-link ${isActive('/Womens') ? 'active' : ''}`}
                  onClick={() => navigate('/Womens')}
                >
                  Women's
                </a>
                <a
                  className={`nav-link ${isActive('/Mens') ? 'active' : ''}`}
                  onClick={() => navigate('/Mens')}
                >
                  Men's
                </a>
                <a
                  className={`nav-link ${isActive('/Kids') ? 'active' : ''}`}
                  onClick={() => navigate('/Kids')}
                >
                  Kid's
                </a>
                <a
                  className={`nav-link ${
                    isActive('/Accessories') ? 'active' : ''
                  }`}
                  onClick={() => navigate('/Accessories')}
                >
                  Accessories
                </a>
                <a
                  className={`nav-link ${
                    isActive('/Cosmetices') ? 'active' : ''
                  }`}
                  onClick={() => navigate('/Cosmetices')}
                >
                  Cosmetics
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3  d-flex   justify-content-end'>
            <span className='d-flex align-items-center ms-4 '>
              <FaSearch size={22} className='me-4 icon-c' />
              <FaUser size={23} className='me-4 icon-c' />
              <Link to='/Checkout' className='text-decoration-none'>
                <FaShoppingCart
                  size={23}
                  color='black'
                  className='text-decoration-none icon-c'
                />
                <small className='bag-no'>{cartItems.length}</small>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

function MobileHeader({ cartItems, isActive, navigate }) {
  return (
    <div className='container mb-2'>
      <nav className='navbar navbar-light bg-white'>
        <div className='container-fluid p-0'>
          <a className='navbar-brand text-uppercase fw-bold m-0' href='#'>
            {/* <span className='border-red pe-2'>New</span>Product */}
            <img src={logo} className='logo' />
          </a>
          <span className='d-flex align-items-center'>
          <FaSearch size={22} className='me-4 icon-c' />
            <FaUser size={23}  className='me-3 icon-c' />
            <span className='position-relative'>
            <Link to='/Checkout' className='text-decoration-none'>
              <FaShoppingCart
                size={23}
                
                className='text-decoration-none icon-c'
              />
              <small className='bag-no '>{cartItems.length}</small>
            </Link>
            </span>
          </span>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#myNav'
            aria-controls='myNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='myNav'>
            <div className='navbar-nav ms-auto'>
              <a
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => navigate('/')}
                aria-current='page'
              >
                Home
              </a>
              <a
                className={`nav-link ${isActive('/Womens') ? 'active' : ''}`}
                onClick={() => navigate('/Womens')}
              >
                Women's
              </a>
              <a
                className={`nav-link ${isActive('/Mens') ? 'active' : ''}`}
                onClick={() => navigate('/Mens')}
              >
                Men's
              </a>
              <a
                className={`nav-link ${isActive('/Kids') ? 'active' : ''}`}
                onClick={() => navigate('/Kids')}
              >
                Kid's
              </a>
              <a
                className={`nav-link ${
                  isActive('/Accessories') ? 'active' : ''
                }`}
                onClick={() => navigate('/Accessories')}
              >
                Accessories
              </a>
              <a
                className={`nav-link ${isActive('/Cosmetices') ? 'active' : ''}`}
                onClick={() => navigate('/Cosmetices')}
              >
                Cosmetics
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
