"use client"

import { useState } from "react"
import FlodeskInlineFormNew from "../components/FlodeskInlineFormNew"

export default function Footer() {
  const [showFlodesk, setShowFlodesk] = useState(false)

  const openFlodesk = () => setShowFlodesk(true)
  const closeFlodesk = () => setShowFlodesk(false)

  return (
    <footer className="bg-[#ff4d14] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Contact info */}
        <p className="text-lg font-semibold">
          Have another question? <br />
          Email: <a href="mailto:info@mahacollective.com.au" className="underline">info@mahacollective.com.au</a>
        </p>

        {/* Terms & FAQ buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/terms-and-conditions"
            className="bg-white text-[#ff4d14] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#ff4d14] hover:text-white transition-all duration-300"
          >
            Terms & Conditions
          </a>
          <a
            href="/faq"
            className="bg-white text-[#ff4d14] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#ff4d14] hover:text-white transition-all duration-300"
          >
            FAQs
          </a>
        </div>

        {/* Newsletter button */}
        <button
          onClick={openFlodesk}
          className="mt-6 bg-white text-[#ff4d14] font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-[#ff4d14] hover:text-white transition-all duration-300"
        >
          Sign up for the newsletter
        </button>

      </div>

      {/* Flodesk Modal */}
      {showFlodesk && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl max-w-lg w-full shadow-2xl relative">
            <button
              onClick={closeFlodesk}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <FlodeskInlineFormNew />
          </div>
        </div>
      )}
    </footer>
  )
}



// "use client"

// import { Mail, Instagram, Facebook, Twitter } from "lucide-react"
// import { useState } from "react"
// import FlodeskInlineFormNew from "../components/FlodeskInlineFormNew"

// export default function Footer() {
//   const [showFlodesk, setShowFlodesk] = useState(false)

//   const openFlodesk = () => setShowFlodesk(true)
//   const closeFlodesk = () => setShowFlodesk(false)

//   return (
//     <footer className="bg-light-sage text-soil py-12 px-4 border-t border-sun/10">
//       <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

//         {/* Have another question */}
//         <p className="text-lg font-libre">
//           Have another question?
//         </p>
//         <p className="text-lg font-libre flex items-center gap-2">
//           <Mail className="w-5 h-5 text-sun" />
//           Email: <a href="mailto:info@mahacollective.com.au" className="text-sun underline">info@mahacollective.com.au</a>
//         </p>

//         {/* Terms & FAQ buttons */}
//         <div className="flex gap-4 mt-4">
//           <a href="/terms-and-conditions" className="bg-sun hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
//             Terms & Conditions
//           </a>
//           <a href="/faq" className="bg-sun hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
//             FAQs
//           </a>
//         </div>

//         {/* Subscribe button */}
//         <button
//           onClick={openFlodesk}
//           className="mt-6 bg-sun hover:bg-orange-600 text-white px-8 py-3 rounded-md font-libre transition"
//         >
//           Subscribe to Our Newsletter
//         </button>

//         {/* Social icons */}
//         <div className="flex gap-4 mt-6 text-sun">
//           <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram className="w-6 h-6 hover:text-white transition" /></a>
//           <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook className="w-6 h-6 hover:text-white transition" /></a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter className="w-6 h-6 hover:text-white transition" /></a>
//         </div>
//       </div>

//       {/* Flodesk Modal */}
//       {showFlodesk && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
//             <button
//               onClick={closeFlodesk}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
//             >
//               ×
//             </button>
//             <FlodeskInlineFormNew />
//           </div>
//         </div>
//       )}
//     </footer>
//   )
// }












// "use client"

// import { Mail, Instagram, Facebook, Twitter } from "lucide-react"
// import { useState } from "react"
// import FlodeskInlineFormNew from "../components/FlodeskInlineFormNew"

// export default function Footer() {
//   const [showFlodesk, setShowFlodesk] = useState(false)

//   const openFlodesk = () => setShowFlodesk(true)
//   const closeFlodesk = () => setShowFlodesk(false)

//   return (
//     <footer className="relative bg-[#ff4d14] text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

//         {/* Have another question */}
//         <p className="text-lg font-semibold">Have another question?</p>
//         <p className="text-lg font-semibold flex items-center gap-2">
//           <Mail className="w-5 h-5 text-white" />
//           Email: <a href="mailto:info@mahacollective.com.au" className="underline hover:text-gray-200">info@mahacollective.com.au</a>
//         </p>

//         {/* Terms & FAQ buttons */}
//         <div className="flex gap-4 mt-4 flex-wrap justify-center">
//           <a href="/terms-and-conditions" className="bg-white text-[#ff4d14] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#ff4d14] hover:text-white transition-all duration-300">
//             Terms & Conditions
//           </a>
//           <a href="/faq" className="bg-white text-[#ff4d14] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#ff4d14] hover:text-white transition-all duration-300">
//             FAQs
//           </a>
//         </div>

//         {/* Subscribe button */}
//         <button
//           onClick={openFlodesk}
//           className="mt-6 bg-white text-[#ff4d14] font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-[#ff4d14] hover:text-white transition-all duration-300"
//         >
//           Subscribe to Our Newsletter
//         </button>

//         {/* Social icons */}
//         <div className="flex gap-6 mt-8">
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <Instagram className="w-6 h-6 hover:text-gray-200 transition-all duration-300" />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <Facebook className="w-6 h-6 hover:text-gray-200 transition-all duration-300" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer">
//             <Twitter className="w-6 h-6 hover:text-gray-200 transition-all duration-300" />
//           </a>
//         </div>
//       </div>

//       {/* Flodesk Modal */}
//       {showFlodesk && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//           <div className="bg-white p-8 rounded-xl max-w-lg w-full shadow-2xl relative">
//             <button
//               onClick={closeFlodesk}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
//             >
//               ×
//             </button>
//             <FlodeskInlineFormNew />
//           </div>
//         </div>
//       )}
//     </footer>
//   )
// }
