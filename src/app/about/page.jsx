"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import {
  Video as VideoIcon,
  LineChartIcon as ChartLine,
  Globe,
  ArrowRight,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";

import BackgroundVideo from "next-video/background-video";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MediaThemeInstaplay from "player.style/instaplay/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";

// Mock data (replace with actual data in a real application)

const UGC = [
  {
    id: 1,
    // video: "./assets/Estuary/UGC Video.mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Ashneer%20Grover%20Reel.mp4",
    thumbnail: "portrait/3.png",
    name: "sharktank brand",
    logo: "	logo/baccabucci.jpg",
    brand: "BaccaBucci",
  },
  {
    id: 2,
    
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Vinita%20Said%20That%20Reel.mp4",
    thumbnail: "portrait/3.png",
    name: "sharktank brand",
    logo: "	logo/baccabucci.jpg",
    brand: "BaccaBucci",
  },
  {
    id: 3,
    // video: "./assets/Perfora/HOME Page Perfora UGC .mp4",
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Pod%20Aditya%20Teaser.MP4",
    thumbnail: "portrait/2.png",
    name: "ncd schbang",
    logo: "logo/Schbang.jpg",
    brand: "Schbang",
  },
  {
    id: 4,
    
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/SnapSave.io-Meet%20Darshil%20Shah%20from%20%40chtrsocial%20share%20the%20virality%20concept%20__%20Viral%20Janta%20Karti%20Hai!%20Aap%20Nahi%20__.mp4",
    thumbnail: "portrait/1.png",
    name: "founder of chtr social",
    logo: "logo/Chtr.png",
    brand: "Chtr Social",
  },
  {
    id: 4,
    video:"https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Vinita%20Said%20That%20Reel.mp4",
    thumbnail: "portrait/4.png",
    name: "sharktank brand",
    logo: "	logo/baccabucci.jpg",
    brand: "BaccaBucci",
  },
];

const services = [
  {
    title: "VIDEO PRODUCTION",
    description:
      "High-quality, engaging video content tailored to your brand's needs.",
    icon: VideoIcon,
  },
  {
    title: "PAID MEDIA",
    description:
      "Strategic paid advertising campaigns to boost your brand's visibility and conversions.",
    icon: ChartLine,
  },
  {
    title: "INFLUENCER",
    description:
      "Leverage trusted voices to amplify your brand message through authentic and relatable influencer collaborations.",
    icon: Users,
  },
];

const strategyPoints = [
  { text: "Strategizing persona testing for ", highlight: "My11Circle" },
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
];

const splitTestingData = [
  { 
    video: "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/2.%20Kajal%20Water%20splash(9X16).mp4", 
    title: "FEMALE INFLUENCER" 

  },
  {
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/3.%20Vertical%209X16.mp4",
    title: "MALE ACTOR",
  },
];

const frameworkItems = [
  { letter: "H", description: "Hook: Grab attention fast." },
  { letter: "E", description: "Explain: Introduce the Value early." },
  { letter: "A", description: "Actor: Confident and relatable talent." },
  {
    letter: "T",
    description: "Trends: Tap into current platform relevant trends.",
  },
  { letter: "C", description: "Call to Action: End with a strong CTA" },
];

function LandingPage() {
  const [activeTab, setActiveTab] = useState("framework");

  return (
    <main className="container mx-auto px-5 " data-scroll-section>
      {/* About Section */}
      <section data-scroll-section className="py-20">
        <section className=" h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 ">
              <h2 className="w-full text-[#f85a23]  text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
                ABOUT
              </h2>
              <div className="space-y-6">
                <h3 className="text-white text-base lg:text-xl xl:text-2xl font-light tracking-wide">
                  Hi, I'm Meet Dasani
                </h3>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed tracking-wide">
                  I started this agency after noticing a significant shift in
                  how people consume content—moving from{" "}
                  <span className="text-white font-medium">static visuals</span>{" "}
                  to <span className="text-white font-medium">videos</span>.
                  Despite this change, many big brands weren't optimizing their
                  ad spend with the right{" "}
                  <span className="text-[#f85a23] font-medium">
                    direct response video ads
                  </span>
                  . I saw an opportunity to bridge this gap by creating
                  impactful, data-driven video campaigns that not only capture
                  attention but also drive real results.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="bg-[#f85a23]/20 absolute inset-0 rounded-xl transform rotate-3 transition-transform duration-300 hover:rotate-6"></div>
                <div className="relative z-10 bg-[#f85a23]/10 rounded-xl overflow-hidden">
                  <img
                    src="/founder.png"
                    alt="Meet Dasani"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-9 z-20">
                  <div className="bg-[#f85a23] text-white px-3 py-2 lg:px-6 lg:py-4 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90">
                    <div className="text-xs lg:text-sm font-medium tracking-wider">
                      FOUNDER
                    </div>
                    <div className="text-sm lg:text-xl font-bold tracking-wide">
                      Meet Dasani
                    </div>
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
              conversation with{" "}
              <span className="text-[#f85a23]">D2C Founders</span> and{" "}
              <span className="text-[#f85a23]">marketers</span>
            </h2>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {UGC.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="relative aspect-[9/16] overflow-hidden">
                <Dialog>
                <DialogTrigger>
                  {/* if thumbnail available */}
                  
                  <video
  // autoPlay
  src={slide.video}
  {...(slide.thumbnail && { poster: slide.thumbnail })}
  className="absolute inset-0 w-full object-cover"
  loop
  muted
  playsInline
  crossOrigin="anonymous"
/>


                  <img src="/play.png" className="h-12 absolute z-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />


</DialogTrigger>
<DialogContent className="p-0 bg-transparent border-none h-screen z-[105]">
<MediaThemeInstaplay
        style={{ "--media-accent-color": "#f85a23" }}
      >           <video         
                    src={slide.video}
                    slot="media"
                    className="w-full h-screen object-contain"

                    // className="h-[600px]"
                    playsInline
                    preload="metadata"
                    crossOrigin
                    // theme={Instaplay}
                    

                  />
                        </MediaThemeInstaplay>

  </DialogContent>

</Dialog>
                  <div className="absolute flex gap-5 flex-col  bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent -mb-1">
                    <div className="text-[#f85a23] text-lg font-bold uppercase tracking-wider ">
                      {slide.name}
                    </div>
                    <h2 className="text-white text-xl font-bold">
                      <img className="h-10 relative" src={slide.logo} />
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
                <span className="text-white">True Bridge Media</span> that
                purpose is simple:
                <span className="text-white"> To drive results.</span>
                <br />
                <br />
                During this journey, we realized that it's a data-driven game of{" "}
                <span className="text-white">volume</span> and{" "}
                <span className="text-white">creative testing.</span> By
                producing multiple variations of ads, analyzing performance
                data, and identifying what works, we help brands find their{" "}
                <span className="text-white">winning creatives</span> and scale
                them effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Split Testing Section */}
        <section data-scroll-section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {splitTestingData.map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className="relative w-full  flex justify-center items-center  overflow-hidden">
                  <Dialog>
                <DialogTrigger>
                  <video
                    // autoPlay
                    poster="portrait/Split Testing image.png"
                    src={item.video}
                    className="inset-0 w-full h-full  object-cover"
                    loop
                    muted
                    playsInline
                    crossOrigin                    
                  />

                  <img src="/play.png" className="h-12 absolute z-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />


</DialogTrigger>
<DialogContent className="p-0 bg-transparent border-none h-dvh  z-[105]">
<MediaThemeInstaplay
        style={{ "--media-accent-color": "#f85a23" }}
      >           <video         
                    src={item.video}
                    slot="media"
                    className="absolute inset-0 h-full  object-fit"
                    playsInline
                    preload="metadata"
                    crossOrigin
                    // theme={Instaplay}
                  />
                  </MediaThemeInstaplay>

  </DialogContent>
</Dialog>

                  </div>
                  <h3 className=" text-lg font-bold tracking-wide">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}

        <section className="py-20" >
      <div className="">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          <span className="text-[#f85a23]">CASE STUDY</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16" >
          <div  className="p-6 rounded-xl flex justify-center">
            <div className="relative w-full max-w-md flex justify-center items-center rounded-md overflow-hidden bg-gray-800">
            <Dialog>
                <DialogTrigger>
                  
                  <video
                    // autoPlay
                    src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/%20Single%20ID%20Free%20Pizza.mp4"
                    className=" inset-0 h-full max-h-dvh max-h-screen object-cover"
                    loop
                    muted
                    playsInline
                    crossOrigin 
                    poster="thumbnail/SingleIDfreepizza.png"                   

                  />
                  <img src="/play.png" className="h-12 absolute z-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />


</DialogTrigger>
<DialogContent className="p-0  bg-transparent border-none h-dvh z-[105]">
<MediaThemeInstaplay
        style={{ "--media-accent-color": "#f85a23" }}
      >           <video         
                    src="https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/%20Single%20ID%20Free%20Pizza.mp4"
                    slot="media"
                    className="absolute inset-0 h-full  object-fit"

                    // className="h-[600px]"
                    playsInline
                    preload="metadata"
                    crossOrigin
                    // theme={Instaplay}
                    

                  />
                  </MediaThemeInstaplay>

  </DialogContent>
</Dialog>
            </div>
          </div>
            <div>
          <div  className="space-y-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-12 text-center">HEAT C Framework</h3>
            <div className="space-y-4">
              {frameworkItems.map(({ letter, description }) => (
                <div key={letter} className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                  <span className="text-[#f85a23] font-bold text-3xl">{letter}</span>
                  <span className="text-[#E2D7C1] text-lg">{description}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

            <div className="mt-16">
              <h3 className="text-3xl mb-8 font-bold text-center">
                Campaign Results
              </h3>
              <div className="bg-gradient-to-r from-[#f85a23] to-[#1c2321] p-6 rounded-lg shadow-lg">
                <p className="text-white text-xl">
                  Single ID achieved a remarkable 55% reduction in cost per card
                  link, significantly enhancing engagement and conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section data-scroll-section className="py-20">
          <h2 className="w-full text-white text-center text-2xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider mb-10">
            Our <span className="text-[#f85a23]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#181818] hover:shadow-lg"
              >
                <service.icon className="text-[#f85a23] w-8 h-8 mb-4" />
                <h3 className="text-white text-base font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/60 text-xs">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
      </section>
      <Footer />
    </main>
  );
}

export default LandingPage;
