import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className='footer-section'>
        <div className='container'>
          <div className='footer-cta pt-5 pb-5'>
            <div className='row'>
              <div className='col-xl-4 col-md-4 mb-30'>
                <div className='single-cta'>
                  <i className='fas fa-map-marker-alt' />
                  <div className='cta-text'>
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 643217, kotagiri</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-md-4 mb-30'>
                <div className='single-cta'>
                  <i className='fas fa-phone' />
                  <div className='cta-text'>
                    <h4>Call us</h4>
                    <span>8072321809</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-md-4 mb-30'>
                <div className='single-cta'>
                  <i className='far fa-envelope-open' />
                  <div className='cta-text'>
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-content pt-5 pb-5'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 mb-50'>
                <div className='footer-widget'>
                  <div className='footer-logo'>
                    <a href=''>
                      <img
                        src='https://static.vecteezy.com/system/resources/previews/016/016/817/original/ecommerce-logo-free-png.png'
                        className='img-fluid'
                        alt='logo'
                      />
                    </a>
                  </div>
                  <div className='footer-text'>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className='footer-social-icon'>
                    <span>Follow us</span>
                    <a href='#'>
                      {/* <i className="fab fa-facebook-f facebook-bg" /> */}
                      <FaFacebook className='foot-icon' />
                    </a>
                    <a href='#'>
                      {/* <i className="fab fa-twitter twitter-bg" /> */}
                      <FaTwitter className='foot-icon' />
                    </a>
                    <a href='#'>
                      {/* <i className="fab fa-google-plus-g google-bg" /> */}
                      <FaInstagram className='foot-icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 mb-30'>
                <div className='footer-widget'>
                  <div className='footer-widget-heading'>
                    <h3>Useful Links</h3>
                  </div>
                  <ul className='list-unstyled'>
                    <li>
                      <a onClick={() => navigate('/')}>Home</a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/Womens')}>Women's</a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/Mens')}>Men's</a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/Kids')}>Kid's</a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/Accessories')}>
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a onClick={() => navigate('/Cosmetices')}>Cosmetics</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 mb-50'>
                <div className='footer-widget'>
                  <div className='footer-widget-heading'>
                    <h3>Subscribe</h3>
                  </div>
                  <div className='footer-text mb-25'>
                    <p>
                      Don’t miss to subscribe to our new Brands, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className='subscribe-form'>
                    <form action='#'>
                      <input type='text' placeholder='Email Address' />
                      <button>
                        {/* <i className="fab fa-telegram-plane" /> */}
                        <FaArrowRight className='subscribe-arrow' />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 text-center text-lg-left'>
                <div className='copyright-text'>
                  <p>
                    Copyright © 2024, All Right Reserved
                    <a href=''></a>
                  </p>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 d-none d-lg-block text-right'></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
