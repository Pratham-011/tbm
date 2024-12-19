import React from 'react'
import { Facebook, Instagram, Linkedin, LinkedinIcon, Twitter, TwitterIcon, Youtube,  } from 'lucide-react'


function Footer() {
  return (
    // yaha se justify center wala remove kiya hai 
    <section className="container mx-auto px-5 flex flex-col   h-screen pb-5"> 
      
   <div className="flex flex-col items-center justify-center h-full gap-5">
   <div className="w-full text-center text-xs  text-white/60 lg:text-lg font-normal tracking-wider">
       <span className="text-white ">
       Let’s Make Magic Together.
        </span> <br />

        Looking to amplify your brand? We’re here to make it happen.
        
      </div>

      <div className="w-full text-white text-center text-2xl  lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold lowercase tracking-wider">
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
<div class="flex flex-col lg:flex-row items-center justify-center  py-5">
  {/* <!-- Navigation Links Section --> */}
  <div class="w-full flex lg:justify-between gap-5  items-center flex-col lg:flex-row ">
    <div class="flex gap-5">
      <span class="text-[#cfc9a3] text-xs font-medium uppercase">Home</span>
      <span class="text-[#cfc9a3] text-xs font-medium uppercase">About</span>
      <span class="text-[#cfc9a3] text-xs font-medium uppercase">Work</span>
      <span class="text-[#cfc9a3] text-xs font-medium uppercase">Blog</span>
      <span class="text-[#cfc9a3] text-xs font-medium uppercase">Contact</span>
    </div>
    {/* <!-- Social Media Icons --> */}
    <div class="flex gap-4">
  {/* <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><Facebook /></div> */}
  <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><Instagram /></div>
  <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><LinkedinIcon /></div>
  <div class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#cfc9a3]"><Youtube /></div>
</div>


  </div>
</div>





<hr className="w-full border-t border-[#cfc9a3]" />


   <div class="flex flex-col lg:flex-row items-center justify-center  py-5">
  {/* <!-- Logo Section --> */}
  <div class="w-full flex lg:justify-between gap-5  items-center flex-col lg:flex-row ">
    <div class="flex gap-5 ">
      <img class="w-[330px] h-[37px] relative rounded-xl" src="logo_full.png" alt="" srcset="" />
    </div>
    {/* <!-- copyright section --> */}
    <div class="flex gap-4">
    <span class="text-[#cfc9a3] text-xs font-medium uppercase">© 2024 True Bridge Media, ALL RIGHTS RESERVED</span>

</div>


  </div>
</div>
  </section>
  )
}


export default Footer