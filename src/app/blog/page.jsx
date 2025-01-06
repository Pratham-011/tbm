'use client'

import Footer from "@/components/Footer"



export default function ComingSoonPage() {

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#181818]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent z-10" />
      
        <div className="container relative z-20 mx-auto px-5 py-20 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wider mb-8 text-center">
            Coming <span className="text-[#f85a23]">Soon</span>
          </h1>
          
          <p className="text-white/80 text-xl mb-8 text-center max-w-2xl">
            We're working hard to bring you something amazing.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}





// "use client";
// import Image from "next/image";
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "@/hooks/use-outside-click";

// export default function ExpandableCardDemo() {
//   const [active, setActive] = useState(null);
//   const id = useId();
//   const ref = useRef(null);

//   useEffect(() => {
//     function onKeyDown(event) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//   <>

//     <AnimatePresence>
//       {active && typeof active === "object" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/20 h-full w-full z-10" />
//       )}
//     </AnimatePresence>
//     <AnimatePresence>
//       {active && typeof active === "object" ? (
//         <div className="fixed inset-0  grid place-items-center z-[100]">
//           <motion.button
//             key={`button-${active.title}-${id}`}
//             layout
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//               transition: {
//                 duration: 0.05,
//               },
//             }}
//             className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//             onClick={() => setActive(null)}>
//             <CloseIcon />
//           </motion.button>
//           <motion.div
//             layoutId={`card-${active.title}-${id}`}
//             ref={ref}
//             className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
//             <motion.div layoutId={`image-${active.title}-${id}`}>
//               <Image
//                 priority
//                 width={1000}
//                 height={1000}
//                 quality={100}
//                 src={active.src}
//                 alt={active.title}
//                 className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
//             </motion.div>

//             <div>
//               <div className="flex justify-between items-start p-4">
//                 <div className="">
//                   <motion.h3
//                     layoutId={`title-${active.title}-${id}`}
//                     className="font-medium text-white text-base">
//                     {active.title}
//                   </motion.h3>
//                   <motion.p
//                     layoutId={`description-${active.description}-${id}`}
//                     className="text-white text-base">
//                     {active.description}
//                   </motion.p>
//                 </div>

//                 {/* <motion.a
//                   layout
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   href={active.ctaLink}
//                   target="_blank"
//                   className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
//                   {active.ctaText}
//                 </motion.a> */}
//               </div>
//               <div className="pt-4 relative px-4">
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
//                   {typeof active.content === "function"
//                     ? active.content()
//                     : active.content}
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       ) : null}
//     </AnimatePresence>
//     <ul
//   className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-2 pt-20"> {/* Added pt-16 for padding */}
//   {cards.map((card, index) => (
//     <motion.div
//       layoutId={`card-${card.title}-${id}`}
//       key={card.title}
//       onClick={() => setActive(card)}
//       className="p-4 flex flex-col hover:bg-black rounded-xl cursor-pointer">
//       <div className="flex gap-4 flex-col w-full">
//         <motion.div layoutId={`image-${card.title}-${id}`}>
//           <Image
//             width={500} // Increased resolution
//             height={500}
//             quality={100} // Enable higher image quality
//             src={card.src}
//             alt={card.title}
//             className="h-60 w-full rounded-lg object-fit object-center" // Changed `object-fit` to `object-cover`
//           />
//         </motion.div>
//         <div className="flex justify-center items-center flex-col">
//           <motion.h3
//             layoutId={`title-${card.title}-${id}`}
//             className="font-medium text-white text-center md:text-left text-base">
//             {card.title}
//           </motion.h3>
//           <motion.p
//             layoutId={`description-${card.description}-${id}`}
//             className="text-white text-center md:text-left text-base">
//             {card.description}
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   ))}
// </ul>

//   </>);
// }

// export const CloseIcon = () => {
//   return (
//     (<motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.05,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black">
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>)
//   );
// };

// const cards = [
//   {
//     description: "add published by True Bridge Media ",
//     title: "The Art of Data-Driven Creative Decisions: Performance Marketing and UGC Videos Simplified",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>1. Creative Testing: The Foundation of Success

//           Every great campaign starts with experimentation. We rigorously test multiple creatives, including UGC Ads and UGC Videos, to identify what resonates most with the target audience. This approach minimizes guesswork and ensures we’re starting on a solid foundation.
          
//           2. Finding Winners: The Key to Scaling
          
//           Once we’ve tested, it’s about honing in on the ads that deliver the best ROAS. These “winners” become the blueprint for crafting more impactful performance marketing ads.
          
//           3. Scaling with Volume
          
//           With winning creatives in hand, we focus on increasing ad spend strategically to maximize reach and conversions without sacrificing efficiency. Scaling isn’t just about spending more; it’s about spending smarter.
          
//           4. Data-Driven Decisions
          
//           Performance marketing thrives on 
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Lana Del Reyyy",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },

//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "/HeroImages/blog1.webp",
    
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },

  
// ];
