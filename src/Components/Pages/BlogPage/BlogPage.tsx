import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGetMessages } from '@/features/blogs/apis/use-get-blogs';
import SectionHeading from '../../Shared/SectionHeading';

const BASE_PATH = '/GreenYasin';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { results, status, loadMore } = useGetMessages();
  const filteredArticles = results.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.content && article.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-40">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <SectionHeading title="Our Blog" highlightWord="Blog" />
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
           Musadaq hanif Stay updated with our latest insights, news, and expert articles on
            environmental solutions and sustainable practices.
          </p>
          <input
            type="text"
            placeholder="Search articles..."
            className="mb-6 mt-6 w-full max-w-md rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link
            to={`${BASE_PATH}/add-post`}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 md:ml-4"
          >
            Add New Post
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {status === 'LoadingFirstPage' ? (
            <div className="flex h-32 items-center justify-center">
              <span className="text-emerald-600">Loading...</span>
            </div>
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.div
                key={article._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <Link to={`${BASE_PATH}/blog/${article._id}`}>
                  <div className="relative h-52 overflow-hidden">
                    {article.imageUrl && (
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`${BASE_PATH}/blog/${article._id}`}>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-emerald-600">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="mb-1 text-xs text-gray-500 text-left">
                    {article._creationTime ? new Date(article._creationTime).toLocaleString() : ''}
                  </div>
                  <p className="mb-3 text-sm text-gray-600">
                    By{' '}
                    <span className="font-medium text-gray-700">
                      {article.author}
                    </span>
                  </p>
                  <p className="mb-4 text-base text-gray-700">
                    {article.content?.slice(0, 120)}{article.content && article.content.length > 120 ? '...' : ''}
                  </p>
                  <Link
                    to={`${BASE_PATH}/blog/${article._id}`}
                    className="inline-flex items-center font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
                  >
                    Read More
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-600">
              No articles found matching your search.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
