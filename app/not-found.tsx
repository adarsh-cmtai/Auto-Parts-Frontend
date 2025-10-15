'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#ffe0b2] text-gray-800 dark:from-[#1e1e2f] dark:via-[#2c2c3e] dark:to-[#3c3c5a] dark:text-white px-4">
      <div className="backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-2xl p-10 max-w-md text-center shadow-xl">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl font-semibold mb-2">Oops! Page not found.</p>
        <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#42a5f5] to-[#478ed1] text-white font-medium hover:scale-105 transition-transform"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
