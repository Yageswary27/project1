import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to CV Builder!</h1>
      <p className="text-lg mb-4">Start creating your professional CV easily.</p>
      <Link to="/info" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
