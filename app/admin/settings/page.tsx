"use client"
import React, { useState } from 'react';
import { Settings, Store, CreditCard, Truck, Eye, EyeOff } from 'lucide-react';

export default function SettingsPage() {
    const [showStripeKey, setShowStripeKey] = useState(false);
    const [showRazorpayKey, setShowRazorpayKey] = useState(false);

    return (
        <div className="p-6 sm:p-10">
            <header className="mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <Settings className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">Store Settings</h1>
                        <p className="text-slate-500 mt-1">Manage your store's general settings and configurations.</p>
                    </div>
                </div>
            </header>

            <div className="space-y-10">
                
                {/* Store Details Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex items-center gap-3 mb-6">
                        <Store className="w-6 h-6 text-slate-600" />
                        <h2 className="text-2xl font-bold text-slate-800">Store Details</h2>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="storeName" className="block text-sm font-semibold text-slate-600 mb-1">Store Name</label>
                                <input type="text" id="storeName" defaultValue="OwnSilent Auto Parts" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                            <div>
                                <label htmlFor="storeEmail" className="block text-sm font-semibold text-slate-600 mb-1">Contact Email</label>
                                <input type="email" id="storeEmail" defaultValue="support@ownsilent.com" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="storeAddress" className="block text-sm font-semibold text-slate-600 mb-1">Store Address</label>
                            <textarea id="storeAddress" rows={3} defaultValue="123 Auto Street, Suite 101, New Delhi, 110001" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500 resize-y"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-700 transition-colors">Save Changes</button>
                        </div>
                    </form>
                </div>

                {/* Payment Gateway Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex items-center gap-3 mb-6">
                        <CreditCard className="w-6 h-6 text-slate-600" />
                        <h2 className="text-2xl font-bold text-slate-800">Payment Gateways</h2>
                    </div>
                    <form className="space-y-6">
                        <div className="relative">
                            <label htmlFor="stripeKey" className="block text-sm font-semibold text-slate-600 mb-1">Stripe Secret Key</label>
                            <input type={showStripeKey ? 'text' : 'password'} id="stripeKey" defaultValue="sk_test_••••••••••••••••••••••••" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 pr-12 outline-none focus:ring-2 focus:ring-amber-500" />
                            <button type="button" onClick={() => setShowStripeKey(!showStripeKey)} className="absolute right-3 top-9 text-slate-500 hover:text-amber-600">
                                {showStripeKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <div className="relative">
                            <label htmlFor="razorpayKey" className="block text-sm font-semibold text-slate-600 mb-1">Razorpay Secret Key</label>
                            <input type={showRazorpayKey ? 'text' : 'password'} id="razorpayKey" defaultValue="rzp_test_••••••••••••••••••" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 pr-12 outline-none focus:ring-2 focus:ring-amber-500" />
                            <button type="button" onClick={() => setShowRazorpayKey(!showRazorpayKey)} className="absolute right-3 top-9 text-slate-500 hover:text-amber-600">
                                {showRazorpayKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                         <div className="text-right">
                            <button type="submit" className="bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-700 transition-colors">Save Keys</button>
                        </div>
                    </form>
                </div>

                {/* Shipping Settings Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex items-center gap-3 mb-6">
                        <Truck className="w-6 h-6 text-slate-600" />
                        <h2 className="text-2xl font-bold text-slate-800">Shipping Settings</h2>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-600 mb-2">Shipping Method</label>
                            <div className="flex gap-6">
                                <div className="flex items-center">
                                    <input type="radio" id="flatRate" name="shippingMethod" className="h-4 w-4 text-amber-600 focus:ring-amber-500" defaultChecked />
                                    <label htmlFor="flatRate" className="ml-2 block text-sm text-slate-800">Flat Rate</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="freeShipping" name="shippingMethod" className="h-4 w-4 text-amber-600 focus:ring-amber-500" />
                                    <label htmlFor="freeShipping" className="ml-2 block text-sm text-slate-800">Free Shipping Threshold</label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="shippingCost" className="block text-sm font-semibold text-slate-600 mb-1">Flat Rate Cost (₹)</label>
                                <input type="number" id="shippingCost" defaultValue="150" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                            <div>
                                <label htmlFor="freeShippingThreshold" className="block text-sm font-semibold text-slate-600 mb-1">Free Shipping on orders over (₹)</label>
                                <input type="number" id="freeShippingThreshold" defaultValue="5000" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-700 transition-colors">Save Shipping Settings</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}