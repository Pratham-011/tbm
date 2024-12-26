'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    <div ref={triggerRef} className="overflow-hidden h-[500vw]" data-scroll-section data-scroll-speed="1" >
      <div ref={sectionRef} className="flex" >
        {[...Array(5)].map((_, index) => (
          <div key={index} className="shrink-0 w-screen h-[100vh] items-center flex ">
            <section data-scroll-section className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen pb-5 gap-5">
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

            
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScroll

