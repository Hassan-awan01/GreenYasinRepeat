import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import bg from '../../Images/bg.svg';
import logo from '../../Images/logo.png';
import SectionHeading from '../../Shared/SectionHeading';
import { useAuthActions } from '@convex-dev/auth/react';
import { Loader } from 'lucide-react';
import { useCurrentMember } from '@/features/hooks/use-get-current-member';
import { useProtectRoute } from '@/features/hooks/use-protect-route';

const BASE_PATH = '/GreenYasin';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || `${BASE_PATH}/`;

  const { signIn } = useAuthActions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const [_user, setUser] = useProtectRoute();
  const { data: user, isLoading: userLoading } = useCurrentMember();

  const onSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setError('');

    try {
      await signIn('password', {
        email,
        password,
        flow: 'signIn',
      });
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    if (user) {
      setUser(user); // setUser only once after login
      navigate(from, { replace: true });
    }
  }, [user, setUser, navigate, from]);

  if (userLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Loader className="text-muted-foreground size-5 animate-spin" />
      </div>
    );
  }

  return (
    <div className="font-poppins grid h-screen w-screen grid-cols-1 overflow-hidden px-8 md:grid-cols-2 md:gap-20 lg:gap-28">
      <div className="flex items-center justify-end md:flex">
        <img src={bg} alt="Background" className="w-[500px] lg:w-[400px]" />
      </div>

      <div className="flex w-full flex-col items-center justify-center text-center md:w-auto">
        <form
          onSubmit={onSignInSubmit}
          className="mx-auto w-full max-w-[360px] md:max-w-[290px]"
        >
          <Link to={`${BASE_PATH}/`} className="mb-6 flex justify-center">
            <img src={logo} alt="Green Yasin Logo" className="h-16 w-auto" />
          </Link>
          <SectionHeading
            title="Welcome"
            highlightWord="Welcome"
            className="!my-4 md:!my-2"
          />

          {/* Email Input */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d9d9] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d9d9] transition-colors duration-300 group-focus-within:text-[#38d39f]">
              <i className="fas fa-user"></i>
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
                onChange={(e) => setEmail(e.target.value)}
                disabled={pending}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="before:duration-400 after:duration-400 group relative my-6 flex items-center border-b-2 border-[#d9d9d9] py-1 before:absolute before:bottom-[-2px] before:right-1/2 before:h-[2px] before:w-0 before:bg-[#38d39f] before:transition-all before:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:h-[2px] after:w-0 after:bg-[#38d39f] after:transition-all after:content-[''] focus-within:border-[#38d39f] group-focus-within:before:w-1/2 group-focus-within:after:w-1/2">
            <div className="flex w-8 flex-shrink-0 items-center justify-center text-[#d9d9d9] transition-colors duration-300 group-focus-within:text-[#38d39f]">
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
                onChange={(e) => setPassword(e.target.value)}
                disabled={pending}
                required
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="my-4 flex items-center justify-between">
            <Link
              to="/forgot-password"
              className="block text-right text-sm text-[#999] hover:text-[#38d39f]"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="my-2 text-center text-sm text-[#e74c3c]">{error}</p>
          )}

          <button
            type="submit"
            className="my-4 block h-[50px] w-full cursor-pointer rounded-[25px] bg-gradient-to-r from-[#32be8f] via-[#38d39f] to-[#32be8f] text-xl text-white transition-all hover:bg-right disabled:cursor-not-allowed disabled:bg-[#95a5a6]"
            disabled={pending}
          >
            {pending ? 'Logging in...' : 'Login'}
          </button>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-[#ddd]" />
            <span className="flex-shrink-0 bg-white px-2 text-sm text-[#7f8c8d]">
              or continue with
            </span>
            <div className="flex-grow border-t border-[#ddd]" />
          </div>

          <p className="mt-4 text-center text-[#7f8c8d]">
            Don't have an account?{' '}
            <Link
              to={`${BASE_PATH}/signup`}
              className="text-[#38d39f] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
