import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertCircle,
  Scale,
  Eye,
  Lock,
  Landmark,
  Building2,
  FileDown,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Receipt,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Governance & Fiduciary Charter — MAHAVIR TRUST",
  description:
    "Institutional governance framework, code of ethics, financial oversight, conflict-of-interest policies, and statutory disclosures for MAHAVIR TRUST.",
};

export default function GovernancePage() {
  const governanceCommittees = [
    {
      title: "Board of Trustees",
      scope: "Fiduciary Stewardship & Charter Custodians",
      mandate:
        "Preserving endowment integrity, ensuring adherence to the Trust Deed, and authorizing statutory annual filings under the Indian Trusts Act.",
      status: "Trust Deed Under Statutory Formalisation [Trustee Names Pending Gazette]",
      composition: "Non-remunerative, public-spirited civic and educational leaders.",
      icon: Landmark,
    },
    {
      title: "Audit & Financial Scrutiny Panel",
      scope: "Independent Accounting Oversight",
      mandate:
        "Quarterly reconciliation of direct college bank RTGS disbursements, administrative expenditures, and mandatory certified annual statutory audits by Chartered Accountants.",
      status: "Chartered Accountant Audit Protocol Established",
      composition: "Independent finance professionals and statutory auditors.",
      icon: Scale,
    },
    {
      title: "Academic Appraisal Committee",
      scope: "Merit-cum-Means Selection Authority",
      mandate:
        "Autonomous evaluation of student applications against standardized scoring rubrics. Zero discretionary grant allocation permitted by individual trustees.",
      status: "Standardized Blind-Scoring Model Active",
      composition: "University faculty members, college principals, and senior educators.",
      icon: ShieldCheck,
    },
    {
      title: "Secretariat & Ethics Office",
      scope: "Daily Administration & Grievance Redressal",
      mandate:
        "Managing candidate record verification, university liaison, whistleblower grievance intake, and public disclosure updates.",
      status: "Bhubaneswar Secretariat Desk Operational",
      composition: "Administrative officers and compliance coordinators.",
      icon: Building2,
    },
  ];

  const institutionalDocuments = [
    {
      title: "Draft Fiduciary Governance Charter",
      code: "DOC-2026-FGC-DRAFT",
      type: "PDF (Provisional)",
      description:
        "Formal articles of trustee governance, committee mandates, non-remuneration clauses, and ethical guidelines under the Indian Trusts Act.",
      version: "Draft v1.4 (Pre-Gazette Inspection)",
    },
    {
      title: "Direct College Disbursal & Anti-Cash Policy",
      code: "DOC-2026-DCD-POL",
      type: "PDF (Provisional)",
      description:
        "Statutory policy enforcing 100% direct bank remittances (NEFT/RTGS) to accredited colleges. Zero cash transfers to individuals or agents.",
      version: "Approved by Secretariat Panel",
    },
    {
      title: "Academic Scrutiny & Blind-Appraisal Rubric",
      code: "DOC-2026-ASA-RUB",
      type: "PDF (Provisional)",
      description:
        "The objective evaluation scoring matrix weighting academic merit (Class 10/+2 marks) and socioeconomic need (verified Tahsildar certificates).",
      version: "Advisory Model 2026-27",
    },
    {
      title: "Whistleblower & Grievance Redressal Protocol",
      code: "DOC-2026-WGR-PRO",
      type: "PDF (Provisional)",
      description:
        "Confidential reporting channels, anti-retaliation protections, and independent investigative timelines for ethical violations.",
      version: "Compliance Standard",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        badge="Stewardship & Public Trust"
        title="Institutional Governance & Fiduciary Charter"
        description="Public confidence is the bedrock of educational philanthropy. MAHAVIR TRUST operates under strict fiduciary boundaries, autonomous academic scrutiny, and verifiable financial oversight."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Governance" }]}
        actions={
          <>
            <Link href="#ethics">
              <Button variant="gold" size="sm">
                <span>Code of Ethics</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
            <Link href="#documents">
              <Button variant="dark-outline" size="sm">
                <span>Institutional Charters</span>
              </Button>
            </Link>
          </>
        }
      />

      {/* 2. Statutory Compliance Notice Strip */}
      <section className="py-8 bg-[#F4EFE6] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-6 bg-white rounded-xs border-2 border-[#C5A059]/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xs bg-[#072617] text-[#E4C88A] flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A5E24] block">
                  Statutory Transparency Notice
                </span>
                <p className="text-xs sm:text-sm text-[#1C2421] font-semibold mt-0.5">
                  Formal Gazette Notification & Section 12A/80G Formalisation
                </p>
                <p className="text-xs text-[#4A5568] mt-1 leading-relaxed">
                  {TRUST_CONFIG.legal.registrationNotice} No public funds or online donations are collected on this informational portal. Formal trustee appointment certificates will be gazetted upon regulatory formalisation.
                </p>
              </div>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button variant="secondary" size="sm">
                <span>Contact Compliance Desk</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Multi-Tier Governance Architecture */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="forest">Structural Integrity</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B24] tracking-tight">
              Trustee Governance & Committee Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Power is deliberately divided across independent committees to guarantee that no single individual or trustee holds discretionary authority over scholarship awards or financial disbursals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governanceCommittees.map((committee) => {
              const Icon = committee.icon;
              return (
                <div
                  key={committee.title}
                  className="p-7 sm:p-8 bg-white rounded-xs border border-[#0B3B24]/12 shadow-xs hover:border-[#C5A059] transition-all space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#0B3B24]/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A5E24]">
                      {committee.scope}
                    </span>
                    <span className="text-[10px] font-semibold text-[#0B3B24] bg-[#0B3B24]/8 px-2.5 py-0.5 rounded-xs">
                      Official Committee
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xs bg-[#072617] text-[#E4C88A] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                        {committee.title}
                      </h3>
                      <p className="text-xs text-[#4A5568] mt-1.5 leading-relaxed">
                        {committee.mandate}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#0B3B24]/10 space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5568] font-medium">Composition:</span>
                      <span className="text-[#0B3B24] font-semibold">{committee.composition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5568] font-medium">Statutory Status:</span>
                      <span className="text-[#7A5E24] font-semibold italic">{committee.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Financial Oversight & Zero-Cash Disbursal Policy */}
      <section className="py-20 bg-[#072617] text-[#EDE6D8] border-y border-[#C5A059]/25 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B3B24] border border-[#C5A059]/40 text-xs text-[#E4C88A] uppercase font-bold tracking-wider">
              <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Rigorous Financial Safeguards</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Financial Oversight & Direct Disbursal Standard
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              Every financial transaction initiated by MAHAVIR TRUST follows a multi-party verification protocol to eliminate leakage, fraud, or misuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xs bg-white/5 border border-white/10 space-y-4">
              <Receipt className="w-8 h-8 text-[#E4C88A]" />
              <h3 className="font-serif text-xl font-bold text-white">
                100% Direct College Remittance
              </h3>
              <p className="text-xs text-white/75 leading-relaxed font-sans">
                Approved scholarship awards are remitted exclusively via bank RTGS/NEFT straight to the accredited college or university bursar account. Under no circumstance is cash given to students, relatives, or agents.
              </p>
            </div>

            <div className="p-7 rounded-xs bg-white/5 border border-white/10 space-y-4">
              <Scale className="w-8 h-8 text-[#E4C88A]" />
              <h3 className="font-serif text-xl font-bold text-white">
                Dual-Authorization Controls
              </h3>
              <p className="text-xs text-white/75 leading-relaxed font-sans">
                No single officer can disburse funds. Batch transaction lists require joint electronic authorization from the Finance Officer and the designated Managing Trustee following Scrutiny Committee approval.
              </p>
            </div>

            <div className="p-7 rounded-xs bg-white/5 border border-white/10 space-y-4">
              <FileText className="w-8 h-8 text-[#E4C88A]" />
              <h3 className="font-serif text-xl font-bold text-white">
                Independent Annual Audits
              </h3>
              <p className="text-xs text-white/75 leading-relaxed font-sans">
                Statutory annual balance sheets and expenditure ledgers undergo certified auditing by independent Chartered Accountants. Audit reports and Form 10B filings will be published for open inspection on this portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Conflict of Interest & Ethics Code */}
      <section id="ethics" className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="forest">Fiduciary Ethics</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Conflict-of-Interest & Whistleblower Policies
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              MAHAVIR TRUST enforces strict institutional guardrails to protect donor intent and scholar rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#4A5568] leading-relaxed">
            <div className="p-7 bg-white rounded-xs border border-[#0B3B24]/12 shadow-xs space-y-3">
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                1. Zero Remuneration for Trustees
              </h3>
              <p>
                Members of the Board of Trustees serve purely pro bono and receive zero salary, sitting fees, or personal commissions. No trust assets may be pledged for private interests or personal commercial ventures.
              </p>
            </div>

            <div className="p-7 bg-white rounded-xs border border-[#0B3B24]/12 shadow-xs space-y-3">
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                2. Relatives Exclusion Rule
              </h3>
              <p>
                Trustees, advisory council members, and secretariat staff are strictly precluded from approving or sponsoring scholarship applications submitted by immediate family members or direct relatives.
              </p>
            </div>

            <div className="p-7 bg-white rounded-xs border border-[#0B3B24]/12 shadow-xs space-y-3">
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                3. Zero Political or Sectarian Affiliation
              </h3>
              <p>
                Grants are conferred without religious, caste, or political discrimination. The Trust does not endorse political entities, accept conditional sectarian grants, or participate in partisan campaigns.
              </p>
            </div>

            <div className="p-7 bg-white rounded-xs border border-[#0B3B24]/12 shadow-xs space-y-3">
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                4. Confidential Whistleblower Channel
              </h3>
              <p>
                Any student, applicant, volunteer, or citizen may submit confidential reports regarding attempted bribery, commission demands, or appraisal tampering directly to:{" "}
                <a href="mailto:governance@mahavirtrust.org" className="text-[#0B3B24] font-bold underline">
                  governance@mahavirtrust.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Institutional Documents (Index & Downloads) */}
      <section id="documents" className="py-20 bg-[#F4EFE6] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="gold">Transparency Repository</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Institutional Documents & Charters
            </h2>
            <p className="text-sm text-[#4A5568]">
              Publicly accessible charters, policies, and draft statutory guidelines governing MAHAVIR TRUST.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {institutionalDocuments.map((doc) => (
              <div
                key={doc.code}
                className="p-6 bg-white rounded-xs border border-[#0B3B24]/15 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-wider">
                    <span className="text-[#7A5E24] uppercase font-mono">{doc.code}</span>
                    <span className="text-[#0B3B24] bg-[#0B3B24]/10 px-2 py-0.5 rounded-xs">
                      {doc.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0B3B24]">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0B3B24]/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#4A5568] italic">{doc.version}</span>
                  <Link href="/contact?subject=Document%20Inspection%20Request">
                    <Button variant="secondary" size="sm" className="gap-1.5 text-xs">
                      <FileDown className="w-3.5 h-3.5 text-[#0B3B24]" />
                      <span>Request Inspection Copy</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
