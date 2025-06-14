import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import axios from 'axios';
// import './Login.css'; // Removed import
import bg from '../../Images/bg.svg'; // Assuming bg.svg is in the Images folder
import logo from '../../Images/logo.png'; // Import the logo
import SectionHeading from '../../Shared/SectionHeading'; // Import SectionHeading

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: true
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [authResult, setAuthResult] = useState(null);

  // No longer needed as Tailwind's focus-within will handle this.
  useEffect(() => {
    // This useEffect is now empty as all dynamic styling logic is handled by Tailwind CSS classes directly in JSX.
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setAuthResult(null);

    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      // First, authenticate with the backend
      const backendResponse = await axios.post(
        'http://localhost:8000/api/user/login',
        {
          email: formData.email,
          password: formData.password
        },
        {
          withCredentials: true // Important for cookie handling
        }
      );

      // Then authenticate with Firebase
      await setPersistence(auth, formData.rememberMe ? browserLocalPersistence : browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);

      const firebaseUserData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        displayName: userCredential.user.displayName || 'User',
        providerId: 'password'
      };

      setAuthResult({
        ...firebaseUserData,
        backendMessage: backendResponse.data.message || 'Backend login success'
      });

      // Configure axios defaults for future requests
      axios.defaults.withCredentials = true;

      // Navigate to home page after successful login
      navigate('/');

    } catch (error) {
      console.error('Login error:', error);
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthError = (error) => {
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
      setError('Account not found. Please check your email or sign up.');
      // document.getElementById('email').classList.add('input-error'); // Replaced with direct Tailwind/conditional styling
      // setTimeout(() => {
      //   document.getElementById('email').classList.remove('input-error');
      // }, 3000);
    } else if (error.code === 'auth/wrong-password') {
      setError('Incorrect password. Please try again.');
      // document.getElementById('password').classList.add('input-error'); // Replaced with direct Tailwind/conditional styling
      // setTimeout(() => {
      //   document.getElementById('password').classList.remove('input-error');
      // }, 3000);
    } else {
      setError('Login failed. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      setAuthResult(null);

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);

      const userData = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        providerId: 'google.com',
        googleId: result.user.providerData[0].uid
      };

      setAuthResult(userData);

      // Navigate to home page after successful Google sign-in
      navigate('/');

    } catch (error) {
      console.error('Google sign in error:', error.code);
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Sign in was cancelled. Please try again.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        setError('Please wait for the current sign in to complete.');
      } else {
        setError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-28 px-8 font-poppins overflow-hidden">
      <div className="flex justify-end items-center hidden md:flex">
        <img src={bg} alt="Background" className="w-[500px] lg:w-[400px]" />
      </div>

      <div className="flex flex-col justify-center items-center text-center w-full md:w-auto">
        {authResult ? (
          <div className="bg-[#f8f9fa] p-6 rounded-[15px] mb-6 text-left shadow-md">
            <h3 className="text-[#38d39f] mt-0 mb-4 text-xl">Login Successful!</h3>
            <p className="my-2 text-[#2c3e50] text-base"><strong className="inline-block w-[100px] text-[#495057] font-semibold">User ID:</strong> {authResult.uid}</p>
            <p className="my-2 text-[#2c3e50] text-base"><strong className="inline-block w-[100px] text-[#495057] font-semibold">Provider:</strong> {authResult.providerId}</p>
            <p className="my-2 text-[#2c3e50] text-base"><strong className="inline-block w-[100px] text-[#495057] font-semibold">Name:</strong> {authResult.displayName}</p>
            <p className="my-2 text-[#2c3e50] text-base"><strong className="inline-block w-[100px] text-[#495057] font-semibold">Email:</strong> {authResult.email}</p>
            {authResult.backendMessage && (
              <p className="my-2 text-[#2c3e50] text-base"><strong className="inline-block w-[100px] text-[#495057] font-semibold">Backend:</strong> {authResult.backendMessage}</p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-[360px] md:max-w-[290px] mx-auto">
            <Link to="/" className="flex justify-center mb-6">
              <img src={logo} alt="Green Yasin Logo" className="h-16 w-auto" />
            </Link>
            <SectionHeading title="Welcome" highlightWord="Welcome" className="!my-4 md:!my-2" />

            {/* Email Input */}
            <div className="group relative flex items-center my-6 py-1 border-b-2 border-[#d9d9d9] focus-within:border-[#38d39f] before:content-[''] before:absolute before:bottom-[-2px] before:right-1/2 before:w-0 before:h-[2px] before:bg-[#38d39f] before:transition-all before:duration-400 group-focus-within:before:w-1/2 after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#38d39f] after:transition-all after:duration-400 group-focus-within:after:w-1/2">
              <div className="flex-shrink-0 flex justify-center items-center text-[#d9d9d9] group-focus-within:text-[#38d39f] transition-colors duration-300 w-8">
                <i className="fas fa-user"></i>
              </div>
              <div className="relative flex-grow h-[45px]">
                <h5 className={`absolute left-2 text-[#999] text-lg transition-all duration-300 ${
                  formData.email !== '' ? 'top-[-5px] text-base' : 'top-1/2 -translate-y-1/2'
                }`}>Email</h5>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="absolute left-0 top-0 w-full h-full border-none outline-none bg-none pl-2 py-0.5 text-xl text-[#555] font-poppins"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group relative flex items-center my-6 py-1 border-b-2 border-[#d9d9d9] focus-within:border-[#38d39f] before:content-[''] before:absolute before:bottom-[-2px] before:right-1/2 before:w-0 before:h-[2px] before:bg-[#38d39f] before:transition-all before:duration-400 group-focus-within:before:w-1/2 after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#38d39f] after:transition-all after:duration-400 group-focus-within:after:w-1/2">
              <div className="flex-shrink-0 flex justify-center items-center text-[#d9d9d9] group-focus-within:text-[#38d39f] transition-colors duration-300 w-8">
                <i className="fas fa-lock"></i>
              </div>
              <div className="relative flex-grow h-[45px]">
                <h5 className={`absolute left-2 text-[#999] text-lg transition-all duration-300 ${
                  formData.password !== '' ? 'top-[-5px] text-base' : 'top-1/2 -translate-y-1/2'
                }`}>Password</h5>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="absolute left-0 top-0 w-full h-full border-none outline-none bg-none pl-2 py-0.5 text-xl text-[#555] font-poppins"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center my-4">
              <label className="flex items-center gap-2 text-sm text-[#555] cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-auto m-0"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="block text-right no-underline text-[#999] text-sm transition-colors duration-300 hover:text-[#38d39f]">
                Forgot Password?
              </Link>
            </div>

            {error && <p className="text-[#e74c3c] my-2 text-sm text-center">{error}</p>}

            <button type="submit" className="block w-full h-[50px] rounded-[25px] outline-none border-none bg-gradient-to-r from-[#32be8f] via-[#38d39f] to-[#32be8f] bg-[200%] text-xl text-white uppercase my-4 cursor-pointer transition-all duration-500 hover:bg-right disabled:bg-[#95a5a6] disabled:cursor-not-allowed disabled:bg-none" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-[#ddd]"></div>
              <span className="flex-shrink-0 bg-white px-2 text-[#7f8c8d] text-sm">or continue with</span>
              <div className="flex-grow border-t border-[#ddd]"></div>
            </div>

            <button
              type="button"
              className="w-full py-3 border border-[#ddd] rounded-[25px] bg-white text-base cursor-pointer transition-colors duration-300 mb-4 text-[#555] hover:bg-[#f5f6f7] disabled:bg-[#95a5a6] disabled:cursor-not-allowed"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              Continue with Google
            </button>

            <p className="text-center mt-4 text-[#7f8c8d]">
              Don't have an account? <Link to="/signup" className="text-[#38d39f] no-underline inline hover:underline">Sign up</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login; 