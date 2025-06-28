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
import { Loader } from 'lucide-react';
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
        <img src={bg} alt="Background" className="w-[500px] lg:w-[400px]" />
      </div>

      <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto text-center md:min-h-0 md:w-auto">
        <form
          onSubmit={onSignUpSubmit}
          className="mx-auto w-full max-w-[360px] md:max-w-[290px]"
        >
          <Link to={`${BASE_PATH}/`} className="mb-6 flex justify-center">
            <img src={logo} alt="Green Yasin Logo" className="h-16 w-auto" />
          </Link>
          <SectionHeading
            title="Sign Up"
            highlightWord="Up"
            className="!my-4 md:!my-2"
          />
          {/* Full Name Input */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d9d9] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d9d9] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-user"></i>
            </div>
            <div className="relative h-[45px] flex-grow">
              <h5
                className={`absolute left-2 text-base text-[#999] transition-all duration-300 ${
                  fullName !== ''
                    ? 'top-[-5px] text-sm'
                    : 'top-1/2 -translate-y-1/2'
                }`}
              >
                Full Name
              </h5>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="font-poppins absolute left-0 top-0 h-full w-full border-none bg-none py-0.5 pl-2 text-base text-[#555] placeholder-gray-400 outline-none"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                disabled={pending}
                required
                placeholder="Enter your full name"
              />
            </div>
          </div>
          {/* Email Input */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d9d9] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d9d9] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="relative h-[45px] flex-grow">
              <h5
                className={`absolute left-2 text-base text-[#999] transition-all duration-300 ${
                  email !== ''
                    ? 'top-[-5px] text-sm'
                    : 'top-1/2 -translate-y-1/2'
                }`}
              >
                Email
              </h5>
              <input
                type="email"
                id="email"
                name="email"
                className="font-poppins absolute left-0 top-0 h-full w-full border-none bg-none py-0.5 pl-2 text-base text-[#555] placeholder-gray-400 outline-none"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={pending}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* Confirm Password Input */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d39f] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d39f] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-lock"></i>
            </div>
            <div className="relative h-[45px] flex-grow">
              <h5
                className={`absolute left-2 text-base text-[#999] transition-all duration-300 ${
                  password !== ''
                    ? 'top-[-5px] text-sm'
                    : 'top-1/2 -translate-y-1/2'
                }`}
              >
                Password
              </h5>
              <input
                type="password"
                id="password"
                name="password"
                className="font-poppins absolute left-0 top-0 h-full w-full border-none bg-none py-0.5 pl-2 text-base text-[#555] placeholder-gray-400 outline-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                disabled={pending}
                required
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d39f] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d39f] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-lock"></i>
            </div>
            <div className="relative h-[45px] flex-grow">
              <h5
                className={`absolute left-2 text-base text-[#999] transition-all duration-300 ${
                  confirmPassword !== ''
                    ? 'top-[-5px] text-sm'
                    : 'top-1/2 -translate-y-1/2'
                }`}
              >
                Confirm Password
              </h5>
              <input
                type="password"
                id="password"
                name="password"
                className="font-poppins absolute left-0 top-0 h-full w-full border-none bg-none py-0.5 pl-2 text-base text-[#555] placeholder-gray-400 outline-none"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                disabled={pending}
                required
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Profession */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d9d9] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d9d9] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="relative h-[45px] flex-grow">
              <h5
                className={`absolute left-2 text-base text-[#999] transition-all duration-300 ${
                  profession !== ''
                    ? 'top-[-5px] text-sm'
                    : 'top-1/2 -translate-y-1/2'
                }`}
              >
                Profession
              </h5>
              <input
                type="text"
                id="profession"
                name="profession"
                className="font-poppins absolute left-0 top-0 h-full w-full border-none bg-none py-0.5 pl-2 text-base text-[#555] placeholder-gray-400 outline-none"
                value={profession}
                onChange={(e) => {
                  setProfession(e.target.value);
                }}
                disabled={pending}
                required
                placeholder="Enter your profession"
              />
            </div>
          </div>
          {/* Introduction */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d9d9] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d9d9] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className="relative h-[45px] flex-grow">
              <h5
                className={`absolute left-2 text-base text-[#999] transition-all duration-300 ${
                  introduction !== ''
                    ? 'top-[-5px] text-sm'
                    : 'top-1/2 -translate-y-1/2'
                }`}
              >
                Introduction
              </h5>
              <input
                type="text"
                id="introduction"
                name="introduction"
                className="font-poppins absolute left-0 top-0 h-full w-full border-none bg-none py-0.5 pl-2 text-base text-[#555] placeholder-gray-400 outline-none"
                value={introduction}
                onChange={(e) => {
                  setIntroduction(e.target.value);
                }}
                disabled={pending}
                required
                placeholder="Brief self introduction"
              />
            </div>
          </div>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
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
