// app/(public)/account/layout.tsx
"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (header) header.style.display = "block";
      if (footer) footer.style.display = "block";
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className={`hidden lg:block ${expanded ? "w-64" : "w-20"} transition-all duration-300`}>
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>

      <div className="flex-1">
        <div className="lg:hidden p-4">
          <Sidebar expanded={expanded} setExpanded={setExpanded} />
        </div>

        <main className="h-full px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
