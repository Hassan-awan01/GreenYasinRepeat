import React from 'react';
// import { FaPlay } from 'react-icons/fa'; // No longer needed
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeading from '../../Shared/SectionHeading';

const BASE_PATH = '/GreenYasin';

// Import images for the slider
import img1 from '../../Images/img4.webp';
import img2 from '../../Images/img2.webp';
import img3 from '../../Images/img3.webp';

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
        <div className="space-y-4 text-center md:w-1/2 md:text-left">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            About Us
          </p>
          <SectionHeading
            title="Our Aim"
            highlightWord="Aim"
            className="!mb-6 !text-left"
            textAlignment="left"
          />
          <p className="leading-relaxed text-gray-600">
            To provide a comprehensive range of services to help public and
            private sector organizations to characterize, assess, quantify, and
            manage their relationship with the natural environment and to
            prepare for a changing climate.
          </p>
          <Link
            to={`${BASE_PATH}/about`}
            className="mt-4 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
          >
            READ MORE
          </Link>
        </div>

        {/* Right: Image Slider */}
        <div className="relative mt-8 h-48 w-80 flex-shrink-0 overflow-hidden rounded-lg shadow-lg md:mt-0 md:h-80 md:w-[30rem]">
          {/* @ts-ignore */}
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Aim Slider ${index + 1}`}
                  className="h-full w-full object-cover"
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
