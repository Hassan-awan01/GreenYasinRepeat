import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from './SectionHeading';

// Import client images
import img1 from '../Images/OurClientsImgs/image1.png';
import img2 from '../Images/OurClientsImgs/image2.jpeg';
import img3 from '../Images/OurClientsImgs/image3.jpeg';
import img4 from '../Images/OurClientsImgs/image4.jpeg';
import img5 from '../Images/OurClientsImgs/image5.jpeg';
import img6 from '../Images/OurClientsImgs/image6.jpeg';
import img7 from '../Images/OurClientsImgs/image7.jpeg';
import img8 from '../Images/OurClientsImgs/image8.jpeg';
import img9 from '../Images/OurClientsImgs/image9.jpeg';
import img10 from '../Images/OurClientsImgs/image10.jpeg';
import img11 from '../Images/OurClientsImgs/image11.jpeg';

const clientLogos = [
  { id: 1, src: img1, alt: 'Client Logo 1' },
  { id: 2, src: img2, alt: 'Client Logo 2' },
  { id: 3, src: img3, alt: 'Client Logo 3' },
  { id: 4, src: img4, alt: 'Client Logo 4' },
  { id: 5, src: img5, alt: 'Client Logo 5' },
  { id: 6, src: img6, alt: 'Client Logo 6' },
  { id: 7, src: img7, alt: 'Client Logo 7' },
  { id: 8, src: img8, alt: 'Client Logo 8' },
  { id: 9, src: img9, alt: 'Client Logo 9' },
  { id: 10, src: img10, alt: 'Client Logo 10' },
  { id: 11, src: img11, alt: 'Client Logo 11' },
];

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5, // Show more logos at once for a wider display
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Faster autoplay for a revolving effect
    cssEase: 'linear',
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Valued Clients" highlightWord="Clients" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="client-slider"
        >
          <Slider {...settings}>
            {clientLogos.map((client) => (
              <div key={client.id} className="px-4 py-2">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="mx-auto h-20 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSlider; 