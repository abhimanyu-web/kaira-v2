import { useState } from "react";
import bgimg from "../assets/images/experience-background.webp";
import villa from "../assets/images/villa.webp";
import Form from "./Form";
import { BiSolidPhoneCall } from 'react-icons/bi';

export default function WhyKaira() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const data = [
    {
      title: "Vacation Getaway",
      desc: "Enjoy a personal retreat for family vacations whenever desired.",
    },
    {
      title: "Lifestyle Upgrade",
      desc: "Access premium amenities and scenic surroundings for ultimate relaxation.",
    },
    {
      title: "Seamless Connectivity",
      desc: "Close proximity to Mysore and Mangalore Airports, with excellent rail and road access.",
    },
    {
      title: "Proven Track Record",
      desc: "Over 1000+ happy customers trust Vibez Estates for delivering value and satisfaction.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 font-primary"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 sm:px-10 md:px-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-secondary sm:text-6xl md:text-5xl font-bold tracking-tighter pb-6 text-brown">
            Why Own a Kaira Villa?
          </h2>

          {/* Points List */}
          <div>
            {data.map((item, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl text-brown leading-relaxed mb-5"
              >
                <span className="font-bold">{item.title}</span> – {item.desc}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              className="w-120 font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer"
              onClick={() => setIsFormOpen(true)}
            >
              Book Your Site Visit
            </button>
            <a
              href="tel:+918970019817"
              className="w-120 mt-10 flex items-center justify-center gap-2 font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown-600 hover:bg-brown hover:text-white transition duration-300 cursor-pointer"
            >
              <BiSolidPhoneCall    className="text-2xl" />
              Call Now - 089 7001 9817
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
          <img
            src={villa}
            alt="villa"
            className="w-full max-w-md sm:max-w-lg md:max-w-[90%] h-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
