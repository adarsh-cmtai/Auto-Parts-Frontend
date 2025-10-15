"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Search, MoreVertical, Trash2, Mail } from 'lucide-react';

// Sample Data (Ise aap backend se layenge)
const customersData = [
  { id: 1, name: 'Rohan Sharma', email: 'rohan.sharma@example.com', avatar: '/images/avatars/avatar1.png', registrationDate: '10 Nov 2023', totalOrders: 5, totalSpent: 25800, active: true },
  { id: 2, name: 'Priya Verma', email: 'priya.verma@example.com', avatar: '/images/avatars/avatar2.png', registrationDate: '08 Nov 2023', totalOrders: 3, totalSpent: 12500, active: true },
  { id: 3, name: 'Ankit Patel', email: 'ankit.patel@example.com', avatar: '/images/avatars/avatar3.png', registrationDate: '05 Nov 2023', totalOrders: 8, totalSpent: 45200, active: false },
  { id: 4, name: 'Sneha Reddy', email: 'sneha.reddy@example.com', avatar: '/images/avatars/avatar4.png', registrationDate: '01 Nov 2023', totalOrders: 2, totalSpent: 9800, active: true },
  { id: 5, name: 'Vikram Singh', email: 'vikram.singh@example.com', avatar: '/images/avatars/avatar5.png', registrationDate: '28 Oct 2023', totalOrders: 12, totalSpent: 89500, active: true },
];

export default function CustomersPage() {
    // State to handle which customer's dropdown is open
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    return (
        <div className="p-6 sm:p-10">
            <header className="mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">Customer Management</h1>
                        <p className="text-slate-500 mt-1">View, search, and manage your customers.</p>
                    </div>
                </div>
            </header>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                    <div className="relative w-full sm:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="text" placeholder="Search by name or email..." className="w-full bg-slate-100 border-slate-200 rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 text-sm text-slate-600 font-semibold border rounded-lg px-4 py-2.5 hover:bg-slate-50">
                            <Mail className="w-4 h-4" /> Bulk Email
                        </button>
                        <button className="flex items-center gap-2 text-sm text-red-600 font-semibold border border-red-200 rounded-lg px-4 py-2.5 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" /> Delete Selected
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-sm text-slate-500 font-semibold border-b border-slate-200">
                                <th className="p-4 w-10"><input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" /></th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Customer Since</th>
                                <th className="p-4">Total Spent</th>
                                <th className="p-4">Total Orders</th>
                                <th className="p-4 text-center">Active Status</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customersData.map(customer => (
                                <tr key={customer.id} className="border-b border-slate-100 hover:bg-slate-50">
                                    <td className="p-4"><input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" /></td>
                                    <td className="p-4 flex items-center gap-4">
                                        <Image src={customer.avatar} alt={customer.name} width={40} height={40} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <p className="font-semibold text-slate-800">{customer.name}</p>
                                            <p className="text-sm text-slate-500">{customer.email}</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-600">{customer.registrationDate}</td>
                                    <td className="p-4 font-bold text-slate-800">₹{customer.totalSpent.toLocaleString('en-IN')}</td>
                                    <td className="p-4 text-center font-medium text-slate-700">{customer.totalOrders}</td>
                                    <td className="p-4 text-center">
                                        <label htmlFor={`toggle-${customer.id}`} className="flex items-center cursor-pointer justify-center">
                                            <div className="relative">
                                                <input type="checkbox" id={`toggle-${customer.id}`} className="sr-only" defaultChecked={customer.active} />
                                                <div className="block bg-slate-200 w-12 h-7 rounded-full"></div>
                                                <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform"></div>
                                                <style jsx>{`
                                                    input:checked ~ .dot { transform: translateX(100%); background-color: #f59e0b; }
                                                    input:checked ~ .block { background-color: #fcd34d; }
                                                `}</style>
                                            </div>
                                        </label>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="relative inline-block text-left">
                                            <button onClick={() => setOpenDropdown(openDropdown === customer.id ? null : customer.id)}>
                                                <MoreVertical className="w-5 h-5 text-slate-500" />
                                            </button>
                                            {openDropdown === customer.id && (
                                                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                                        <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" role="menuitem">View Details</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" role="menuitem">Send Email</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50" role="menuitem">Delete Customer</a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}