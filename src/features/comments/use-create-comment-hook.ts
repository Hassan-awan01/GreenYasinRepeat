import { useMutation } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useCallback, useMemo, useState } from 'react';
import { Id } from 'convex/_generated/dataModel';

type RequestType = {
  blogId: Id<'blogs'>;
  body: string;
  rating?: number;
};
type ResponseType = Id<'comments'> | null;

type Options = {
  onSuccess?: (response: ResponseType) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
  throwError?: boolean;
};

export const useCreateComment = () => {
  const [data, setData] = useState<ResponseType>(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<
    'pending' | 'success' | 'error' | 'settled' | null
  >(null);
  const isPending = useMemo(() => status === 'pending', [status]);
  const isSuccess = useMemo(() => status === 'success', [status]);
  const isError = useMemo(() => status === 'error', [status]);
  const isSettled = useMemo(() => status === 'settled', [status]);

  const mutation = useMutation(api.comments.create);
  const mutate = useCallback(
    async (values: RequestType, options?: Options) => {
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
