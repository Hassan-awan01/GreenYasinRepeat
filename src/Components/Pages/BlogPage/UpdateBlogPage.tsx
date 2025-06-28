import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import SectionHeading from '../../Shared/SectionHeading';
import { Id } from 'convex/_generated/dataModel';
import { useGenerateUploadUrl } from '@/features/blogs/apis/use-upload-image-hook';
import { useUpdateBlog } from '@/features/blogs/apis/use-update-blog-hook';
import { useDeleteImage } from '@/features/blogs/apis/use-delete-image';

interface UpdateBlogPageProps {
  _id: Id<'blogs'>;
  title: string;
  content: string;
  blogImage?: Id<'_storage'>;
  tags: string[];
}

interface UpdateBlogPageProps {
  blog: UpdateBlogPageProps;
}

const UpdateBlogPage: React.FC<UpdateBlogPageProps> = ({ blog }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(blog.title);
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<string>(blog.content);
  const [tagsInput, setTagsInput] = useState<string>(blog.tags.join(', '));
  const [error, setError] = useState<string>('');
  const [isPending, setIsPending] = useState<boolean>(false);

  const { mutate: generateUploadUrl } = useGenerateUploadUrl();
  const { mutate: updateBlog } = useUpdateBlog();
  const { mutate: deleteImage } = useDeleteImage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsPending(true);

      const tags: string[] = tagsInput
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);

      let blogImageId: Id<'_storage'> | undefined = blog.blogImage;

      if (image) {
        // Delete existing image
        if (blog.blogImage) {
          await deleteImage(
            { blogImage: blog.blogImage },
            { throwError: true },
          );
        }

        // Upload new image
        const url = await generateUploadUrl({}, { throwError: true });
        const result = await fetch(url!, {
          method: 'POST',
          headers: { 'Content-Type': image.type },
          body: image,
        });

        if (!result.ok) {
          setError('Falied to Upload new Image');
        }

        const { storageId } = await result.json();
        blogImageId = storageId;
      }

      await updateBlog(
        {
          blogId: blog._id,
          title,
          content,
          tags,
          blogImage: blogImageId,
        },
        { throwError: true },
      );

      navigate('/GreenYasin/blog');
    } catch (err: any) {
      setError(err.message || 'Unknown error');
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
            title="Update Blog"
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

            {/* Image */}
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
              {image ? (
                <p className="mt-1 text-sm text-gray-600">{image.name}</p>
              ) : blog.blogImage ? (
                <p className="mt-1 text-sm text-gray-600">
                  Current image is already set
                </p>
              ) : null}
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Content
              </label>
              <textarea
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
              ></textarea>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-md bg-emerald-600 px-6 py-3 text-lg text-white hover:bg-emerald-700"
            >
              {isPending ? 'Updating...' : 'Update Blog'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default UpdateBlogPage;
