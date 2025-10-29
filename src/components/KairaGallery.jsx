import React, { useState } from "react";
import { Images, Mountain, X } from "lucide-react";
import bgimg from "../assets/images/experience-background.webp";

// Import your images
import render2 from "../assets/images/Kaira/Kaira2.webp";
import render3 from "../assets/images/Kaira/Kaira3.webp";
import render4 from "../assets/images/Kaira/Kaira4.webp";
import render5 from "../assets/images/Kaira/Kaira5.webp";
import render6 from "../assets/images/Kaira/Kaira6.webp";
import render7 from "../assets/images/Kaira/Kaira1.webp";
import site1 from "../assets/images/Kaira/Kaira-site1.webp";
import site2 from "../assets/images/Kaira/kaira-site2.webp";
import site3 from "../assets/images/Kaira/kaira-site3.webp";
import site4 from "../assets/images/Kaira/kaira-site4.webp";
import site5 from "../assets/images/Kaira/kaira-site5.webp";
import site6 from "../assets/images/Kaira/kaira-site6.webp";


export default function KairaGallery() {
  const [activeTab, setActiveTab] = useState("renders");
  const [selectedImage, setSelectedImage] = useState(null);

  const renders = [render6, render4, render5, render7, render2, render3];
  const siteImages = [site1,site2, site3, site4, site5, site6, ];

  const images = activeTab === "renders" ? renders : siteImages;

  return (
    <div
      className="font-primary text-brown-light py-16 sm:py-20 md:py-24"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <div className="text-center px-6 sm:px-10 md:px-16 mb-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tighter text-brown font-primary pb-4 border-b-2 border-brown-light inline-block">
          The Kaira Gallery
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-brown-light/90 font-light tracking-tight max-w-3xl mx-auto">
          Experience Kaira through beautiful renders and real-life site captures.
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg sm:text-xl font-secondary border-2 transition-all duration-300 ${
            activeTab === "renders"
              ? "bg-brown text-[#F5EDD9] border-brown"
              : "border-brown text-brown hover:bg-[#F5EDD9]/40"
          }`}
          onClick={() => setActiveTab("renders")}
        >
          <Images className="w-5 h-5" /> Renders
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg sm:text-xl font-secondary border-2 transition-all duration-300 ${
            activeTab === "site"
              ? "bg-brown text-[#F5EDD9] border-brown"
              : "border-brown text-brown hover:bg-[#F5EDD9]/40"
          }`}
          onClick={() => setActiveTab("site")}
        >
          <Mountain className="w-5 h-5" /> Site Images
        </button>
      </div>

      {/* Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-6 sm:px-10 md:px-16">
        {images.map((img, index) => (
            <div key={index} className="mb-4 overflow-hidden rounded-2xl">
            <img
                src={img}
                alt={`Kaira Image ${index + 1}`}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage(img)}
            />
            </div>
        ))}
        </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brown-light transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Kaira Full View"
            className="max-w-[90%] max-h-[85%] rounded-2xl object-contain shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
