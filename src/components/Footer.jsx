import React from 'react'
import { Facebook, Instagram, Linkedin, LinkedinIcon, Twitter, TwitterIcon, Youtube,  } from 'lucide-react'
import Link  from 'next/link';


function Footer() {
  return (
    // yaha se justify center wala remove kiya hai 
    <section className="container mx-auto px-5 flex flex-col  h-screen pb-5" data-scroll-section> 
      
   <div className="flex flex-col items-center justify-center h-full gap-5">
   <div className="w-full text-center text-xs  text-white/60 lg:text-lg font-normal tracking-wider">
       <span className="text-white ">
       Let’s Make Magic Together.
        </span> <br />

        Looking to amplify your brand? We’re here to make it happen.
        
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
    <span className="text-[#cfc9a3] text-xs font-medium uppercase">© 2024 True Bridge Media, ALL RIGHTS RESERVED</span>

</div>


  </div>
</div>
  </section>
  )
}


export default Footer