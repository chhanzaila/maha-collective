"use client"
import Head from "next/head";
import { useState, useEffect } from "react"
import Script from "next/script"
import FlodeskInlineFormNew from "../components/FlodeskInlineFormNew";


export default function MembershipPage() {
  const [showForm, setShowForm] = useState(false)

  const openFlodeskForm = () => {
    setShowForm(true)
  }

  const closeFlodeskForm = () => {
    setShowForm(false)
  }

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });


  useEffect(() => {
  const targetDate = new Date("2025-11-22T23:59:59"); // Target date for countdown

  const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      clearInterval(interval);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  }, 1000);

  return () => clearInterval(interval);
  }, []);




  return (
    <div className="flex flex-col min-h-screen font-libre">

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

      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-28 bg-[#d9d6c7] flex flex-col justify-center min-h-[75vh] pt-20 sm:pt-28 lg:pt-36 pb-12 lg:pb-20">

        <div className="flex flex-col w-full text-center lg:text-left relative z-10">
          {/* Hero Heading */}
          <h2 className="text-[#ff4d14] text-4xl sm:text-5xl md:text-6xl font-baskervville font-bold mb-4">
            MAHA <i>Collective waitlist.</i>
          </h2>
          
          {/* Hero Tagline (justified, square edges) */}
          <h3 className="text-[#fffbf5] text-lg sm:text-xl md:text-2xl italic font-baskervville mb-6 sm:mb-8 leading-snug text-justify">
            10x the quality of your life and deepen the intimacy of your relationships in only 30 minutes a day.
          </h3>

          {/* Description text (joined + justified + italic ending) */}
          <p className="text-[#ff4d14] text-[12px] sm:text-[13px] font-light tracking-wide leading-5 mb-10 text-justify">
            This is a 6-month membership to reset your nervous system and release the constant pressure sitting in your body.
          </p>

          {/* Centered button */}
          <div className="flex justify-center lg:justify-start mb-16">
            <button 
              onClick={openFlodeskForm}
              className="bg-transparent border hover:bg-[#ff4d14] hover:text-white border-[#ff4d14] text-[#ff4d14] px-16 py-4 text-sm sm:text-md rounded-md uppercase transition-all duration-300"
            >
              JOIN OUR WAITLIST
            </button>
          </div>
        </div>

        {/* Crown Image */}
        <img 
          src="/member-crown.svg" 
          alt="Member Crown" 
          className="absolute bottom-12 right-36 sm:right-36 md:right-40 lg:right-44 w-14 sm:w-18 md:w-20 lg:w-24 h-auto z-0"
        />

      </section>


      {/* Counter Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-28 bg-[#ff4d14] flex flex-col justify-center min-h-[75vh] pt-20 sm:pt-28 lg:pt-36 pb-12 lg:pb-20">

        <div className="flex flex-col w-full text-center lg:text-left relative z-10">

          {/* Hero Tagline */}
          <h2 className="text-[#fffbf5] text-base sm:text-lg md:text-xl font-light tracking-wide leading-6 mb-8 text-justify">
            Inside the Membership, you’ll be guided through the MAHA Method — a unique blend of Kriya, Breathwork, Meditation & Movement — created for the woman who is ready to stop living in survival mode and finally feel at home in her skin again.
          </h2>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-[#fffbf5] text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 tracking-wide text-center lg:text-left drop-shadow-md">
              WAITLIST CLOSES NOVEMBER 22ND
            </p>

            {/* Mobile: Days on top, rest below */}
            <div className="flex flex-col items-center lg:items-start gap-4">

              {/* Days */}
              <div className="bg-white px-6 py-4 rounded-lg flex flex-col items-center shadow-lg mb-4 lg:mb-0">
                <span className="text-[#ff4d14] text-3xl sm:text-5xl font-bold">{timeLeft.days}</span>
                <span className="text-xs sm:text-sm font-light mt-1 text-[#ff4d14]">DAYS</span>
              </div>

              {/* Hours / Minutes / Seconds */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
                {/* Hours */}
                <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg flex flex-col items-center shadow-lg min-w-[60px]">
                  <span className="text-[#ff4d14] text-2xl sm:text-4xl md:text-5xl font-bold">{timeLeft.hours}</span>
                  <span className="text-xs sm:text-sm font-light mt-1 text-[#ff4d14]">HOURS</span>
                </div>
                {/* Minutes */}
                <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg flex flex-col items-center shadow-lg min-w-[60px]">
                  <span className="text-[#ff4d14] text-2xl sm:text-4xl md:text-5xl font-bold">{timeLeft.minutes}</span>
                  <span className="text-xs sm:text-sm font-light mt-1 text-[#ff4d14]">MINUTES</span>
                </div>
                {/* Seconds */}
                <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg flex flex-col items-center shadow-lg min-w-[60px]">
                  <span className="text-[#ff4d14] text-2xl sm:text-4xl md:text-5xl font-bold">{timeLeft.seconds}</span>
                  <span className="text-xs sm:text-sm font-light mt-1 text-[#ff4d14]">SECONDS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Join Button */}
          <div className="flex justify-center lg:justify-start mb-16">
            <button 
              onClick={openFlodeskForm}
              className="bg-[#fffbf5] border border-[#ff4d14] text-[#ff4d14] px-12 sm:px-16 py-3 sm:py-4 text-sm sm:text-md rounded-md uppercase transition-all duration-300 hover:bg-[#ff4d14] hover:text-white"
            >
              JOIN OUR WAITLIST
            </button>
          </div>
        </div>

        {/* Crown Image */}
        <img 
          src="/member-crown.svg" 
          alt="Member Crown" 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-12 sm:right-36 sm:left-auto sm:translate-x-0 w-12 sm:w-14 md:w-20 lg:w-24 h-auto z-0 brightness-0 invert"
        />
      </section>


      {/* Story Section */}
      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* Image Content */}
          <div className="relative order-1 lg:order-2 w-full">
            <img
              src="/images/member-aless.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-contain lg:object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="bg-[#b0ad9c] flex items-center order-2 lg:order-1 py-8 sm:py-12 lg:py-20">
            <div className="px-4 sm:px-8 lg:px-16 max-w-xl mx-auto lg:mx-0">
              <h2 className="text-base font-baskervville text-left text-[#f2ede8] tracking-wider mb-6">
                I see you,
              </h2>
              <div className="text-[#f2ede8] font-libre">
                <p className="font-baskervville text-sm sm:text-base text-left text-[#f2ede8] leading-7 lg:leading-8 tracking-wide mb-6">
                  On paper, you’re doing everything right.<br />
                  You journal. You meditate. You go to breathwork classes, listen to the podcasts, tick all the boxes. But inside? You feel like a stranger in your own skin.
                </p>
                <ul className="font-baskervville text-sm sm:text-base text-left font-light list-disc pl-6 lg:pl-8 leading-7 lg:leading-8 tracking-wider space-y-4">
                  <li>You put everyone else first, then collapse into bed wondering why there’s nothing left for you.</li>
                  <li>You smile, you scroll, you say yes when you mean no… and then replay it later, disgusted at yourself for staying silent.</li>
                  <li>You snap at the people you love, then spiral into shame “who even am I anymore?”</li>
                  <li>Every decision you make gets run by five other people, and still, you doubt your answer.</li>
                  <li>Life is happening to you. And you can’t remember the last time you actually felt alive.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Reset Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-20 bg-[#d9d6c7] flex justify-between items-center min-h-[50vh] py-8 lg:py-0">
        <div className="flex-col w-full">
          <div className="w-full mx-auto text-left text-[#ff4d14] sm:text-xl md:text-xl lg:text-xl font-libre py-8 lg:py-32">
            <h2 className="text-[#ff4d14] text-3xl">
              MAHA is the <i>reset</i> your body’s been begging for.<br/>The kind that doesn’t just quiet the noise, it clears the <i>whole</i> system.
            </h2>
          </div>
        </div>
      </section>      

      {/* 6-Month Benefits Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-20 bg-[#b0ad9c] flex justify-between items-center min-h-[50vh] py-8 lg:py-0">
        <div className="flex-col w-full">
          <div className="w-full mx-auto text-left text-[#f2ede8] sm:text-xl md:text-xl lg:text-xl font-libre py-8 lg:py-32">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mb-8 lg:mb-12">
              <h2 className="mb-1">What MAHA will do for you in 6 months:</h2>
            </div>
            <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
              <li>You will be able to fall asleep the second your head hits the pillow. No 2am spirals, no overthinking that one text, no waking up in a panic because your nervous system is fried.</li>
              <li>You will learn to move with a quiet confidence that others can feel. No need to prove anything or perform.</li>
              <li>You will finally feel held, not by a person, but by something bigger. Like the universe has your back, and you can breathe again without waiting for the next shoe to drop.</li>
              <li>You will be able to say what you actually mean in the moment, and don’t rehash it later wondering if you were too blunt or too emotional or too much.</li>
              <li>You will be able to say yes and feel it in your body. Say no and still sleep like a baby. </li>
              <li>You will be able to stop polling five people before making a decision. You ask you. And for the first time in a long time, you actually trust the answer.</li>
            </ul>
          </div>
        </div>
      </section>




      {/* Daily System Section */}
      <section className="relative w-full bg-[#d9d6c7]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* Text Content */}
          <div className="bg-[#d9d6c7] flex flex-col justify-center items-center order-2 lg:order-1 py-12 sm:py-16 lg:py-24 col-span-1 lg:col-span-2">
            <div className="px-8 sm:px-12 lg:pl-16 w-full lg:w-auto">
              <h2 className="text-xl font-baskervville text-left text-[#ff4d14] mb-2 tracking-wider leading-8">
                A proven daily system of Kriya, Breathwork, Movement & Meditation to help you feel like <i>you</i> again.
              </h2>
              <p className="font-baskervville text-sm text-left text-[#ff4d14] mb-4 leading-7 tracking-wide mt-6">
                MAHA 21 has been carefully designed to:
              </p>
              <ul className="font-baskervville text-sm text-left text-[#ff4d14] font-light leading-8 tracking-wider space-y-2">
                <li>Month 1: Calm scattered energy → soften & stabilise.</li>
                <li>Month 2: Release what’s stuck → quiet the noise.</li>
                <li>Month 3: Restore balance → ignite vitality.</li>
                <li>Month 4: Clear old stories → make space for new.</li>
                <li>Month 5: Expand capacity → hold more joy & love.</li>
                <li>Month 6: Embody alignment → live authenticity.</li>
              </ul>

              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={openFlodeskForm}
                  className="bg-transparent border hover:text-white border-[#ff4d14] text-[#ff4d14] px-8 sm:px-16 py-4 mt-8 sm:mt-14 text-sm sm:text-md rounded-md uppercase cursor-pointer"
                >
                  JOIN OUR WAITLIST
                </button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2 col-span-1">
            <img
              src="/images/membership-maha.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-auto max-h-screen object-contain lg:object-cover"
            />
          </div>
          
        </div>
      </section>



      {/* 6 Month Benefits Section */}
      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* Right side - Text */}
          <div className="bg-[#b0ad9c] text-[#fffbf5] py-24 flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-2">
            <div className="max-w-lg px-4 sm:px-8 py-8 lg:py-0">
              <h2 className="text-sm text-[#fffbf5] font-baskervville text-left font-bold leading-8 lg:leading-10 mb-4 tracking-wide">
                What is included in the 6 Month MAHA Membership?
              </h2>

              <div className="text-[#fffbf5]">
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 tracking-wide spacing-y-4">
                  <li className="mb-4">
                    <b>MAHA 21:</b> Your daily 30 minute practise of Kriya, Breathwork, Movement & Meditation. Each 21 day journey is themed (Soften, Courage, Sleep) so instead of guessing what you need, you get to meet yourself exactly where you are.
                  </li>
                  <li className="mb-4">
                    <b>RITUAL LIBRARY:</b> Breathwork, kriya, somatics, meditation that shift your state in minutes.
                  </li>
                  <li className="mb-4">
                    <b>SELF PACED MASTERCLASSES:</b> Deep, accessible teachings on Self-worth, Identity, Love, Abundance taught through a yogic lens.
                  </li>
                  <li className="mb-4">
                    <b>MAHA COMMUNITY:</b> A space with real connection with souls who just get it, and you.
                  </li>
                  <li className="mb-4">
                    <b>MONTHLY LIVE CALLS:</b> Embodied coaching, integration, and community space to anchor your practice.
                  </li>
                  <li className="mb-4">
                    <b>50% OFF ALL EVENTS:</b> Pop-ups, immersions, ceremonies, always get the best pricing, first access.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Left side - Image */}
          <div className="relative w-full h-screen lg:h-full col-span-1 order-1 lg:order-1">
            <img
              src="/images/kriya-image.webp"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>



      {/* Waitlist Bonuses Section */}
      <section className="relative w-full bg-[#d9d6c7]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          
          {/* Left side - Text */}
          <div className="bg-[#d9d6c7] flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="max-w-lg px-4 sm:px-8 py-12 lg:py-0">
              <p className="text-sm font-baskervville text-left text-[#ff4d14] tracking-wide">
                Waitlist bonuses:
              </p>
              <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 tracking-wide leading-7 space-y-2 text-[#ff4d14]">
                <li>Exclusive first access to the MAHA Method before the public.</li>
                <li>A personal 1:1 onboarding call with Alessandra (Value $250. Not offered again)</li>
                <li>$100 OFF pricing</li>
                <li>Maha Alumni Status (30 spots only)</li>
              </ul>

              <p className="text-sm font-baskervville text-left italic text-[#ff4d14] mb-2 tracking-wide mt-4">
                10X the quality of your life. Join our waitlist today.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={openFlodeskForm}
                  className="bg-transparent border hover:text-white border-[#ff4d14] text-[#ff4d14] px-16 py-4 mt-12 text-sm sm:text-md rounded-md uppercase cursor-pointer"
                >
                  JOIN OUR WAITLIST
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full h-screen lg:h-full col-span-1 order-1 lg:order-2">
            <img
              src="/images/membership-form.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover object-[50%_10%] md:object-[50%_30%]"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>

        </div>
      </section>





      {/* Waitlist Bonuses Section
      <section className="relative w-full min-h-screen overflow-hidden bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          <div className="bg-[#b0ad9c] min-h-screen flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="max-w-lg px-4 sm:px-8 py-8 lg:py-0">
              <p className="text-sm font-baskervville text-left text-[#fffbf5] tracking-wide">Waitlist bonuses:</p>
              <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 tracking-wide leading-7 spacing-y-4">
                <li>Exclusive first access to the MAHA Method before the public.</li>
                <li>A personal 1:1 onboarding call with Alessandra (Value $250. Not offered again)</li>
                <li>$100 OFF pricing</li>
                <li>Maha Alumni Status (30 spots only)</li>
              </ul>

              <p className="text-sm font-baskervville text-left italic text-[#fffbf5] mb-2 tracking-wide mt-4">
                10X the quality of your life. Join our waitlist today. 
              </p>

              <div className="flex justify-center">
                <button 
                  onClick={openFlodeskForm}
                  className="bg-transparent border hover:text-white border-[#fffbf5] text-[#fffbf5] px-16 py-4 mt-12 text-sm sm:text-md rounded-md uppercase cursor-pointer"
                >
                  JOIN OUR WAITLIST
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-full bg-[#b0ad9c] col-span-1 order-1 lg:order-2" style={{ transform: "scale(-1, 1)" }}>
            <img
              src="/images/membership-form.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-full object-cover object-[50%_10%] md:object-[50%_30%]"
            />
          </div>
        </div>
      </section> */}

      {/* Fonts & Carousel Styles */}
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
    </div>
  )
}

