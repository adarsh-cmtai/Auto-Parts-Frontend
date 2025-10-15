"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Search, Heart, User, ShoppingCart, ChevronDown } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isShopAccordionOpen, setIsShopAccordionOpen] = useState(false)
  
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Blogs", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  const shopCategories = [
    { name: "Engine Parts", href: "/shop/engine" },
    { name: "Suspension", href: "/shop/suspension" },
    { name: "Brakes & Rotors", href: "/shop/brakes" },
    { name: "Exhaust Systems", href: "/shop/exhaust" },
    { name: "Body Kits", href: "/shop/body-kits" },
    { name: "Lighting", href: "/shop/lighting" },
  ]

  const activeLinkClass = "text-slate-900 font-semibold"
  const inactiveLinkClass = "text-slate-600 hover:text-slate-900"

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-x-8">
              <Link href="/" aria-label="Home" className="shrink-0">
                <img src="/images/home/logo.png" alt="Logo" className="h-9 w-auto" />
              </Link>

              <nav className="hidden lg:flex">
                <ul className="flex items-center gap-x-8 text-sm font-medium">
                  <li onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)} className="relative text-base">
                    <button className={`flex items-center gap-x-1 py-2 transition-colors ${pathname.startsWith('/shop') ? activeLinkClass : inactiveLinkClass}`}>
                      Shop <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className={`absolute top-full -left-8 mt-1 p-6 bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 transition-all duration-300 ease-in-out transform
                        ${isMegaMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                    >
                       <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-max">
                          {shopCategories.map(cat => (
                            <Link key={cat.name} href={cat.href} className={`text-slate-600 hover:text-slate-900 transition-colors duration-150 ${pathname === cat.href ? 'font-semibold' : ''}`}>
                              {cat.name}
                            </Link>
                          ))}
                       </div>
                    </div>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.name} className="text-base">
                      <Link href={link.href} className={`py-2 transition-colors ${pathname === link.href ? activeLinkClass : inactiveLinkClass}`}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-x-2">
              <div className="hidden lg:flex items-center gap-x-1">
                <button aria-label="Search" className="p-2.5 rounded-full hover:bg-slate-100 transition-colors"><Search className="w-6 h-6 text-slate-500" /></button>
                <Link href="/account/wishlist" aria-label="Wishlist" className="p-2.5 rounded-full hover:bg-slate-100 transition-colors"><Heart className="w-6 h-6 text-slate-500" /></Link>
                <Link href="/account/orders" aria-label="Shopping Cart" className="relative p-2.5 rounded-full hover:bg-slate-100 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-slate-500" />
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                </Link>
                <Link href="/account" aria-label="My Account" className="p-2.5 rounded-full hover:bg-slate-100 transition-colors"><User className="w-6 h-6 text-slate-500" /></Link>
              </div>

              <div className="hidden sm:flex items-center gap-x-3 text-base">
                 <div className="h-7 w-px bg-gray-200 lg:mx-2"></div>
                <Link href="/login" className="text-base font-semibold text-slate-700 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors">Login</Link>
                <Link href="/signup" className="text-base font-semibold text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">Sign Up</Link>
              </div>

              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-slate-600 p-2 -mr-2"><Menu className="w-7 h-7" /></button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        <div className={`relative w-4/5 max-w-sm h-full bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" aria-label="Home"><img src="/images/home/logo.png" alt="Logo" className="h-8" /></Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-1"><X className="w-6 h-6 text-slate-500" /></button>
          </div>

          <nav className="flex-grow p-4 overflow-y-auto">
            <ul className="flex flex-col gap-y-1">
              <li>
                <button onClick={() => setIsShopAccordionOpen(!isShopAccordionOpen)} className={`w-full flex justify-between items-center p-3 text-base font-medium rounded-lg transition-colors ${pathname.startsWith('/shop') ? 'text-slate-900 bg-slate-50' : 'text-slate-700 hover:bg-slate-50'}`}>
                  Shop
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isShopAccordionOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isShopAccordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="pl-4 mt-2 flex flex-col gap-y-1">
                      {shopCategories.map(cat => (
                        <Link key={cat.name} href={cat.href} className={`block p-2 rounded-lg text-slate-600 hover:bg-slate-100 ${pathname === cat.href ? 'font-semibold bg-slate-100' : ''}`}>{cat.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              {navLinks.map((link) => (
                <li key={link.name} className="text-base">
                  <Link href={link.href} className={`block p-3 text-base font-medium rounded-lg transition-colors ${pathname === link.href ? 'text-slate-900 bg-slate-50' : 'text-slate-700 hover:bg-slate-50'}`}>{link.name}</Link>
                </li>
              ))}
            </ul>

            <hr className="my-4 border-gray-200" />
            
            <ul className="flex flex-col gap-y-1">
              <li><Link href="/account" className="flex items-center gap-x-3 p-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50"><User className="w-5 h-5 text-slate-400" />Account</Link></li>
              <li><Link href="/wishlist" className="flex items-center gap-x-3 p-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50"><Heart className="w-5 h-5 text-slate-400" />Wishlist</Link></li>
              <li><Link href="/cart" className="flex items-center gap-x-3 p-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50"><ShoppingCart className="w-5 h-5 text-slate-400" />Your Cart</Link></li>
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-200 grid grid-cols-2 gap-4">
             <Link href="/login" className="w-full text-center font-semibold bg-slate-100 text-slate-800 rounded-lg px-5 py-2.5 hover:bg-slate-200 transition-colors">Login</Link>
             <Link href="/signup" className="w-full text-center font-semibold bg-slate-900 text-white rounded-lg px-5 py-2.5 hover:bg-slate-800 transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}