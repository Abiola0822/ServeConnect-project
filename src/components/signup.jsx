import { useState } from 'react';
import { Link } from "react-router-dom";
import PasswordInput from './PasswordInput';
import logo from '../assets/logo.png';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle successful form submission
    console.log('Form submitted successfully');
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-xl flex flex-col md:flex-row">
      <div className="text-white text-center">
        <img 
          src={logo} 
            alt="Company Logo" 
              className="h-24 w-24 mx-auto mb-4"
    />
    </div>
      {/* Left Side - Logo */}
      <div className="w-full md:w-1/2 bg-purple-600 flex items-center justify-center p-8">
      </div>

      {/* Right Side - Form */ }
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h1 className="text-5xl font-bold text-purple-800 mb-6">Create an account</h1>

    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-base font-medium text-purple-700 mb-2">
            First Name <span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-3 border border-white-300 rounded-lg focus:ring-1 focus:ring-white-500 focus:border-purple-500 outline-none transition"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-base font-medium text-purple-700 mb-2">
            Last Name <span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-3 border border-white-300 rounded-lg focus:ring-1 focus:ring-white-500 focus:border-purple-500 outline-none transition"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-base font-medium text-purple-700 mb-2">
          Email Address <span className='text-red-500'>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-white-300 rounded-lg focus:ring-1 focus:ring-white-500 focus:border-purple-500 outline-none transition"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-base font-medium text-purple-700 mb-2">
          Password <span className='text-red-500'>*</span>
        </label>
        <PasswordInput
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-3 border border-white-300 rounded-lg focus:ring-1 focus:ring-white-500 focus:border-purple-500 outline-none transition"
          required
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-base font-medium text-purple-700 mb-2">
          Confirm Password <span className='text-red-500'>*</span>
        </label>

        <PasswordInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="w-full px-4 py-3 border border-white-300 rounded-lg focus:ring-1 focus:ring-white-500 focus:border-purple-500 outline-none transition"
          required
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        REGISTER
      </button>

      {/* Login Link */}
      <div className="text-center text-sm text-gray-600">
        Already have an account?
        <a href="#" className="text-blue-600 font-medium hover:underline">Log in</a>
      </div>
    </form>
  </div>
    </div >
  );
};

<Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign up</Link>

export default Signup;