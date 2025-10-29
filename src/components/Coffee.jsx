import React, { useState } from "react";

import coffeearabica from "../assets/images/coffee-arabica.webp";
import greveliaRobusta from "../assets/images/grevellia-robusta.webp";
import woodBackground from "../assets/images/coffee-background.webp";
import arrowleft from "../assets/images/arrow-left.webp";
import arrowright from "../assets/images/arrow-right.webp";
import nyctanthes from '../assets/images/nyctanthes.webp';
import cumini from '../assets/images/cumini.webp';
import marabica from '../assets/images/marabica.webp';
import mgrevelia from '../assets/images/mgrevelia.webp';
import mcumini from '../assets/images/mcumini.webp';
import mnyctanthes from '../assets/images/mnyctanthes.webp';


const slides = [
  {
    src: marabica,
    text: "content on coffea robusta"
  },
  {
    src:mgrevelia ,
    text: "Content on grevelia robusta"
  },
  {
    src: mcumini,
    text: "content on coffea robusta"
  },
  {
    src:mnyctanthes ,
    text: "Content on grevelia robusta"
  }
];

const SLIDES_DATA = [
  {
    id: 0,
    mainImage: coffeearabica,
    topLeft: {
      title: "Coffea Arabica",
      phonetic: "KOFF-ee-uh-RAH-bick-uh",
      commonName: "Coffee",
      family: "Rubiaceae",
    },
    topRight: {
      text: "Coffee is deeply rooted in Malnad (Western Ghats, Karnataka). Introduced by **Baba Budan** in Chikmagalur in the 17th century, it shaped the region's economy and identity.",
    },
    bottomLeft: {
      text: "Coffee estates are integral to the Malnad lifestyle—families gather over traditional filter coffee, estates host cultural celebrations, and the crop symbolizes prosperity.",
    },
    bottomRight: {
      text: "Coffee estates provide long-term asset appreciation while also serving as a potential income-generating plantation, which appeals to investors looking for both luxury and returns.",
    },
  },
  {
    id: 1,
    mainImage: greveliaRobusta,
    topLeft: {
      title: "Grevillea robusta",
      phonetic: "grev-ILL-ee-uh roe-BUS-tuh",
      commonName: "Silk-oak",
      family: "Proteaceae",
    },
    topRight: {
      text: "Pepper vines climb around Silver Oak trunks—pepper and coffee together are a cultural and economic hallmark of the region.",
    },
    bottomLeft: {
      text: "Silver Oak is the most common shade tree in Malnad’s coffee plantations. Its tall, straight growth and feathery foliage provide filtered sunlight—ideal for coffee shrubs, pepper vines, and cardamom.",
    },
    bottomRight: {
      text: "Timber from mature Silver Oak trees is used in furniture, construction, and plywood, adding economic value to estate properties.",
    },
  },
  {
    id: 2,
    mainImage: nyctanthes,
    topLeft: {
      title: "Nyctanthes arbor-tristis",
      phonetic: "nik-TAN-theez AR-bor TREES-tis",
      commonName: " Parijatha, Night Jasmine, Coral Jasmine",
      family: "Proteaceae",
    },
    topRight: {
      text: "The Parijatha tree holds a sacred place in Indian folklore and temple gardens. Native to South Asia, it thrives in the cool, mist-kissed slopes of Malnad. Known for its heavenly scent that fills the air at dawn, Parijatha is a symbol of purity, devotion, and unspoken nostalgia.",
    },
    bottomLeft: {
      text: "Parijatha graces the courtyards and pathways of Kaira, its fragrance mingling with coffee and pepper vines. More than an ornamental plant, it is a reminder of slow mornings, prayers under soft light, and the timeless charm of Malnad living.",
    },
    bottomRight: {
      text: "A small, graceful tree with soft grey bark and delicate white-orange blooms that unfurl only at night, carpeting the ground with tiny stars by sunrise. Its beauty lies not in grandeur, but in simplicity and rhythm with nature’s cycle.",
    },
  },
  {
    id: 3,
    mainImage: cumini,
    topLeft: {
      title: "Syzygium cumini",
      phonetic: "Siz-IH-jee-um KYOO-mi-nee",
      commonName: "Jamun, Indian Blackberry, Neredu, Naval",
      family: "Proteaceae",
    },
    topRight: {
      text: "Jamun is one of India’s most ancient and resilient trees, native to tropical regions and deeply rooted in Ayurveda and rural life. In the cool, rain-soaked terrain of Malnad, Jamun thrives with ease, standing tall as a symbol of endurance, nourishment, and grounded simplicity.",
    },
    bottomLeft: {
      text: "Jamun trees dot the landscape of Kaira, blending beauty with purpose. Their canopy offers quiet shade along walkways, while seasonal fruits attract birds and add a burst of color to the Malnad green. To every resident, Jamun symbolizes wholesome living, nature’s sweetness wrapped in simplicity, just like life at Kaira.",
    },
    bottomRight: {
      text: "A large, evergreen tree with dense, glossy foliage and smooth grey bark. During summer, it bears clusters of small white blossoms that mature into deep purple-black berries — rich in flavor and known for their cooling, medicinal qualities.",
    },
  },
];

export default function Coffee() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = SLIDES_DATA[currentSlideIndex];
  const totalSlides = SLIDES_DATA.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlides = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlides = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

  return (
    <>
      <div
        className='hidden section relative min-h-screen w-full md:flex items-center justify-center p-30'
        style={{
          backgroundImage: `url(${woodBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
        }}>
        <div className='relative z-10  h-[400px] w-auto'>
          <img
            src={slide.mainImage}
            alt={`Main image for ${slide.topLeft.title}`}
            className='w-full h-full object-contain shadow-2xl'
          />
        </div>

        <div className='absolute top-20 left-20 z-20 w-fit max-w-[400px] text-left'>
          <h1 className='font-primary text-5xl font-normal mb-2'>
            {slide.topLeft.title}
          </h1>
          <p className='font-primary text-2xl mb-4 font-normal'>
            {slide.topLeft.phonetic}
          </p>
          <p className='text-xl font-primary font-normal'>
            <span className=' font-primary'>Common name(s):</span>{" "}
            {slide.topLeft.commonName}
          </p>
          <p className='text-xl font-primary font-normal'>
            <span className=' font-primary'>Family:</span>{" "}
            {slide.topLeft.family}
          </p>
        </div>

        <div className='absolute top-20 right-20 z-20 w-fit max-w-lg text-right'>
          <p
            className='text-xl leading-relaxed font-hand-written'
            dangerouslySetInnerHTML={{
              __html: slide.topRight.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </div>

        <div className='absolute bottom-20 left-20 z-20 w-fit max-w-lg text-left'>
          <p
            className='text-xl leading-relaxed font-hand-written'
            dangerouslySetInnerHTML={{
              __html: slide.bottomLeft.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </div>

        <div className='absolute bottom-20 right-20 z-20 w-fit max-w-[500px] text-right'>
          <p
            className='text-xl leading-relaxed font-hand-written'
            dangerouslySetInnerHTML={{
              __html: slide.bottomRight.text.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
          <img src={arrowleft} alt='Previous Slide' />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
          <img src={arrowright} alt='Next Slide' />
        </button>
      </div>
      {/* Mobile view  */}
      <div className='flex md:hidden items-center justify-center w-full'>
        <div className='relative w-full'>
          {/* Slides Container */}
          <div className='w-full h-full overflow-hidden'>
            <div
              className='flex h-full transition-transform ease-out duration-500'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
              {/* Map through slides to render each GIF */}
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.src}
                  alt={slide.text}
                  className='w-full h-full object-cover flex-shrink-0 '
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlides}
            className='absolute left-[3px] top-1/3 transform -translate-y-1/2 p-1 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
            <img
              src={arrowleft}
              alt='Previous Slide'
              className='h-10 w-auto lg:h-28 lg:w-auto'
            />
          </button>
          <button
            onClick={nextSlides}
            className='absolute right-[3px] top-1/3 transform -translate-y-1/2 p-1 rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
            <img
              src={arrowright}
              alt='Next Slide'
              className='h-10 w-auto lg:h-28 lg:w-auto'
            />
          </button>
        </div>
      </div>
    </>
  );
}
