import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, Scale, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Governance & Fiduciary Charter — MAHAVIR TRUST",
  description:
    "Institutional governance framework, code of ethics, fiduciary standards, and statutory disclosures for MAHAVIR TRUST.",
};

export default function GovernancePage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Stewardship & Accountability"
        title="Institutional Governance & Fiduciary Charter"
        description="Public trust is the foundation of philanthropic impact. MAHAVIR TRUST operates under strict fiduciary oversight, transparent appraisal norms, and annual auditable reporting."
        breadcrumbs={[{ label: "About Trust", href: "/about" }, { label: "Governance" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {/* Regulatory & Compliance Transparency Notice */}
          <div className="p-6 rounded-sm bg-[#F4EFE6] border border-[#0B3B24]/15 space-y-3">
            <div className="flex items-center gap-2 text-[#0B3B24] text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-[#C5A059]" />
              <span>Statutory Compliance Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {TRUST_CONFIG.legal.registrationNotice} No public donations or funds are processed directly through online channels on this informational portal. Individual trustee appointments and certified registration certificates will be made available for public inspection upon government publication.
            </p>
          </div>

          {/* Three Governance Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="elevated" className="p-8 space-y-4">
              <Scale className="w-8 h-8 text-[#0B3B24]" />
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                1. Independent Appraisal
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Scholarship awardees are evaluated using standardized merit-cum-means metrics. Beneficiary selection will be conducted by an independent Academic Advisory Committee without trustee discretion.
              </p>
            </Card>

            <Card variant="elevated" className="p-8 space-y-4">
              <Eye className="w-8 h-8 text-[#0B3B24]" />
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                2. Direct College Disbursement
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Zero cash transfers to intermediaries or applicants. All tuition grant disbursements are executed directly to certified university accounts following verified student enrollment.
              </p>
            </Card>

            <Card variant="elevated" className="p-8 space-y-4">
              <FileText className="w-8 h-8 text-[#0B3B24]" />
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                3. Annual Audited Disclosure
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Trustee accounts and programmatic expenditures will be subjected to statutory financial audits by certified Chartered Accountants, with summaries published openly on this portal.
              </p>
            </Card>
          </div>

          {/* Code of Ethics */}
          <div className="bg-white p-8 sm:p-12 rounded-sm border border-[#0B3B24]/15 shadow-sm space-y-6">
            <div className="space-y-2">
              <Badge variant="forest">Ethical Commitments</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3B24]">
                Institutional Code of Ethics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4A5568] leading-relaxed">
              <div className="p-5 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                  No Conflict of Interest
                </h4>
                <p>
                  Trustees and advisory committee members receive zero remuneration and are precluded from proposing direct relatives for scholarship awards.
                </p>
              </div>

              <div className="p-5 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                  Zero Discrimination
                </h4>
                <p>
                  Grant applications are evaluated purely on academic standing, verified economic hardship, and educational commitment without religious, political, or caste bias.
                </p>
              </div>

              <div className="p-5 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                  Data Privacy & Dignity
                </h4>
                <p>
                  Applicant income documentation and family backgrounds are treated with strict confidentiality. Beneficiary stories are published only with explicit consent.
                </p>
              </div>

              <div className="p-5 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <h4 className="font-serif text-sm font-bold text-[#0B3B24]">
                  Grievance Redressal
                </h4>
                <p>
                  A dedicated secretariat channel is maintained for applicant queries, verification reviews, and institutional feedback.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link href="/contact">
                <Button variant="primary" size="md">
                  Contact Secretariat Desk
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="secondary" size="md">
                  Governance FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
