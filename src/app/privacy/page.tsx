import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — MAHAVIR TRUST",
  description:
    "Data privacy and student confidentiality commitments of MAHAVIR TRUST in Odisha, India.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Data Protection & Ethics"
        title="Privacy & Confidentiality Policy"
        description="Our commitment to safeguarding student data, applicant economic records, and communication integrity."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              1. Commitment to Student & Applicant Dignity
            </h2>
            <p>
              MAHAVIR TRUST recognizes that applying for need-based educational assistance involves sharing sensitive personal and financial documentation. We hold all submitted records—including household income certificates, academic scorecards, and identification credentials—in the strictest confidence.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              2. Information We Collect
            </h2>
            <p>
              Information collected through this portal is limited to data voluntarily provided by applicants, prospective mentors, and institutional correspondents:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name, verified email address, and telephone contact numbers.</li>
              <li>Academic enrollment status, institution affiliation, and marks details.</li>
              <li>Official certificates submitted solely for the verification of eligibility.</li>
              <li>Message content submitted via volunteer or contact forms.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              3. Purpose of Processing
            </h2>
            <p>
              Personal data is accessed strictly by authorized members of the Secretariat and the Academic Advisory Committee for the exclusive purposes of:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluating need-cum-merit scholarship eligibility.</li>
              <li>Direct coordination with accredited educational institutions for tuition remittances.</li>
              <li>Organizing volunteer orientation sessions and mentor-scholar pairing.</li>
              <li>Fulfilling statutory audit compliance as mandated under trust law.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              4. No Commercialization or Sharing of Data
            </h2>
            <p>
              We do not sell, rent, commercialize, or share applicant data with third-party advertisers, commercial lenders, or marketing intermediaries. Personal details are never made public without explicit written consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              5. Contact Regarding Privacy Queries
            </h2>
            <p>
              For questions regarding the retention, amendment, or removal of submitted records, please contact our administrative desk at <strong>contact@mahavirtrust.org</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
