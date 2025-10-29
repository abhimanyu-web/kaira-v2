import bgimg from "../assets/images/experience-background.webp";
import { useState } from "react";
import Form from "./Form";

import {
  Trees,
  IndianRupee,
  Handshake,
  Wrench,
  TrendingUp,
  Rocket,
} from "lucide-react";

export default function InvestmentHighlights() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const highlights = [
    {
      icon: <Trees className='w-10 h-10 text-brown-light' />,
      text: "40 Acres of Lush Greenery",
    },
    {
      icon: <IndianRupee className='w-10 h-10 text-brown-light' />,
      text: "₹849 per Sqft",
    },
    {
      icon: <Handshake className='w-10 h-10 text-brown-light' />,
      text: "Fully Managed Property",
    },
    {
      icon: <Wrench className='w-10 h-10 text-brown-light' />,
      text: "Hassle-Free Maintenance",
    },
    {
      icon: <TrendingUp className='w-10 h-10 text-brown-light' />,
      text: "Up to 22% Annual ROI",
    },
    {
      icon: <Rocket className='w-10 h-10 text-brown-light' />,
      text: "Up to 75% Land Appreciation in 3 Years",
    },
  ];

  return (
    <section
      id='investment'
      className='font-primary text-brown-light py-12 sm:py-16 md:py-20'
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className='px-4 sm:px-8 md:px-16'>

        <h1
          style={{
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#1a1a1a',
            textAlign: 'center',
            marginBottom: '1.5rem',
            letterSpacing: '0.5px',
          }}
        >
          Why Choose Kaira
        </h1>

        {/* Highlights Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {highlights.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center bg-[#F3E7D3]/20 hover:bg-[#F3E7D3]/40 rounded-3xl p-8 transition-all duration-300 border border-[#F3E7D3]/40 shadow-md'>
              <div className='mb-4'>{item.icon}</div>
              <p className='text-lg sm:text-xl md:text-2xl font-medium text-brown-light'>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='pt-12 flex justify-center'>
          <button
            className='font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer'
            onClick={() => setIsFormOpen(true)}>
            Sieze This Opportunity
          </button>
        </div>
        {isFormOpen && (
          <Form
            isFormOpen={isFormOpen}
            isFormClose={() => setIsFormOpen(false)}
          />
        )}
      </div>
    </section>
  );
}
