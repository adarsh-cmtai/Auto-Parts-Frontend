// app/admin/products/page.tsx
"use client"
import React, { useState } from 'react';
import { Wrench, Plus, Search, UploadCloud, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';

const partsData = [
  { id: 1, image: '/images/home/category1.png', name: 'M4 Competition Exhaust', brand: 'BMW', model: 'M4', price: 150000, stock: 15, status: 'In Stock' },
  { id: 2, image: '/images/home/category1.png', name: 'Giulia Carbon Spoiler', brand: 'Alfa Romeo', model: 'Giulia', price: 95000, stock: 8, status: 'Low Stock' },
  { id: 3, image: '/images/home/category1.png', name: '20-Inch Forged Wheels', brand: 'Porsche', model: '911', price: 350000, stock: 0, status: 'Out of Stock' },
];

const getStockClass = (status: string) => {
    switch (status) {
        case 'In Stock': return 'bg-green-100 text-green-800';
        case 'Low Stock': return 'bg-amber-100 text-amber-800';
        case 'Out of Stock': return 'bg-red-100 text-red-800';
        default: return 'bg-slate-100 text-slate-800';
    }
};

const TabButton = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors 
            ${active ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'}
        `}
    >
        {children}
    </button>
);

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState('all');
    return (
        <div className="p-6 sm:p-10">
            <header className="mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <Wrench className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">Product Management</h1>
                        <p className="text-slate-500 mt-1">Add, edit, and manage all your parts, brands, and categories.</p>
                    </div>
                </div>
            </header>
            <nav className="flex items-center gap-2 mb-8">
                <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')}>All Parts</TabButton>
                <TabButton active={activeTab === 'add'} onClick={() => setActiveTab('add')}>Add New Part</TabButton>
                <TabButton active={activeTab === 'manage'} onClick={() => setActiveTab('manage')}>Categories & Brands</TabButton>
            </nav>
            {activeTab === 'all' && (
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                        <div className="relative w-full sm:max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input type="text" placeholder="Search parts..." className="w-full bg-slate-100 border-slate-200 rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-amber-500" />
                        </div>
                        <button onClick={() => setActiveTab('add')} className="flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-slate-700 transition-colors">
                            <Plus className="w-5 h-5" />
                            Add New Part
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-sm text-slate-500 font-semibold border-b border-slate-200">
                                    <th className="p-4">Product</th>
                                    <th className="p-4">Brand & Model</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Stock</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partsData.map(part => (
                                    <tr key={part.id} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-4 flex items-center gap-4">
                                            <Image src={part.image} alt={part.name} width={64} height={64} className="w-16 h-16 object-cover rounded-md bg-slate-100 p-1" />
                                            <span className="font-semibold text-slate-800">{part.name}</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-medium text-slate-700">{part.brand}</div>
                                            <div className="text-sm text-slate-500">{part.model}</div>
                                        </td>
                                        <td className="p-4 font-bold text-slate-800">₹{part.price.toLocaleString('en-IN')}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStockClass(part.status)}`}>
                                                {part.stock} {part.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="p-2 text-slate-500 hover:bg-slate-200 rounded-md"><Pencil className="w-4 h-4" /></button>
                                                <button className="p-2 text-slate-500 hover:bg-red-100 hover:text-red-600 rounded-md"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}