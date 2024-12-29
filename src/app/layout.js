'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { Lenis } from '@studio-freight/react-lenis';
import { useEffect, useRef } from 'react'

import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const pathname = usePathname();

  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      lerp: 0.1, // Linear Interpolation, 0 to 1 (default 0.1)
      smooth: true,
      multiplier: 1, // Scroll speed multiplier
      class: 'is-revealed',
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: false,
      },
    })

    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [])

  useEffect(() => {

    
    const timeline = gsap.timeline();

    timeline 
    .from(".page-content", {
      opacity: 0,
      delay:4,
    }) 
    .to(".page-content", {
      
      opacity: 1,
       // Corrected to a string for valid syntax
    // Duration of animation
    })

    const loading = gsap.timeline();
    
    loading
    .from(".loader", {
      opacity: 0,
      duration:0, // Corrected to a string for valid syntax
    // Duration of animation
    }) 
    .to(".loader", {
        opacity: 1,
        className: "loader active w-screen h-screen flex items-center justify-center left-0 top-0  z-50",
        duration: 1, // Second animation state
      })
      .to(".loader", {
        delay:1,
        opacity: 1,
        className: "loader fixed w-screen h-screen flex items-center justify-center left-0 top-0  z-50",
        duration: 1, // Second animation state
      })
      .to(".loader", {
        delay:1,
        opacity: 0,
        className: "loader fixed w-screen h-screen flex items-center justify-center left-0 top-0  z-50",
        duration: 1, // Second animation state
      })
    

  }, [pathname]); // Trigger animation on route change

  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>
      {/* <Lenis root> */}

      {/* loader start*/}
      <div className="loader fixed  w-screen h-screen flex items-center justify-center left-0 top-0  z-50">
      <svg className="h-24 " viewBox="0 0 817 365" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.01172 232.863V1.01758H70.3756V78.6316H155.269V142.474H70.3756V232.863C83.075 293.579 141.45 294.297 169.05 287.067V349.619C51.7477 369.066 8.14856 279.885 1.01172 232.863Z" fill="#CFC9A3" stroke="#CFC9A3" class="svg-elem-1"></path>
<path d="M418 188V347.5H479.5V197.5C479.167 181.167 488.4 147.6 528 144C567.6 140.4 583.5 171.833 586.5 188V347.5H650V189C660 151.5 676 144 711 144C739 144 752.667 174 756 189V347.5H816.5V189C815.3 174.2 808.667 155.833 805.5 148.5C797.333 128.667 767 88.3999 711 85.9997C655 83.5994 625.096 119 617.144 137C601.116 108.259 573.358 83.9687 528 85.9997C447.6 89.5997 421.167 155.5 418 188Z" fill="#CFC9A3" stroke="#CFC9A3" class="svg-elem-2"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M171 1V245.5C173 283.833 201.5 361.2 299.5 364C361.936 365.784 398.462 333.702 418 299.666V188C418.322 184.69 418.886 181.034 419.724 177.133C401.14 137.461 364.824 101.271 299.5 104.5C268.862 106.014 247.8 117.687 233.755 135V1H171ZM233.755 241.5C227.159 172.7 276 160 301 160.5C326.667 160.167 376.7 175.9 371.5 241.5C367.1 287.5 338 302.333 324 304C296.667 311.833 240.351 310.3 233.755 241.5Z" fill="#F45922" stroke="#F45922" class="svg-elem-3"></path>
</svg>


      </div>
      {/* loader end */}

      <div data-scroll-container ref={scrollRef} className="page-content flex flex-col w-screen overflow-x-hidden opacity-1">{children}</div>
      {/* </Lenis> */}
      </body>
      
    </html>
  );
}
