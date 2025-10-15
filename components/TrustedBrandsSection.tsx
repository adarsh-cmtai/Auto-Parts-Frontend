"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const brands = [
  { name: 'BMW', image: '/images/Blogs/BMW.jpeg' },
  { name: 'Mercedes-Benz', image: '/images/Blogs/mercedes.jpg' },
  { name: 'Audi', image: '/images/Blogs/audi.webp' },
  { name: 'Porsche', image: '/images/Blogs/porsche.png' },
  { name: 'Lamborghini', image: '/images/Blogs/lamborghini.png' },
  { name: 'Ferrari', image: '/images/Blogs/ferrari.avif' },
  { name: 'Toyota', image: '/images/Blogs/toyota.png' },
  { name: 'Ford', image: '/images/Blogs/ford.webp' },
  { name: 'Nissan', image: '/images/Blogs/nissan.jpeg' },
  { name: 'Honda', image: '/images/Blogs/honda.svg' },
  { name: 'Volkswagen', image: '/images/Blogs/vw.jpeg' },
];

export default function TrustedBrandsSection() {
  return (
    <section className="bg-slate-50 py-8 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hundreds of Trusted Brands
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with the world's leading automotive brands to bring you unparalleled quality and performance.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <Link 
              href={`/brands/${brand.name.toLowerCase()}`} 
              key={brand.name} 
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 flex items-center justify-center h-full shadow-md shadow-slate-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="w-full h-10 object-contain filter transition-all duration-300"
                />
              </div>
            </Link>
          ))}
          <Link href="/brands" className="group">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center h-full text-center shadow-md shadow-slate-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 mb-3 transition-all duration-300 group-hover:bg-amber-100">
                    <ArrowRight className="w-6 h-6 text-slate-500 transition-all duration-300 group-hover:text-amber-600" />
                </div>
                <span className="font-semibold text-slate-700">View All Brands</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}