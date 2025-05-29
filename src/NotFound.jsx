import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex min-h-[94vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[12rem] font-bold text-gray-200 dark:text-gray-800/50 md:text-[20rem]">
        404
      </h1>
      <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="font-medium text-primary-500 hover:text-primary-600">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound; 