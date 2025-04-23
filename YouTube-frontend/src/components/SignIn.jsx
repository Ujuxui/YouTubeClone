import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || '/'; 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username.trim() || !emailOrPhone.trim() || !password.trim()) {
      alert('Please fill in all the fields.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email: emailOrPhone,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
window.dispatchEvent(new Event("userLoggedIn"));
      alert('Login successful!');
      navigate(redirectPath);
    } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.message || error);
      alert(`Error: ${error.message}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-violet-100 flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-4xl flex-grow max-w-7xl w-full flex flex-col md:flex-row px-12 py-10 shadow-lg">
          
          {/* Left Side */}
          <div className="flex-1 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              className="w-12 mb-6"
            />
            <h1 className="text-lg font-medium mb-4 md:text-4xl">Welcome</h1>
            <p className="text-sm mt-4 md:text-lg">Sign in to continue to YouTube</p>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-12 text-xs md:text-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm text-blue-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full border rounded-md px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Email or Phone */}
              <div>
                <label htmlFor="emailOrPhone" className="block text-sm text-blue-700 mb-1">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="emailOrPhone"
                  className="w-full border rounded-md px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email or phone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm text-blue-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border rounded-md px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <a
                  href="#"
                  className="text-blue-700 font-medium hover:bg-blue-50 p-1 rounded-xl inline-block"
                >
                  Forgot password?
                </a>
              </div>

              <p className="text-gray-800 mt-6 text-xs md:text-sm">
                Not your computer? Use a private browsing window to sign in.{' '}
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Learn more about using Guest mode.
                </a> 
              </p>

              <div className="flex flex-col md:flex-row justify-end items-center gap-8 pt-4 mt-8">
              <Link
  to="/register"
  className="text-blue-700 font-medium hover:bg-blue-100 px-6 py-2 rounded-lg"
>
  Create Account
</Link>

                <button
                  type="submit" 
                  className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 px-6 py-4 text-sm">
        {/* Language Selector */}
        <div>
          <select className="bg-transparent focus:outline-none hover:bg-gray-300 p-2 rounded">
            <option>English (United States)</option>
            <option>Afrikaans</option>
            <option>azərbaycan</option>
            <option>bosanski</option>
            <option>català</option>
            <option>Čeština</option>
            <option>Dansk</option>
            <option>Deutsch</option>
            <option>eesti</option>
            <option>English (United Kingdom)</option>
          </select>
        </div>
        <div className="flex justify-center gap-8 text-xs lg:text-sm pb-4">
          <a href="#" className="hover:bg-gray-300 p-2 rounded">Help</a>
          <a href="#" className="hover:bg-gray-300 p-2 rounded">Privacy</a>
          <a href="#" className="hover:bg-gray-300 p-2 rounded">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
