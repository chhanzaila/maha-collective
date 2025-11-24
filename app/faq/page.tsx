// app/faq/page.tsx
import React from "react"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-sun p-8 font-libre">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl mb-10 font-semibold text-center text-white">FAQs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Box 1 */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">What exactly is the MAHA Membership?</h2>
            <p className="text-sm">
              The MAHA Membership is a nervous system reset that blends movement, breathwork, kriya,
              meditation, and self-inquiry to help you feel steady, clear, and connected again.
              It’s a structured path out of survival mode and into self-led living.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">How much time will it take each day?</h2>
            <p className="text-sm">
              Just 30 minutes a day. The MAHA Membership was designed for real life, not the version
              of you who finally “has time.” These practices fit into your mornings, lunch breaks,
              or evenings.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">Do I need experience with yoga, meditation, or kriya?</h2>
            <p className="text-sm">
              Not at all. Whether you’re brand new or experienced, the tools are simple and
              accessible. It’s about consistency, not perfection.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">What’s included in the MAHA Membership?</h2>
            <p className="text-sm">
              MAHA21 practices, the Ritual Library, monthly live Coaching + Q&A calls, a private
              community, and full access to the portal.
            </p>
          </div>

          {/* Box 5 — NEW */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">What if I can’t attend the live calls?</h2>
            <p className="text-sm">
              No stress — all calls are recorded and added to the MAHA Portal. You can submit
              questions in advance and watch replays anytime. You’ll never miss anything.
            </p>
          </div>

          {/* Box 6 — NEW */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">Will I get access to everything right away?</h2>
            <p className="text-sm">
              Yes. You’ll instantly receive full access to MAHA21 Practices, the Ritual Library,
              community space, and all previous live call replays. You can begin immediately.
            </p>
          </div>

          {/* Box 7 — NEW */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">Can I cancel before the 3 months is up?</h2>
            <p className="text-sm">
              No. This is a 3-month transformational container. After 3 months, your membership
              continues monthly unless you provide written notice 30 days before your next billing cycle.
            </p>
          </div>

          {/* Box 8 — NEW */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">Is there different payment options?</h2>
            <p className="text-sm">
              Yes — you can choose:
              <br />• $250/month for 3 months
              <br />• $250/month for 6 months
              <br />• Pay in full
            </p>
          </div>

          {/* Box 9 — NEW */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">Can I join anytime?</h2>
            <p className="text-sm">
              Yes. MAHA is open year-round. You can join anytime and begin your first MAHA21 journey
              immediately. New practices are added regularly so your membership grows with you.
            </p>
          </div>

          {/* Box 10 — NEW */}
          <div className="bg-white text-sun p-6 rounded-xl shadow-md">
            <h2 className="font-bold text-lg mb-2">How is MAHA different from other self-help or coaching programs?</h2>
            <p className="text-sm">
              Most programs focus only on the mind — like brushing a quarter of your teeth.
              MAHA works through the Yogic Wisdom of the Five Koshas: body, breath, mind/emotion,
              subconscious, and soul energy. Through Breathwork, Kriya, Movement, and Meditation,
              we regulate the nervous system and integrate transformation on every level.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
