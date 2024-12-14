import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'


function Footer() {
  return (
    <section className="container mx-auto px-5 flex flex-col items-center justify-center  h-screen pb-5">
        
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
   <hr className='w-full  bg-[#cfc9a3]'/>

   <div className="flex justify-between gap-4">


   </div>
  </section>
  )
}


export default Footer