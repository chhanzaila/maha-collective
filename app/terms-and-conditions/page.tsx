// app/terms-and-conditions/page.tsx
import React from "react"

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-sun text-white p-8 font-libre">
      <div className="">
        <h1 className="text-4xl mb-6 font-semibold">MAHA Collective Terms &amp; Conditions</h1>

        <p className="mb-4">By proceeding with this purchase, you agree to the following:</p>

        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>No Guarantees:</strong> Results are not promised. Success depends entirely on your own effort, commitment, and implementation of the material provided.</li>

          <li><strong>Payments &amp; Refunds:</strong> All sales are final. No refunds or credits are provided.
            <div className="mt-2 text-sm">
              Payment Plans: If you select a payment plan, you agree to complete all instalments in full and on time.
              <br />
              Late Payments: May result in suspension of access and incur administrative fees (e.g. USD $20.99 / AUD $40 per week).
              <br />
              Default: Payments overdue by more than 30 days may be referred to debt collection. You will be liable for recovery or legal costs.
            </div>
          </li>

          <li><strong>Currency &amp; Tax:</strong> Payments are accepted in AUD. GAST is applied as required by law.</li>
          <li><strong>Intellectual Property:</strong> All program materials are for personal use only and may not be copied, distributed, or resold without written consent.</li>

          <li><strong>MAHA Membership Terms:</strong> After the minimum term (3 months), cancellations require at least 30 days’ written notice to info@mahacollective.com.au. Access ends at the conclusion of the paid term. Re-enrolment is subject to current pricing and terms.</li>

          <li><strong>Conduct:</strong> The provider reserves the right to suspend or terminate access without refund for harassment, illegal behaviour, or violation of community standards.</li>

          <li><strong>Disclaimer:</strong> All information is for educational purposes only and does not constitute financial, legal, medical, or psychological advice.</li>

          <li><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, the provider’s total liability for any claim is limited to the amount paid for the service giving rise to the claim. The provider will not be liable for indirect or consequential losses.</li>

          <li><strong>Privacy:</strong> Personal information is collected and used in accordance with the organisation’s Privacy Policy.</li>

          <li><strong>Governing Law:</strong> These Terms are governed by the laws of the relevant state/country and both parties submit to the exclusive jurisdiction of the courts of that region.</li>
        </ol>

        <p className="mt-6">By completing checkout, you confirm that you have read, understood, and agree to these Terms &amp; Conditions.</p>
      </div>
    </main>
  )
}
