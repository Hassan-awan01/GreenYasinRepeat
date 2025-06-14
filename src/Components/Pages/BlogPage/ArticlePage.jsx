import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogArticles } from '../../../data/blogData';

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate fetching article data
    const foundArticle = blogArticles.find(art => art.id === articleId);
    if (foundArticle) {
      setArticle(foundArticle);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-gray-50">
        <p className="text-xl text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 bg-gray-50">
        <p className="text-xl text-red-600 mb-4">Article not found.</p>
        <Link to="/blog" className="text-emerald-600 hover:underline">Go back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
          <p className="text-gray-600 text-sm mb-6">
            By <span className="font-medium text-gray-700">{article.author}</span> on {article.date}
          </p>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-md"
            />
          )}

          <div className="max-w-none text-gray-800 leading-relaxed">
            {article.content.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return <p key={index} className="mb-4">{block.text}</p>;
                case 'heading':
                  const HeadingTag = `h${block.level}`;
                  return <HeadingTag key={index} className={`text-${6 - block.level}xl font-semibold mt-6 mb-3 text-gray-900`}>{block.text}</HeadingTag>;
                case 'list':
                  return (
                    <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                      {block.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  );
                case 'image':
                  return (
                    <div key={index} className="my-6 text-center">
                      <img 
                        src={block.src} 
                        alt={block.alt} 
                        className="h-auto mx-auto rounded-lg shadow-md object-contain" 
                        style={{ maxWidth: '300px', width: '100%' }}
                      />
                      {block.alt && <p className="text-sm text-gray-600 mt-2">{block.alt}</p>}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </motion.div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
          >
            <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage; 