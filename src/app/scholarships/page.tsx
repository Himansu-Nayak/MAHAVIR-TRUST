import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { Award, CheckCircle2, ChevronRight, FileCheck, ArrowRight, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarship Grants & Appraisal — MAHAVIR TRUST",
  description:
    "Explore higher education scholarships, eligibility frameworks, appraisal guidelines, and application roadmaps for Odisha students.",
};

export default function ScholarshipsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Academic Enablement"
        title="Higher Education Scholarships & Grants"
        description="Providing direct college fee support and persistent mentorship so that high-potential students in Odisha can complete their professional degrees with dignity."
        breadcrumbs={[{ label: "Scholarships" }]}
        actions={
          <>
            <Link href="#eligibility">
              <Button variant="gold" size="sm">
                Eligibility Guidelines
              </Button>
            </Link>
            <Link href="/programmes">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                All Programmes
              </Button>
            </Link>
          </>
        }
      />

      {/* Grant Categories */}
      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <Badge variant="forest">Proposed Grant Schemes</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Scholarship Initiatives under Framework Formulation
            </h2>
            <p className="text-sm text-[#4A5568]">
              Below are the programmatic grant schemes conceptualized for undergraduate, technical, and competitive exam aspirants across Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TRUST_CONFIG.programs.map((prog) => (
              <Card key={prog.id} variant="elevated" className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-[#C5A059]/15 text-[#9E7D3B] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                      {prog.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C5A059] mt-1">
                      {prog.tagline}
                    </p>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {prog.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B3B24]/10 space-y-3">
                  <div className="text-[11px] text-[#4A5568]">
                    <span className="font-semibold text-[#0B3B24]">Geographic Scope:</span> {prog.scope}
                  </div>
                  <div className="text-[11px] bg-[#F4EFE6] p-3 rounded-xs border border-[#0B3B24]/10 text-[#0B3B24]">
                    <span className="text-[10px] uppercase font-bold text-[#9E7D3B] block mb-0.5">
                      Cycle Status
                    </span>
                    {prog.status}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section with Target ID */}
      <section id="eligibility" className="py-16 md:py-24 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="gold">Proposed Criteria</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                Appraisal Principles & Selection Standards
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                To guarantee fairness and prevent discretion, awards will follow standardized appraisal criteria approved by the Academic Advisory Board.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Domicile or formal admission into a recognized college/polytechnic in Odisha",
                  "Verified annual household income threshold (objective means review)",
                  "Consistent academic record in preceding qualifying board examinations",
                  "Demonstrated commitment to participate in academic mentorship and community hours",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3B24] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#1C2421] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/15 text-xs text-[#4A5568] space-y-1">
                <span className="font-bold text-[#0B3B24] block">
                  Notice to Applicants:
                </span>
                Exact cut-off percentages and income certification formats will be published on this portal along with the formal scholarship notification.
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FDFBF7] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                Proposed Selection Roadmap
              </h3>
              <div className="space-y-6 text-xs text-[#4A5568]">
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                      Notification & Online Registry
                    </h4>
                    <p className="mt-0.5">
                      Scholars submit preliminary transcripts and enrollment proofs online.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                      Institutional Verification
                    </h4>
                    <p className="mt-0.5">
                      Direct verification of fee structures and enrollment with the designated college.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                      Direct Disbursement & Mentorship
                    </h4>
                    <p className="mt-0.5">
                      Direct college remittance executed and scholars paired with dedicated academic guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-launch Inquiries CTA */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
            Have Questions Regarding Scholarship Cycles?
          </h3>
          <p className="text-xs sm:text-sm text-[#4A5568] max-w-xl mx-auto">
            Review answers in our Frequently Asked Questions or write directly to our Scholarship Desk.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/faq">
              <Button variant="secondary" size="md">
                View Scholarship FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="md">
                Connect with Secretariat
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
