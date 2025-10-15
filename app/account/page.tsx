// app/(public)/account/page.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User, MapPin, ChevronRight, CheckCircle } from 'lucide-react';

const getStatusClass = (status: string, target: string) => {
    const statuses = ['Processing', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(status);
    const targetIndex = statuses.indexOf(target);
    if (currentIndex >= targetIndex) {
        return {
            circle: 'bg-amber-500 border-amber-500',
            line: 'bg-amber-500',
            text: 'text-amber-600 font-semibold'
        };
    }
    return {
        circle: 'bg-slate-200 border-slate-200',
        line: 'bg-slate-200',
        text: 'text-slate-500'
    };
};

export default function AccountDashboardPage() {
    const recentOrderStatus = 'Shipped';
    const statusTracker = ['Processing', 'Shipped', 'Delivered'];

    const quickLinks = [
        { text: 'View All Orders', icon: ShoppingCart, href: '/account/orders' },
        { text: 'Manage Profile', icon: User, href: '/account/profile' },
        { text: 'Manage Addresses', icon: MapPin, href: '/account/addresses' },
    ];
    
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Welcome back, Rohan!</h1>
                <p className="text-slate-500 mt-1">Here's a quick overview of your account.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="font-bold text-slate-800">Recent Order Summary</h2>
                        <p className="text-sm text-slate-500">Order #12345</p>
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">{recentOrderStatus}</span>
                </div>
                
                <div className="flex items-center justify-between px-4">
                   {statusTracker.map((status, index) => (
                       <React.Fragment key={status}>
                           <div className="flex flex-col items-center">
                               <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${getStatusClass(recentOrderStatus, status).circle}`}>
                                   <CheckCircle className="w-4 h-4 text-white"/>
                               </div>
                               <p className={`mt-2 text-sm ${getStatusClass(recentOrderStatus, status).text}`}>{status}</p>
                           </div>
                           {index < statusTracker.length - 1 && (
                               <div className={`flex-1 h-1 mx-2 ${getStatusClass(recentOrderStatus, status).line}`}></div>
                           )}
                       </React.Fragment>
                   ))}
                </div>

                <div className="flex justify-end gap-4 mt-6 border-t border-slate-200 pt-4">
                    <Link href="/account/orders/12345" className="font-semibold text-slate-600 hover:text-slate-900">View Details</Link>
                    <Link href="/track/12345" className="font-semibold text-amber-600 hover:text-amber-500">Track Order</Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-800">Account Details</h3>
                        <Link href="/account/profile" className="text-sm font-semibold text-amber-600 hover:underline">Edit</Link>
                    </div>
                    <ul className="space-y-3 text-slate-600">
                        <li><strong>Name:</strong> Rohan Sharma</li>
                        <li><strong>Email:</strong> rohan@example.com</li>
                        <li><strong>Phone:</strong> +91 98765 43210</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-800">Default Address</h3>
                        <Link href="/account/addresses" className="text-sm font-semibold text-amber-600 hover:underline">Manage</Link>
                    </div>
                    <address className="not-italic text-slate-600">
                        123, MG Road, Sector 14<br/>
                        Gurgaon, Haryana, 122001
                    </address>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {quickLinks.map(link => (
                    <Link key={link.text} href={link.href}>
                        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 transition-all duration-300 hover:border-amber-500 border-2 border-transparent hover:-translate-y-1">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                    <link.icon className="w-6 h-6 text-slate-600" />
                                </div>
                                <span className="font-bold text-slate-800">{link.text}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400"/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}