"use client"
import React from 'react'
import { Truck, MapPin, Award, PhoneCall } from 'lucide-react'

export default function FeaturesBanner() {
    return (
        <section className="bg-slate-50 py-16 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                    
                    <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-slate-300">
                           <Truck className="w-8 h-8 text-slate-900" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">Fast & Reliable Shipping</h3>
                        <p className="mt-2 text-sm text-slate-500">Orders dispatched promptly</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-slate-300">
                           <MapPin className="w-8 h-8 text-slate-900" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">Nationwide Coverage</h3>
                        <p className="mt-2 text-sm text-slate-500">Delivering across India</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-slate-300">
                           <Award className="w-8 h-8 text-slate-900" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">Quality Guarantee</h3>
                        <p className="mt-2 text-sm text-slate-500">Our #1 Priority</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                         <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-slate-300">
                           <PhoneCall className="w-8 h-8 text-slate-900" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">Expert Support</h3>
                        <p className="mt-2 text-sm text-slate-500">Contact us 9am - 5pm</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}