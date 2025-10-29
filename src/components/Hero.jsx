import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import logoVideo from "../assets/vedio/kaira_logo_ved.webm";
import background from "../assets/images/Hero-background.webp";
import ImageSlider from "./ImageSlider";
import Form from "./Form";
import DC from "../assets/images/Dc_Converted.png";

import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image5 from "../assets/images/image5.webp";
import image6 from "../assets/images/image6.webp";
import image7 from "../assets/images/image7.webp";

// Reusable Animated Image Component
const AnimatedImage = ({ src, alt, initialClass, finalClass, isAnimated }) => {
  const classes = `
    absolute transition-all duration-[1500ms] ease-out
    ${finalClass}
    ${isAnimated ? "opacity-100" : `${initialClass} opacity-0`}
    w-[200px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[450px]
    object-contain overflow-hidden
  `;

  const imageClasses =
    "w-full h-full object-contain hover:scale-105 transition-transform overflow-hidden";

  return (
    <div className={classes}>
      <img src={src} alt={alt} className={imageClasses} />
    </div>
  );
};

// Text Content

export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [phase, setPhase] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  useEffect(() => {
    // Trigger initial animation
    const initialTimer = setTimeout(() => setIsAnimated(true), 100);

    // Cycle every 6 seconds
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setIsAnimated(false);

      setTimeout(() => {
        // Move forward by 4 so that all 7 images appear over time
        setPhase((prev) => (prev + 4) % images.length);
        setIsTextVisible(true);
        setIsAnimated(true);
      }, 300);
    }, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [images.length]);

  // Helper to get next image by offset
  const getCurrentImageSrc = (offset) => {
    const imageIndex = (phase + offset) % images.length;
    return images[imageIndex];
  };

  // Initial/Off-screen positions
  const initial_TL = "translate-x-[-100vw] translate-y-[-100vh]";
  const initial_TR = "translate-x-[100vw] translate-y-[-100vh]";
  const initial_BL = "translate-x-[-100vw] translate-y-[100vh]";
  const initial_BR = "translate-x-[100vw] translate-y-[100vh]";

  // Final/Visible positions
  const final_TL = "top-[-250px] left-[200px] rotate-[135deg]";
  const final_TR = "top-[-200px] right-[150px] rotate-[-135deg]";
  const final_BL = "bottom-[-200px] left-[40px] rotate-[35deg]";
  const final_BR = "bottom-[-200px] right-[40px] rotate-[-35deg]";

  const textTransitionClass = `
    transition-opacity duration-700 ease-in-out
    ${isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
  `;

  return (
    <>
      <div
        className='relative hidden md:flex flex-col items-center text-center min-h-[600px] md:min-h-[120vh] overflow-hidden px-4 md:pt-25 sm:px-10 md:px-20'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Animated Images - 4 positions */}
        <AnimatedImage
          src={getCurrentImageSrc(0)}
          alt='Top Left Image'
          initialClass={initial_TL}
          finalClass={final_TL}
          isAnimated={isAnimated}
        />
        <AnimatedImage
          src={getCurrentImageSrc(1)}
          alt='Top Right Image'
          initialClass={initial_TR}
          finalClass={final_TR}
          isAnimated={isAnimated}
        />
        <AnimatedImage
          src={getCurrentImageSrc(2)}
          alt='Bottom Left Image'
          initialClass={initial_BL}
          finalClass={final_BL}
          isAnimated={isAnimated}
        />
        <AnimatedImage
          src={getCurrentImageSrc(3)}
          alt='Bottom Right Image'
          initialClass={initial_BR}
          finalClass={final_BR}
          isAnimated={isAnimated}
        />

        {/* Main content */}
        <div className={`z-10 max-w-5xl ${textTransitionClass}`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='h-[150px] sm:h-[200px] md:h-[300px] w-auto object-contain mx-auto'>
            <source src={logoVideo} type='video/webm' />
            Your browser does not support the video tag.
          </video>
          <h1 className='mt-4 sm:mt-6 text-5xl sm:text-7xl md:text-8xl lg:text-7xl text-brown font-primary font-medium tracking-tighter'>
            Experience the perfect blend of luxury and nature
          </h1>

          <h2 className='font-primary text-base sm:text-xl md:text-2xl lg:text-3xl text-brown mt-4 tracking-tighter px-4 sm:px-10'>
            Up to 22% ROI Annually | Clear Titles | Coffee Estates | Luxury Villas
          </h2>
          <p className='flex text-center justify-center items-center gap-2 text-brown font-primary pt-5'>
            <MapPin className='text-brown-light w-5 h-5' />
            Janakere - Sakleshpur, Karnataka
          </p>
          <div className='pt-12'>
            <button
              className='font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer'
              onClick={() => setIsFormOpen(true)}>
              Express Your Interest Now
            </button>
          </div>
          {isFormOpen && (
            <Form
              isFormOpen={isFormOpen}
              isFormClose={() => setIsFormOpen(false)}
            />
          )}
                  <div className='absolute top-1/8 -z-10 rotate-[30deg] right-1/8'>
          <img
            src={DC}
            alt='DC converted site badge'
            className='h-[250px] w-auto opacity-60'
          />
        </div>

        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='md:hidden p-5 flex flex-col items-center'>
        <div className={`z-10 max-w-5xl ${textTransitionClass}`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='h-[150px] sm:h-[200px] md:h-[300px] w-auto object-contain mx-auto'>
            <source src={logoVideo} type='video/webm' />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1 className='mt-4 sm:mt-6 text-center text-2xl sm:text-7xl md:text-8xl lg:text-9xl text-brown font-primary font-medium tracking-tighter'>
              Experience the perfect blend of luxury and nature
            </h1>
            <h2 className='font-primary text-base text-center sm:text-xl md:text-2xl lg:text-3xl text-brown mt-4 tracking-tighter px-4 sm:px-10'>
              Up to 22% ROI Annually | Clear Titles | DC Converted Land
            </h2>
            <p className='flex text-center justify-center items-center gap-2 text-brown font-primary pt-5'>
              <MapPin className='text-brown-light w-5 h-5' />
              Janakere - Sakleshpur, Karnataka
            </p>
            <div className='pt-12 flex justify-center'>
              <button
                className='font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer'
                onClick={() => setIsFormOpen(true)}>
                Express Your Interest Now
              </button>
            </div>
            {isFormOpen && (
              <Form
                isFormOpen={isFormOpen}
                isFormClose={() => setIsFormOpen(false)}
              />
            )}
            <div className='flex justify-center items-center'>
              <img
                src={DC}
                alt='DC convereted site badge'
                className='h-[150px] w-auto'
              />
            </div>
          </div>
          <div className='max-w-[400px] overflow-clip pt-10'>
            <ImageSlider />
          </div>
        </div>
      </div>
    </>
  );
}
