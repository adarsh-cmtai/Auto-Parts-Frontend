"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const initialWishlistData = [
  { id: 1, name: 'M4 Competition Exhaust', price: '1,50,000', image: '/images/home/category1.png', inStock: true },
  { id: 2, name: '20-Inch Forged Wheels', price: '3,50,000', image: '/images/home/category1.png', inStock: true },
  { id: 3, name: 'Giulia Carbon Spoiler', price: '95,000', image: '/images/home/category1.png', inStock: false },
  { id: 4, name: 'Alcantara Steering Wheel', price: '40,000', image: '/images/home/category1.png', inStock: true },
];

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState(initialWishlistData);
    
    const handleRemoveFromWishlist = (id: number) => {
        if (window.confirm('Are you sure you want to remove this item from your wishlist?')) {
            setWishlistItems(wishlistItems.filter(item => item.id !== id));
        }
    };

    const handleAddToCart = (id: number) => {
        alert(`Item with ID: ${id} added to cart!`);
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">My Wishlist</h1>
                <p className="text-slate-500 mt-1">Your collection of favorite parts. Add them to your cart when you're ready.</p>
            </div>

            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl flex flex-col group transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2">
                            <div className="relative bg-slate-100 rounded-t-2xl aspect-square w-full overflow-hidden">
                                <Link href={`/product/${item.id}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={280}
                                        height={280}
                                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                                {!item.inStock && (
                                    <span className="absolute top-4 left-4 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">Out of Stock</span>
                                )}
                            </div>
                            <div className="p-6 text-center flex flex-col flex-grow">
                                <h3 className="font-bold text-slate-800 text-lg flex-grow">
                                    <Link href={`/product/${item.id}`} className="hover:text-amber-600 transition-colors">
                                        {item.name}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-xl font-extrabold text-slate-900">₹{item.price}</p>
                                <div className="mt-6 flex flex-col sm:flex-row gap-2">
                                    <button 
                                        onClick={() => handleAddToCart(item.id)}
                                        disabled={!item.inStock}
                                        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                    <button 
                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                        className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 p-3 rounded-md hover:bg-red-50 hover:text-red-600"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-white rounded-2xl shadow-lg shadow-slate-200/50">
                    <Heart className="w-20 h-20 text-slate-300 mx-auto mb-4"/>
                    <h3 className="text-2xl font-semibold text-slate-800">Your Wishlist is Empty</h3>
                    <p className="text-slate-500 mt-2 max-w-md mx-auto">Looks like you haven't added anything to your wishlist yet. Start exploring to find parts you love!</p>
                    <Link href="/shop">
                        <span className="mt-8 inline-block bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors">
                            Discover Products
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
}