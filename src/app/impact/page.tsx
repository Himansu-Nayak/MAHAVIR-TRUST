import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import {
  MapPin,
  Target,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
  FileText,
  FileDown,
  Building2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community Impact, District Outreach & Annual Reports — MAHAVIR TRUST",
  description:
    "Explore MAHAVIR TRUST's 30-district Odisha outreach strategy, auditable impact reporting framework, educational outcome metrics, and annual report disclosures.",
};

export default function ImpactPage() {
  const districtZones = [
    {
      zone: "Central Educational Zone",
      count: "7 Districts",
      districts: ["Khordha (Bhubaneswar)", "Cuttack", "Puri", "Jagatsinghpur", "Kendrapara", "Jajpur", "Nayagarh"],
      phase: "Phase 1 Pilot & Phase 2 Rollout",
      status: "Active Institutional Liaison",
      highlight: true,
    },
    {
      zone: "Northern & Industrial Zone",
      count: "5 Districts",
      districts: ["Balasore", "Bhadrak", "Mayurbhanj (Baripada)", "Keonjhar", "Sundargarh (Rourkela)"],
      phase: "Phase 2 & 3 Expansion",
      status: "Polytechnic Outreach Planned",
    },
    {
      zone: "Western Academic Zone",
      count: "7 Districts",
      districts: ["Sambalpur", "Bargarh", "Jharsuguda", "Deogarh", "Bolangir", "Subarnapur", "Nuapada"],
      phase: "Phase 3 Regional Hubs",
      status: "Cluster Mapping Scheduled",
    },
    {
      zone: "Southern & Aspirational Zone",
      count: "9 Districts",
      districts: ["Ganjam (Berhampur)", "Gajapati", "Kandhamal", "Boudh", "Kalahandi", "Koraput", "Rayagada", "Nabarangpur", "Malkangiri"],
      phase: "Phase 3 Priority Need Belts",
      status: "Underrepresented Focus",
    },
  ];

  const impactMetrics = [
    {
      title: "College Retention Rate",
      target: "> 95% Completion",
      description: "Preventing dropouts between Semester 1 and final graduation by guaranteeing predictable tuition fee coverage.",
      icon: GraduationCap,
    },
    {
      title: "Direct Disbursal Integrity",
      target: "100% Non-Cash",
      description: "Zero intermediary handling. 100% of approved grants wired directly to verified college bank accounts.",
      icon: ShieldCheck,
    },
    {
      title: "First-Gen Scholar Focus",
      target: "> 70% First-in-Family",
      description: "Prioritizing candidates whose parents have not had the opportunity to complete higher education degrees.",
      icon: Users,
    },
    {
      title: "STEM & Technical Uplift",
      target: "Equal Gender Equity",
      description: "Encouraging rural female scholars to pursue degrees in engineering, biotechnology, mathematics, and nursing.",
      icon: TrendingUp,
    },
  ];

  const scholarArchetypes = [
    {
      title: "Undergraduate B.Sc Physics Scholar",
      origin: "Rural Kalahandi District",
      scenario:
        "The first in their family to complete Higher Secondary with 82% marks. Faced with a ₹14,000 annual college tuition shortfall, a direct-to-college grant ensures full semester fee clearance while a faculty mentor provides graduate entrance guidance.",
      program: "Mahavir Shiksha Protsahan Yojana",
      outcome: "Continuous degree progression without student indebtedness.",
    },
    {
      title: "Polytechnic Diploma in Electrical Engineering",
      origin: "Coastal Balasore Cluster",
      scenario:
        "An aspirational technician whose guardian suffered agricultural crop failure. Direct college fee settlement covers laboratory and semester fees, complemented by Project Samarth reference books.",
      program: "Pratibha Excellence Fellowship",
      outcome: "Qualifying for state electrical apprentice recruitment upon graduation.",
    },
    {
      title: "Competitive Exam & State Civil Services Aspirant",
      origin: "Semi-Urban Cuttack Sub-Division",
      scenario:
        "A dedicated graduate student living in a constrained single-room home. Utilizing Project Samarth’s solar-powered study hall and reference text archive to prepare for state administrative examinations.",
      program: "Project Samarth Study Hubs",
      outcome: "Access to standard competitive texts and quiet study hours.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        badge="Regional Outreach & Accountability"
        title="Educational Impact Vision & 30-District Odisha Outreach"
        description="Every scholarship grant, study hub, and mentorship cohort is designed to produce verifiable, audited educational outcomes across rural and semi-urban clusters in Odisha."
        breadcrumbs={[{ label: "Community Impact" }]}
        actions={
          <>
            <Link href="#districts">
              <Button variant="gold" size="sm">
                <span>30-District Framework</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
            <Link href="#framework">
              <Button variant="dark-outline" size="sm">
                <span>Auditable Metrics</span>
              </Button>
            </Link>
          </>
        }
      />

      {/* 2. District-Level Coverage Visualization */}
      <section id="districts" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="forest">Geographic Mandate</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B24] tracking-tight">
              Coverage Strategy Across All 30 Odisha Districts
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              While the Trust Secretariat is headquartered in Bhubaneswar, programmatic grants and community study hubs are structured to prioritize aspirational rural and semi-urban districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {districtZones.map((zone) => (
              <div
                key={zone.zone}
                className={`p-7 sm:p-8 rounded-xs border transition-all space-y-4 ${
                  zone.highlight
                    ? "bg-white border-2 border-[#C5A059] shadow-sm"
                    : "bg-white border border-[#0B3B24]/15 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#0B3B24]/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span className="font-serif font-bold text-lg text-[#0B3B24]">
                      {zone.zone}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#7A5E24] bg-[#C5A059]/15 px-2.5 py-0.5 rounded-xs">
                    {zone.count}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B3B24] block">
                    Districts Included:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.districts.map((d) => (
                      <span
                        key={d}
                        className="text-xs bg-[#F4EFE6] text-[#1C2421] px-2.5 py-1 rounded-xs border border-[#0B3B24]/10"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#0B3B24]/10 flex items-center justify-between text-xs">
                  <span className="text-[#4A5568] font-medium">{zone.phase}</span>
                  <span className="text-[#0B3B24] font-semibold italic">{zone.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Impact Reporting Framework & Metrics */}
      <section id="framework" className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold">Fiduciary Measurement</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Auditable Impact Framework
            </h2>
            <p className="text-sm text-[#4A5568]">
              We assess philanthropic success by academic degree completions, college retention rates, and career self-reliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.title} variant="elevated" className="p-7 bg-white border-[#0B3B24]/12 space-y-4">
                  <div className="w-11 h-11 rounded-xs bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#7A5E24] block">
                      Target: {metric.target}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0B3B24] mt-0.5">
                      {metric.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {metric.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Scholar Journey Scenarios (Archetypes) */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="forest">Mission Focus Archetypes</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Representative Scholar Journeys
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              To illustrate how the Trust’s proposed direct-to-college interventions operate, below are representative scholar scenarios modeling typical educational barriers in Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarArchetypes.map((archetype) => (
              <div
                key={archetype.title}
                className="p-7 bg-white rounded-xs border border-[#0B3B24]/15 shadow-xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#0B3B24]/10">
                    <span className="text-[#7A5E24] font-bold">{archetype.origin}</span>
                    <span className="text-[#0B3B24] bg-[#0B3B24]/8 px-2 py-0.5 rounded-xs font-semibold">
                      Model Profile
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                    {archetype.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed font-sans">
                    {archetype.scenario}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0B3B24]/10 space-y-1.5 text-xs">
                  <p className="text-[#0B3B24] font-bold">
                    Scheme: <span className="font-normal text-[#4A5568]">{archetype.program}</span>
                  </p>
                  <p className="text-[#0B3B24] font-bold">
                    Target Outcome: <span className="text-emerald-800 font-semibold">{archetype.outcome}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#4A5568] text-center italic">
            *In strict accordance with legal privacy and data integrity guidelines, individual identities, actual beneficiary records, and award amounts will be formally published post statutory formalization and individual consent.
          </p>
        </div>
      </section>

      {/* 5. Annual Reports & Public Disclosure Archive */}
      <section className="py-20 bg-[#072617] text-[#EDE6D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B3B24] border border-[#C5A059]/40 text-xs text-[#E4C88A] uppercase font-bold tracking-wider">
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Public Accountability</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Statutory Annual Reports & Financial Disclosures
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              As part of our commitment to transparent non-profit governance, MAHAVIR TRUST will publish certified audited balance sheets, expenditure ratios, and statutory Form 10B filings annually.
            </p>
          </div>

          {/* Provisional Publication Calendar */}
          <div className="bg-[#0B3B24]/80 border border-[#C5A059]/30 rounded-xs p-8 max-w-3xl mx-auto space-y-6">
            <h3 className="font-serif text-xl font-bold text-white">
              Annual Publication Calendar
            </h3>
            <div className="space-y-4 text-xs text-white/85">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E4C88A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#E4C88A] font-sans">Statutory Financial Audit (Form 10B):</strong> Published annually within 180 days of financial year close following certified audit by independent Chartered Accountants.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E4C88A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#E4C88A] font-sans">Disbursement Ledger Reconciliation:</strong> Full reconciliation of direct college bank RTGS transactions verified with participating college bursar accounts.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#E4C88A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#E4C88A] font-sans">Annual Impact Report:</strong> Comprehensive metrics on graduation completion, gender representation in STEM, and district-level reach across Odisha.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-white/60 italic">
                First annual audit report scheduled post statutory registration completion.
              </span>
              <Link href="/governance">
                <Button variant="gold" size="sm">
                  <span>View Governance Charter</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
