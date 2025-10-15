"use client"

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, User, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ContactUsPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    { icon: Mail, text: 'support@ownsilent.com', href: 'mailto:support@ownsilent.com' },
    { icon: Phone, text: '866.865.8567', href: 'tel:8668658567' },
    { icon: MapPin, text: '123 Auto Street, Suite 101, New Delhi, 110001' },
  ];
  
  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 py-8 sm:py-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-10">
                <h2 className="text-3xl font-bold text-slate-800">Contact Information</h2>
                <ul className="space-y-6">
                    {contactInfo.map((info, index) => {
                       const Icon = info.icon;
                       const content = (
                           <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-amber-600"/>
                                </div>
                                <span className="text-lg text-slate-700 pt-2.5">{info.text}</span>
                           </div>
                       );

                       return (
                           <li key={index}>
                               {info.href ? <Link href={info.href} className="hover:opacity-80">{content}</Link> : content}
                           </li>
                       );
                    })}
                </ul>
                <div>
                   <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Us</h3>
                   <div className="flex space-x-4">
                        {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                            <Link key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                            </Link>
                        )
                        })}
                    </div>
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200/50">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                            <input type="text" id="name" required className="peer w-full bg-slate-100 border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Name"/>
                            <label htmlFor="name" className="absolute left-4 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600">Name</label>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" required className="peer w-full bg-slate-100 border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Email"/>
                            <label htmlFor="email" className="absolute left-4 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600">Email</label>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="tel" id="phone" className="peer w-full bg-slate-100 border-slate-300 rounded-lg text-slate-900 placeholder-transparent h-12 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Phone Number"/>
                        <label htmlFor="phone" className="absolute left-4 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600">Phone Number (Optional)</label>
                    </div>
                    <div className="relative">
                        <textarea id="message" rows={5} required className="peer w-full bg-slate-100 border-slate-300 rounded-lg text-slate-900 placeholder-transparent p-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Message"></textarea>
                        <label htmlFor="message" className="absolute left-4 -top-2.5 bg-white px-1 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-amber-600">Your Message</label>
                    </div>
                    <div>
                        <button 
                        type="submit" 
                        className="w-full px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors"
                        >
                        Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </main>
  );
}