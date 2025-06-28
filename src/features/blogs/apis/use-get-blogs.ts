import { usePaginatedQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

export type GetMessagesReturnType = (typeof api.blogs.get._returnType)['page'];

const BATCH_SIZE = 20;

export const useGetMessages = () => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.blogs.get,
    {},
    {
      initialNumItems: BATCH_SIZE,
    },
  );

  return {
    results,
    status,
    loadMore: () => loadMore(BATCH_SIZE),
  };
};
