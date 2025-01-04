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

