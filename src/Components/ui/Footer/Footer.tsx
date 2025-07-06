import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaAngleRight,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // For the new 'X' icon
import footImage from '../../Images/foot.webp';

// Placeholder images for recent posts
import recentPost1 from '../../Images/img8.webp'; // Example placeholder
import recentPost2 from '../../Images/img5.webp'; // Example placeholder

const BASE_PATH = '/GreenYasin';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate(`${BASE_PATH}/`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 80; // Approximate navbar height in pixels
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - navbarHeight,
          behavior: 'smooth',
        });
      }
    }, 100); // Small delay to allow navigation to complete
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recentPosts = [
    {
      image: recentPost1,
      date: '14 Sep 2024',
      title: 'Meant widow equal an share least part.',
    },
    {
      image: recentPost2,
      date: '14 Sep 2024',
      title: 'Future Plan & Strategy for Consrutruction.',
    },
  ];

  return (
    <footer
      className="relative bg-cover bg-center px-4 py-16 text-white"
      style={{ backgroundImage: `url(${footImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{' '}
      {/* Increased opacity for better text contrast as in the image */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: GreenEarth Description & Socials */}
        <div>
          <h3 className="mb-4 text-2xl font-bold uppercase">
            <span className="text-green-400">Green </span>Yasin
          </h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Green Yasin is a forward-thinking environmental solutions company
            committed to sustainable development and eco-friendly practices.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="rounded-md border border-white p-2 transition-colors duration-300 hover:border-green-400 hover:text-green-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="rounded-md border border-white p-2 transition-colors duration-300 hover:border-green-400 hover:text-green-400"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              className="rounded-md border border-white p-2 transition-colors duration-300 hover:border-green-400 hover:text-green-400"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="rounded-md border border-white p-2 transition-colors duration-300 hover:border-green-400 hover:text-green-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="rounded-md border border-white p-2 transition-colors duration-300 hover:border-green-400 hover:text-green-400"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Explore Links */}
        <div>
          <h3 className="mb-6 text-xl font-bold uppercase">Explore</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to={`${BASE_PATH}/about`}
                className="flex items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
              >
                <FaAngleRight className="mr-2 text-green-400" /> About Us
              </Link>
            </li>
            <li>
              <Link
                to={`${BASE_PATH}/our-team`}
                className="flex items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
              >
                <FaAngleRight className="mr-2 text-green-400" /> Meet Our Team
              </Link>
            </li>
            <li>
              <Link
                to={`${BASE_PATH}/blog`}
                className="flex items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
              >
                <FaAngleRight className="mr-2 text-green-400" /> Blog
              </Link>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('project-section')}
                className="flex cursor-pointer items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
              >
                <FaAngleRight className="mr-2 text-green-400" /> Services
              </a>
            </li>
            <li>
              <Link
                to={`${BASE_PATH}/contact`}
                className="flex items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
              >
                <FaAngleRight className="mr-2 text-green-400" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Recent Post */}
        <div>
          <h3 className="mb-6 text-xl font-bold uppercase">Recent Work</h3>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-gray-400">{post.date}</p>
                  <p className="text-base leading-snug text-white transition-colors duration-300 hover:text-green-400">
                    {post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="mb-6 text-xl font-bold uppercase">Newsletter</h3>
          <p className="mb-6 leading-relaxed text-gray-300">
            Subscribe to our newsletter for the latest updates and green
            innovations from Green Yasin
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow rounded-l-lg border border-gray-600 bg-gray-800 p-3 text-white focus:border-green-500 focus:outline-none"
            />
            <button className="rounded-r-lg bg-green-600 p-3 transition-colors duration-300 hover:bg-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rotate-45 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="container relative z-10 mx-auto mt-12 flex flex-col items-center justify-between border-t border-gray-700 pt-8 text-sm text-gray-400 md:flex-row">
        <p>
          Copyright ©{new Date().getFullYear()}{' '}
          <span className="font-semibold">Green Yasin</span> Designed By{' '}
          <span className="font-semibold">
            <a href="https://neurixsolution.tech/">Neurix Solutions</a>
          </span>
        </p>
        <button
          onClick={scrollToTop}
          className="mt-4 rounded-md bg-green-600 p-3 text-white transition-colors duration-300 hover:bg-green-700 md:mt-0"
        >
          <span className="sr-only">Scroll to top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
