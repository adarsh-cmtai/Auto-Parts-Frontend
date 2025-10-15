"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Newspaper, Plus, Search, Pencil, Trash2, UploadCloud, Bold, Italic, Underline, List, ListOrdered, Link2 } from 'lucide-react';

// Sample Data (Ise aap backend se layenge)
const blogData = [
  { id: 1, title: '2024 BMW ALPINA XB7 with exclusive details', category: 'Performance', author: 'Admin', date: '12 Nov 2023', status: 'Published' },
  { id: 2, title: 'BMW X6 M50i is designed to exceed your sportiest expectations', category: 'Reviews', author: 'Admin', date: '10 Nov 2023', status: 'Published' },
  { id: 3, title: 'A deep dive into the new Mercedes-Benz dashboard tech', category: 'Technology', author: 'Admin', date: '08 Nov 2023', status: 'Draft' },
  { id: 4, title: 'Audi RS e-tron GT: The future of electric speed', category: 'Electric Vehicles', author: 'Admin', date: '05 Nov 2023', status: 'Published' },
];

const getStatusClass = (status: string) => {
    return status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800';
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

export default function BlogPage() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className="p-6 sm:p-10">
            <header className="mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <Newspaper className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">Blog Management</h1>
                        <p className="text-slate-500 mt-1">Create, edit, and manage all your articles.</p>
                    </div>
                </div>
            </header>

            <nav className="flex items-center gap-2 mb-8">
                <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')}>All Posts</TabButton>
                <TabButton active={activeTab === 'add'} onClick={() => setActiveTab('add')}>Add New Post</TabButton>
            </nav>

            {activeTab === 'all' && (
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                        <div className="relative w-full sm:max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input type="text" placeholder="Search posts..." className="w-full bg-slate-100 border-slate-200 rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-amber-500" />
                        </div>
                        <button onClick={() => setActiveTab('add')} className="flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-slate-700 transition-colors">
                            <Plus className="w-5 h-5" />
                            Add New Post
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-sm text-slate-500 font-semibold border-b border-slate-200">
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Author</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogData.map(post => (
                                    <tr key={post.id} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-4 font-semibold text-slate-800">{post.title}</td>
                                        <td className="p-4 text-slate-600">{post.category}</td>
                                        <td className="p-4 text-slate-600">{post.author}</td>
                                        <td className="p-4 text-slate-600">{post.date}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusClass(post.status)}`}>
                                                {post.status}
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

            {activeTab === 'add' && (
                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8">Create a New Post</h3>
                    <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <label htmlFor="postTitle" className="block text-sm font-semibold text-slate-600 mb-1">Post Title</label>
                                <input type="text" id="postTitle" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g., The Future of Electric Vehicles" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-600 mb-2">Post Content</label>
                                <div className="bg-white border border-slate-200 rounded-lg">
                                    <div className="flex items-center p-2 border-b border-slate-200 gap-1">
                                        <button type="button" className="p-2 rounded hover:bg-slate-100"><Bold className="w-4 h-4 text-slate-600" /></button>
                                        <button type="button" className="p-2 rounded hover:bg-slate-100"><Italic className="w-4 h-4 text-slate-600" /></button>
                                        <button type="button" className="p-2 rounded hover:bg-slate-100"><Underline className="w-4 h-4 text-slate-600" /></button>
                                        <button type="button" className="p-2 rounded hover:bg-slate-100"><List className="w-4 h-4 text-slate-600" /></button>
                                        <button type="button" className="p-2 rounded hover:bg-slate-100"><ListOrdered className="w-4 h-4 text-slate-600" /></button>
                                        <button type="button" className="p-2 rounded hover:bg-slate-100"><Link2 className="w-4 h-4 text-slate-600" /></button>
                                    </div>
                                    <textarea rows={12} className="w-full p-4 bg-transparent outline-none resize-y" placeholder="Start writing your amazing article here..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-800 mb-2">Publish</h4>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="status" className="text-sm text-slate-600">Status: <strong>Draft</strong></label>
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input type="checkbox" name="toggle" id="status" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"></label>
                                    </div>
                                    <style jsx>{`.toggle-checkbox:checked { right: 0; border-color: #f59e0b; } .toggle-checkbox:checked + .toggle-label { background-color: #fcd34d; }`}</style>
                                </div>
                                <button type="submit" className="w-full mt-4 bg-slate-900 text-white font-semibold py-2.5 rounded-lg hover:bg-slate-700 transition-colors">Publish Post</button>
                            </div>
                             <div>
                                <label className="block text-sm font-semibold text-slate-600 mb-1">Featured Image</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
                                        <p className="text-sm text-slate-500">Drag & drop or <span className="font-semibold text-amber-600">browse</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-semibold text-slate-600 mb-1">Category</label>
                                <select id="category" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"><option>Select Category</option><option>Reviews</option><option>Performance</option></select>
                            </div>
                            <div>
                                <label htmlFor="tags" className="block text-sm font-semibold text-slate-600 mb-1">Tags</label>
                                <input type="text" id="tags" className="w-full bg-slate-100 border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g., BMW, Brakes, Tuning" />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}