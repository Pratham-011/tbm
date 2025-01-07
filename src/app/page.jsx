"use client";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clients from "@/data/clients.json";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import HorizontalScroll from "@/components/HorizontalScroll";

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

const UGC = [
  {
    id: 1,
    // video: "./assets/Estuary/UGC Video.mp4",
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/UGC%20Video.mp4",
    thumbnail: "./assets/Estuary/UGC-Thumbnail.jpg",
    name: "HIGH END UGC",
    logo: "	/logo/Estuary.webp",
    brand: "ESTUARY",
  },
  {
    id: 2,
    // video: "./assets/Perfora/HOME Page Perfora UGC .mp4",
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20Page%20Perfora%20UGC%20.mp4",
    thumbnail: "./assets/Perfora/2.png",
    name: "PHONE SHOT UGC",
    logo: "logo/Perforalogo.png",
    brand: "PERFORA",
  },
  {
    id: 3,
    // video: "./assets/P-TAL/HOMEP-TalBrassPatilaHook2.mp4",
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20P-Tal%20Brass%20Patila%20Hook%202%20.mp4",
    thumbnail: "./assets/P-TAL/UGC-Thumbnail.jpg",
    name: "CAMERA SHOT UGC",
    logo: "logo/P-tal.png",
    brand: "P-TAL",
  },
  {
    id: 4,
    // video: "./assets/Mangalam/Mangalam Giant Cone Hook 1.mp4",
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Mangalam%20Giant%20Cone%20Hook%201.MP4",
    thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
    name: "PHONE SHOT UGC",
    logo: "logo/Mangalam1.webp",
    brand: "MANGALAM",
  },
  {
    id: 5,
    // video: "./assets/My11Circle/HOME Fighting (1080X1920).mp4",
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/HOME%20Fighting%20(1080X1920).mp4",
    thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
    name: "PHONE SHOT UGC",
    logo: "logo/My112.png",
    brand: "My11Circle",
  },
  {
    id: 6,
    // video: "./assets/My11Circle/Home Combo offer.mp4",
    video:
      "https://pub-7ef9cd4a2b164f838c4e056cc6eb2f6d.r2.dev/Home%20Combo%20offer.mp4",
    thumbnail: "./assets/Mangalam/UGC-Thumbnail.jpg",
    name: "PHONE SHOT UGC",
    logo: "logo/My112.png",
    brand: "MANGALAM",
  },
];

const horizontals = [
  {
    title: "FUNNEL ADS THAT ENGAGE AND CONVERT",
    description:
      "Leverage attention-grabbing videos at the top of the funnel to spark interest and build awareness. Retarget the same audience with impactful bottom-of-the-funnel UGCs to drive meaningful engagement and maximize conversions.",
    highlightWords: ["ENGAGE", "CONVERT"],
  },
  {
    title: "HOW WE MAKE A DIFFERENCE",
    description:
      "We strategize and craft the perfect ads tailored to every stage of the marketing funnel. Our approach is data-driven and backed by insights. This enables us to optimize performance marketing efforts for maximum impact, resulting in higher conversions and sales.",
    highlightWords: ["DIFFERENCE"],
  },
];

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section
        data-scroll-section
        className="mx-auto w-screen flex justify-center items-center "
      >
        <div className="container z-10 mx-auto px-5 w-full flex flex-col lg:flex-row items-center lg:items-end justify-between h-dvh pb-5">
          <div className="flex-col lg:justify-start  h-full lg:h-auto  justify-end pb-10 lg:pb-0 lg:items-start inline-flex items-center">
            <div className="self-stretch text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
              <span>Where True </span>
              <span className="text-[#f85a23] ">Creativity </span>
              <br />
              <span>Bridges </span>
              <span className="text-[#f85a23] ">Performance</span>
            </div>
            <div className="max-w-3xl text-center text-xs lg:text-left text-white/60 lg:text-lg font-normal tracking-wider">
              <span>We’re not just a media agency, we’re </span>
              <span className="text-white ">storytellers</span>
              <span>, </span>
              <span>strategists</span>
              <span>, and </span>
              <span className="text-white ">innovators</span>
              <span>. Backed by </span>
              <span className="text-white ">insights</span>
              <span> and fueled by </span>
              <span className="text-white ">passion</span>
              <span>.</span>
            </div>
          </div>
          <img className="h-10 max-w-min" src="/logo_full.png" alt="" />
        </div>
        <div className="absolute w-screen h-screen top-0 left-0  bg-gradient-to-t from-[#181818] to-transparent"></div>
        <div className="flex justify-center items-center absolute w-screen h-screen top-0 z-[-1] gap-10 overflow-hidden  ">
          {/* <div
            className="h-screen w-[30vw] shrink-0  flex-col gap-10 justify-center items-end hidden md:flex"
            data-scroll
            data-scroll-speed="1"
          >
            <img
              src="/HeroImages/hero_1_1.png"
              alt={"tbm showcase"}
              className="w-full"
            />

            <img
              src="/HeroImages/hero_1_2.png"
              alt={"tbm showcase"}
              className="w-full"
            />
          </div> */}
          <div
            className="h-screen w-screen  shrink-0 flex flex-col gap-10 justify-center items-center"
            // md:w-[50vw]
            data-scroll
            data-scroll-speed="0.2"
          >
            {/* <img
              src="/HeroImages/hero_2_3.png"
              alt={"tbm showcase"}
              className="hidden md:block"
            /> */}
            {/* <img
        
              src='/HeroImages/hero_2_1.png'
              alt={"tbm showcase"}
              className=""
            /> */}
            {/* <img
              src="/HeroImages/hero_2_2.png"
              alt={"tbm showcase"}
              className="hidden md:block"
            /> */}
            <BackgroundVideo
              autoPlay
              quality={100}
              src="/hero.mp4?thumbnailTime=1"
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              crossOrigin
              preload
            />

            {/* <img
              src="/HeroImages/hero_2_3.png"
              alt={"tbm showcase"}
              className="hidden md:block"
            />

            <img
              src="/HeroImages/hero_2_1.png"
              alt={"tbm showcase"}
              className="hidden md:block"
            /> */}
          </div>
          {/* <div
            className="h-screen w-[30vw]  shrink-0  flex-col gap-10 justify-center items-center hidden md:flex"
            data-scroll
            data-scroll-speed="-0.5"
          >
            <img
              src="/HeroImages/hero_3_1.png"
              alt={"tbm showcase"}
              className="w-full"
            />

            <img
              src="/HeroImages/hero_3_2.png"
              alt={"tbm showcase"}
              className="w-full"
            />
          </div> */}
        </div>
      </section>

      {/* clients marquee */}
      <section
        data-scroll-section
        className="py-28 pb-0 flex flex-col justify-center items-center"
      >
        <div className="rotate-3 transform w-[120vw] ">
          <Marquee className="py-6 bg-[#cfc9a3] ">
            {clients.map((client) => (
              <img
                src={client.path}
                alt={client.alt}
                className="h-10 px-5 bg-blend-hard-light"
              />
            ))}
          </Marquee>
        </div>
        <div className="-rotate-12 -mt-8  transform w-[120vw] ">
          <Marquee
            direction="right"
            className="py-6 bg-[#cfc9a3] shadow-[0px_4px_31.700000762939453px_0px_rgba(0,0,0,0.25)]"
          >
            {clients.map((client) => (
              <img
                src={client.path}
                alt={client.alt}
                className="h-10 px-5 bg-blend-hard-light"
              />
            ))}
          </Marquee>
        </div>
      </section>

      {/* how we make a difference */}
      <section
        data-scroll-section
        className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen pb-5 gap-5"
      >
        <div className="w-full text-white text-center text-2xl lg:text-left lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider">
          <span>how we make a </span>
          <span className="text-[#f85a23] ">difference</span>
          <br />
        </div>
        <div className="w-full text-center text-lg lg:text-justify text-white/60 lg:text-lg font-normal tracking-wider">
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

      {/* UGC video */}

      <section className="flex flex-col pb-40" data-scroll-section>
        <Marquee className="py-6 ">
          {clients.map((client) => (
            <div className="self-stretch text-stroke text-white text-center text-3xl lg:text-6xl  xl:text-7xl 2xl:text-8xl text-stroke font-bold uppercase tracking-wider px-4">
              UGC Video
            </div>
          ))}
        </Marquee>

        <div className="slider-container pt-6 flex justify-center">
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
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {UGC.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <Dialog>
                    <DialogTrigger>
                      <BackgroundVideo
                        autoPlay
                        src={slide.video}
                        className="absolute inset-0 w-full  object-cover"
                        loop
                        muted
                        playsInline
                        crossOrigin
                      />
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none h-screen z-[105]">
                      <MediaThemeInstaplay
                        style={{ "--media-accent-color": "#f85a23" }}
                      >
                        {" "}
                        <video
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
        </div>
      </section>

      <HorizontalScroll />

      <Footer />
    </main>
  );
}
