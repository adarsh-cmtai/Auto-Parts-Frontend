"use client"
import React from 'react';
import { Percent, Wrench, Truck } from 'lucide-react';

const features = [
  {
    icon: Percent,
    title: 'Unbeatable Savings',
    description: 'Find unbeatable deals on top-quality car parts. Shop now and enjoy prices that won’t break the bank.',
  },
  {
    icon: Wrench,
    title: 'Vast, High-Quality Catalog',
    description: 'Explore a wide range of parts for all makes and models. Get the right fit every time with trusted brands.',
  },
  {
    icon: Truck,
    title: 'Rapid & Reliable Logistics',
    description: 'Get your parts delivered fast—no delays, no hassle. We process orders quickly and ship with trusted carriers.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-slate-50 py-8 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Choose <span className="text-amber-600">OwnSilent</span>?
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
              We're more than just a parts store. We're your partners in performance, providing an unmatched shopping experience from start to finish.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white text-center rounded-2xl p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-slate-200">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}