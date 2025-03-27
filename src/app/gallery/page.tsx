import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-black text-white text-center px-6">
      <h1 className="text-6xl font-bold mb-4 animate-fadeIn">Coming Soon</h1>
      <p className="text-lg mb-6 opacity-80">We're crafting something amazing. Stay tuned!</p>

      <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-lg text-black">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none"
        />
        <button className="w-full bg-indigo-600 text-white mt-3 p-3 rounded-lg hover:bg-indigo-700 transition">
          Notify Me
        </button>
      </div>

      <p className="mt-6 opacity-80">Follow us for updates 🚀</p>
    </div>
  );
};

export default ComingSoon;
