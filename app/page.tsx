"use client"
import Head from "next/head";
import FlodeskInlineFormNew from "./components/FlodeskInlineFormNew";
import { useState, useEffect } from "react"
import Script from "next/script"
import type React from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SocialMediaSection from "./components/SocialMediaSection"
// import ThreeColumnGridSection from "./components/ThreeColumnGridSection"
import TestimonialsSection from "./components/TestimonialsSection"

export default function Home() {

  const [showForm, setShowForm] = useState(false)

  const openFlodeskForm = () => {
    setShowForm(true)
  }

  const closeFlodeskForm = () => {
    setShowForm(false)
  }

  const [openMahaDropdown, setOpenMahaDropdown] = useState<number | null>(null)
  const [openIWantToDropdown, setOpenIWantToDropdown] = useState<boolean>(false)

  const scrollToPath = () => {
    const pathSection = document.getElementById("path-section")
    if (pathSection) {
      pathSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (

    
    <div className="flex flex-col min-h-screen font-libre">
      <Navbar />
      

      {/* Flodesk Scripts */}
      <Script
        id="flodesk-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, t, h, s, n) {
              w.FlodeskObject = n;
              var fn = function() { (w[n].q = w[n].q || []).push(arguments); };
              w[n] = w[n] || fn;
              var f = d.getElementsByTagName(t)[0];
              var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
              var sm = d.createElement(t); sm.async = true; sm.type='module'; sm.src=h+s+'.mjs'+v; f.parentNode.insertBefore(sm, f);
              var sn = d.createElement(t); sn.async=true; sn.noModule=true; sn.src=h+s+'.js'+v; f.parentNode.insertBefore(sn, f);
            })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
          `,
          }}
        />

      {/* Hero Content */}
      <header className="relative min-h-screen flex flex-col">
        <div className="relative flex-grow flex flex-col items-center justify-center pt-20">
          {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-sun/5 to-sun/5"></div> */}

          {/* Floating elements for visual interest */}
          {/* <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-light-sage/10 animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-sun/10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div> */}


                <Head>
      <title>MAHA Collective. Learn the 6 month Nervous system reset</title>
      <meta name="description" content="Join MAHA Collective and experience the 6-month Nervous System Reset through Kriya, Breathwork, Meditation & Movement." />

      {/* Open Graph */}
      <meta property="og:title" content="MAHA Collective. Learn the 6 month Nervous system reset" />
      <meta property="og:description" content="Join MAHA Collective and experience the 6-month Nervous System Reset through Kriya, Breathwork, Meditation & Movement." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mahacollective.com.au/membership" />
      <meta property="og:image" content="https://www.mahacollective.com.au/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MAHA Collective. Learn the 6 month Nervous system reset" />
      <meta name="twitter:description" content="Join MAHA Collective and experience the 6-month Nervous System Reset through Kriya, Breathwork, Meditation & Movement." />
      <meta name="twitter:image" content="https://www.mahacollective.com.au/og-image.jpg" />
      </Head>

      {/* Flodesk Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              onClick={closeFlodeskForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <FlodeskInlineFormNew />
          </div>
        </div>
      )}
  
<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    style={{ objectPosition: "50% 50%" }} // adjust vertical framing
  >
    <source src="/images/SOB.mp4" type="video/mp4" />
  </video>

  {/* Hero Text */}
  <div className="relative z-20 text-center px-4 max-w-4xl">
    <h1 className="text-[#d7e4e8] font-baskervville text-5xl md:text-6xl font-normal mb-4">
      MAHA Collective Membership
    </h1>
    <h2 className="text-black font-baskervville text-xl md:text-2xl font-normal mb-3">
      Reset your nervous system in 30 minutes per day.
    </h2>
    <p className="text-[#d7e4e8] font-baskervville text-sm md:text-base leading-relaxed max-w-xl mx-auto">
      The membership that will teach you how to 10x the quality of your life & deepen 
      the intimacy of your relationships.
    </p>
  </div>
</header>







          {/* Scroll Down Indicator */}
          {/* <div className="scroll-indicator" onClick={scrollToPath}>
            <span className="scroll-indicator-text text-soil">scroll down</span>
            <ChevronDown className="scroll-indicator-arrow text-sun animate-bounce-slow" />
          </div> */}

          {/* <div className="bg-[#b0ad9c] py-1 overflow-hidden w-full absolute left-0 bottom-0">
        <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: 14 }, (_, i) => (
            <p
              key={i}
              className="text-[#d9d6c7] px-8 font-libre text-sm tracking-wider inline-block"
            >
              WELCOME TO MAHA COLLECTIVE.
            </p>
          ))}
        </div>
      </div> */}
        </div>
      </header>

      {/* MAHA Membership Section */}
      <section className="relative w-full bg-[#e4e0d8]">

        {/* Full-width top heading section */}
        <div className="w-full bg-[#e4e0d8] py-12 px-6 lg:px-16">
          <h2 className="text-left text-[24px] lg:text-[28px] font-baskervville text-[#d9480f] tracking-[0.5px] leading-snug max-w-7xl mx-auto">
            The MAHA Membership is for you if...
          </h2>
        </div>

        {/* Two-column section using flex for equal height, image on the right */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">

          {/* Text Box with lighter background (left) */}
          <div className="lg:w-1/2 bg-[#f1eee7] px-10 py-14 flex flex-col justify-center">
            <p className="text-[#555] font-baskervville text-[17px] leading-[1.7] mb-6">
              <span className="font-semibold text-[#d9480f]">You’re a millennial woman endless</span>, scrolling, 9pm binging, or weekly wines to escape the noise inside your head.
            </p>
            <p className="text-[#555] font-baskervville text-[17px] leading-[1.7] mb-6">
              <span className="font-semibold text-[#d9480f]">You’re a corporate woman who is</span> over waking up everyday on autopilot, who is ready to find her spark again.
            </p>
            <p className="text-[#555] font-baskervville text-[17px] leading-[1.7] mb-6">
              <span className="font-semibold text-[#d9480f]">You’re a mother craving freedom from</span> a mind that is everyone else to do with, and longing for the love you once had for yourself. Restless thoughts and looping stories that steal her peace.
            </p>
            <p className="text-[#555] font-baskervville text-[17px] leading-[1.7]">
              <span className="font-semibold text-[#d9480f]">You’re a brand founder desiring genuine</span> connection with other souls walking the same path.
            </p>
          </div>

          {/* Image (right) */}
          <div className="lg:w-1/2 flex-shrink-0">
            <img
              src="/images/membership-maha.jpg"
              alt="Meditation Group"
              className="w-full h-full object-cover"
              style={{ maxHeight: '500px' }} // slightly smaller image
            />
          </div>
        </div>

      </section>

      {/* Fall Asleep */}
      <section className="relative w-full bg-[#e4e0d8]">

          {/* Full-width top heading section */}
          <div className="w-full bg-[#e4e0d8] py-12 px-6 lg:px-16">
            <h2 className="text-center lg:text-right text-[20px] lg:text-[24px] font-baskervville text-[#d9480f] tracking-[0.5px] leading-snug max-w-7xl mx-auto">
              Inside the MAHA Membership you will learn how to...
            </h2>
          </div>

        {/* Two-column section using flex for equal height */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">

          {/* Image */}
          <div className="lg:w-1/2 flex-shrink-0">
            <img
              src="/images/membership-maha.jpg"
              alt="Meditation Group"
              className="w-full h-full object-cover" 
              style={{ maxHeight: '500px' }} // image slightly smaller
            />
          </div>

          {/* Text Box with lighter background */}
          <div className="lg:w-1/2 bg-[#f1eee7] px-10 py-14 flex flex-col justify-center">
            <ul className="text-left text-[#555] font-baskervville space-y-6 text-[17px] leading-[1.7]">
              <li>
                <span className="font-semibold text-[#d9480f]">Fall asleep within minutes:</span>
                {" "}End the late-night replay loops, racing thoughts, and “did I forget something?” anxiety.
              </li>
              <li>
                <span className="font-semibold text-[#d9480f]">Set boundaries that actually hold:</span>
                {" "}Learn how to say no without apologizing, stop rewriting messages ten times, and finally stop faking a smile.
              </li>
              <li>
                <span className="font-semibold text-[#d9480f]">Break the autopilot stress cycle:</span>
                {" "}Change the daily habits keeping your nervous system fried, so you can feel present and energized again.
              </li>
              <li>
                <span className="font-semibold text-[#d9480f]">Build a life that feels calm, spacious, and yours:</span>
                {" "}Go from surviving on caffeine and chaos to living with balance and self-trust.
              </li>
            </ul>
          </div>
        </div>

        {/* Button below the two-column section, centered */}
        <div className="mt-10 mb-16 flex justify-center">
          <a
            href="/subcription"
            className="bg-[#d9480f] text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-[#b63605] transition"
          >
            Join the MAHA Subcription
          </a>
        </div>


      </section>





      {/* <section className="relative px-28 bg-[#d8d6c7] flex flex-col justify-center h-[75vh]">
        <div className="w-full mx-auto text-left text-[#ff4d14] text-5xl font-baskervville py-28">
          <h2 className="mb-1">We don't do 'wellness.'</h2>
          <h2 className="mb-1 mt-4">We do wholeness.</h2> 
        </div>

        <div className="flex justify-end">
          <button className="bg-transparent border border-[#ff4d14] text-[#ff4d14] px-2 py-4 text-md rounded-md uppercase">
            <p>The 'Not Just Yoga' Membership</p>
          </button>
        </div>
      </section> */}

      {/* LIVE MAHA Definition Section */}
      {/* <section className="relative h-screen px-4 bg-[#b0ad9c] flex flex-col justify-start">
        <div className="w-full mx-auto text-center relative pt-24">
          
          <h2 className="text-5xl font-tan-meringue text-[#f2ede8] mb-1">We don't do 'wellness.'</h2>
          <h2 className="text-5xl font-tan-meringue text-[#f2ede8] mb-1 mt-4">We do wholeness.</h2>

        <div className="py-1 overflow-hidden w-full mt-36">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 14 }, (_, i) => (
              <p
                key={i}
                className="text-[#d9d6c7] px-8 font-baskervville italic text-sm tracking-wider inline-block"
              >
                WELCOME TO MAHA COLLECTIVE.
              </p>
            ))}
          </div>
        </div> */}

          {/* Definition Lines */}
          {/* <div className="space-y-2 max-w-xs mx-auto text-left text-white font-libre text-sm md:text-sm leading-relaxed mb-6">
            <p className="text-[#f2ede8]">To live greatly—awake, rooted, and in flow.</p>
            <p className="text-[#f2ede8]">To embody your highest Self, your truest nature.</p>
            <p className="text-[#f2ede8]">To honour sacred balance—between action and surrender,</p>
            <p className="text-[#f2ede8]">strength and softness.</p>
            <p className="text-[#f2ede8]">To move with intention, feel deeply, and connect fully.</p>
            <p className="text-[#f2ede8]">To bring the sacred into the everyday.</p>
          </div> */}

          {/* Conclusion */}
          {/* <div className="mx-auto mt-20">
            <p className="text-[#f2ede8] font-libre font-bold text-lg leading-relaxed">
              Through powerful yogic practices & daily rituals,
              we illuminate the path within—
              <br />
              so you can live MAHA, every day.
            </p>
          </div> */}
        {/* </div>
      </section> */}

      {/* LIVE MAHA Definition Section */}

      {/* Three Column Grid Section */}
      {/* <ThreeColumnGridSection sectionVariant="home" /> */}

      <section className="relative h-screen bg-[#b0ad9c] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-5xl font-baskervville italic px-4 text-center text-[#f2ede8] mb-6 tracking-wider">
              Choose your path.
            </h2>

            {/* I want to dropdown */}
            <div className="px-8 pt-8">
              <button
                className="flex items-center justify-center w-full text-left group mb-4"
                onClick={() => setOpenIWantToDropdown(!openIWantToDropdown)}
              >
                <span className="text-3xl md:text-4xl text-[#f2ede8] font-baskervville text-center tracking-wide">
                  I want to
                </span>
                <span className={`text-[#f2ede8] text-xl font-bold transition-transform duration-300 ml-12 ${
                  openIWantToDropdown ? 'rotate-45' : 'rotate-0'
                }`}>
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIWantToDropdown ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 text-[#f2ede8] text-center font-baskervville">
                    <a 
                      href="/maha-collective" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel more love.
                    </a>

                    <a 
                      href="/our-story" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel clear & free.
                    </a>

                    <a 
                      href="/desire" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel radically alive.
                    </a>

                    <a 
                      href="#testimonials" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Feel grounded.
                    </a>

                    <a 
                      href="#contact" 
                      className="block text-lg leading-8 tracking-wide hover:text-[#ff4d14] transition-colors duration-300 cursor-pointer"
                    >
                      Nourish my nervous system.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-screen flex items-center justify-center">
          <img
            src="/images/movement.jpeg"
            alt="Woman in yoga backbend pose"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
          {/* MAHA Method Vertical Text Overlay */}
          {/* <div className="absolute left-12 top-0 h-full flex items-center pointer-events-none z-20"> */}
            {/* <span
              className="font-libre text-[#ff4d14]"
              style={{
                fontSize: "5vw",
                letterSpacing: "0.05em",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
                lineHeight: 1,
                marginLeft: "0.2em",
              }}
            >
              MAHA Method
            </span> */}
          {/* </div> */}
        </div>
      </div>
      </section>

      {/* The Maha Method Section */}
    <section className="relative h-screen w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-screen flex items-end justify-center">
            <img
              src="/images/movement.jpeg"
              alt="Woman in yoga backbend pose"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* MAHA Method Vertical Text Overlay */}
            <div className="absolute bottom-14 h-full flex items-end justify-center pointer-events-none z-20">
              <span
                className="font-baskervville text-[#f5f5f5]"
                style={{
                  fontSize: "3.5vw",
                  // letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                  marginLeft: "0.2em",
                }}
              >
                How I went from<br/> survivng<br/> to thriving...
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between min-h-screen px-8 md:px-16 py-12">
            {/* <div className="flex flex-col justify-between items-center mb-8 mt-4"> */}
              {/* <div className="mt-4">
                <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-2">
                    Ancient Wisdom.
                    </p>
                  <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-2">
                    Backed by Science.
                  </p>
                  <p className="text-lg md:text-lg text-[#f2ede8] font-libre leading-relaxed tracking-wider mb-0">
                    Designed for Modern Life.
                  </p>
              </div> */}
              {/* <div className="rounded-lg w-[150px] h-[150px] flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/maha-collective-logo.png"
                  alt="MAHA Collective Logo"
                  className="h-full w-full object-contain"
                />
              </div> */}
            {/* </div> */}

            {/* Main content */}
            <div className="flex flex-col items-center justify-center flex-1">
              <h2 className="text-3xl md:text-5xl mb-12 font-baskervville italic px-4 text-center text-[#f5f5f5] tracking-wider">
                The MAHA Method
              </h2>
              {/* <p className="text-base md:text-lg text-[#f2ede8] font-baskervville font-light leading-[3rem] tracking-[0.15em] text-left mb-12 max-w-sm">
                The MAHA Method is our secret sauce.
                It is the cornerstone of all MAHA practises,
                and is the path from SURVIVING to{" "}
                THRIVING.
              </p> */}

              {/* Three key points as dropdowns */}
              <div className="space-y-8 w-full flex flex-col justify-center items-center">
                {/* Dropdown 1 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 1 ? null : 1)}
                  >
                    <span className="flex items-center">
                      <span className="text-[#f5f5f5] text-xl mr-4">+</span>
                      <span className="text-xl text-[#f5f5f5] font-baskervville">
                        Integrated Practise.
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openMahaDropdown === 1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pl-10 text-[#3a2c1a] text-base text-md font-libre">
                        A complete and integrated path, weaving together movement, breathwork, kriya, meditation, mantra
                        and wisdom. The MAHA Method is designed to awaken your highest Self and create transformation
                        from the inside out.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dropdown 2 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 2 ? null : 2)}
                  >
                    <span className="flex items-center">
                      <span className="text-xl text-[#f5f5f5] mr-4">+</span>
                      <span className="text-xl text-[#f5f5f5] font-baskervville">
                        A Whole You Approach.
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openMahaDropdown === 2 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pl-10 text-[#3a2c1a] text-base text-md font-libre">
                        You are a whole being made of five interconnected layers. The MAHA Method honours all of you.
                        Each practice is intentionally designed to influence your physical, mental, emotional,
                        energetic, and spiritual body. It brings together asana, mantra, kriya, breathwork, and somatic
                        movement… each a key, but together a gateway.
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dropdown 3 */}
                <div>
                  <button
                    className="flex items-center justify-center w-full text-left group"
                    onClick={() => setOpenMahaDropdown(openMahaDropdown === 3 ? null : 3)}
                  >
                    <span className="flex items-center">
                      <span className="text-xl text-[#f5f5f5] mr-4">+</span>
                      <span className="text-xl text-[#f5f5f5] font-baskervville">
                        Ancient Wisdom. Backed By Science.
                      </span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openMahaDropdown === 3 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 pl-10 text-[#3a2c1a] text-base font-libre">
                        The MAHA Method is a unique alchemy of movement, breath, kriya, and meditation, carefully
                        engineered to influence the biochemistry of your body. Research shows that practising in such a
                        way regulates your nervous system, reduces stress hormones, and rewires the brain for greater
                        clarity, resilience, and emotional balance. The MAHA Method activates the parasympathetic
                        system, supports neuroplasticity, and helps release stored tension in the body, making lasting
                        transformation not just possible, but measurable.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-[#f2ede9] px-9 py-2 text-md mt-16 rounded-md text-[#b1ad9c] uppercase shadow-md">
                <p>Learn more</p>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* A Note from the Founder Section */}
      {/* <section className="relative h-screen w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          
          <div className="bg-[#b0ad9c] max-h-screen flex justify-center items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl font-tan-meringue px-4 font-bold text-[#f2ede8] mb-6 tracking-wider">
                WITH LOVE FROM...
              </h2>

              <div className="space-y-4 text-[#f2ede8] font-libre px-8">
                <p className="text-md leading-8 tracking-wide">
                  I'm a modern yogi, devoted to living and sharing the teachings that helped me go from SURVIVING to
                  THRIVING.
                </p>

                <p className="text-md leading-8 tracking-wide">
                  Each MAHA 21 series was created from my own journey, parts of myself I needed to heal, embody, or
                  bring into alignment.
                </p>

                <p className="text-md leading-8 tracking-wide">
                  Now, MAHA 21 exists for you, to evolve and embody your highest Self everyday. Xo
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src="/images/a-note-from-ale.jpeg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] md:-translate-y-[65%] h-full pointer-events-none z-20 flex items-center">
              <span
                className="font-libre text-[4vw] md:text-[5vw] text-sun"
                style={{
                  letterSpacing: "0.05em",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                ALESSANDRA
              </span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <TestimonialsSection />

      <SocialMediaSection />
      <Footer />

      <style jsx>{`
  @font-face {
    font-family: 'Tan Meringue';
    src: url('/fonts/TAN MERINGUE.ttf') format('truetype'),
         url('/fonts/TAN MERINGUE.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .testimonial-carousel {
    position: relative;
    min-height: 150px;
  }
  
  .testimonial-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .testimonial-item.active {
    opacity: 1;
  }
`}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
    document.addEventListener('DOMContentLoaded', function() {
      const testimonials = document.querySelectorAll('.testimonial-item');
      const dots = document.querySelectorAll('.testimonial-dot');
      let currentIndex = 0;
      
      function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('bg-[#2d1f12]/50');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('bg-[#2d1f12]/50');
      }
      
      // Change testimonial every 4 seconds
      setInterval(showNextTestimonial, 4000);
    });
  `,
        }}
      />
    </div>
  )
}
