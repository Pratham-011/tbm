'use client'

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const formRef = useRef(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    setError(null)
    setSuccess(false)

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log("Email sent successfully", response)
            setSuccess(true)
            formRef.current.reset() // Clear the form fields

            // Reset the success message after 5 seconds
            setTimeout(() => {
              setSuccess(false)
            }, 5000)
          },
          (err) => {
            console.error("EmailJS error:", err)
            setError(err.text || "Something went wrong. Please try again later.")

            // Reset the error message after 5 seconds
            setTimeout(() => {
              setError(null)
            }, 5000)
          }
        )
    }
  }

  return (
    <>
      <main className="relative min-h-screen flex items-center overflow-hidden bg-[#181818]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="container relative z-20 mx-auto px-5 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text Container */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <h1 className="text-white text-4xl lg:text-6xl font-bold uppercase tracking-wider">
                Let's work <span className="text-[#f85a23]">together</span>
              </h1>
              <p className="text-white/60 text-lg">
                We're excited to hear about your project. Reach out and let's create something amazing.
              </p>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl text-white font-semibold lg:text-2xl tracking-wider">Mail</h2>
                  <span className="font-normal text-white/60 text-lg tracking-wider">hello@truebridgemedia.com</span>
                </div>
                {/* <div>
                  <h2 className="text-xl text-white font-semibold lg:text-2xl tracking-wider">Phone</h2>
                  <span className="font-normal text-white/60 text-lg tracking-wider">+91 9773457560</span>
                </div> */}
              </div>
            </div>

            {/* Form Container */}
            <div className="flex-1 w-full max-w-md">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f85a23] transition-all duration-300"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f85a23] transition-all duration-300"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  name="message"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f85a23] transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-[#f85a23] hover:bg-[#d94a1f] text-white rounded-lg font-medium transition-colors duration-300"
                >
                  Send Message
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
