import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      {children}
    </main>
  );
}
