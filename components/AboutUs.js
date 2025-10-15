"use client"
import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
    return (
        <section id="about" className="bg-slate-50 py-8 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Driving Your Journey <span className="text-amber-600">Forward</span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        At OwnSilent, we don't just sell auto parts—we build relationships based on trust, quality, and an unmatched passion for all things automotive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="rounded-2xl shadow-xl overflow-hidden">
                        <video
                            src="/images/home/about.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment to Excellence</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our mission is simple: to provide enthusiasts and everyday drivers with the highest quality auto parts, paired with expert advice and unwavering support. We believe that every vehicle deserves the best, and we're here to make that happen.
                            </p>
                        </div>

                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-amber-500 mt-1 mr-4 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Handpicked Selection</h4>
                                    <p className="text-slate-600 mt-1">Every part in our inventory is carefully selected for its quality, durability, and performance.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-amber-500 mt-1 mr-4 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Transparent & Fair Pricing</h4>
                                    <p className="text-slate-600 mt-1">We offer competitive, no-haggle pricing so you can shop with confidence and clarity.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-amber-500 mt-1 mr-4 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Expert Guidance & Support</h4>
                                    <p className="text-slate-600 mt-1">Our knowledgeable team is dedicated to your long-term satisfaction, offering dependable after-sales support.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}