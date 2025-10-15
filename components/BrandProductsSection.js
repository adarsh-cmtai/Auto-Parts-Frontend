"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BrandsSection from './BrandsSection';
import { Wrench } from 'lucide-react';

const allPartsData = [
  { id: 101, brand: 'Alfa Romeo', model: 'Giulia', name: 'Giulia Carbon Fiber Spoiler', image: '/images/home/image1.jpg' },
  { id: 102, brand: 'Alfa Romeo', model: 'Stelvio', name: 'Stelvio Performance Brakes', image: '/images/home/image3.jpg' },
  { id: 201, brand: 'BMW', model: 'M4', name: 'M4 Competition Exhaust', image: '/images/home/category1.png' },
  { id: 202, brand: 'BMW', model: 'X5', name: 'X5 Luxury Floor Mats', image: '/images/home/category1.png' },
  { id: 203, brand: 'BMW', model: 'M4', name: 'M4 Forged Alloy Wheels', image: '/images/home/category1.png' },
  { id: 301, brand: 'Lamborghini', model: 'Huracán', name: 'Huracán Carbon Steering Wheel', image: '/images/home/category1.png' },
  { id: 302, brand: 'Lamborghini', model: 'Aventador', name: 'Aventador Scissor Door Kit', image: '/images/home/category1.png' },
];

export default function BrandProductsSection() {
  const [activeBrand, setActiveBrand] = useState('Alfa Romeo');
  const filteredParts = allPartsData.filter(part => part.brand === activeBrand);

  return (
    <>
      <BrandsSection 
        currentBrand={activeBrand} 
        onBrandSelect={setActiveBrand} 
      />
      
      <section className="bg-slate-50 py-8 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Premium Parts for <span className="text-amber-600">{activeBrand}</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
                Discover genuine and aftermarket parts, precision-engineered for your vehicle.
              </p>
            </div>

          {filteredParts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParts.map((part) => (
                <div key={part.id} className="bg-white rounded-2xl flex flex-col group transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-white rounded-t-2xl aspect-square w-full overflow-hidden">
                    <Image
                      src={part.image}
                      alt={part.name}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center flex flex-col flex-grow">
                      <p className="text-sm font-semibold text-slate-500">{part.model}</p>
                      <h4 className="font-bold text-slate-800 text-lg mt-1 flex-grow group-hover:text-amber-600 transition-colors duration-300">{part.name}</h4>
                      <div className="mt-6">
                        <Link href={`/product/${part.id}`}>
                          <span className="block w-full border-2 border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                            View Details
                          </span>
                        </Link>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 px-6 bg-white rounded-2xl border border-slate-200">
                <div className="flex justify-center items-center mx-auto h-16 w-16 bg-slate-100 rounded-full mb-6">
                    <Wrench className="w-8 h-8 text-slate-500" />
                </div>
              <h3 className="text-xl font-semibold text-slate-800">Parts Coming Soon</h3>
              <p className="text-slate-600 mt-2 max-w-md mx-auto">We are working on adding parts for your {activeBrand}. Please check back later or contact our support team.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}