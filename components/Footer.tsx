"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const companyLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact-us", label: "Contact Us" },
  ]

  const supportLinks = [
    { href: "/help-center", label: "Help Center" },
    { href: "/faqs", label: "FAQs" },
    { href: "/shipping-returns", label: "Shipping & Returns" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ]

  const brandLinks = [
    { href: "/brands/toyota", label: "Toyota" },
    { href: "/brands/porsche", label: "Porsche" },
    { href: "/brands/audi", label: "Audi" },
    { href: "/brands/bmw", label: "BMW" },
    { href: "/brands/ford", label: "Ford" },
    { href: "/brands/nissan", label: "Nissan" },
  ]

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/images/home/logo.png" 
                alt="OwnSilent Logo" 
                width={150} 
                height={40} 
              />
            </Link>
            <p className="max-w-xs text-slate-600">
              Your trusted partner for premium auto parts and accessories.
            </p>
            <div className="mt-8">
                <h3 className="font-semibold text-slate-900 mb-2">Join our newsletter</h3>
                <p className="text-sm text-slate-500 mb-4">Stay up to date on new releases and features.</p>
                <div className="relative max-w-sm">
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full bg-slate-100 border border-slate-300 text-slate-900 rounded-lg py-2.5 pl-4 pr-28 outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                    <button className="absolute top-1/2 -translate-y-1/2 right-1.5 h-9 w-20 flex items-center justify-center bg-slate-900 text-white rounded-md text-sm font-semibold hover:bg-slate-600 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Company</h3>
            <ul className="space-y-4 text-slate-600">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Support</h3>
            <ul className="space-y-4 text-slate-600">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-6">Top Brands</h3>
            <ul className="space-y-4 text-slate-600">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 text-center sm:text-left">
                © {new Date().getFullYear()} OwnSilent, Inc. All rights reserved.
            </p>
            <div className="flex space-x-2 mt-4 sm:mt-0">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link key={social.label} href={social.href} aria-label={social.label} className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-9 00 transition-colors">
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
            </div>
        </div>

      </div>
    </footer>
  )
}