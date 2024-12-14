'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { Lenis } from '@studio-freight/react-lenis';


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const pathname = usePathname();

  useEffect(() => {
    // Animate page transitions on mount and route change
    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [pathname]); // Trigger animation on route change

  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>
      <Lenis root>
      <div className="page-content flex flex-col w-screen overflow-x-hidden">{children}</div>
      </Lenis>
      </body>
      
    </html>
  );
}
