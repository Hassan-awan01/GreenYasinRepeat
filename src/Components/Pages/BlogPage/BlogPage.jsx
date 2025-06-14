import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogArticles } from '../../../data/blogData';
import SectionHeading from '../../Shared/SectionHeading';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = blogArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading title="Our Blog" highlightWord="Blog" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, news, and expert articles on environmental solutions and sustainable practices.
          </p>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-md px-4 py-2 mt-6 mb-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link
            to="/add-post"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Add New Post
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blog/${article.id}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`/blog/${article.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-emerald-600 transition-colors duration-300">{article.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3">
                    By <span className="font-medium text-gray-700">{article.author}</span> on {article.date}
                  </p>
                  <p className="text-gray-700 text-base mb-4">{article.excerpt}</p>
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-full">No articles found matching your search.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage; 