import { useState, useEffect } from "react";
import backGround1 from "../assets/images/backGround1.webp";
import backGround2 from "../assets/images/backGround2.webp";
import backGround3 from "../assets/images/backGround3.webp";
import backGround4 from "../assets/images/backGround4.webp";
import image1 from "../assets/images/envelope.webp";
import image2 from "../assets/images/envelope2.webp";
import image3 from "../assets/images/envelope3.webp";
import image4 from "../assets/images/envelope4.webp";
import textBackground from "../assets/images/textBackground.webp";
import arrowleft from "../assets/images/arrow-left.webp";
import arrowright from "../assets/images/arrow-right.webp";
import food from "../assets/images/mfood.webp";
import home from "../assets/images/mhome.webp";
import traditions from "../assets/images/mtraditions.webp";
import wellness from "../assets/images/mwellness.webp";

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

export default function EnvelopeSlider() {
  // All slides (images + text)
  const slides = [
    {
      background: backGround1,
      envelope: image1,
      title: "Food That Hugs You",
      description:
        "Our Malnad-themed restaurant serves up soul before it serves plates.",
    },
    {
      background: backGround2,
      envelope: image2,
      title: "Homes with soul",
      description:
        "Wooden beams, laterite walls, Mangalore tiles. Nostalgia, but make it comfy.",
    },
    {
      background: backGround3,
      envelope: image3,
      title: "Wellness, Malnad style",
      description:
        "A Pushkarini-inspired pool,an Ayurvedic spa, and meditation corners.",
    },
    {
      background: backGround4,
      envelope: image4,
      title: "Keeping Traditions Alive",
      description:
        "Oil baths, woodfire cooking, copper vessels, courtyard dinners.Yes, food tastes better here.",
    },
  ];

  const mslides = [
    {
      src: food,
      text: "content on coffea robusta",
    },
    {
      src: home,
      text: "Content on grevelia robusta",
    },
    {
      src: traditions,
      text: "content on coffea robusta",
    },
    {
      src: wellness,
      text: "Content on grevelia robusta",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
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

  useEffect(() => {
    setHasAnimated(false);

    // Small delay so animation re-triggers cleanly
    const timer1 = setTimeout(() => setHasAnimated(true), 100);

    const timer2 = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
    };
  }, [currentSlide, slides.length]);

  const transitionClasses = "transition-all duration-1000 ease-out";

  /* --- Envelope animation --- */
  const envelopeStart =
    "-translate-x-full -translate-y-1/2 rotate-12 opacity-0";
  const envelopeEnd = "translate-x-0 -translate-y-1/2 rotate-0 opacity-100";

  const envelopeClasses = `
    h-[500px] w-auto absolute top-1/2 left-[20%] z-10 
    ${transitionClasses} 
    ${hasAnimated ? envelopeEnd : envelopeStart}
  `;

  /* --- Text card animation --- */
  const textStart = "translate-y-full -translate-x-full rotate-6 opacity-0";
  const textEnd = "translate-y-0 translate-x-0 rotate-8 opacity-100";

  const textClasses = `
    absolute top-[29%] right-[31%] h-[450px] w-[300px] z-40 
    ${transitionClasses} delay-300 
    ${hasAnimated ? textEnd : textStart}
  `;

  const current = slides[currentSlide];

  // --- Navigation handlers ---
  const nextSlide = () => {
    setHasAnimated(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 200); // adds a tiny delay for smoother transition
  };

  const prevSlide = () => {
    setHasAnimated(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 200);
  };

  return (
    <>
      <div
        key={currentSlide} //
        className='min-h-screen relative overflow-hidden hidden md:flex items-center justify-center'
        style={{
          backgroundImage: `url(${current.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Envelope Image */}
        <img
          src={current.envelope}
          alt='Envelope'
          className={envelopeClasses}
        />

        {/* Text Card */}
        <div
          className={textClasses}
          style={{
            backgroundImage: `url(${textBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className='p-8 text-center max-w-80'>
            <h1 className='text-3xl font-secondary font-bold text-gray-800 mb-4'>
              {current.title}
            </h1>
            <p className='text-lg text-stone-950 pt-6 font-primary'>
              {current.description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className='absolute left-5 top-1/2 -translate-y-1/2  transition-all cursor-pointer'>
          <img
            src={arrowleft}
            alt='Previous Slide'
            className='h-6 w-auto lg:h-28 lg:w-auto'
          />
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-5 top-1/2 -translate-y-1/2  transition-all cursor-pointer'>
          <img
            src={arrowright}
            alt='Next Slide'
            className='h-6 w-auto lg:h-28 lg:w-auto'
          />
        </button>
      </div>
      {/* Mobile Version */}

      <div className='flex md:hidden items-center justify-center w-full'>
        <div className='relative w-full'>
          {/* Slides Container */}
          <div className='w-full h-full overflow-hidden'>
            <div
              className='flex h-full transition-transform ease-out duration-500'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {/* Map through slides to render each GIF */}
              {mslides.map((slide, index) => (
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
            className='absolute left-2 bottom-[30%] transform -translate-y-1/2  rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
            <img
              src={arrowleft}
              alt='Previous Slide'
              className='h-10 w-auto lg:h-28 lg:w-auto'
            />
          </button>
          <button
            onClick={nextSlides}
            className='absolute right-2 bottom-[30%] transform -translate-y-1/2  rounded-full bg-transparent z-30 opacity-70 hover:opacity-100 cursor-pointer'>
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
