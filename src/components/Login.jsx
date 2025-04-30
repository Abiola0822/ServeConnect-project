import { useState } from 'react';
import { Link } from "react-router-dom";
import PasswordInput from './PasswordInput';
import logo from '../assets/logo.png';
const Login = () => {
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'username'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="text-white text-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-24 w-24 mx-auto mb-4"
          />
        </div>
      {/* Left Side - Logo (same as signup) */}
      <div className="w-full md:w-1/2 bg-purple-600 flex items-center justify-center p-8">
        </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h1 className="text-5xl font-bold text-purple-900 mb-6">Welcome back!</h1>
        
        {/* Email/Username Toggle */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-md font-medium transition ${loginMethod === 'email' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setLoginMethod('email')}
          >
            Email
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-md font-medium transition ${loginMethod === 'username' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setLoginMethod('username')}
          >
            Username
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email or Username Field */}
          <div>
          <label htmlFor="loginId" className='block text-base font-medium text-purple-700 mb-2'>
            {loginMethod === 'email' ? 'Email Address' : 'Username'} <span className='text-red-500'>*</span>
            </label>

            <input 
              type={loginMethod === 'email' ? 'email' : 'text'}
              id='loginId'
              name='loginId'
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
          <label htmlFor="password" className='block text-base font-medium text-purple-700 mb-2'>
            Password <span className='text-red-500'>*</span>
            </label>
            <PasswordInput
              id='password'
              name='password'
              type= 'password'
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            LOG IN
          </button>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600">
            No account? <a href="/signup" className="text-purple-600 font-medium hover:underline">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

<Link to="/login" className="text-purple-600 font-medium hover:underline">Log in</Link>

export default Login;