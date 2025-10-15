"use client"
import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

export default function MyProfilePage() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">My Profile</h1>
                <p className="text-slate-500 mt-1">Manage your personal information and password.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Information</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-600 mb-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input id="fullName" type="text" defaultValue="Rohan Sharma" className="w-full bg-slate-100 border-slate-300 rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-600 mb-1">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input id="phone" type="tel" defaultValue="+91 98765 43210" className="w-full bg-slate-100 border-slate-300 rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-600 mb-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input id="email" type="email" defaultValue="rohan@example.com" disabled className="w-full bg-slate-200 border-slate-300 rounded-lg py-3 pl-12 pr-4 text-slate-500 cursor-not-allowed" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Change Password</h2>
                <form className="space-y-6">
                    <div className="relative">
                        <label htmlFor="currentPassword"  className="block text-sm font-semibold text-slate-600 mb-1">Current Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input id="currentPassword" type={showCurrentPassword ? 'text' : 'password'} className="w-full bg-slate-100 border-slate-300 rounded-lg py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-amber-500" />
                            <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-600">
                                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="newPassword"  className="block text-sm font-semibold text-slate-600 mb-1">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input id="newPassword" type={showNewPassword ? 'text' : 'password'} className="w-full bg-slate-100 border-slate-300 rounded-lg py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-amber-500" />
                                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-600">
                                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="confirmPassword"  className="block text-sm font-semibold text-slate-600 mb-1">Confirm New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} className="w-full bg-slate-100 border-slate-300 rounded-lg py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-amber-500" />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-600">
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors">
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}