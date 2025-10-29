import { useState } from "react";
import background from "../assets/images/storeBackground.webp";
import Form from "./Form";

export default function Store() {
   const [isFormOpen, setIsFormOpen] = useState(false);
  
    function handleForm(){
      setIsFormOpen(true);
    }
  return (
    <div
      className='flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 md:py-28 lg:py-32'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Heading */}
      <h1 className='font-secondary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F5EDD9] mb-6 sm:mb-8'>
        What we have in store...
      </h1>

      {/* Paragraph */}
      <p className='font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-brown max-w-xl sm:max-w-2xl md:max-w-4xl mb-8 sm:mb-10 leading-relaxed'>
        Every courtyard, every villa, every tree — it’s all mapped out. Wanna
        see your future hangout spot?
      </p>

      {/* Button */}
      <button className='rounded-[55px] py-3 sm:py-4 px-6 sm:px-8 border-2 border-brown font-secondary text-lg sm:text-xl md:text-2xl font-bold text-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer' onClick={handleForm}>
        Download Our Layout Plan
      </button>

      {isFormOpen && (
        <Form
          isFormOpen={isFormOpen}
          isFormClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}
