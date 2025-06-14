import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaAngleRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // For the new 'X' icon
import footImage from '../../Images/foot.jpg';

// Placeholder images for recent posts
import recentPost1 from '../../Images/img4.jpg'; // Example placeholder
import recentPost2 from '../../Images/img5.jpg'; // Example placeholder

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recentPosts = [
    {
      image: recentPost1,
      date: '14 Sep 2024',
      title: 'Meant widow equal an share least part.'
    },
    {
      image: recentPost2,
      date: '14 Sep 2024',
      title: 'Future Plan & Strategy for Consrutruction.'
    },
  ];

  return (
    <footer
      className="relative bg-cover bg-center text-white py-16 px-4"
      style={{ backgroundImage: `url(${footImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Increased opacity for better text contrast as in the image */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: GreenEarth Description & Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase">
            <span className="text-green-400">Green </span>Yasin
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Alteration in some form by injected humour or randomised words which don't look even slightly randomised words believable.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 border border-white rounded-md hover:border-green-400 hover:text-green-400 transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="p-2 border border-white rounded-md hover:border-green-400 hover:text-green-400 transition-colors duration-300">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="p-2 border border-white rounded-md hover:border-green-400 hover:text-green-400 transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="p-2 border border-white rounded-md hover:border-green-400 hover:text-green-400 transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="p-2 border border-white rounded-md hover:border-green-400 hover:text-green-400 transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Explore Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 uppercase">Explore</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                <FaAngleRight className="text-green-400 mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                <FaAngleRight className="text-green-400 mr-2" /> Meet Our Team
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                <FaAngleRight className="text-green-400 mr-2" /> Blog
              </Link>
            </li>
            <li>
              <Link to="/services/All%20Services" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                <FaAngleRight className="text-green-400 mr-2" /> Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center">
                <FaAngleRight className="text-green-400 mr-2" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Recent Post */}
        <div>
          <h3 className="text-xl font-bold mb-6 uppercase">Recent Work</h3>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">{post.date}</p>
                  <p className="text-white text-base leading-snug hover:text-green-400 transition-colors duration-300">{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-6 uppercase">Newsletter</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Alteration in some form by injected humour or
            randomised words which don't look.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow p-3 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 p-3 rounded-r-lg transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 container mx-auto border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>Copyright ©{new Date().getFullYear()} <span className="font-semibold">Green Yasin</span> Designed By <span className="font-semibold">Neurix Solutions</span></p>
        <button
          onClick={scrollToTop}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-md transition-colors duration-300 mt-4 md:mt-0"
        >
          <span className="sr-only">Scroll to top</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
