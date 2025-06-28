import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useGetMessages } from '@/features/blogs/apis/use-get-blogs';
import SectionHeading from '../../Shared/SectionHeading';

const BlogsPage = () => {
  const { results, status, loadMore } = useGetMessages();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<{ [key: number]: typeof results }>({});

  // ⚠️ This useEffect ensures we store the initial result after loading
  useEffect(() => {
    if (status !== 'LoadingFirstPage' && results.length > 0 && !pages[1]) {
      setPages((prev) => ({
        ...prev,
        1: results,
      }));
    }
  }, [results, status, pages]);

  const handleNext = async () => {
    const nextPage = page + 1;

    if (!pages[nextPage]) {
      await loadMore();
      setPages((prev) => ({
        ...prev,
        [nextPage]: results,
      }));
    }

    setPage(nextPage);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const currentResults = pages[page] || [];

  return (
    <div className="font-poppins min-h-screen bg-gray-50 pb-20 pt-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title="Latest Blogs"
          highlightWord="Blogs"
          className="!mb-10 text-center"
        />

        {status === 'LoadingFirstPage' ? (
          <div className="flex h-32 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-emerald-600" />
          </div>
        ) : currentResults.length === 0 ? (
          <div className="text-center text-gray-500">No blogs found.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {currentResults.map((blog) => (
              <div key={blog._id} className="rounded-lg bg-white p-6 shadow-md">
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="mb-4 h-48 w-full rounded-md object-cover"
                  />
                )}
                <h2 className="mb-2 text-xl font-semibold text-emerald-600">
                  {blog.title}
                </h2>
                <p className="line-clamp-3 text-sm text-gray-600">
                  {blog.content}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Buttons */}
        <div className="mt-10 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className={`rounded-md px-4 py-2 text-white ${
              page === 1 ? 'bg-gray-300' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={status === 'CanLoadMore' || status === 'LoadingMore'}
            className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            {status === 'LoadingMore' ? (
              <Loader2 className="mx-auto h-5 w-5 animate-spin" />
            ) : (
              'Next'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
