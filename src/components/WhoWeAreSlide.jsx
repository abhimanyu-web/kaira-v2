import React from "react";
import vibezLogo from "../assets/images/vibez-logo.png"; // replace with correct path
import bgimg from "../assets/images/experience-background.webp";

export default function WhoWeAreSlide() {
  return (
    <div
      className='font-primary text-brown-light py-12 sm:py-16 md:py-20'
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-7xl mx-auto rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[rgba(255,255,255,0.85)] p-6 md:p-10 rounded-md shadow-lg">

          {/* LEFT: Vertical stats */}
          <div className="flex flex-col gap-8 items-start md:items-start text-left">
            <div className="text-4xl md:text-5xl font-bold tracking-tight">20+</div>
            <div className="text-sm uppercase font-semibold">Projects<br/>Completed</div>

            <div className="text-4xl md:text-5xl font-bold tracking-tight">1000+</div>
            <div className="text-sm uppercase font-semibold">Satisfied<br/>Customers</div>

            <div className="text-4xl md:text-5xl font-bold tracking-tight">300+</div>
            <div className="text-sm uppercase font-semibold">Investors<br/>& Growing</div>
          </div>

          {/* RIGHT: Who We Are content with logo */}
          <div className="px-2 md:px-6 flex flex-col items-start md:items-start">
            <img
              src={vibezLogo}
              alt="Vibez Estates Logo"
              className="w-32 md:w-40 mb-6 md:mb-8 self-end md:self-start"
            />

            <div className="text-right md:text-left">
              <h3 className="text-3xl md:text-4xl font-secondary font-bold tracking-tight">Who We Are</h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed">Headquartered in Bangalore, <span className="font-semibold">with over 15+ years of experience</span></p>

              <p className="mt-6 text-sm md:text-base">Through curated realestate projects. <span className="font-semibold">VibezEstates has helped 1000+ customers grow their wealth</span></p>

              <p className="mt-6 text-sm md:text-base">We ensure End to End management <span className="block font-semibold mt-2">By handling all legal, operational, and rental aspects of our projects</span></p>

              {/* Branding / footer */}
              <div className="mt-8 border-t pt-4 flex items-center justify-start gap-3">
                <span className="text-sm uppercase tracking-wider">Vibez Estates</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}