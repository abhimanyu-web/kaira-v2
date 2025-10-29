import { useState } from "react";
import { LandPlot, BarChart3, ShieldCheck, TrendingUp, Home } from "lucide-react";
import Form from "./Form";
import bgimg from "../assets/images/experience-background.webp";

export default function InvestmentSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const highlights = [
    {
      icon: <LandPlot className="w-10 h-10 text-brown-light" />,
      title: "₹849 per Sqft*",
      copy: "Own a luxurious retreat that doubles as a performing asset.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-brown-light" />,
      title: "Up to 22% ROI",
      copy: "Enjoy strong annual returns plus ~75% appreciation in 3 years.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-brown-light" />,
      title: "Fully Managed Investment",
      copy: "From plantations to rentals, everything is professionally maintained.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brown-light" />,
      title: "Clear Titles & Approvals",
      copy: "Your ownership is secure, transparent, and hassle-free.",
    },
  ];

  return (
    <div
      className="font-primary text-brown-light py-16 sm:py-20 md:py-24 text-center"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tighter font-primary text-brown pb-4 border-b-2 border-brown-light inline-block">
          Investment Meets Lifestyle
        </h1>
        <h2 className="mt-6 text-xl sm:text-3xl md:text-4xl text-brown-light font-light tracking-tight max-w-4xl mx-auto">
          Not just a getaway — a smart, appreciating asset designed to grow with time.
        </h2>
      </div>

      {/* Interactive Highlight Tiles */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-10 md:px-16 lg:px-24">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="group bg-[#F3E7D3]/20 hover:bg-[#F3E7D3]/40 rounded-3xl p-8 shadow-md border border-[#F3E7D3]/30 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="font-secondary text-2xl sm:text-3xl font-bold text-brown-light mb-2 group-hover:text-brown transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-md sm:text-lg md:text-xl font-light text-brown-light/90">
              {item.copy}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="pt-12">
        <button
          className="font-secondary font-bold text-lg sm:text-xl md:text-2xl text-brown px-8 py-4 rounded-[55px] border-2 border-brown hover:bg-brown hover:text-[#F5EDD9] transition duration-300 cursor-pointer"
          onClick={() => setIsFormOpen(true)}
        >
          Get In Touch With Us
        </button>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <Form isFormOpen={isFormOpen} isFormClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
}
