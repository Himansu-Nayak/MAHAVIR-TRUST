import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Engagement — MAHAVIR TRUST",
  description:
    "Institutional terms of engagement, website use guidelines, and scholarship application understandings for MAHAVIR TRUST.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Legal & Institutional Charter"
        title="Terms of Engagement & Website Use"
        description="Guidelines governing use of the MAHAVIR TRUST informational portal and participation in its charitable programmes."
        breadcrumbs={[{ label: "Terms of Engagement" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              1. Informational & Non-Commercial Purpose
            </h2>
            <p>
              This website is operated by MAHAVIR TRUST as an educational and charitable portal. All content, programmatic overviews, and policy drafts are provided for public information, community collaboration, and transparency.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              2. Accuracy of Submissions
            </h2>
            <p>
              Applicants, volunteers, and mentors engaging with the Trust warrant that all details submitted through registration forms—including income declarations, marks certificates, and identity records—are authentic, accurate, and verifiable. The submission of falsified documents will result in immediate disqualification and reporting to educational authorities.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              3. Grant Decisions & Selection Discretion
            </h2>
            <p>
              Applying for a scholarship does not create an automatic legal entitlement to financial disbursement. Grant allocations are contingent upon annual budgetary limits, certified quota availability, and competitive appraisal by the Academic Advisory Board. Decisions made by the appraisal committee in accordance with trust guidelines are final.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              4. Direct Institutional Disbursement Condition
            </h2>
            <p>
              All scholarship recipients acknowledge that grant amounts are strictly disbursed directly to accredited educational institutions to offset legitimate academic tuition fees. No funds are transferred in cash or to personal commercial accounts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms and all operations of the Trust are governed by the applicable laws of the State of Odisha and the Republic of India. Any legal proceedings related to the Trust's activities shall fall within the jurisdiction of the courts of Bhubaneswar, Odisha.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
