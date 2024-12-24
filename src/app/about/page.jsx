'use client'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clients from "@/data/clients.json";
import { useEffect, useState,useRef } from "react";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay,Navigation } from 'swiper/modules'
import 'swiper/css/navigation';
import Footer from "@/components/Footer";
import { motion } from "framer-motion";




function page() {

  const services = [
    {
      title: "VIDEO PRODUCTION",
      description: "High-quality, engaging video content tailored to your brand's needs.",
      icon: "🎥"
    },
    {
      title: "PAID MEDIA",
      description: "Strategic paid advertising campaigns to boost your brand's visibility and conversions.",
      icon: "📊"
    },
    {
      title: "WEBSITE BUILDING",
      description: "Custom, responsive websites designed to showcase your brand and drive results.",
      icon: "💻"
    }
  ];
  

  const frameworkItems = [
    { letter: "H", description: "Hook: Grab attention fast." },
    { letter: "E", description: "Explain Value early." },
    { letter: "A", description: "Actor: Confident and relatable talent." },
    { letter: "T", description: "Trends: Tap into current platform relevant trends." },
    { letter: "C", description: "Call to Action: End with a strong CTA" },
  ];
  
  const UGC = [
    {
      id: 1,
      // video: "./assets/Estuary/UGC Video.mp4",
      video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Ashneer%20Grover%20Reel.mp4",
      thumbnail: "./assets/Estuary/UGC-Thumbnail.jpg",
      name: "sharktank brand",
      logo: "	logo/baccabucci.jpg",
      brand: "BaccaBucci",
    },
    {
      id: 2,
      // video: "./assets/Perfora/HOME Page Perfora UGC .mp4",
      video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Pod%20Aditya%20Teaser.MP4",
      thumbnail: "./assets/Perfora/2.png",
      name: "ncd schbang",
      logo: "logo/Schbang.jpg",
      brand: "Schbang",
    },
    {
      id: 3,
      // video: "./assets/P-TAL/HOMEP-TalBrassPatilaHook2.mp4",
      video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/SnapSave.io-Meet%20Darshil%20Shah%20from%20%40chtrsocial%20share%20the%20virality%20concept%20__%20Viral%20Janta%20Karti%20Hai!%20Aap%20Nahi%20__.mp4",
      thumbnail: "/thumbnail/1.png",
      name: "founder of chtr social",
      logo: "logo/Chtr.png",
      brand: "Chtr Social",
    },
    {
      id: 4,
      // video: "./assets/Mangalam/Mangalam Giant Cone Hook 1.mp4",
      video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Vinita%20Said%20That%20Reel.mp4",
      thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
      name: "sharktank brand",
      logo: "	logo/baccabucci.jpg",
      brand: "BaccaBucci",
    },
    
  ];
  
  return (
    <>
   

{/* conversation */}
      <section className="flex flex-col my-10 py-10">

      <div className="container mx-auto px-5 w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
          <span>conversation with</span>
          <span className="text-[#f85a23] ">D2C Founders</span>
          <span>and</span>
        <span className="text-[#f85a23] ">marketers</span>
        
        </div>

    <div className="slider-container pt-6 flex justify-center">
     


<Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          loop={true}
          
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
          }}
          modules={[EffectCoverflow, Autoplay,Navigation]}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}

        >
          {UGC.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide h-[50vh] lg:h-[80vh]">
              <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
                <video
                autoPlay
                  src={slide.video}
                  className="absolute inset-0 w-full  object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute flex gap-5 flex-col  bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent -mb-1">
                  <div className="text-[#f85a23] text-lg font-bold uppercase tracking-wider ">
                    {slide.name}
                  </div>
                  <h2 className="text-white text-xl font-bold">
                  <img className="h-8 relative" src={slide.logo} />
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    </div>
</section>


 {/* how we make a difference */}
 <section className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen pb-5 gap-5">
        <div className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
          <span>what we </span>
          
          <span className="text-[#f85a23] ">believe</span>
          <br />
        </div>
        <div className="w-full text-center text-xs lg:text-justify text-white/60 lg:text-lg font-normal tracking-wider">
          <span>
          We believe that every Ad should have a purpose. At{" "}
            <span className="text-white ">True Bridge Media</span> that purpose is simple:
            <span className="text-white ">To drive results.</span> 
            <br />
            <br />
            During this journey, we realized that it’s a data-driven game of <span className="text-white ">volume</span> and  <span className="text-white ">creative testing.</span> By producing multiple variations of ads, analyzing performance data, and identifying what works, we help brands find their  <span className="text-white ">winning creatives</span> and scale them effectively.
            
          </span>
        </div>
      </section>


      {/* split testing */}
      <section >
      <div className=" min-h-screen p-8 lg:p-16 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Strategy Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 text-white/60 text-xs lg:text-lg font-normal tracking-wider"
          >
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider mb-6 sm:mb-8 lg:mb-12 text-center 
              sticky top-6 z-10  
              lg:static lg:bg-transparent lg:z-0"
            >
              SPLIT TESTING STRATEGY
            </motion.span>

            <ul className="space-y-6 text-xl">
              {[
                {
                  text: "Strategizing persona testing for ",
                  highlight: "My11Circle",
                },
                {
                  text: "Creating ",
                  highlight: "2 identical ads",
                  continuation:
                    " — one with an average-looking actor and one with a good-looking influencer.",
                },
                {
                  text: "This ",
                  highlight: "data-driven",
                  continuation: " approach helps optimize Ads and ",
                  highlight2: "maximize user acquisition",
                },
                {
                  text: "The goal is to refine messaging and ",
                  highlight: "enhance ad performance",
                  continuation: " for better results.",
                },
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-xs lg:text-lg font-normal tracking-wider">
                    {point.text}
                    <span className="text-white font-normal">
                      {point.highlight}
                    </span>
                    {point.continuation}
                    {point.highlight2 && (
                      <span className="text-white font-normal">
                        {point.highlight2}
                      </span>
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Videos Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Female Influencer Video */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-[400px] w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  loading="lazy"
                  // src="/assets/My11Circle/2. Kajal Water splash(9X16).mp4"
                  src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/2.%20Kajal%20Water%20splash(9X16).mp4"
                  controls
                  className="h-full max-h-[400px] w-auto rounded-md "
                />
              </div>
              <img
                src="/assets/logo/My112.png"
                alt="My11Circle Logo"
                loading="lazy"
                className="w-auto h-20 object-contain mt-2"
              />

              <h3 className="text-[#cfc9a3] text-lg font-bold tracking-wide">
                FEMALE INFLUENCER
              </h3>
            </div>

            {/* Male Actor Video */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-[400px] w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                   preload="metadata"
                  loading="lazy"
                  loop
                  // src="/assets/My11Circle/3. Vertical 9X16.mp4"
                  src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/3.%20Vertical%209X16.mp4"
                  controls
                  className="h-full max-h-[400px] w-auto rounded-md"
                />
              </div>
              <img
                src="/assets/logo/My112.png"
                alt="My11Circle Logo"
                loading="lazy" 
                className="w-auto h-20 object-contain mt-2"
              />

              <h3 className="text-[#cfc9a3] text-lg font-bold tracking-wide">
                MALE ACTOR
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
      </section>

    {/* case study */}
    <section>
    <div className="min-h-screen text-white" >
      <div className="container mx-auto px-4">
        {/* Small and Medium Screens */}
        <div className="lg:hidden space-y-8">
          {/* HEAT Framework */}
          <div className="text-center md:px-20">
            <h1 className="text-[#f85a23] text-4xl sm:text-5xl font-bold mb-8">
              CASE STUDY
            </h1>
            <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl mb-6 md:text-center">
              HEAT C Framework
            </h2>
            <div className="space-y-4 md:flex md:flex-col md:items-center">
              {frameworkItems.map(({ letter, description }) => (
                <div key={letter} className="flex items-start gap-2 md:max-w-[600px]">
                  <span className="text-[#f85a23] font-bold">{letter}</span>
                  <span className="text-[#E2D7C1] text-left">{description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="p-6 rounded-xl flex justify-center">
            <div className="h-[400px] w-full flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                   preload="metadata"
                  loading="lazy"
                  // src="/assets/Single ID/Single ID Free Pizza.mp4"
                  src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/%20Single%20ID%20Free%20Pizza.mp4"
                  controls
                  className="h-full max-h-[400px] w-auto rounded-md"
                />
              </div>
          </div>

          {/* Results Section */}
          <div className="text-center md:px-20">
            <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl mb-6 md:text-center">
              Results
            </h2>
            <p className="text-[#E2D7C1] text-center md:max-w-[600px] md:mx-auto">
              Single ID achieved a remarkable 55% reduction in cost per card link,
              significantly enhancing engagement and conversion rates.
            </p>
          </div>
        </div>

        {/* Large Screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="p-6 rounded-xl flex justify-center">
            <div className="h-auto w-full  flex justify-center items-center rounded-md overflow-hidden">
              <video
                autoPlay
                muted
                loop
                 preload="metadata"
                  loading="lazy"
                // src="/assets/Single ID/Single ID Free Pizza.mp4"
                src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/%20Single%20ID%20Free%20Pizza.mp4"
                controls
                className="w-full max-w-[270px] h-auto rounded-md"
              />
            </div>
          </div>

          {/* HEAT Framework */}
          <div className="space-y-4">
            <h1 className="text-[#f85a23] text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              CASE STUDY
            </h1>
            <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl lg:text-4xl mb-6">
              HEAT C Framework
            </h2>
            <div className="space-y-4">
              {frameworkItems.map(({ letter, description }) => (
                <div key={letter} className="flex items-start gap-2 ">
                  <span className="text-[#f85a23] font-bold">{letter}</span>
                  <span className="text-[#E2D7C1]  ">{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section for Large Screens */}
        <div className="hidden lg:block pl-10">
          <h2 className="text-[#E2D7C1] text-3xl sm:text-4xl lg:text-4xl mb-6 text-left">
            Results
          </h2>
          <div className="bg-gradient-to-r from-[#f85a23] to-[#1c2321] p-6 rounded-lg shadow-lg">
            <p className="text-[#E2D7C1]">
              Single ID achieved a remarkable 55% reduction in cost per card link,
              significantly enhancing engagement and conversion rates.
            </p>
          </div>
        </div>
      </div>
    </div>
              
    </section>




    {/* services section */}

    <section className="container mx-auto px-5 py-20">
      <h2 className="text-white text-center  text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider mb-12">
        Our <span className="text-[#f85a23]">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#181818] hover:shadow-lg">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-white/60">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    

<Footer/>
    </>
  )
}

export default page