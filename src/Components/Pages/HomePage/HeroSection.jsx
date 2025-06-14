import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLeaf, FaRecycle, FaTree } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { auth } from '../../../firebase';

// Import images from the Components/Images folder
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img4.jpg';
import img5 from '../../Images/img5.jpg';
import img6 from '../../Images/img6.jpg';
import img7 from '../../Images/img7.jpg';
import img8 from '../../Images/img8.jpg';
import img9 from '../../Images/img9.jpg';

const HeroSection = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  // Using a subset of images for potentially better performance
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-screen w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content with Animation */}
      <div className="global-container relative z-10 flex h-screen max-w-7xl flex-col items-center justify-center text-center">
        {/* Eco-friendly Icons */}
        <motion.div 
          className="mb-8 flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FaLeaf className="text-4xl text-emerald-400" />
          <FaRecycle className="text-4xl text-emerald-400" />
          <FaTree className="text-4xl text-emerald-400" />
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          className="text-5xl font-bold text-white md:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-emerald-400">Green</span> Yasin
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.h2
          className="mt-4 text-2xl font-medium text-emerald-300 md:text-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Sustainable Solutions for a Better Tomorrow
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          className="mt-6 max-w-2xl text-lg text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          We provide expert assessment and advisory services for environmental management,
          helping our clients achieve sustainable and economically viable solutions.
        </motion.p>

        {/* Buttons Animation */}
        <motion.div
          className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          {!loading && !user && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              <Link
                to="/signup"
                className="inline-block rounded-full bg-emerald-600 px-10 py-4 text-xl font-semibold shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-500/50"
              >
                Get Started
              </Link>
            </motion.div>
          )}
          <Link
            to={'/about'}
            className="inline-block rounded-full border-2 border-emerald-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-500/10"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="h-8 w-5 rounded-full border-2 border-white/30 p-1">
            <motion.div
              className="h-2 w-1 rounded-full bg-emerald-400"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
