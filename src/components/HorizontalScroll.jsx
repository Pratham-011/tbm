'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundVideo from 'next-video/background-video';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import MediaThemeNotflix from 'player.style/notflix/react';
import Video from 'next-video';



gsap.registerPlugin(ScrollTrigger)

const HorizontalScroll = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const horizontalScroll = gsap.to(sectionRef.current, {
        x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${sectionRef.current.scrollWidth - window.innerWidth}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      return () => {
        horizontalScroll.kill()
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={triggerRef} className="overflow-hidden" data-scroll-section data-scroll-speed="1" >
      <div ref={sectionRef} className="flex pt-20" >
        {[...Array(5)].map((_, index) => (
          <div key={index} className="shrink-0 w-screen h-[100vh] items-center flex flex-col gap-4">
            <section  className="container flex-shrink-0 mx-auto px-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between  pb-5 gap-5">
        <div className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
          <span>how we make a </span>
          <span className="text-[#f85a23] ">difference</span>
          <br />
        </div>
        <div className="w-full text-center text-xs lg:text-justify text-white/60 lg:text-lg font-normal tracking-wider">
          <span>
            We strategize and craft the{" "}
            <span className="text-white ">perfect ads</span> tailored to every
            stage of the marketing funnel.
            <br />
            <br />
            Our approach is <span className="text-white ">data-driven</span> and
            backed by <span className="text-white ">insights</span>.
            <br />
            <br />
            This enables us to optimize{" "}
            <span className="text-white ">performance marketing</span> efforts
            for maximum impact, resulting in{" "}
            <span className="text-white ">higher conversions</span> and{" "}
            <span className="text-white ">sales</span>.
          </span>
        </div>


            </section>

            <section  className="container flex-grow mx-auto bg-red flex items-center justify-center relative ">
                            <Dialog>
                <DialogTrigger>
                  <BackgroundVideo
                    autoPlay
                    src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Vinita%20Said%20That%20Reel.mp4"
                    className="absolute inset-0 h-full  object-contain"
                    loop
                    muted
                    playsInline
                    crossOrigin                 
                  />

</DialogTrigger>
<DialogContent className="p-0 bg-transparent border-none h-screen z-[105]">
<MediaThemeNotflix
        style={{ "--media-accent-color": "#f85a23" }}
      >           <video         
      src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Vinita%20Said%20That%20Reel.mp4"
      slot="media"
                    className="w-full h-screen object-contain"

                    // className="h-[600px]"
                    playsInline
                    preload="metadata"
                    crossOrigin
                    // theme={Instaplay}
                    

                  />
                        </MediaThemeNotflix>

  </DialogContent>

</Dialog>
            </section>
          
          

            
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScroll

