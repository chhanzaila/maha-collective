"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    fd: any
  }
}

export default function FlodeskInlineFormNew() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fd) {
      window.fd("form", {
        formId: "688056a1dd3c2c4424e90d7d",
        containerEl: "#fd-form-688056a1dd3c2c4424e90d7d",
      })
    }
  }, [])

  return (
    <>
      <div id="fd-form-688056a1dd3c2c4424e90d7d"></div>

      <Script
        src="https://assets.flodesk.com/universal.mjs"
        type="module"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.fd) {
            window.fd("form", {
              formId: "688056a1dd3c2c4424e90d7d",
              containerEl: "#fd-form-688056a1dd3c2c4424e90d7d",
            })
          }
        }}
      />
      <Script
        src="https://assets.flodesk.com/universal.js"
        noModule
        strategy="afterInteractive"
      />
    </>
  )
}
