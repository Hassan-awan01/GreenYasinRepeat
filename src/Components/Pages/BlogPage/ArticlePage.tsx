import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGetBlogAndComment } from '@/features/blogs/apis/use-get-blog-comments';
import { useCreateComment } from '@/features/comments/use-create-comment-hook';
import { useRemoveComment } from '@/features/comments/use-remove-comment-hook';
import { useUpdateComment } from '@/features/comments/use-update-comment-hook';
import { useCurrentMember } from '@/features/hooks/use-get-current-member';

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

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { data, isLoading } = useGetBlogAndComment({
    blogId: articleId as any,
  });
  const blog = data?.blog;
  const comments = data?.comments || [];
  const error = !isLoading && !blog;

  // Comment form state
  const [commentBody, setCommentBody] = useState('');
  const [commentRating, setCommentRating] = useState<number | undefined>(
    undefined,
  );
  const { mutate: createComment, isPending: isCreatingComment } =
    useCreateComment();
  const { mutate: removeComment, isPending: isRemovingComment } =
    useRemoveComment();
  const { mutate: updateComment, isPending: isUpdatingComment } =
    useUpdateComment();
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editBody, setEditBody] = useState('');
  const [editRating, setEditRating] = useState<number | undefined>(undefined);
  const { data: currentUser, isLoading: isUserLoading } = useCurrentMember();
  const navigate = useNavigate();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentBody.trim() || !blog) return;
    if (!currentUser) {
      navigate('/GreenYasin/signup');
      return;
    }
    createComment(
      { blogId: blog._id, body: commentBody, rating: commentRating },
      {
        onSuccess: () => {
          setCommentBody('');
          setCommentRating(undefined);
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 pb-16 pt-32">
        <p className="text-xl text-gray-700">Loading article...</p>
      </div>
    );
  }

  if (error || !blog) {
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

  // blog is guaranteed to be defined here
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const safeBlog = blog!;
  const creationDate = new Date(safeBlog._creationTime);
  const formattedDate = creationDate.toLocaleDateString();
  const formattedTime = creationDate.toLocaleTimeString();

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row">
        {/* Blog Details Left Side */}
        <div className="flex w-full flex-col items-center justify-start md:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-xl bg-white p-8 shadow-lg"
          >
            {safeBlog.imageUrl && (
              <div className="mb-6">
                <img
                  src={safeBlog.imageUrl as string}
                  alt={safeBlog.title}
                  className="max-h-72 w-full max-w-xl rounded-lg object-cover shadow-md"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div className="mb-2 text-left text-xs text-gray-500">
              {formattedDate} at {formattedTime}
            </div>
            <h1 className="mb-2 text-left text-3xl font-bold leading-tight text-gray-900">
              {safeBlog.title}
            </h1>
            <div className="mb-2 text-left text-base text-gray-600">
              By{' '}
              <span className="font-medium text-gray-700">
                {safeBlog.author}
              </span>
            </div>
            <div className="prose max-w-none text-left">
              {String(safeBlog.content)}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Comments (Chat) and Tags */}
        <div className="flex w-full flex-col gap-6 md:w-2/5">
          {/* Chat/Comments Section */}
          <div className="max-h-[400px] min-h-[300px] flex-1 overflow-y-auto rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Chat</h2>
            {comments.length === 0 ? (
              <p className="text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              <ul className="space-y-6">
                {comments.map((comment: any) => {
                  const isAuthor =
                    currentUser && comment.userId === currentUser._id;
                  return (
                    <li
                      key={comment._id}
                      className="border-b pb-4 last:border-b-0"
                    >
                      <div className="mb-1 flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium text-gray-800">
                          {comment.user?.fullName || 'Anonymous'}
                        </span>
                        {comment.user?.profession && (
                          <span className="text-xs text-gray-400">
                            ({comment.user.profession})
                          </span>
                        )}
                        {comment.rating !== undefined && (
                          <span className="ml-2 rounded bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                            Rating: {comment.rating}
                          </span>
                        )}
                        {isAuthor && (
                          <>
                            <button
                              className="ml-2 text-xs text-blue-600 hover:underline"
                              onClick={() => {
                                setEditingCommentId(comment._id);
                                setEditBody(comment.body);
                                setEditRating(comment.rating);
                              }}
                              disabled={isUpdatingComment || isRemovingComment}
                            >
                              Edit
                            </button>
                            <button
                              className="ml-2 text-xs text-red-600 hover:underline"
                              onClick={() => {
                                if (window.confirm('Delete this comment?')) {
                                  removeComment({ commentId: comment._id });
                                }
                              }}
                              disabled={isUpdatingComment || isRemovingComment}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                      {editingCommentId === comment._id ? (
                        <form
                          className="space-y-2"
                          onSubmit={(e) => {
                            e.preventDefault();
                            updateComment(
                              {
                                commentId: comment._id,
                                body: editBody,
                                rating: editRating,
                              },
                              {
                                onSuccess: () => {
                                  setEditingCommentId(null);
                                  setEditBody('');
                                  setEditRating(undefined);
                                },
                              },
                            );
                          }}
                        >
                          <textarea
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            rows={2}
                            className="w-full rounded-md border border-gray-300 px-2 py-1"
                            required
                          />
                          <input
                            type="number"
                            min={1}
                            max={5}
                            value={editRating === undefined ? '' : editRating}
                            onChange={(e) =>
                              setEditRating(
                                e.target.value
                                  ? Number(e.target.value)
                                  : undefined,
                              )
                            }
                            placeholder="Rating (1-5)"
                            className="w-32 rounded-md border border-gray-300 px-2 py-1"
                          />
                          <div className="mt-1 flex gap-2">
                            <button
                              type="submit"
                              className="rounded bg-emerald-600 px-3 py-1 text-xs text-white hover:bg-emerald-700"
                              disabled={isUpdatingComment}
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="rounded bg-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-400"
                              onClick={() => setEditingCommentId(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="text-gray-700">{comment.body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Add Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mt-8 space-y-4">
              <textarea
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                rows={3}
                placeholder="Write your comment..."
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={commentRating === undefined ? '' : commentRating}
                  onChange={(e) =>
                    setCommentRating(
                      e.target.value ? Number(e.target.value) : undefined,
                    )
                  }
                  placeholder="Rating (1-5)"
                  className="w-32 rounded-md border border-gray-300 px-2 py-1 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  disabled={isCreatingComment}
                  className="rounded-md bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700 disabled:opacity-60"
                >
                  {isCreatingComment ? 'Posting...' : 'Add Comment'}
                </button>
              </div>
            </form>
          </div>
          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 rounded-xl bg-white p-4 shadow">
            <h3 className="mb-2 w-full text-lg font-semibold text-gray-700">
              Tags
            </h3>
            {safeBlog.tags && safeBlog.tags.length > 0 ? (
              safeBlog.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700"
                >
                  #{tag}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-400">No tags</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
