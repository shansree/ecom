import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Visionpro } from './vishionpro';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='container-fluid mt-80' style={{ background: 'gray' }}>
        <div className='row'>
          <div className='col-lg-4  m-auto'>
            <div class='slider-content'>
              <h2 className='banner-cnt1'>Celebrate Autumn</h2>
              <h1 className='banner-cnt2'>
                New Arrivals Are Here! <br /> Discover the Latest Trends!
              </h1>
              <a class='Shop-btn' href='#'>
                shop now
              </a>
            </div>
          </div>
          <div className='col-lg-8'>
            <div style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
              <Canvas camera={{ position: [0, 0, 1], fov: 80 }}>
                <OrbitControls enableZoom={false} enableRotate={true} />
                <Environment preset='city' />
                <Visionpro scale={[5, 5, 5]} />
                <mesh />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
