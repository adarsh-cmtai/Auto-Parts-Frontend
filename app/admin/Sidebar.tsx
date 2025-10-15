// app/admin/Sidebar.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, Wrench, ShoppingCart, Users, Newspaper, Settings, LogOut,
  Menu, X, UserCircle
} from 'lucide-react';

const SidebarLink = ({ item, expanded }: { item: any; expanded: boolean }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link href={item.href}>
      <li className={`
        relative flex items-center py-2.5 px-4 my-1 font-medium rounded-md cursor-pointer
        transition-colors group
        ${isActive
          ? 'bg-gradient-to-tr from-amber-200 to-amber-100 text-amber-800'
          : 'hover:bg-slate-700 text-slate-300'
        }
      `}>
        <item.icon className="w-6 h-6" />
        <span className={`overflow-hidden transition-all ${expanded ? 'w-40 ml-3' : 'w-0'}`}>
          {item.text}
        </span>
        {item.alert && (
            <div className={`absolute right-4 w-2 h-2 rounded bg-amber-400 ${expanded ? '' : 'top-2'}`}></div>
        )}
      </li>
    </Link>
  );
};

export default function Sidebar({ expanded, setExpanded }: { expanded: boolean; setExpanded: (expanded: boolean) => void; }) {
  const router = useRouter();

  const menuItems = [
    { text: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard', alert: false },
    { text: 'Products', icon: Wrench, href: '/admin/products', alert: false },
    { text: 'Orders', icon: ShoppingCart, href: '/admin/orders', alert: true },
    { text: 'Customers', icon: Users, href: '/admin/customers', alert: false },
    { text: 'Blog', icon: Newspaper, href: '/admin/blog', alert: false },
    { text: 'Settings', icon: Settings, href: '/admin/settings', alert: false },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      console.log("Logging out...");
      // Yahan par aap apni authentication library ka signOut function call karenge.
      // Abhi ke liye, hum user ko login page par redirect kar rahe hain.
      router.push('/login'); 
    }
  };

  return (
    <aside className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ${expanded ? 'w-64' : 'w-20'}`}>
      <nav className="h-full flex flex-col bg-slate-800 border-r border-slate-700 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className={`overflow-hidden transition-all font-bold text-2xl text-white ${expanded ? 'w-32' : 'w-0'}`}>
            OwnSilent
          </h1>
          <button onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600">
            {expanded ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {menuItems.map(item => (
            <SidebarLink key={item.text} item={item} expanded={expanded} />
          ))}
        </ul>

        <div className="border-t border-slate-700 flex p-3">
          <UserCircle className="w-10 h-10 text-slate-300" />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-40 ml-3' : 'w-0'}`}>
            <div className="leading-4">
              <h4 className="font-semibold text-white">Admin</h4>
              <span className="text-xs text-slate-400">admin@ownsilent.com</span>
            </div>
            <button onClick={handleLogout} className="p-1 rounded-md hover:bg-slate-700">
              <LogOut className="w-6 h-6 text-slate-300 hover:text-white" />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}