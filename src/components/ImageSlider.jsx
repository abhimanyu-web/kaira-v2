import React from 'react';

// 1. Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import image1 from '../assets/images/polaroid/pimage1.webp';
import image2 from '../assets/images/polaroid/pimage2.webp';
import image3 from '../assets/images/polaroid/pimage3.webp';
import image4 from '../assets/images/polaroid/pimage4.webp';
import image5 from '../assets/images/polaroid/pimage5.webp';
import image6 from '../assets/images/polaroid/pimage6.webp';
import image7 from '../assets/images/polaroid/pimage7.webp';
import image8 from '../assets/images/polaroid/pimage8.webp';
import image9 from '../assets/images/polaroid/pimage9.webp';
import image10 from '../assets/images/polaroid/pimage10.webp';

// --- Your Image Data ---
// IMPORTANT: Replace these with the paths to your actual Polaroid images
const slides = [
  {
    image: image1,
    caption: 'The Garedi Mane',
  },
  {
    image: image2,
    caption: 'Our Picturesque Site',
  },
  {
    image: image3,
    caption: 'The Courtyard',
  },
  {
    image: image4,
    caption: 'Cozy Interiors',
  },
  {
    image: image5,
    caption: 'Cozy Interiors',
  },
  {
    image: image6,
    caption: 'Cozy Interiors',
  },
  {
    image: image7,
    caption: 'Cozy Interiors',
  },
  {
    image: image8,
    caption: 'Cozy Interiors',
  },
  {
    image: image9,
    caption: 'Cozy Interiors',
  },
  {
    image: image10,
    caption: 'Cozy Interiors',
  },
];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-screen mx-auto">
      <Swiper
        // 3. Add the modules you want to use
        modules={[Pagination]}
       
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'} // Shows a dynamic number of slides  
        
        // Tailwind classes for the wrapper
        className="h-96" 
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-64"> {/* Set a fixed width for slides */}
            <div className="flex flex-col items-center text-center">
              <img 
                src={slide.image} 
                alt={slide.caption}
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;