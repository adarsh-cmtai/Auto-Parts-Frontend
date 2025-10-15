"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  User,
  MapPin,
  Heart,
  Star,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Car,
  CreditCard
} from "lucide-react";

interface SidebarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarLink = ({ item, expanded }: { item: any; expanded: boolean }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);

  return (
    <Link href={item.href}>
      <li
        className={`
          flex items-center gap-4 p-3 rounded-lg cursor-pointer
          transition-colors group
          ${isActive ? "bg-amber-100 text-amber-700 font-bold" : "hover:bg-slate-100 text-slate-600 font-medium"}
        `}
      >
        <item.icon
          className={`w-6 h-6 transition-colors ${
            isActive ? "text-amber-600" : "text-slate-500 group-hover:text-slate-800"
          }`}
        />
        {expanded && <span>{item.text}</span>}
      </li>
    </Link>
  );
};

export default function Sidebar({ expanded, setExpanded }: SidebarProps) {
  const router = useRouter();

  const menuItems = [
    { text: "Dashboard", icon: LayoutDashboard, href: "/account" },
    { text: "My Orders", icon: ShoppingCart, href: "/account/orders" },
    { text: "My Profile", icon: User, href: "/account/profile" },
    { text: "Addresses", icon: MapPin, href: "/account/addresses" },
    { text: "My Garage", icon: Car, href: "/account/garage" },
    { text: "Payments & Billing", icon: CreditCard, href: "/account/billing" },
    { text: "Wishlist", icon: Heart, href: "/account/wishlist" },
    { text: "My Reviews", icon: Star, href: "/account/reviews" },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      router.push("/login");
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 h-screen z-40 bg-white shadow-lg shadow-slate-200/50
        p-4 transition-all duration-300 flex flex-col
        ${expanded ? "w-64" : "w-20"}
      `}
    >
      <div className="flex items-center justify-between mb-6">
        {expanded && (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-500" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800">Rohan Sharma</h4>
              <p className="text-xs text-slate-500">rohan@example.com</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-auto p-1 text-slate-500 hover:text-slate-800"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <ul className="space-y-2 flex-1 overflow-y-auto pr-1">
        {menuItems.map((item) => (
          <SidebarLink key={item.text} item={item} expanded={expanded} />
        ))}
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 p-3 rounded-lg w-full text-left hover:bg-slate-100 text-slate-600 font-medium group"
          >
            <LogOut className="w-6 h-6 text-slate-500 group-hover:text-slate-800" />
            {expanded && <span>Logout</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}