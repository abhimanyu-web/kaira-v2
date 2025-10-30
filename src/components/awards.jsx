import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgimg from "../assets/images/experience-background.webp";

// ✅ Import images directly so Vercel can bundle them
import img01 from "../assets/images/awards/01.png";
import img02 from "../assets/images/awards/02.png";
import img04 from "../assets/images/awards/04.jpg";
import img05 from "../assets/images/awards/05.jpg";
import img06 from "../assets/images/awards/06.jpg";
import img07 from "../assets/images/awards/07.jpg";
import img08 from "../assets/images/awards/08.png";
import img10 from "../assets/images/awards/10.png";
import img11 from "../assets/images/awards/11.png";

const awards = [
  {
    image: img04,
    title: "Indira Gandhi Priyadarshini Award - 2013",
    description:
      "Indira Gandhi Priyadarshini Award – 2013 was conferred in recognition of outstanding efforts in promoting rural entrepreneurship.",
  },
  {
    image: img05,
    title: "Indira Gandhi Priyadarshini Award - 2013",
    description:
      "Empowering local communities through sustainable development initiatives.",
  },
  {
    image: img02,
    title: "Realty Awards - 2020",
    description:
      "Honored for outstanding contribution to rural entrepreneurship and livelihood empowerment.",
  },
  {
    image: img01,
    title: "7Hills - 2017 Australia",
    description:
      "In recognition of your outstanding contribution to making the live concert a grand success.",
  },
  {
    image: img06,
    title: "Business Excellence & Achievement Award - 2015",
    description:
      "Recognized for excellence in customer satisfaction in the agriculture and farming equipment sector.",
  },
  {
    image: img07,
    title: "Best Eco-Homes - 2018",
    description:
      "Anantara was recognized with the “Best Eco-Homes Project of the Year” Award for its commitment to sustainable living and eco-friendly design.",
  },
  {
    image: img08,
    title: "The Business Award - 2020",
    description:
      "Sirivana was recognized as the “Best Farmland Project of the Year” for its excellence in sustainable development and innovative design.",
  },
  {
    image: img10,
    title: "SME Excellence Award - 2015",
    description:
      "In appreciation of remarkable contribution to customer satisfaction in the farming sector.",
  },
  {
    image: img11,
    title: "News Kannada - Business And Leader Excellence - 2022",
    description:
      "Recognized for excellence in managed farmland development and sustainable practices.",
  },
];

export default function AwardsSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % awards.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + awards.length) % awards.length);

  return (
    <div
      className="w-full mx-auto text-center py-12"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-tighter text-brown font-primary pb-4 border-b-2 border-brown-light inline-block">
        Our Awards
      </h2>

      {/* Image Slider Container */}
      <div className="relative w-full h-96 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={awards[index].image}
            src={awards[index].image}
            alt={awards[index].title}
            className="max-h-[95%] object-contain mx-auto rounded-3xl shadow-md"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Title & Description */}
      <h1 className="text-3xl font-bold text-gray-900 mt-6">
        {awards[index].title}
      </h1>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        {awards[index].description}
      </p>
    </div>
  );
}
