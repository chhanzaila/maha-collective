"use client"

import { useState } from "react"
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
    <section className="relative px-4 sm:px-8 md:px-16 lg:px-28 bg-[#d9d6c7] flex flex-col lg:flex-row justify-between items-center min-h-[75vh] py-12 lg:py-20">
      <div className="flex flex-col w-full lg:w-1/2 text-center">
        {/* Hero Heading */}
        <h2 className="text-[#fffbf5] text-4xl sm:text-5xl md:text-6xl font-baskervville font-bold mb-4">
          MAHA <i>Collective waitlist.</i>
        </h2>
        
        {/* Hero Tagline */}
        <h3 className="text-[#fffbf5] text-2xl sm:text-3xl md:text-4xl italic font-baskervville mb-6 sm:mb-8 leading-snug">
          10x the quality of your life and deepen the intimacy of your relationships in only 30 minutes a day.
        </h3>

        {/* Description text */}
        <p className="text-[#ff4d14] text-[16px] sm:text-[18px] font-light tracking-wide leading-6 mb-10">
          Learn the 6-month nervous system reset that eases the constant pressure in your body. 
          The MAHA Method weaves Kriya, Breathwork, Meditation & Movement — for the woman ready to finally feel like herself again.
        </p>
        
        {/* Centered button */}
        <div className="flex justify-center">
          <button 
            onClick={openFlodeskForm}
            className="bg-transparent border hover:bg-[#ff4d14] hover:text-white border-[#ff4d14] text-[#ff4d14] px-16 py-4 text-sm sm:text-md rounded-md uppercase transition-all duration-300"
          >
            JOIN OUR WAITLIST
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-12 lg:mt-0 lg:ml-12 flex justify-center">
        <img src="/member-crown.svg" alt="Member Crown" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32" />
      </div>
    </section>






      {/* <section className="relative px-4 sm:px-8 md:px-16 lg:px-28 bg-[#d9d6c7] flex flex-col lg:flex-row justify-between items-center min-h-[75vh] py-8 lg:py-0">
        <div className="flex-col w-full lg:w-auto">
          <div className="w-full mx-auto text-left text-[#ff4d14] text-2xl md:text-3xl lg:text-4xl font-baskervville py-8 lg:py-18">
            <h2 className="mb-1">MAHA <i>Collective waitlist.</i></h2>
            <h3 className="mt-2 font-baskervville text-[#fffbf5] italic">
              10x the quality of your life and deepen the intimacy of your relationships in only 30 minutes a day.
            </h3>
            <h3 className="mt-12 font-baskervville text-[#fffbf5 text-[18px] font-light tracking-wide leading-6">
              Learn the 6 month nervous system reset to lower the constant pressure sitting in your body with the MAHA Method infusing Kriya, Breathwork, Meditation & Movement.
            </h3>
          </div>

          <div className="flex justify-start mt-10">
            <button 
              onClick={openFlodeskForm}
              className="bg-transparent border hover:bg-[#ff4d14] hover:text-white border-[#ff4d14] text-[#ff4d14] px-16 py-4 text-sm sm:text-md rounded-md uppercase"
            >
              JOIN OUR WAITLIST
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <img src="/member-crown.svg" alt="Member Crown" className="w-24 h-24 sm:w-16 sm:h-16" />
        </div>
      </section> */}

      

      {/* Story Section */}
      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#b0ad9c] flex justify-center items-center order-2 lg:order-1 py-12 sm:py-16 lg:py-24">
            <div className="px-4 sm:px-8 lg:pl-16">
              <h2 className="text-sm font-baskervville text-left text-[#f2ede8] tracking-wider mb-8">
                I see you,
              </h2>
              <div className="text-[#f2ede8] font-libre">
                <p className="font-baskervville text-sm text-left text-[#f2ede8] leading-7 lg:leading-9 tracking-wide mb-6">
                  You’re doing everything you think you're supposed to.
                </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
                  <li>You dump your thoughts into a journal every night, hoping if you write fast enough, your brain might finally shut up.</li>
                  <li>You force yourself to do morning pages, because some girl on Instagram said it would “clear your head”… but your head still feels like a browser with 37 tabs open.</li>
                  <li>You play a five-minute meditation before bed because TikTok swears it’ll stop the 2am spirals BUT you're still lying there, wide-eyed, calculating how many hours of sleep you might get.</li>
                  <li>Lying awake in bed at 2am <i>OVERTHINKING</i> that one conversion at work.</li>
                  <li>Smiling out the outside while quietly <i>CRUMBLING</i> inside.</li>
                  <li>Getting 8 hours of sleep and waking up with a tight chest and ANXIETY.</li>
                </ul>

                <p className="mt-8 font-baskervville text-sm text-left text-[#f2ede8] leading-7 lg:leading-9 tracking-wide">
                  Something still feels off....
                </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
                  <li>You’re snapping at the people you love, then crying in the bathroom because “wtf is wrong with me?”</li>
                  <li>You’re wide awake at 2am, stuck on that one thing you said, like it ruined everything and now you have to move cities and change your name.</li>
                  <li>You keep achieving; hitting the goals, getting the praise, but your nervous system is too busy scanning for the next failure to actually let you enjoy any of it.</li>
                  <li>You’ve tried the breathwork, the podcasts, the healing girl starter pack, and you’re still stuck in the same loop.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src="/images/member-aless.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-auto max-h-screen object-contain lg:object-cover"
            />
          </div>
        </div>
      </section>



      {/* Story Section */}
      {/* <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#b0ad9c] min-h-screen flex justify-center self-center items-center order-2 lg:order-1 py-24">
            <div className="px-4 sm:px-8 lg:pl-16 py-12 lg:py-0">
              <h2 className="text-sm font-baskervville text-left text-[#f2ede8] tracking-wider mb-8">
                I see you,
              </h2>
              <div className="text-[#f2ede8] font-libre">
                <p className="font-baskervville text-sm text-left text-[#f2ede8] leading-7 lg:leading-9 tracking-wide mb-6">
                  You’re doing everything you think you're supposed to.
                </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
                  <li>You dump your thoughts into a journal every night, hoping if you write fast enough, your brain might finally shut up.</li>
                  <li>You force yourself to do morning pages, because some girl on Instagram said it would “clear your head”… but your head still feels like a browser with 37 tabs open.</li>
                  <li>You play a five-minute meditation before bed because TikTok swears it’ll stop the 2am spirals BUT you're still lying there, wide-eyed, calculating how many hours of sleep you might get.</li>
                  <li>Lying awake in bed at 2am <i>OVERTHINKING</i> that one conversion at work.</li>
                  <li>Smiling out the outside while quietly <i>CRUMBLING</i> inside.</li>
                  <li>Getting 8 hours of sleep and waking up with a tight chest and ANXIETY.</li>
                </ul>

                <p className="mt-8 font-baskervville text-sm text-left text-[#f2ede8] leading-7 lg:leading-9 tracking-wide">
                  Something still feels off....
                </p>
                <ul className="font-baskervville text-sm text-left font-light list-disc pl-6 lg:pl-8 leading-7 tracking-wider">
                  <li>You’re snapping at the people you love, then crying in the bathroom because “wtf is wrong with me?”</li>
                  <li>You’re wide awake at 2am, stuck on that one thing you said, like it ruined everything and now you have to move cities and change your name.</li>
                  <li>You keep achieving; hitting the goals, getting the praise, but your nervous system is too busy scanning for the next failure to actually let you enjoy any of it.</li>
                  <li>You’ve tried the breathwork, the podcasts, the healing girl starter pack, and you’re still stuck in the same loop.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src="/images/member-aless.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>
        </div>
      </section> */}

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

      {/* Reset Section */}
      <section className="relative px-4 sm:px-8 md:px-16 lg:px-20 bg-[#d9d6c7] flex justify-between items-center min-h-[50vh] py-8 lg:py-0">
        <div className="flex-col w-full">
          <div className="w-full mx-auto text-left text-[#ff4d14] sm:text-xl md:text-xl lg:text-xl font-libre py-8 lg:py-32">
            <h2 className="text-[#ff4d14] text-3xl">
              MAHA is the <i>reset</i> your body’s been begging for.<br/>The kind that doesn’t just quiet the noise, it clears the <i>whole</i> system.
            </h2>
            <p className="mt-8 font-baskervville text-sm text-[#ff4d14] tracking-wide">
              Rooted in ancient yogic wisdom. Backed by modern neuroscience. Designed for the women who’s not just chasing success, she’s craving depth.
            </p>
          </div>
        </div>
      </section>

      {/* Daily System Section */}
      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-[#b0ad9c] flex flex-col justify-center items-center order-2 lg:order-1 py-12 sm:py-16 lg:py-24 col-span-1 lg:col-span-2">
            <div className="px-8 sm:px-12 lg:pl-16 w-full lg:w-auto">
              <h2 className="text-xl font-baskervville text-left text-[#fffbf5] mb-2 tracking-wider leading-8">
                A proven daily system of Kriya, Breathwork, Movement & Meditation to help you feel like <i>you</i> again. 
              </h2>
              <h3 className="text-sm font-light text-[#fffbf5] font-baskervville mt-6">
                This isn’t another self-help hack.
              </h3>
              <p className="font-baskervville text-sm text-left text-[#fffbf5] mb-2 leading-7 lg:leading-9 tracking-wide mt-6">
                MAHA 21 has been carefully designed to:
              </p>
              <div className="font-baskervville text-sm text-left font-light leading-8 tracking-wider">
                <p>Month 1: Release stagnancy & heaviness → ground into steady calm</p>
                <p>Month 2: Ignite your inner fire → build strength and endurance across mind, body, emotions & energy.</p>
                <p>Month 3: Restore balance → steady your energy field and quiet the mental noise.</p>
                <p>Month 4: Clear old stories → create space for new life to flow in.</p>
                <p>Month 5: Expand your nervous system capacity → hold more joy, love, and life without burning out.</p>
                <p>Month 6: Align inner and outer worlds → live authentic and free every day.</p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={openFlodeskForm}
                  className="bg-transparent border hover:text-white border-[#fffbf5] text-[#fffbf5] px-8 sm:px-16 py-4 mt-8 sm:mt-14 text-sm sm:text-md rounded-md uppercase cursor-pointer"
                >
                  JOIN OUR WAITLIST
                </button>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 col-span-1">
            <img
              src="/images/membership-maha.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-auto max-h-screen object-contain lg:object-cover"
            />
          </div>
        </div>
      </section>




      {/* Daily System Section */}
      {/* <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-[#b0ad9c] min-h-screen flex flex-col justify-center self-center items-center order-2 lg:order-1 py-24 col-span-1 lg:col-span-2">
            <div className="px-8 sm:px-12 lg:pl-16 py-12 lg:py-0">
              <h2 className="text-xl font-baskervville text-left text-[#fffbf5] mb-2 tracking-wider leading-8">
                A proven daily system of Kriya, Breathwork, Movement & Meditation to help you feel like <i>you</i> again. 
              </h2>
              <h3 className="text-sm font-light text-[#fffbf5] font-baskervville mt-6">
                This isn’t another self-help hack.
              </h3>
              <p className="font-baskervville text-sm text-left text-[#fffbf5] mb-2 leading-7 lg:leading-9 tracking-wide mt-6">
                MAHA 21 has been carefully designed to:
              </p>
              <div className="font-baskervville text-sm text-left font-light leading-8 tracking-wider">
                <p>Month 1: Release stagnancy & heaviness → ground into steady calm</p>
                <p>Month 2: Ignite your inner fire → build strength and endurance across mind, body, emotions & energy.</p>
                <p>Month 3: Restore balance → steady your energy field and quiet the mental noise.</p>
                <p>Month 4: Clear old stories → create space for new life to flow in.</p>
                <p>Month 5: Expand your nervous system capacity → hold more joy, love, and life without burning out.</p>
                <p>Month 6: Align inner and outer worlds → live authentic and free every day.</p>
              </div>

              <div className="flex justify-start">
                <button 
                  onClick={openFlodeskForm}
                  className="bg-transparent border hover:text-white border-[#fffbf5] text-[#fffbf5] px-16 py-4 mt-14 text-sm sm:text-md rounded-md uppercase cursor-pointer"
                >
                  JOIN OUR WAITLIST
                </button>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 col-span-1">
            <img
              src="/images/membership-maha.jpg"
              alt="Alessandra in a yoga pose on the beach"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>
        </div>
      </section> */}


      {/* 6 Month Benefits Section */}
      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* Right side - Text */}
          <div className="bg-[#d9d6c7] text-[#ff4d14] py-24 flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-2">
            <div className="max-w-lg px-4 sm:px-8 py-8 lg:py-0">
              <h2 className="text-sm text-[#ff4d14] font-baskervville text-left font-bold leading-8 lg:leading-10 mb-4 tracking-wide">
                What is included in the 6 Month MAHA Membership?
              </h2>

              <div className="text-[#ff4d14]">
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
      <section className="relative w-full bg-[#b0ad9c]">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* Left side - Text */}
          <div className="bg-[#b0ad9c] flex justify-center items-center col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="max-w-lg px-4 sm:px-8 py-12 lg:py-0">
              <p className="text-sm font-baskervville text-left text-[#fffbf5] tracking-wide">
                Waitlist bonuses:
              </p>
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

