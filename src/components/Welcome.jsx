import { useState } from "react";
import bgimg from "../assets/images/experience-background.webp";
import coffeeplantaions from "../assets/images/coffee-plantations.webp";
import Form from "./Form";
import { FaWhatsapp } from "react-icons/fa";

export default function Welcome() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      className='py-12 sm:py-16 md:py-20 font-primary'
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 sm:px-10 md:px-16'>
        {/* Left Content */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h2 className='text-4xl font-secondary sm:text-6xl md:text-5xl font-bold tracking-tighter pb-6 text-brown'>
            Welcome to Kaira
          </h2>

          <p className='text-base sm:text-lg md:text-xl text-brown leading-relaxed mb-8'>
            Welcome to Kaira, luxury villas nestled in the serene landscapes of
            Sakleshpur, Hassan District. Spread across 40 acres of pristine
            greenery, Kaira offers a rare opportunity to own your personal piece
            of paradise.
            <br />
            <br />
            With 16+ completed projects and 1000+ satisfied customers, Vibez
            Estates continues to redefine sustainable luxury. Located just 3
            hours from Mysore and Mangalore airports, this is your golden chance
            to own a luxury villa that blends nature and investment beautifully.
          </p>

          {/* Icons Row */}
          <div className='flex flex-wrap justify-center md:justify-start gap-4 text-lg sm:text-xl font-medium text-brown'>
            <p>🏆 Since 2009</p>
            <span className='hidden sm:inline'>|</span>
            <p>😊 1000+ Customers</p>
            <span className='hidden sm:inline'>|</span>
            <p>🏗️ 16+ Completed Projects</p>
          </div>

          {/* CTA Button */}
          <div className="pt-10 flex flex-col items-center gap-6">
  <button
    className="font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px] h-14 sm:h-16 md:h-18"
    onClick={() => setIsFormOpen(true)}
  >
    Avail the Unbeatable Offer Now
  </button>

  <a
    href="https://wa.me/15551234567"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 font-secondary font-bold text-lg sm:text-xl md:text-2xl text-green-600 px-8 py-4 rounded-[55px] border-2 border-green-600 hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px] h-14 sm:h-16 md:h-18"
  >
    <FaWhatsapp className="text-2xl" />
    Chat on WhatsApp
  </a>
</div>


          {/* Popup Form */}
          {isFormOpen && (
            <Form
              isFormOpen={isFormOpen}
              isFormClose={() => setIsFormOpen(false)}
            />
          )}
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
  <div className="w-full max-w-md sm:max-w-lg md:max-w-[90%] h-96 rounded-3xl overflow-hidden bg-gray-100">
    <img
      src={coffeeplantaions}
      alt="coffee-plantations"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
}
