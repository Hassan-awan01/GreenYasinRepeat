import { Doc } from 'convex/_generated/dataModel';
import { atom, useAtom } from 'jotai';

const userState = atom<Doc<'users'> | null | undefined>(null);

export const useProtectRoute = () => {
  return useAtom(userState);
};
