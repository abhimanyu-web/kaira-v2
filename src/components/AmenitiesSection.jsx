import React from "react";
import { Wifi, Home, Star, CarFront, Cctv, Trees, HouseHeart, Baby, ShieldCheck, } from "lucide-react";
import bgimg from "../assets/images/experience-background.webp";

const amenitiesList = [
  {
    icon: <Wifi className="w-10 h-10 text-brown-light" />,
    label: "Wi-Fi Zone",
    copy: "Stay connected even in nature.",
  },
  {
    icon: <Home className="w-10 h-10 text-brown-light" />,
    label: "Clubhouse",
    copy: "Relax, socialize, and unwind.",
  },
  {
    icon: <Star className="w-10 h-10 text-brown-light" />,
    label: "3 Star Resort",
    copy: "Style, savor, and connect.",
  },
  {
    icon: <Cctv className="w-10 h-10 text-brown-light" />,
    label: "CCTV Surveillance",
    copy: "Secure your family.",
  },
  {
    icon: <Trees className="w-10 h-10 text-brown-light" />,
    label: "40 Acres Lush Greenery",
    copy: "Gather for events and celebrations.",
  },
  {
    icon: <HouseHeart className="w-10 h-10 text-brown-light" />,
    label: "Gazebo",
    copy: "Gather for events and celebrations.",
  },
  {
    icon: <CarFront className="w-10 h-10 text-brown-light" />,
    label: "Car Parking",
    copy: "Dedicated for residents and visitors.",
  },
  {
    icon: <Baby className="w-10 h-10 text-brown-light" />,
    label: "Childerns Play Area",
    copy: "Let the little ones explore and have fun.",
  },
    {
    icon: <ShieldCheck className="w-10 h-10 text-brown-light" />,
    label: "24 x 7 Security",
    copy: "Your safety is our priority.",
  },
];

export default function AmenitiesSection({
  title = "Snapshot of our Amenities",
  amenities = amenitiesList,
}) {
  return (
    <div
      className="font-primary text-brown-light py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <div className="px-4 sm:px-8 md:px-16 mb-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tighter text-center border-b-2 border-brown-light pb-6">
          {title}
        </h1>
      </div>

      {/* Amenity Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 md:px-16">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#F3E7D3]/20 hover:bg-[#F3E7D3]/40 rounded-3xl p-8 transition-all duration-300 border border-[#F3E7D3]/40 shadow-md"
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="font-secondary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {item.label}
            </h2>
            <p className="text-md sm:text-lg md:text-xl font-light tracking-tight text-brown-light/90">
              {item.copy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
