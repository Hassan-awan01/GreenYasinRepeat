import { api } from '../../../convex/_generated/api';
import { useQuery } from 'convex/react';

export const useCurrentMember = () => {
  const data = useQuery(api.users.current);
  const isLoading = data === undefined;
  return { data, isLoading };
};
