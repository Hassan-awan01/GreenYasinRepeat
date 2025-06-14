import React from 'react';
// import { FaPlay } from 'react-icons/fa'; // No longer needed
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeading from '../../Shared/SectionHeading';

// Import images for the slider
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';

const AimSection = () => {
  const sliderImages = [img1, img2, img3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <section id="our-aim-section" className="bg-white py-16">
      <div className="global-container mx-auto flex flex-col items-center px-6 md:flex-row md:justify-between md:px-12 lg:px-24">
        {/* Left: Text Content */}
        <div className="space-y-4 md:w-1/2 text-center md:text-left">
          <p className="text-sm tracking-wide text-gray-500 uppercase">
            About Us
          </p>
          <SectionHeading title="Our Aim" highlightWord="Aim" className="!text-left !mb-6" textAlignment="left" />
          <p className="leading-relaxed text-gray-600">
            To provide a comprehensive range of services to help public and
            private sector organizations to characterize, assess, quantify, and
            manage their relationship with the natural environment and to
            prepare for a changing climate.
          </p>
          <Link
            to="/about"
            className="inline-block mt-4 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
          >
            READ MORE
          </Link>
        </div>

        {/* Right: Image Slider */}
        <div className="relative h-64 w-96 flex-shrink-0 md:h-80 md:w-[30rem] overflow-hidden shadow-lg rounded-lg mt-8 md:mt-0">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Aim Slider ${index + 1}`}
                  className="w-full h-full object-cover"
                />
          </div>
            ))}
          </Slider>
          {/* Removed Play Button Overlay */}
        </div>
      </div>
    </section>
  );
};

export default AimSection;
