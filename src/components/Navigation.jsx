"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      // Animate exit transition
      gsap.to(".page-content", { opacity: 0, duration: 0.5 });
    };

    const handleComplete = () => {
      // Animate entrance transition
      gsap.fromTo(
        ".page-content",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    };

    // Listen to route changes
    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleComplete);

    // Cleanup listeners on unmount
    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  const menuLinksLeft = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
  ];

  const menuLinksRight = [
    { path: "/work", label: "WORK" },
    { path: "/blog", label: "BLOG" },
  ];

  const menuLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/work", label: "WORK" },
    { path: "/blog", label: "BLOG" },
  ];

  return (
    <div className="py-5 fixed w-screen flex items-center justify-center z-[50]">
      <div className="container px-5 relative  mx-auto flex flex-col md:flex-row items-center justify-center ">
        <div className="px-3 py-3 w-full  md:max-w-fit  bg-[#000000]/50 rounded-lg backdrop-blur-lg flex justify-between items-center">
          {/* Left Links */}
          <button
            className="md:hidden text-[#cfc9a3] hover:text-[#f85a23]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className=" gap-6 hidden md:flex">
            {menuLinksLeft.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-6 py-2 flex flex-col justify-start items-start hover:text-[#f85a23] ${
                  pathname !== link.path ? "text-[#cfc9a3]" : "text-[#f85a23]"
                } transition-all`}
              >
                <span className="text-xs font-medium uppercase leading-none">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center">
            <img className="h-8 px-6 " src="/logo.png" alt="Logo" />
          </div>

          {/* Right Links */}
          <div className=" gap-6 hidden md:flex">
            {menuLinksRight.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-6 py-2 flex flex-col justify-start items-start hover:text-[#f85a23] ${
                  pathname !== link.path ? "text-[#cfc9a3]" : "text-[#f85a23]"
                } transition-all`}
              >
                <span className="text-xs font-medium uppercase leading-none">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-3 py-6 w-full  md:max-w-fit  bg-[#000000]/50 rounded-lg backdrop-blur-lg flex flex-col justify-between items-center gap-4">
            {menuLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-4 py-6 text-sm font-medium uppercase leading-none hover:text-[#f85a23] ${
                  pathname !== link.path ? 'text-[#cfc9a3]' : 'text-[#f85a23]'
                } transition-all`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="px-8 py-5 flex items-center justify-center right-0 w-full bg-[#cfc9a3] rounded-lg backdrop-blur-lg transition-colors duration-300 ease-in-out hover:bg-[#f85a23] group"
        >
          <span className="text-[#181818] text-xs font-bold uppercase leading-none transition-colors duration-300 ease-in-out group-hover:text-white">
            Contact Us
          </span>
        </Link>
          </div>
        )}

        <Link
          href="/contact"
          className="hidden md:block px-8 py-3 mr-5 right-0 absolute max-w-fit bg-[#cfc9a3] rounded-lg backdrop-blur-lg transition-colors duration-300 ease-in-out hover:bg-[#f85a23] group"
        >
          <span className="text-[#181818] text-xs font-bold uppercase leading-none transition-colors duration-300 ease-in-out group-hover:text-white">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import gsap from 'gsap';
// import { Menu, X } from 'lucide-react';

// const Navigation = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleStart = () => {
//       gsap.to('.page-content', { opacity: 0, duration: 0.5 });
//     };

//     const handleComplete = () => {
//       gsap.fromTo('.page-content', { opacity: 0 }, { opacity: 1, duration: 0.5 });
//     };

//     router.events?.on('routeChangeStart', handleStart);
//     router.events?.on('routeChangeComplete', handleComplete);

//     return () => {
//       router.events?.off('routeChangeStart', handleStart);
//       router.events?.off('routeChangeComplete', handleComplete);
//     };
//   }, [router]);

//   const menuLinks = [
//     { path: '/', label: 'HOME' },
//     { path: '/about', label: 'ABOUT' },
//     { path: '/work', label: 'WORK' },
//     { path: '/blog', label: 'BLOG' },
//   ];

//   return (
//     <nav className="py-5 fixed w-full z-50">
//       <div className="container px-5 mx-auto">
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <img className="h-8" src="/logo.png" alt="Logo" />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="py-5 fixed w-screen flex items-center justify-center z-[50]">
//     <div className="container px-5 relative  mx-auto flex items-center justify-center ">
//       <div className='px-3 py-3 max-w-fit  bg-[#000000]/50 rounded-lg backdrop-blur-lg flex justify-between items-center'>
//       {/* Left Links */}
//       <div className="flex gap-6">
//         {menuLinksLeft.map((link) => (
//           <Link
//             key={link.path}
//             href={link.path}
//             className={`px-6 py-2 flex flex-col justify-start items-start hover:text-[#f85a23] ${
//               pathname !== link.path ? 'text-[#cfc9a3]' : 'text-[#f85a23]'
//             } transition-all`}
//           >
//             <span className="text-xs font-medium uppercase leading-none">
//               {link.label}
//             </span>
//           </Link>
//         ))}
//       </div>

//       {/* Center Logo */}
//       <div className="flex justify-center items-center">
//         <img
//           className="h-8 px-6 "
//           src="/logo.png"
//           alt="Logo"
//         />
//       </div>

//       {/* Right Links */}
//       <div className="flex gap-6">
//         {menuLinksRight.map((link) => (
//           <Link
//           key={link.path}
//           href={link.path}
//           className={`px-6 py-2 flex flex-col justify-start items-start hover:text-[#f85a23] ${
//             pathname !== link.path ? 'text-[#cfc9a3]' : 'text-[#f85a23]'
//           } transition-all`}
//         >
//           <span className="text-xs font-medium uppercase leading-none">
//             {link.label}
//           </span>
//         </Link>
//         ))}
//       </div>
//       </div>

//       <Link
//       href="/contact"
//       className="px-8 py-3 mr-5 right-0 absolute max-w-fit bg-[#cfc9a3] rounded-lg backdrop-blur-lg transition-colors duration-300 ease-in-out hover:bg-[#f85a23] group"
//     >
//       <span className="text-[#181818] text-xs font-bold uppercase leading-none transition-colors duration-300 ease-in-out group-hover:text-white">
//         Contact Us
//       </span>
//     </Link>

//     </div>

//     </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-[#cfc9a3] hover:text-[#f85a23]"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 bg-[#000000]/90 rounded-lg backdrop-blur-lg">
//             {menuLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`block px-4 py-2 text-xs font-medium uppercase leading-none hover:text-[#f85a23] ${
//                   pathname !== link.path ? 'text-[#cfc9a3]' : 'text-[#f85a23]'
//                 } transition-all`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className="block px-4 py-2 mt-2 bg-[#cfc9a3] rounded-lg text-[#181818] text-xs font-bold uppercase leading-none transition-colors duration-300 ease-in-out hover:bg-[#f85a23] hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact Us
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
