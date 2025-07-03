import { Password } from '@convex-dev/auth/providers/Password';
import { convexAuth } from '@convex-dev/auth/server';
import { DataModel } from './_generated/dataModel';
import { Value } from 'convex/values';

const CustomPassword = Password<DataModel>({
  profile(params: Record<string, Value | undefined>) {
    return {
      email: params.email as string,
      password: params.password as string,
      fullName: params.fullName as string,
      introduction: params.introduction as string,
      profession: params.profession as string,
    };
  },
});

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [CustomPassword],
});
