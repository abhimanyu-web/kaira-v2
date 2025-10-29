import { useState } from "react";
import Form from "./Form";
export default function GetInTouch() {
   const [isFormOpen, setIsFormOpen] = useState(false);

  function handleForm(){
    setIsFormOpen(true);
  }
  return (
    <div className="text-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-25 flex flex-col items-center bg-[#F5EDD9]">
      
      {/* Heading */}
      <h1 className="font-primary font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brown tracking-tighter ">
        Investment Meets Lifestyle
      </h1>

      {/* Subheading */}
      <h2 className="font-primary font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl text-brown tracking-tighter max-w-[90%] md:max-w-6xl ">
        This isn’t just where you unwind... It’s where your money works smarter too.
      </h2>

      {/* Details */}
      <div className="pt-10 md:pt-7">
        <p className="font-primary font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl text-brown-light py-2 sm:py-3 tracking-tighter">
          Villas & farmplots from ₹79.9 Lakhs*
        </p>
        <p className="font-primary font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl text-brown-light py-2 sm:py-3 tracking-tighter">
          Fully managed: plantations, rentals, upkeep
        </p>
        <p className="font-primary font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl text-brown-light py-2 sm:py-3 tracking-tighter">
          ROI up to 22% with ~75% appreciation in 3 years
        </p>
        <p className="font-primary font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl text-brown-light py-2 sm:py-3 tracking-tighter">
          Clear titles + government approvals = stress-free ownership
        </p>
      </div>

      {/* Button */}
      <div className="pt-8 md:pt-10">
        <button className="font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-6 sm:px-8 py-3 sm:py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer" onClick={handleForm}>
          Get In Touch With Us
        </button>
      </div>
      {
        isFormOpen && <Form isFormOpen={isFormOpen} isFormClose={()=>setIsFormOpen(false)}/>
      }
    </div>
  );
}
