"use client"
import React from 'react';
import Image from 'next/image';
import { Award, Wrench, ShieldCheck } from 'lucide-react';

export default function AboutUsPage() {
  const coreValues = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We are dedicated to bringing you the finest parts from leading brands, ensuring every component meets our rigorous standards."
    },
    {
      icon: Wrench,
      title: "Expertise & Passion",
      description: "Our team consists of enthusiasts and experts who are on call to guide you through your purchasing journey with confidence."
    },
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      description: "Customer satisfaction is our number one priority. We operate with integrity to build lasting relationships with every driver."
    }
  ];

  return (
    <main className="bg-slate-50">
      
      <section className="relative h-96 w-full">
        <Image 
          src="/images/home/news3.jpg"
          alt="Our Workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            About OwnSilent
          </h1>
          <p className="mt-4 text-xl text-slate-200 max-w-3xl">
            Your Premier Destination for Quality Auto Parts & Vehicles Since 2015.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="font-bold text-amber-600 uppercase">Our Story</span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Fueled by Passion, Driven by Quality
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Welcome to OwnSilent, the region's most trusted partner for high-quality auto parts. Our journey began with a simple passion: to make finding the perfect component a simple, transparent, and satisfying experience for every enthusiast and everyday driver.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A purchase from us is more than just a transaction; it's the gateway into an exciting journey of maintaining and upgrading your vehicle with confidence, backed by a team that shares your passion.
              </p>
            </div>
            
            <div>
              <Image 
                src="/images/home/about1.png"
                alt="Inside the OwnSilent workshop"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>
      
      <section className="bg-white py-8 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Our Commitment to You
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We're built on a foundation of core values that guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-slate-300">
                    <Icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{value.title}</h3>
                  <p className="mt-3 text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}