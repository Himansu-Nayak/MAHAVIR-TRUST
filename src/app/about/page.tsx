import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import {
  ShieldCheck,
  Target,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  GraduationCap,
  Scale,
  Landmark,
  Clock,
  Sparkles,
  Award,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Institutional Heritage — MAHAVIR TRUST",
  description:
    "Learn about MAHAVIR TRUST's foundational heritage, mission, organizational structure, core values, and roadmap to advance higher education access in Odisha, India.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Fiduciary Integrity",
      description:
        "100% of approved tuition fee subsidies are remitted directly to accredited colleges. Zero cash handling, zero brokers, and mandatory annual statutory audits.",
      icon: ShieldCheck,
      tag: "Governance",
    },
    {
      title: "Objective Blind-Appraisal",
      description:
        "Standardized merit-cum-means evaluation using verified income certificates and academic marksheets without trustee personal discretion.",
      icon: Scale,
      tag: "Fairness",
    },
    {
      title: "Student Dignity First",
      description:
        "Empowering scholars not as recipients of charity, but as rightful future leaders, scientists, and professionals who will uplift their communities.",
      icon: HeartHandshake,
      tag: "Ethos",
    },
    {
      title: "Non-Sectarian Universality",
      description:
        "Strictly neutral and non-denominational. Open to all deserving students across all 30 districts of Odisha regardless of caste, creed, or background.",
      icon: Users,
      tag: "Inclusion",
    },
  ];

  const orgTiers = [
    {
      tier: "Tier 1",
      title: "Board of Trustees",
      role: "Fiduciary Stewardship & Charter Custodians",
      description:
        "Responsible for statutory compliance, endowment preservation, and legal governance under the Indian Trusts Act framework. Non-remunerative, public-spirited trustees.",
      status: "Trust Deed Under Statutory Formalisation [Names Pending Gazette]",
      icon: Landmark,
    },
    {
      tier: "Tier 2",
      title: "Academic Advisory Council",
      role: "Educational Direction & Policy Guidance",
      description:
        "Composed of distinguished university professors, educational administrators, and technical practitioners formulating objective curriculum and grant criteria.",
      status: "Advisory Panel Under Formation",
      icon: Award,
    },
    {
      tier: "Tier 3",
      title: "Appraisal & Scrutiny Committee",
      role: "Impartial Candidate Evaluation",
      description:
        "Independent review body inspecting applicant marksheets, revenue authority income certificates, and college admission fee demands.",
      status: "Objective Standardized Scoring Model",
      icon: Scale,
    },
    {
      tier: "Tier 4",
      title: "Administrative Secretariat Desk",
      role: "Operations, College Liaison & Disbursals",
      description:
        "Executive team managing daily college communication, bank RTGS transaction reconciliation, student tracking, and community volunteer coordination.",
      status: "Bhubaneswar Secretariat Desk Operational",
      icon: Building2,
    },
  ];

  const timelineMilestones = [
    {
      year: "2025",
      badge: "Inception",
      title: "Genesis & Trust Deed Formulation",
      description:
        "Formalization of the philanthropic vision to eradicate higher education dropouts in Odisha. Drafting the fiduciary charter, zero-cash disbursement guidelines, and statutory filings.",
    },
    {
      year: "Early 2026",
      badge: "Architecture",
      title: "Digital Platform & Security Hardening",
      description:
        "Deployment of the institutional web portal, Spring Boot 4 backend with enterprise authentication, role-based access control (RBAC), and automated inquiry desk.",
    },
    {
      year: "Mid 2026",
      badge: "Partnerships",
      title: "College Liaison Network & Pilot Auditing",
      description:
        "Establishing direct verification protocols with degree colleges across Khordha and Cuttack clusters. Establishing Tahsildar income certificate verification standards.",
    },
    {
      year: "2026-27",
      badge: "Launch",
      title: "Pilot Disbursal Cohort & Project Samarth Hubs",
      description:
        "Inaugural cycle of direct tuition disbursements for undergraduate scholars and launch of the first supervised community reference study hub in Bhubaneswar.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        badge="Institutional Heritage"
        title="Dedicated to Educational Dignity & Socioeconomic Mobility in Odisha"
        description="MAHAVIR TRUST was conceived as a non-profit philanthropic foundation to ensure that financial hardship never forces a hardworking student in Odisha to abandon their academic dreams."
        breadcrumbs={[{ label: "About Us" }]}
        actions={
          <>
            <Link href="/governance">
              <Button variant="gold" size="sm">
                <span>Fiduciary Governance</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
            <Link href="/scholarships">
              <Button variant="dark-outline" size="sm">
                <span>Scholarship Schemes</span>
              </Button>
            </Link>
          </>
        }
      />

      {/* 2. Institutional Heritage & Foundational Narrative */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Narrative Left */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="forest">Foundational Philosophy</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B24] leading-tight">
                True Philanthropy Enables Self-Reliance Through Quality Higher Education.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Higher education represents the single most transformative engine of social and economic mobility in India. Yet, across Odisha, thousands of meritorious students who complete their Higher Secondary (+2) examinations with distinction find that poverty halts their progress at the college gates.
              </p>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                MAHAVIR TRUST was instituted to resolve this structural crisis. We do not distribute temporary discretionary charity. Instead, we establish enduring institutional mechanisms: 100% direct-to-college tuition fee grants, 1-on-1 faculty mentorship, and community study hubs that enable students to earn recognized degrees and enter professional careers with pride.
              </p>

              {/* Guiding Safeguards */}
              <div className="pt-4 border-t border-[#0B3B24]/10 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3B24]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#0B3B24]">
                      100% Direct College Disbursals
                    </h3>
                    <p className="text-xs text-[#4A5568] mt-0.5">
                      Grant subsidies are wired directly via bank transfer to the verified accounts of degree colleges. Zero cash handling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3B24]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#0B3B24]">
                      Mentorship as an Inseparable Anchor
                    </h3>
                    <p className="text-xs text-[#4A5568] mt-0.5">
                      Scholars receive structured career navigation from university professors, corporate mentors, and civil service professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards Right */}
            <div className="lg:col-span-5 bg-[#F4EFE6] p-8 sm:p-10 rounded-xs border border-[#0B3B24]/15 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A5E24] block">
                  Foundational Charter
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                  Vision & Mission
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white rounded-xs border border-[#0B3B24]/10 shadow-xs space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5E24] bg-[#C5A059]/15 px-2 py-0.5 rounded-xs inline-block">
                    Institutional Vision
                  </span>
                  <p className="font-serif text-sm font-bold text-[#0B3B24]">
                    An Empowered, Educated Odisha
                  </p>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    An Odisha where every hardworking student, irrespective of economic circumstances or geography, has access to accredited higher education, professional dignity, and upward social mobility.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xs border border-[#0B3B24]/10 shadow-xs space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B3B24] bg-[#0B3B24]/10 px-2 py-0.5 rounded-xs inline-block">
                    Operational Mission
                  </span>
                  <p className="font-serif text-sm font-bold text-[#0B3B24]">
                    Direct Grants & Sustained Enablement
                  </p>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    To deliver transparent college fee grants, establish supervised community study hubs (Project Samarth), and foster an enduring culture of academic excellence and giving back across all 30 districts of Odisha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="gold">Institutional Anchors</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Our Guiding Values
            </h2>
            <p className="text-sm text-[#4A5568]">
              Principles that govern every grant approval, institutional affiliation, and rupee deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  variant="elevated"
                  className="p-7 bg-white border-[#0B3B24]/12 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xs bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5E24]">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#0B3B24]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A5568] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Organizational Structure */}
      <section className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="forest">Fiduciary Governance Structure</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Organizational & Oversight Architecture
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              MAHAVIR TRUST operates under a multi-tier governance model designed to prevent conflict of interest, eliminate administrative bias, and guarantee institutional accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orgTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.tier}
                  className="p-7 sm:p-8 bg-white rounded-xs border border-[#0B3B24]/15 shadow-xs space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#0B3B24]/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A5E24]">
                      {tier.tier}
                    </span>
                    <span className="text-[10px] font-semibold text-[#0B3B24] bg-[#0B3B24]/8 px-2.5 py-0.5 rounded-xs">
                      {tier.role}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xs bg-[#072617] text-[#E4C88A] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                        {tier.title}
                      </h3>
                      <p className="text-xs text-[#4A5568] mt-1.5 leading-relaxed">
                        {tier.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#0B3B24]/10 flex items-center justify-between text-[11px]">
                    <span className="text-[#4A5568] font-medium">Compliance Note:</span>
                    <span className="font-semibold text-[#0B3B24] italic">{tier.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statutory Disclosure Callout */}
          <div className="p-6 bg-[#F4EFE6] rounded-xs border border-[#0B3B24]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#0B3B24] shrink-0" />
              <p className="text-[#4A5568]">
                <strong>Statutory Notice:</strong> Official Trustee Board gazetted notifications and Section 12A/80G filings will be published for public inspection following government certificate issuance.
              </p>
            </div>
            <Link href="/governance" className="shrink-0">
              <Button variant="secondary" size="sm">
                <span>View Fiduciary Charter</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Foundational Roadmap Timeline */}
      <section className="py-20 bg-[#072617] text-[#EDE6D8] border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#0B3B24] border border-[#C5A059]/40 text-xs text-[#E4C88A] uppercase font-bold tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Phased Evolution</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Foundational Journey & Roadmap
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              From our charter formulation to statewide cluster rollouts, explore the phased roadmap guiding MAHAVIR TRUST.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((milestone) => (
              <div
                key={milestone.year}
                className="p-6 bg-white/5 border border-white/10 rounded-xs hover:border-[#C5A059]/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-serif text-2xl font-bold text-[#E4C88A]">
                      {milestone.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E4C88A] bg-black/25 px-2 py-0.5 rounded-xs">
                      {milestone.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/programmes">
              <Button variant="gold" size="md">
                <span>Explore Programmatic Initiatives</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
