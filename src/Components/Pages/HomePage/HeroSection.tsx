import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLeaf, FaRecycle, FaTree } from 'react-icons/fa';

// Import images from the Components/Images folder
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img9.jpg';
import img5 from '../../Images/img5.jpg';
import img6 from '../../Images/img6.jpg';
import img7 from '../../Images/img7.jpg';
import img8 from '../../Images/img8.jpg';
import img9 from '../../Images/img9.jpg';

const BASE_PATH = '/GreenYasin';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
  };

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {/* @ts-ignore */}
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
      <div className="global-container relative z-10 flex h-screen max-w-7xl -translate-y-4 transform flex-col items-center justify-center pt-4 text-center md:translate-y-0 md:pt-0">
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

        {/* Title */}
        <motion.h1
          className="text-5xl font-bold text-white md:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-emerald-400">Green</span> Yasin
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="mt-4 text-2xl font-medium text-emerald-300 md:text-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Sustainable Solutions for a Better Tomorrow
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 hidden max-w-2xl text-lg text-gray-200 md:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          We provide expert assessment and advisory services for environmental
          management, helping our clients achieve sustainable and economically
          viable solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex items-center justify-center space-x-4 sm:space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 flex-grow-0"
          >
            <Link
              to={`${BASE_PATH}/signup`}
              className="flex h-14 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-500/50 md:px-10 md:py-4 md:text-xl"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 flex-grow-0"
          >
            <Link
              to={`${BASE_PATH}/about`}
              className="flex h-14 items-center justify-center rounded-full border-2 border-emerald-500 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-emerald-500/10 md:px-10 md:py-4 md:text-xl"
            >
              Learn More
            </Link>
          </motion.div>
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
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
