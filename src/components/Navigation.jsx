'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      // Animate exit transition
      gsap.to('.page-content', { opacity: 0, duration: 0.5 });
    };

    const handleComplete = () => {
      // Animate entrance transition
      gsap.fromTo('.page-content', { opacity: 0 }, { opacity: 1, duration: 0.5 });
    };

    // Listen to route changes
    router.events?.on('routeChangeStart', handleStart);
    router.events?.on('routeChangeComplete', handleComplete);

    // Cleanup listeners on unmount
    return () => {
      router.events?.off('routeChangeStart', handleStart);
      router.events?.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  const menuLinksLeft = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
  ];

  const menuLinksRight = [
    { path: '/work', label: 'WORK' },
    { path: '/blog', label: 'BLOG' },
  ];

  return (
    <div className="py-5 fixed w-screen flex items-center justify-center z-[55]">
    <div className="container px-5 relative  mx-auto flex items-center justify-center ">
      <div className='px-3 py-3 max-w-fit  bg-[#000000]/50 rounded-lg backdrop-blur-lg flex justify-between items-center'>
      {/* Left Links */}
      <div className="flex gap-6">
        {menuLinksLeft.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-6 py-2 flex flex-col justify-start items-start hover:text-[#f85a23] ${
              pathname !== link.path ? 'text-[#cfc9a3]' : 'text-[#f85a23]'
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
        <img
          className="h-8 px-6 "
          src="/logo.png"
          alt="Logo"
        />
      </div>

      {/* Right Links */}
      <div className="flex gap-6">
        {menuLinksRight.map((link) => (
          <Link
          key={link.path}
          href={link.path}
          className={`px-6 py-2 flex flex-col justify-start items-start hover:text-[#f85a23] ${
            pathname !== link.path ? 'text-[#cfc9a3]' : 'text-[#f85a23]'
          } transition-all`}
        >
          <span className="text-xs font-medium uppercase leading-none">
            {link.label}
          </span>
        </Link>
        ))}
      </div>
      </div>

      <Link
      href="/contact"
      className="px-8 py-3 mr-5 right-0 absolute max-w-fit bg-[#cfc9a3] rounded-lg backdrop-blur-lg transition-colors duration-300 ease-in-out hover:bg-[#f85a23] group"
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
