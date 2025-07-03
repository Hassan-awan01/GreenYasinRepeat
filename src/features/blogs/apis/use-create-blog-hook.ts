import { useMutation } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useCallback, useMemo, useState } from 'react';
import { Id } from '../../../../convex/_generated/dataModel';

type RequestType = {
  title: string;
  content: string;
  blogImage?: Id<'_storage'>;
  tags: string[];
  author: string;
};
type ResponseType = Id<'blogs'> | null;

type Options = {
  onSuccess?: (response: ResponseType) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  throwError?: boolean;
};

export const useCreateBlog = () => {
  const [data, setData] = useState<ResponseType>(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<
    'pending' | 'success' | 'error' | 'settled' | null
  >(null);
  const isPending = useMemo(() => status === 'pending', [status]);
  const isSuccess = useMemo(() => status === 'success', [status]);
  const isError = useMemo(() => status === 'error', [status]);
  const isSettled = useMemo(() => status === 'settled', [status]);

  const mutation = useMutation(api.blogs.create);
  const mutate = useCallback(
    async (values: RequestType, options?: Options) => {
      // Ensure 'author' is provided in values when calling mutate
      try {
        setStatus('pending');
        const response = await mutation(values);
        options?.onSuccess?.(response);
        setData(response);
      } catch (error) {
        options?.onError?.(error as Error);
        setError('unkown Error');
        if (options?.throwError) {
          throw error;
        }
      } finally {
        setStatus('settled');
        options?.onSettled?.();
      }
    },
    [mutation],
  );

  return {
    mutate,
    data,
    error,
    isError,
    isPending,
    isSuccess,
    isSettled,
  };
};
