// components/ConditionalLayout.tsx
"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  const isUser = pathname.startsWith('/account');

  // Agar yeh admin page hai, to Header/Footer render na karein.
  // Admin ka apna layout (jisme sidebar hai) 'children' ke andar render hoga.
  if (isAdminPage || isUser) {
    return <>{children}</>;
  }

  // Baaki sabhi public pages ke liye Header/Footer render karein.
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}