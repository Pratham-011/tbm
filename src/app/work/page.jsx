'use client'

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Video, LineChartIcon as ChartLine, Globe } from 'lucide-react';
import Footer from "@/components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// Mock data (replace with actual data in a real application)
const UGC = [
  {
    id: 1,
    video: "https://example.com/video1.mp4",
    name: "John Doe",
    logo: "/logo/brand1.png",
    brand: "Brand One",
  },
  {
    id: 2,
    video: "https://example.com/video2.mp4",
    name: "Jane Smith",
    logo: "/logo/brand2.png",
    brand: "Brand Two",
  },
  {
    id: 3,
    video: "https://example.com/video3.mp4",
    name: "Bob Johnson",
    logo: "/logo/brand3.png",
    brand: "Brand Three",
  },
  {
    id: 4,
    video: "https://example.com/video4.mp4",
    name: "Alice Williams",
    logo: "/logo/brand4.png",
    brand: "Brand Four",
  },
];

const services = [
  {
    title: "VIDEO PRODUCTION",
    description: "High-quality, engaging video content tailored to your brand's needs.",
    icon: Video
  },
  {
    title: "PAID MEDIA",
    description: "Strategic paid advertising campaigns to boost your brand's visibility and conversions.",
    icon: ChartLine
  },
  {
    title: "WEBSITE BUILDING",
    description: "Custom, responsive websites designed to showcase your brand and drive results.",
    icon: Globe
  }
];

const strategyPoints = [
  { text: "Strategizing persona testing for ", highlight: "Brand X" },
  { text: "Creating ", highlight: "2 identical ads", continuation: " — one with an average-looking actor and one with a good-looking influencer." },
  { text: "This ", highlight: "data-driven", continuation: " approach helps optimize Ads and ", highlight2: "maximize user acquisition" },
  { text: "The goal is to refine messaging and ", highlight: "enhance ad performance", continuation: " for better results." },
];

const splitTestingData = [
  { 
    video: "https://example.com/split-test-video1.mp4", 
    title: "FEMALE INFLUENCER" 
  },
  { 
    video: "https://example.com/split-test-video2.mp4", 
    title: "MALE ACTOR" 
  }
];

const frameworkItems = [
  { letter: "H", description: "Hook: Grab attention fast." },
  { letter: "E", description: "Explain Value early." },
  { letter: "A", description: "Actor: Confident and relatable talent." },
  { letter: "T", description: "Trends: Tap into current platform relevant trends." },
  { letter: "C", description: "Call to Action: End with a strong CTA" },
];

function LandingPage() {
  const [activeTab, setActiveTab] = useState('framework');

  return (
      <main className="container mx-auto px-5">

 {/* About Section */}
 <section className="py-20 h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="w-full text-[#f85a23] text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
                ABOUT
              </h2>
              <div className="space-y-6">
                <h3 className="text-white text-base lg:text-xl xl:text-2xl font-light tracking-wide">
                  Hi, I'm Meet Dasani
                </h3>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed tracking-wide">
                  I started this agency after noticing a significant shift in how people consume content—moving from{' '}
                  <span className="text-white font-medium">static visuals</span> to{' '}
                  <span className="text-white font-medium">videos</span>. Despite this change, many big brands weren't optimizing their ad spend with the right{' '}
                  <span className="text-[#f85a23] font-medium">direct response video ads</span>. I saw an opportunity to bridge this gap by creating impactful, data-driven video campaigns that not only capture attention but also drive real results.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="bg-[#f85a23]/20 absolute inset-0 rounded-xl transform rotate-3 transition-transform duration-300 hover:rotate-6"></div>
                <div className="relative z-10 bg-[#f85a23]/10 rounded-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Meet Dasani"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-[#f85a23] text-white px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90">
                    <div className="text-sm font-medium tracking-wider">FOUNDER</div>
                    <div className="text-xl font-bold tracking-wide">Meet Dasani</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Conversation Section */}
        <section className="py-20">
          <div className="text-left mb-10">
            <h2 className="w-full text-white text-center lg:w-4/5 text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
              conversation with{' '}
              <span className="text-[#f85a23]">D2C Founders</span> and{' '}
              <span className="text-[#f85a23]">marketers</span>
            </h2>
          </div>

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
              pauseOnMouseEnter: true
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
          >
            {UGC.map((slide, index) => (
              <SwiperSlide key={index} className="h-[50vh] lg:h-[80vh]">
                <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden rounded-lg">
                  <video
                    autoPlay
                    src={slide.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute flex gap-5 flex-col bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="text-[#f85a23] text-lg font-bold uppercase tracking-wider">
                      {slide.name}
                    </div>
                    <h2 className="text-white text-xl font-bold">
                      <img className="h-8 relative" src={slide.logo} alt={slide.brand} />
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

       
        {/* Believe Section */}
        <section className="py-20 h-screen flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider ">
                what we <span className="text-[#f85a23]">believe</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-white/60 text-lg">
                We believe that every Ad should have a purpose. At{" "}
                <span className="text-white">True Bridge Media</span> that purpose is simple:
                <span className="text-white"> To drive results.</span> 
                <br /><br />
                During this journey, we realized that it's a data-driven game of <span className="text-white">volume</span> and <span className="text-white">creative testing.</span> By producing multiple variations of ads, analyzing performance data, and identifying what works, we help brands find their <span className="text-white">winning creatives</span> and scale them effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Split Testing Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider mb-10">
                SPLIT TESTING <span className="text-[#f85a23]">STRATEGY</span>
              </h2>
              <ul className="space-y-6">
                {strategyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-white/60"
                  >
                    <span>
                      {point.text}
                      <span className="text-white font-normal">{point.highlight}</span>
                      {point.continuation}
                      {point.highlight2 && (
                        <span className="text-white font-normal">{point.highlight2}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {splitTestingData.map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className="h-[400px] w-full bg-[#1c2321] flex justify-center items-center rounded-md overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                      src={item.video}
                      controls
                      className="h-full max-h-[400px] w-auto rounded-md"
                    />
                  </div>
                  <img
                    src="/assets/logo/brand-logo.png"
                    alt="Brand Logo"
                    className="w-auto h-20 object-contain mt-2"
                  />
                  <h3 className=" text-lg font-bold tracking-wide">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20">
          <h2 className="w-full text-white text-center text-2xl  lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
            <span className="text-[#f85a23]">CASE STUDY</span>
            <h3 className="text-2xl mb-4">HEAT C Framework</h3>

          </h2>
          
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mr-2 ${activeTab === 'framework' ? 'bg-[#f85a23] text-white' : 'bg-gray-700 text-gray-300'} rounded`}
              onClick={() => setActiveTab('framework')}
            >
              HEAT C Framework
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'results' ? 'bg-[#f85a23] text-white' : 'bg-gray-700 text-gray-300'} rounded`}
              onClick={() => setActiveTab('results')}
            >
              Results
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-6 rounded-xl flex justify-center order-last lg:order-first">
              <div className="h-auto w-full flex justify-center items-center rounded-md overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  src="https://example.com/case-study-video.mp4"
                  controls
                  className="w-full max-w-[270px] h-auto rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              {activeTab === 'framework' && (
                <div>
                  <div className="space-y-4">
                    {frameworkItems.map(({ letter, description }) => (
                      <div key={letter} className="flex items-start gap-2">
                        <span className="text-[#f85a23] font-bold">{letter}</span>
                        <span className="">{description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'results' && (
                <div>
                  <h3 className="text-[#E2D7C1] text-2xl mb-4">Results</h3>
                  <div className="bg-gradient-to-r from-[#f85a23] to-[#1c2321] p-6 rounded-lg shadow-lg">
                    <p className="text-[#E2D7C1]">
                      Our client achieved a remarkable 55% reduction in cost per acquisition,
                      significantly enhancing engagement and conversion rates. The campaign
                      reached over 1 million users and generated a 300% ROI.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <h2 className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider mb-10">
            Our <span className="text-[#f85a23]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#181818] hover:shadow-lg">
                <service.icon className="text-[#f85a23] w-8 h-8 mb-4" />
                <h3 className="text-white text-base font-bold mb-2">{service.title}</h3>
                <p className="text-white/60 text-xs">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
       <Footer/>
      </main>
  );
}

export default LandingPage;

