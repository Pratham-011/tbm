'use client'

import { useState } from 'react';
import Image from 'next/image';
import Footer from "@/components/Footer";
import allWorks from "@/data/works.json";
import { Facebook, Instagram, Linkedin, LinkedinIcon, Twitter, TwitterIcon, Youtube,  } from 'lucide-react'
import Link  from 'next/link';

import BackgroundVideo from 'next-video/background-video';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MediaThemeInstaplay from 'player.style/instaplay/react';
import MediaThemeNotflix from 'player.style/notflix/react';


import { Grid, PlayCircle, Film, Users, Mic } from 'lucide-react';

const tabs = [
  { id: 'all', label: 'All', icon: Grid },
  { id: 'ugc', label: 'UGC', icon: PlayCircle }, // PlayCircle works for video content
  { id: 'ad-films', label: 'Ad Films', icon: Film }, // Film is more relevant for ads and movies
  { id: 'influencer', label: 'Influencer', icon: Users }, // Users conveys community/influencers
  { id: 'podcast', label: 'Podcasts', icon: Mic }, // Mic is ideal for podcasts
];

export default function WorksSection() {
  const [works, setworks] = useState(allWorks);

  const [activeTab, setActiveTab] = useState('all');

  const filteredWorks = works.filter(work => 
    activeTab === 'all' || work.type === activeTab
  );

  return (
    <main className=" " data-scroll-section>

    <section data-scroll-section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="w-full text-white text-center text-2xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider my-10">
        RECENT <span className="text-[#f85a23]">VIDEOS</span>
        </h2>
        
        <div className="flex justify-between items-center mb-8 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 flex flex-col items-center justify-center py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[#f85a23] border-b-2 border-[#f85a23]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-6 h-6 mb-1" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {filteredWorks.map((work, index) => (
            <div key={index} className="relative aspect-square overflow-hidden ">

<Dialog>
                <DialogTrigger>
                <div>
                  <img src={work.thumbnail  } alt="" />
                </div>
                   <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm md:text-base font-semibold">{work.name}</span>
              </div>

</DialogTrigger>
<DialogContent className="p-0 bg-transparent border-none  max-w-screen z-[105]">
<MediaThemeInstaplay
        style={{ "--media-accent-color": "#f85a23" }}
      >           <video         
                    src={work.url}
                    slot="media"
                    className="w-full h-screen object-contain"
                    playsInline
                    preload="metadata"
                    crossOrigin

                  />
                        </MediaThemeInstaplay>

  </DialogContent>

</Dialog>
              {/* <Image
                src={work.image}
                alt={work.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              /> */}
             
            </div>
          ))}
        </div>
      </div>

    </section>
    {/* <Footer/> */}



    {/* footer ka section */}

    <section className="container mx-auto px-5 flex flex-col  h-screen pb-5" data-scroll-section> 
      
      <div className="flex flex-col items-center justify-center h-full gap-5">
      <div className="w-full text-center text-xs  text-white/60 lg:text-lg font-normal tracking-wider">
          <span className="text-white ">
          Want to see more of what we’ve created?
           </span> <br />
   
           Our website only scratches the surface. For full case studies and more videos
           
         </div>
   
         <div className="w-full text-white text-center text-xl md:text-2xl  lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold lowercase tracking-wider">
           <span>
           hello@
           </span>
           <span className="text-[#f85a23] ">
           truebridgemedia
           </span>
           .com
         </div>
      </div>
   {/* <div></div> */}
   <div className="flex flex-col lg:flex-row items-center justify-center  py-5">
     {/* <!-- Navigation Links Section --> */}
     <div className="w-full flex lg:justify-between gap-5  items-center flex-col lg:flex-row ">
       <div className="flex gap-5">
         <Link href="/" className="text-[#cfc9a3] text-xs font-medium uppercase">Home</Link>
         <Link href="/about" className="text-[#cfc9a3] text-xs font-medium uppercase">About</Link>
         <Link href="/work" className="text-[#cfc9a3] text-xs font-medium uppercase">Work</Link>
         <Link href="/blog" className="text-[#cfc9a3] text-xs font-medium uppercase">Blog</Link>
         <Link href="/contact" className="text-[#cfc9a3] text-xs font-medium uppercase">Contact</Link>
       </div>
       {/* <!-- Social Media Icons --> */}
       <div className="flex gap-4">
     {/* <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><Facebook /></div> */}
     <a href="https://www.instagram.com/truebridge.media/" target='_blank' t className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><Instagram /></a>
     <a href="https://www.linkedin.com/in/meet-dasani-58a369167/" target='_blank' className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><LinkedinIcon /></a>
   </div>
   
   
     </div>
   </div>
   
   
   
   
   
   <hr className="w-full border-t border-[#cfc9a3]" />
   
   
      <div className="flex flex-col lg:flex-row items-center justify-center  py-5">
     {/* <!-- Logo Section --> */}
     <div className="w-full flex lg:justify-between gap-5  items-center flex-col lg:flex-row ">
       <div className="flex gap-5 ">
         <img className="h-[40px] relative " src="logo_full.png" alt="" srcset="" />
       </div>
       {/* <!-- copyright section --> */}
       <div className="flex gap-4">
       <span className="text-[#cfc9a3] text-xs font-medium uppercase">© 2025 True Bridge Media, ALL RIGHTS RESERVED</span>
   
   </div>
   
   
     </div>
   </div>
     </section>

    </main>
  );
}

