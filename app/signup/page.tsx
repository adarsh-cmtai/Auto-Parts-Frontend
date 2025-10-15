"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, User, Mail, Phone, Lock } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="w-full min-h-screen bg-slate-50 grid grid-cols-1 md:grid-cols-2">
        
        <div className="flex items-center justify-center bg-white p-6 sm:p-12">
            <div className="w-full max-w-md space-y-6">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Create an Account</h1>
                    <p className="mt-2 text-slate-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-amber-600 hover:text-amber-500">
                            Sign In
                        </Link>
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="John Doe"
                            required
                        />
                        <label 
                            htmlFor="fullName" 
                            className="absolute left-11 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="you@example.com"
                            required
                        />
                        <label 
                            htmlFor="email" 
                            className="absolute left-11 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="9876543210"
                            required
                        />
                        <label 
                            htmlFor="mobile" 
                            className="absolute left-11 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Mobile Number
                        </label>
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-12 pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="Password"
                            required
                        />
                        <label 
                            htmlFor="password" 
                            className="absolute left-11 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-3.5 text-slate-500 hover:text-amber-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="peer w-full bg-slate-100 border border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-12 pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="Confirm Password"
                            required
                        />
                        <label 
                            htmlFor="confirmPassword" 
                            className="absolute left-11 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600 peer-focus:text-sm"
                        >
                            Confirm Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-3.5 text-slate-500 hover:text-amber-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    
                    <div className="flex items-center">
                        <input id="terms" name="terms" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                        <label htmlFor="terms" className="ml-2 block text-sm text-slate-800">
                            I agree to the{' '}
                            <Link href="/terms" className="font-semibold text-amber-600 hover:underline">Terms</Link>
                            {' '}and{' '}
                            <Link href="/privacy" className="font-semibold text-amber-600 hover:underline">Privacy Policy</Link>.
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="relative flex-col items-center justify-center hidden h-full bg-black md:flex">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/home/image3.jpg" 
                    alt="Car on a scenic road"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    </main>
  );
}