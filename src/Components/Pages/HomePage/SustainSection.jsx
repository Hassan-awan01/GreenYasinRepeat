import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeading from '../../Shared/SectionHeading';

// Import images for the slider
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';

const SustainabilitySection = () => {
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
    <section className="bg-white py-16">
      <div className="global-container grid items-center gap-10 md:grid-cols-2">
        {/* Left Side - Image Slider */}
        <div className="hidden md:block h-64 w-96 flex-shrink-0 md:h-80 md:w-[30rem] overflow-hidden shadow-lg rounded-lg">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Sustainability Slider ${index + 1}`}
                  className="w-full h-full object-cover"
          />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Side - Text */}
        <div>
          <SectionHeading title="Strategic Sustainability:" highlightWord="Sustainability:" className="!text-left !mb-6" textAlignment="left" />
          <p className="mt-4 leading-relaxed text-gray-600">
            We work with clients from all sectors to ensure long-term
            environmental, social, and economic sustainability through early
            integration of sustainability considerations in policy, planning,
            and project development.
          </p>

          {/* Sustainability Categories */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sustainabilityData.map((item, index) => (
              <div key={index}>
                <h3 className="flex items-center text-lg font-semibold text-black">
                  <span className="mr-2 text-xl text-green-500">▶</span>{' '}
                  {item.title}
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sustainability Data
const sustainabilityData = [
  {
    title: 'Natural Environment',
    points: ['Preservation & Management', 'Balanced Needs', 'Common Good'],
  },
  {
    title: 'Sustainable Development',
    points: ['Equitable Distribution']
  },
  {
    title: 'Social',
    points: ['Community & Governance']
  },
  {
    title: 'Economy',
    points: ['Development & Investment']
  },
];

export default SustainabilitySection;
