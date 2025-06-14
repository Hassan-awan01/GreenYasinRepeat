import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Assuming blogArticles can be modified, for demonstration purposes.
// In a real application, you'd likely post to a backend API.
import { blogArticles } from '../../../data/blogData'; // Import to simulate adding
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading

const AddPostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState(''); // Simplified for text content

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend/API
    console.log('New Post Data:', { title, author, image, excerpt, content });

    // Simulate adding the post to our local data for immediate display
    const newArticle = {
      id: String(blogArticles.length + 1), // Simple ID generation
      title,
      author,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      image,
      excerpt,
      // For content, a real implementation would parse the 'content' string into the structured format
      content: [{ type: 'paragraph', text: content }],
    };

    // This directly modifies the imported array, which is generally not recommended in larger apps
    // without a proper state management solution or API calls.
    blogArticles.unshift(newArticle); // Add to the beginning for latest posts

    alert('Post added successfully!');
    navigate('/blog'); // Navigate back to the blog page
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <SectionHeading title="Add New Blog Post" highlightWord="Post" className="!mb-6"/>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
              <input
                type="text"
                id="author"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                id="image"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="e.g., https://example.com/image.jpg"
              />
            </div>
            <div>
              <label htmlFor="excerpt" className="block text-lg font-medium text-gray-700">Excerpt</label>
              <textarea
                id="excerpt"
                rows="3"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="content" className="block text-lg font-medium text-gray-700">Content</label>
              <textarea
                id="content"
                rows="10"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Add Post
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddPostPage; 