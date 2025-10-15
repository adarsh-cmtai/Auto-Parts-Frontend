"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const productsData = [
  { id: 1, name: 'Body Kit Cover', image: '/images/home/image1.jpg', category: 'Body kit' },
  { id: 2, name: 'Sport Body Kit', image: '/images/home/image2.jpg', category: 'Body kit' },
  { id: 3, name: 'Advanced Body Kit', image: '/images/home/image3.jpg', category: 'Body kit' },
  { id: 4, name: 'Basic Car Cover', image: '/images/home/news1.jpg', category: 'Body kit' },
  { id: 5, name: '18-Inch Alloy Wheels', image: '/images/home/category1.png', category: 'Wheels' },
  { id: 6, name: '20-Inch Chrome Wheels', image: '/images/home/category1.png', category: 'Wheels' },
  { id: 7, name: 'Performance Brakes', image: '/images/home/category1.png', category: 'Brakes' },
  { id: 8, name: 'Ceramic Brake Pads', image: '/images/home/category1.png', category: 'Brakes' },
  { id: 9, name: 'Leather Steering Wheel', image: '/images/home/category1.png', category: 'Steering wheel' },
  { id: 10, name: 'VIP Leather Seat', image: '/images/home/category1.png', category: 'Vip seat' },
  { id: 11, name: 'OEM Headlight', image: '/images/home/category1.png', category: 'Oem parts' },
  { id: 12, name: 'Genuine Air Filter', image: '/images/home/category1.png', category: 'Genuine parts' },
];

const categories = [
  'Body kit', 'Wheels', 'Brakes', 'Steering wheel', 'Vip seat', 'Oem parts', 'Genuine parts',
];

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState('Body kit');

  const filteredProducts = productsData.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="py-8 sm:py-8 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Explore Our Categories
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Find the perfect parts for your vehicle from our curated collection.
          </p>
        </div>

        <div className="flex justify-center mb-12">
            <nav className="flex space-x-2 bg-slate-200/80 p-1.5 rounded-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full py-2 px-5 text-sm font-semibold transition-all duration-200
                    ${
                      activeCategory === category
                        ? 'bg-white text-slate-900 shadow-md'
                        : 'text-slate-600 hover:bg-white/60'
                    }`}
                >
                  {category}
                </button>
              ))}
            </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id} 
              className="group block bg-[#fff] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="w-full bg-[#fff] aspect-square overflow-hidden">
                  <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-base truncate">{product.name}</h3>
                <p className="text-sm text-slate-500">{product.category}</p>
                <div className="flex justify-end mt-4">
                  <span className="inline-flex items-center justify-center h-10 w-10 bg-slate-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href={`/products/${activeCategory.toLowerCase().replace(' ', '-')}`}>
            <span className="inline-flex items-center gap-2 text-slate-800 font-semibold border-2 border-slate-300 rounded-full px-8 py-3 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
              View All {activeCategory}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}