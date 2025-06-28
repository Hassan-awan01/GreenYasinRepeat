import { Id } from 'convex/_generated/dataModel';
import { api } from '../../../../convex/_generated/api';
import { useQuery } from 'convex/react';

interface RequestType {
  blogId: Id<'blogs'>;
}
export const useGetBlogAndComment = ({ blogId }: RequestType) => {
  const data = useQuery(api.blogs.getByIdAndComments, { blogId });
  const isLoading = data === undefined;
  return { data, isLoading };
};
