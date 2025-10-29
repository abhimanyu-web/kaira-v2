import { useState } from "react";
import image from "../assets/images/kairaExperience.webp";
import bgimg from "../assets/images/experience-background.webp";
import Form from "./Form";

export default function Experience() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleForm(){
    setIsFormOpen(true);
  }
  return (
    <div
      className='font-primary text-brown-light py-12 sm:py-16 md:py-20'
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Section Title */}
      <div className='px-4 sm:px-8 md:px-12'>
        <h2 className='text-2xl sm:text-6xl md:text-6xl tracking-tighter pb-8 sm:pb-12 border-b-2 border-brown-light text-center md:text-left'>
          Few Units Left ! Book Your Site Visit Today. 
        </h2>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row items-center pt-1 sm:pt-12 gap-6 md:gap-0'>
        {/* Image */}
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
          <img
            src={image}
            alt='Experience'
            className='w-[350px] h-auto lg:w-auto lg:h-[600px] object-contain'
          />
          {/* Button */}
          <div className='hidden md:flex justify-center mt-0 sm:mt-12 lg:mt-5 px-4'>
            <button className='text-md sm:text-2xl md:text-3xl rounded-[50px] sm:rounded-[70px] px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border-2 border-brown-light font-secondary font-bold cursor-pointer hover:bg-[#F3E7D3] hover:text-[#2C2C2C] transition-all duration-300' onClick={handleForm}>
              Download Our Brochure Now!
            </button>
          </div>
        </div>

        {/* Text Content */}
        <div className='w-full md:w-1/2 px-6 sm:px-8 md:px-10 lg:px-16'>
          {[
            {
              title: "Only ₹849 Per Sqft",
              subtitle: "Affordable Luxury Living.",
            },
            {
              title: "Villas @ ₹2.4Cr",
              subtitle: "Your Luxury Home awaits.",
            },
            {
              title: "Nature does the heavy lifting",
              subtitle: "Shade, breeze, silence, all included.",
            },
            {
              title: "We do the rest",
              subtitle: "Management, rentals, plantations, upkeep.",
            },
          ].map((item, index) => (
            <div key={index} className='mb-6 sm:mb-3 md:mb-4'>
              <h2 className='font-secondary text-2xl sm:text-4xl md:text-5xl tracking-tighter font-bold leading-tight'>
                {item.title}
              </h2>
              <h3 className='text-xl sm:text-2xl md:text-3xl font-light tracking-tighter pt-2 sm:pt-2'>
                {item.subtitle}
              </h3>
            </div>
          ))}
        </div>
        <div className='flex md:hidden justify-center mt-0 sm:mt-12 lg:mt-5 px-4'>
            <button className='text-md sm:text-2xl md:text-3xl rounded-[50px] sm:rounded-[70px] px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border-2 border-brown-light font-secondary font-bold cursor-pointer hover:bg-[#F3E7D3] hover:text-[#2C2C2C] transition-all duration-300' onClick={handleForm}>
              Download Our Brochure Now!
            </button>
          </div>
      </div>

      {
        isFormOpen && <Form isFormOpen={isFormOpen} isFormClose={()=>setIsFormOpen(false)}/>
      }
    </div>
  );
}
