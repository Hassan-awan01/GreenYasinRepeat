import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../Images/bg.svg';
import logo from '../../Images/logo.png';
import SectionHeading from '../../Shared/SectionHeading';
import { useAuthActions } from '@convex-dev/auth/react';
import { useProtectRoute } from '@/features/hooks/use-protect-route';
import { api } from '@/../convex/_generated/api';
import { useQuery } from 'convex/react';
import { useCurrentMember } from '@/features/hooks/use-get-current-member';
import { Loader, Eye, EyeOff } from 'lucide-react';
const BASE_PATH = '/GreenYasin';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [profession, setProfession] = useState('');

  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const [_user, setUser] = useProtectRoute();

  const { signIn } = useAuthActions();
  const { data: user, isLoading: userLoading } = useCurrentMember();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/GreenYasin/';

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password not matched');
      return;
    }

    setPending(true);

    try {
      await signIn('password', {
        fullName,
        email,
        password,
        profession,
        introduction,
        flow: 'signUp',
      });

      setUser(user);
      navigate(from);
    } catch (error) {
      setError('Something Went Wrong');
    } finally {
      setPending(false);
    }
  };

  if (userLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Loader className="text-muted-foreground size-5 animate-spin" />
      </div>
    );
  }

  if (user) {
    navigate(from);
  }

  return (
    <div className="font-poppins grid min-h-screen w-screen grid-cols-1 px-8 md:grid-cols-2 md:gap-20 lg:gap-28">
      <div className="flex items-center justify-end md:flex">
        <picture>
          <source srcSet={bg.replace(/\.(jpg|jpeg|png)$/, '.webp')} type="image/webp" />
          <img src={bg} alt="Background" className="w-[500px] lg:w-[400px]" loading="lazy" />
        </picture>
      </div>

      <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto text-center md:min-h-0 md:w-auto">
        <form
          onSubmit={onSignUpSubmit}
          className="mx-auto w-full max-w-[360px] md:max-w-[290px]"
        >
          <Link to={`${BASE_PATH}/`} className="mb-6 flex justify-center">
            <picture>
              <source srcSet={logo.replace(/\.(jpg|jpeg|png)$/, '.webp')} type="image/webp" />
              <img src={logo} alt="Green Yasin Logo" className="h-16 w-auto" loading="lazy" />
            </picture>
          </Link>
          <SectionHeading
            title="Sign Up"
            highlightWord="Up"
            className="!my-4 md:!my-2"
          />
          {/* Full Name Input */}
          <div className="mb-4 text-left">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-700 focus:border-emerald-500 focus:ring-emerald-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={pending}
              required
              placeholder="Enter your full name"
              autoComplete="name"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-700 focus:border-emerald-500 focus:ring-emerald-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={pending}
              required
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          {/* Passwords Group */}
          <div className="mb-4 text-left flex gap-2">
            <div className="w-1/2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-700 focus:border-emerald-500 focus:ring-emerald-500 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={pending}
                  required
                  placeholder="Enter your password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  tabIndex={-1}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-700 focus:border-emerald-500 focus:ring-emerald-500 pr-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={pending}
                  required
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  tabIndex={-1}
                  onClick={() => setShowConfirmPassword((v) => !v)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          {/* Profession Input */}
          <div className="mb-4 text-left">
            <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-700 focus:border-emerald-500 focus:ring-emerald-500"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              disabled={pending}
              required
              placeholder="Enter your profession"
            />
          </div>
          {/* Introduction Textarea */}
          <div className="mb-4 text-left">
            <label htmlFor="introduction" className="block text-sm font-medium text-gray-700 mb-1">
              Introduction
            </label>
            <textarea
              id="introduction"
              name="introduction"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-700 focus:border-emerald-500 focus:ring-emerald-500"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              disabled={pending}
              required
              placeholder="Brief self introduction"
              rows={3}
              maxLength={200}
            />
            <div className="text-xs text-gray-400 text-right mt-1">
              {introduction.length}/200 characters
            </div>
          </div>
          {error && <p className="mt-4 text-sm text-red-500 text-left">{error}</p>}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-emerald-600 py-2 text-xl text-white transition-all duration-300 hover:bg-emerald-700"
            disabled={pending}
          >
            {pending ? 'Signing Up...' : 'Sign Up'}
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link
              to={`${BASE_PATH}/login`}
              className="font-semibold text-emerald-600 hover:underline"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
