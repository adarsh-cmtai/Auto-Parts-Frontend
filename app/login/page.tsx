"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full min-h-screen bg-slate-50 grid grid-cols-1 md:grid-cols-2">
        
        <div className="relative flex-col items-center justify-center hidden h-full bg-slate-100 md:flex">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/home/image2.jpg" 
                    alt="Luxury car dashboard"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
 
        <div className="flex items-center justify-center h-full bg-white p-6 md:p-12">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Sign in to your account</h1>
                    <p className="mt-2 text-slate-600">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-semibold text-amber-600 hover:text-amber-500">
                            Create one now
                        </Link>
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="you@example.com"
                            required
                        />
                        <label 
                            htmlFor="email" 
                            className="absolute left-3 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="Password"
                            required
                        />
                        <label 
                            htmlFor="password" 
                            className="absolute left-3 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-3.5 text-slate-500 hover:text-amber-600"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-800">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <Link href="/forgot-password" className="font-semibold text-amber-600 hover:text-amber-500">
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-slate-500">Or sign in with</span>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
                        >
                            <img className="w-5 h-5 mr-2" src="/images/icons/google.svg" alt="Google" />
                            Google
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
                        >
                            <img className="w-5 h-5 mr-2" src="/images/icons/apple.svg" alt="Apple" />
                            Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}