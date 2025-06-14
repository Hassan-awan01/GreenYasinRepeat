import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import axios from 'axios';
import bg from '../../Images/bg.svg';
import logo from '../../Images/logo.png';
import SectionHeading from '../../Shared/SectionHeading';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // No longer needed as Tailwind's focus-within will handle this.
  useEffect(() => {
    // This useEffect is now empty as all dynamic styling logic is handled by Tailwind CSS classes directly in JSX.
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/user/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });

      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      await updateProfile(userCredential.user, {
        displayName: formData.fullName
      });
      
      navigate('/');
      
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response) {
        setError(error.response.data.message || 'Failed to register. Please try again.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists. Please log in instead.');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      await signInWithPopup(auth, provider);
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
        <form onSubmit={handleSubmit} className="w-full max-w-[360px] md:max-w-[290px] mx-auto">
          <Link to="/" className="flex justify-center mb-6">
            <img src={logo} alt="Green Yasin Logo" className="h-16 w-auto" />
          </Link>
          <SectionHeading title="Sign Up" highlightWord="Up" className="!my-4 md:!my-2" />

          {/* Full Name Input */}
          <div className="group relative flex items-center my-6 py-1 border-b-2 border-[#d9d9d9] focus-within:border-[#38d39f] before:content-[''] before:absolute before:bottom-[-2px] before:right-1/2 before:w-0 before:h-[2px] before:bg-[#38d39f] before:transition-all before:duration-400 group-focus-within:before:w-1/2 after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#38d39f] after:transition-all after:duration-400 group-focus-within:after:w-1/2">
            <div className="flex-shrink-0 flex justify-center items-center text-[#d9d9d9] group-focus-within:text-[#38d39f] transition-colors duration-300 w-8">
              <i className="fas fa-user"></i>
            </div>
            <div className="relative flex-grow h-[45px]">
              <h5 className={`absolute left-2 text-[#999] text-lg transition-all duration-300 ${
                formData.fullName !== '' ? 'top-[-5px] text-base' : 'top-1/2 -translate-y-1/2'
              }`}>Full Name</h5>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="absolute left-0 top-0 w-full h-full border-none outline-none bg-none pl-2 py-0.5 text-xl text-[#555] font-poppins"
                value={formData.fullName}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="group relative flex items-center my-6 py-1 border-b-2 border-[#d9d9d9] focus-within:border-[#38d39f] before:content-[''] before:absolute before:bottom-[-2px] before:right-1/2 before:w-0 before:h-[2px] before:bg-[#38d39f] before:transition-all before:duration-400 group-focus-within:before:w-1/2 after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#38d39f] after:transition-all after:duration-400 group-focus-within:after:w-1/2">
            <div className="flex-shrink-0 flex justify-center items-center text-[#d9d9d9] group-focus-within:text-[#38d39f] transition-colors duration-300 w-8">
              <i className="fas fa-envelope"></i>
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
          <div className="group relative flex items-center my-6 py-1 border-b-2 border-[#d9d39f] focus-within:border-[#38d39f] before:content-[''] before:absolute before:bottom-[-2px] before:right-1/2 before:w-0 before:h-[2px] before:bg-[#38d39f] before:transition-all before:duration-400 group-focus-within:before:w-1/2 after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#38d39f] after:transition-all after:duration-400 group-focus-within:after:w-1/2">
            <div className="flex-shrink-0 flex justify-center items-center text-[#d9d39f] group-focus-within:text-[#38d39f] transition-colors duration-300 w-8">
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

          {/* Confirm Password Input */}
          <div className="group relative flex items-center my-6 py-1 border-b-2 border-[#d9d39f] focus-within:border-[#38d39f] before:content-[''] before:absolute before:bottom-[-2px] before:right-1/2 before:w-0 before:h-[2px] before:bg-[#38d39f] before:transition-all before:duration-400 group-focus-within:before:w-1/2 after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-[#38d39f] after:transition-all after:duration-400 group-focus-within:after:w-1/2">
            <div className="flex-shrink-0 flex justify-center items-center text-[#d9d39f] group-focus-within:text-[#38d39f] transition-colors duration-300 w-8">
              <i className="fas fa-lock"></i>
            </div>
            <div className="relative flex-grow h-[45px]">
              <h5 className={`absolute left-2 text-[#999] text-lg transition-all duration-300 ${
                formData.confirmPassword !== '' ? 'top-[-5px] text-base' : 'top-1/2 -translate-y-1/2'
              }`}>Confirm Password</h5>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="absolute left-0 top-0 w-full h-full border-none outline-none bg-none pl-2 py-0.5 text-xl text-[#555] font-poppins"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>
          </div>

          {error && <p className="text-[#e74c3c] my-2 text-sm text-center">{error}</p>}

          <button type="submit" className="block w-full h-[50px] rounded-[25px] outline-none border-none bg-gradient-to-r from-[#32be8f] via-[#38d39f] to-[#32be8f] bg-[200%] text-xl text-white uppercase my-4 cursor-pointer transition-all duration-500 hover:bg-right disabled:bg-[#95a5a6] disabled:cursor-not-allowed disabled:bg-none" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
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
            Already have an account? <Link to="/login" className="text-[#38d39f] no-underline inline hover:underline">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 