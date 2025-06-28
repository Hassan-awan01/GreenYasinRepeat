import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogArticles } from '../../../data/blogData';

const BASE_PATH = '/GreenYasin';

type ParagraphContent = {
  type: 'paragraph';
  text: string;
};

type HeadingContent = {
  type: 'heading';
  level: number;
  text: string;
};

type ImageContent = {
  type: 'image';
  src: string;
  alt: string;
};

type ListContent = {
  type: 'list';
  items: string[];
};

type ArticleContent =
  | ParagraphContent
  | HeadingContent
  | ImageContent
  | ListContent;

interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: ArticleContent[];
}

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate fetching with a small delay
    const timer = setTimeout(() => {
      const foundArticle = blogArticles.find((art) => art.id === articleId);
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        setError(true);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [articleId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 pb-16 pt-32">
        <p className="text-xl text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 pb-16 pt-32">
        <p className="mb-4 text-xl text-red-600">Article not found.</p>
        <Link
          to={`${BASE_PATH}/blog`}
          className="text-emerald-600 hover:underline"
        >
          Go back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-32">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-xl bg-white p-8 shadow-lg"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {article.title}
          </h1>
          <div className="mb-6 flex items-center space-x-2 text-sm text-gray-600">
            <span>By</span>
            <span className="font-medium text-gray-700">{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="mb-8 h-96 w-full rounded-lg object-cover shadow-md"
            />
          )}

          <div className="prose max-w-none">
            {article.content.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="mb-4 leading-relaxed text-gray-800"
                    >
                      {block.text}
                    </p>
                  );
                case 'heading':
                  const HeadingTag =
                    `h${block.level}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag
                      key={index}
                      className={`mb-3 mt-6 font-semibold text-gray-900 ${
                        block.level === 2
                          ? 'text-3xl'
                          : block.level === 3
                            ? 'text-2xl'
                            : 'text-xl'
                      }`}
                    >
                      {block.text}
                    </HeadingTag>
                  );
                case 'list':
                  return (
                    <ul
                      key={index}
                      className="mb-4 list-inside list-disc space-y-2 pl-5"
                    >
                      {block.items.map((item, i) => (
                        <li key={i} className="text-gray-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case 'image':
                  return (
                    <div key={index} className="my-6 text-center">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="mx-auto rounded-lg object-contain shadow-md"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      {block.alt && (
                        <p className="mt-2 text-sm text-gray-600">
                          {block.alt}
                        </p>
                      )}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to={`${BASE_PATH}/blog`}
            className="inline-flex items-center font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
