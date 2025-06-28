import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  highlightWord: string;
  className?: string;
  textAlignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlightWord,
  className = '',
  textAlignment = 'center',
}) => {
  const parts = title.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${textAlignment === 'left' ? 'text-left' : 'text-center'} ${className}`}
    >
      <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        {parts.map((word, index) => (
          <React.Fragment key={index}>
            {word === highlightWord ? (
              <span className="text-emerald-600">{word}</span>
            ) : (
              <span>{word}</span>
            )}
            {index < parts.length - 1 && ' '}
          </React.Fragment>
        ))}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`mt-2 block h-1 w-16 bg-emerald-600 ${textAlignment === 'left' ? 'mr-auto' : 'mx-auto'}`}
      ></motion.span>
    </motion.div>
  );
};

export default SectionHeading;
