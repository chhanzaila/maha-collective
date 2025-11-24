import React from "react";
import MembershipButton from "./MembershipButton";

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-sun p-8 font-libre">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-white">
          Enroll at any time in the MAHA Membership.
        </h1>
        <p className="text-white text-lg mb-12">
          Six months from now, you’ll either still be Googling “how to calm anxiety” at 2 a.m. or you’ll be the woman who doesn’t need to.
        </p>

        {/* Top 2 Membership Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <MembershipButton
            title="3 MONTH MEMBERSHIP"
            price="$275 Inc. GST"
            description="3 PAYMENTS OF $275 FOR YOUR FIRST 3 MONTHS."
            stripeLink="/stripe-link-3-month"
          />
          <MembershipButton
            title="6 MONTH MEMBERSHIP"
            price="$275 Inc. GST"
            description="6 PAYMENTS OF $275 FOR YOUR FIRST 6 MONTHS."
            stripeLink="/stripe-link-6-month"
          />
        </div>

        {/* Bottom 3 Hover Boxes */}
        <div className="grid grid-cols-1 gap-4 text-left text-sm">

          {/* Box 1 */}
          <div className="bg-white text-sun p-3 rounded-xl shadow-md group cursor-pointer">
            <h2 className="font-bold text-base mb-1">WHY IS IT A MINIMUM 3 MONTH COMMITMENT?</h2>
            <div className="max-h-0 overflow-hidden group-hover:max-h-[1000px] transition-all duration-300 ease-in-out">
              <p className="mb-1">$275 inclusive of GST</p>
              <p className="mb-1">
                Because transformation takes time. MAHA Collective Membership is created so you can experience real, lasting results in your life and career.
              </p>
              <div className="space-y-1 mb-1">
                <p>✅ Proven tools: Practical methods that rewire your mindset and nervous system.</p>
                <p>✅ Proven integration: Guidance and support so you actually embody what you learn.</p>
                <p>✅ Built-in accountability: Stay consistent, even when life gets busy.</p>
                <p>✅ Supportive community: High-achieving, growth-minded women walking the same path.</p>
              </div>
              <p>
                Policy: Minimum 3-month term. After that, membership continues monthly unless cancelled with 30 days’ written notice via email <span className="underline">info@mahacollective.com.au</span>
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white text-sun p-3 rounded-xl shadow-md group cursor-pointer">
            <h2 className="font-bold text-base mb-1">PAY IN FULL BONUS</h2>
            <div className="max-h-0 overflow-hidden group-hover:max-h-[500px] transition-all duration-300 ease-in-out">
              <p className="mb-1">
                ✅ Receive a private 60-minute 1:1 call with Alessandra to personalise your MAHA Membership journey.
              </p>
              <p className="text-orange-500 font-semibold">$250 Value</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white text-sun p-3 rounded-xl shadow-md group cursor-pointer">
            <h2 className="font-bold text-base mb-1">WHO I HAVE WORKED WITH</h2>
            <div className="max-h-0 overflow-hidden group-hover:max-h-[1000px] transition-all duration-300 ease-in-out">
              <p>✔️ Mums — learning to refill their own cup and reconnect to themselves beyond the roles they hold.</p>
              <p>✔️ Corporate Girlies — breaking free from high-functioning survival to find balance, clarity, and purpose again.</p>
              <p>✔️ Small Business Owners — building success from grounded energy rather than burnout.</p>
              <p>✔️ Personal Trainers — expanding from physical transformation into emotional and energetic alignment.</p>
              <p>✔️ Tech Brand Founders — learning to lead with presence, intuition, and emotional regulation.</p>
              <p>✔️ Yoga & Wellness Instructors — deepening their own practice so they can teach from embodiment, not exhaustion.</p>
              <p>✔️ Athletes — balancing drive and discipline with stillness, recovery, and mental clarity.</p>
              <p>✔️ Corporate Executives — moving from control and pressure to leadership rooted in calm confidence.</p>
              <p>✔️ Content Creators — finding creative flow without constant comparison or overstimulation.</p>
              <p>✔️ Health Care Professionals — learning to hold space for others without losing connection to themselves.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
