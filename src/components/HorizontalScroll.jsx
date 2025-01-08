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


const contents = [
  {
    "title": "BRANDING PURPOSE",
    "keyword": "DIGITAL AD FILMS",
    "desc": "Using these videos at the top of the funnel to grab attention and then retargeting the same audience with the bottom of the funnel UGC’s.",
    "videosrc": "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Copy%20of%20HOME%20Ad%20film%20Video.mp4"
  },
  {
    "title": "In Association with",
    "keyword": "Vyshakh Sudhakaran",
    "desc": "In this Digital Ad for Cultfit there has been right use of VFX to grab attention and to amplify the key value preposition of curing body stiffness with the gun massager.",
    "videosrc": "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Copy%20of%20cult_massager_ad%20(1440p).mp4"
  },
  {
    "title": "In Association with",
    "keyword": "The Sassy Insights",
    "desc": "A game show IP format for 1win allows to drive higher engagement and extended watch time. It builds better brand recall value in the long run.",
    "videosrc": "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/the%20sassy%20night.mp4"
  },
  {
    "title": "In Association with",
    "keyword": "Vyshakh Sudhakaran",
    "desc": "Fakeeh University Hospital approached us with a clear vision: to highlight their patient-centric approach. Using impactful VFX, we visually amplified their message.",
    "videosrc": "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Fakeeh%20University%20Hospital%20Dubai.mp4"
  }
]





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
    <div ref={triggerRef} className="overflow-hidden " data-scroll-section data-scroll-speed="1" >
      <div ref={sectionRef} className="flex pt-20" >
       
        {contents.map((content, index) => (
          <div key={index} className="shrink-0 w-screen h-[100vh] items-center flex flex-col gap-4 relative">
            <div>

            </div>
            <section  className="container flex-shrink-0 mx-auto px-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between  pb-5 gap-5">
        <div className="w-full text-white text-center text-2xl lg:text-left lg:text-3xl  xl:text-4xl 2xl:text-5xl font-bold uppercase tracking-wider">
          <span>{content.title}</span>
          <br />
          <span className="text-[#f85a23] ">{" "}{content.keyword}</span>
          <br />
        </div>
        <div className="w-full text-center text-xs lg:text-justify text-white/60 lg:text-lg font-normal tracking-wider">
          {content.desc}
        </div>


            </section>

            <section  className="container flex-grow mx-auto bg-red flex items-start justify-start relative px-4 lg:px-40">
                            <Dialog className="w-full h-full"  >
                <DialogTrigger className="w-full h-full" >
                  <video
                    // autoPlay
                    src={content.videosrc}
                    className="absolute inset-0 h-full w-full object-contain"
                    loop
                    muted
                    playsInline
                    crossOrigin                 
                  />
                  <img src="/play.png" className="h-12 absolute z-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />


</DialogTrigger>
<DialogContent className="p-0 bg-transparent border-none h-screen z-[105]">
<MediaThemeNotflix
        style={{ "--media-accent-color": "#f85a23" }}
      >           <video         
      src={content.videosrc}
      slot="media"
                    className="w-full h-screen object-contain"
                    playsInline
                    preload="metadata"
                    crossOrigin                
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

