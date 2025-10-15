// app/admin/layout.tsx (MODIFIED)
"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Assume Sidebar.tsx exists

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    // Find Header and Footer by their tag name. 
    // Agar aapke Header/Footer component <header> ya <footer> tag render nahi karte, to aapko unhe ek ID dekar select karna hoga.
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Hide Header and Footer when the admin layout mounts
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // This is a "cleanup" function. It runs when the component unmounts.
    return () => {
      // Show Header and Footer again when leaving the admin section
      if (header) header.style.display = 'block';
      if (footer) footer.style.display = 'block';
    };
  }, []); // The empty dependency array ensures this runs only once on mount and once on unmount.

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      
      <div 
        className={`flex-1 transition-all duration-300 ${expanded ? 'ml-64' : 'ml-20'}`}
      >
        <main className="h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}