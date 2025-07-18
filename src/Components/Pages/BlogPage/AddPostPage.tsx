import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// import { blogArticles } from '../../../data/'; // Import to simulate adding
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading
import { Id } from 'convex/_generated/dataModel';
import { useGenerateUploadUrl } from '@/features/blogs/apis/use-upload-image-hook';
import { useCreateBlog } from '@/features/blogs/apis/use-create-blog-hook';

const BASE_PATH = '/GreenYasin';

type AddBlogPageType = {
  title: string;
  content: string;
  blogImage: Id<'_storage'> | undefined;
  tags: string[];
  author: string;
};

const AddPostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { mutate: generateUploadUrl } = useGenerateUploadUrl();
  const { mutate: createBlog, isPending: creatingBlog } = useCreateBlog();
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsPending(true);

      const tags = tagsInput
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);

      const values: AddBlogPageType = {
        title,
        content,
        tags,
        blogImage: undefined,
        author,
      };

      if (image) {
        const url = await generateUploadUrl({}, { throwError: true });
        const result = await fetch(url!, {
          method: 'POST',
          headers: { 'Content-Type': image!.type },
          body: image,
        });

        if (!result.ok) {
          setError('Failed to Upload');
          return;
        }

        const { storageId } = await result.json();

        values.blogImage = storageId;
      }

      await createBlog(values, {
        throwError: true,
      });
      navigate('/GreenYasin/blog');
    } catch (error: any) {
      setError(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="font-poppins min-h-screen bg-gray-50 pb-16 pt-32">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-white p-8 shadow-lg"
        >
          <SectionHeading
            title="Add New Blog"
            highlightWord="Blog"
            className="!mb-6"
          />
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Image File Input */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Blog Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setImage(file);
                }}
                className="mt-1 block w-full"
              />
              {image && (
                <p className="mt-1 text-sm text-gray-600">{image.name}</p>
              )}
            </div>

            {/* Tags */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g. eco, climate, green"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Content
              </label>
              <div style={{ minHeight: '240px', height: '240px' }}>
                {/* @ts-ignore */}
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  className="mt-1 bg-white h-full"
                  theme="snow"
                />
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{String(error)}</p>}

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isPending}
                className="w-full max-w-xs rounded-full bg-emerald-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:opacity-60"
              >
                {isPending ? 'Posting...' : 'Post Blog'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddPostPage;
