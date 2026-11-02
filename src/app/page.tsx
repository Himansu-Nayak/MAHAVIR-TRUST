"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRUST_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components/ui/Card";
import { InstitutionalMarquee } from "@/components/InstitutionalMarquee";
import { SchemeExplorer } from "@/components/SchemeExplorer";
import { EligibilityCalculator } from "@/components/EligibilityCalculator";
import { DirectDisbursalFlowchart } from "@/components/DirectDisbursalFlowchart";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Compass,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  School,
  Building2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Send,
  MapPin,
  FileText,
  Clock,
  Landmark,
  Loader2,
  Lock,
  PhoneCall,
  Scale,
} from "lucide-react";
import { submitInquiry, submitVolunteerRegistration } from "@/lib/api";

export default function HomePage() {
  // Public Secretariat Inquiry State
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryReferenceId, setInquiryReferenceId] = useState<number | null>(null);
  const [inquiryIsSubmitting, setInquiryIsSubmitting] = useState(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    category: "Scholarship Guidance",
    message: "",
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryIsSubmitting(true);
    setInquiryError(null);

    try {
      const response = await submitInquiry({
        fullName: inquiryData.name,
        email: inquiryData.email,
        phone: inquiryData.phone,
        category: `${inquiryData.category} (${inquiryData.district || "Odisha"})`,
        message: inquiryData.message || `General inquiry submitted from ${inquiryData.district || "Odisha"} regarding ${inquiryData.category}.`,
      });
      setInquiryReferenceId(response.referenceId || null);
      setInquirySubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setInquiryError(err.message);
      } else {
        setInquiryError("Unable to connect to the secretariat desk. Please check your network or try again.");
      }
    } finally {
      setInquiryIsSubmitting(false);
    }
  };

  // Volunteer / Mentorship State
  const [volSubmitted, setVolSubmitted] = useState(false);
  const [volReferenceId, setVolReferenceId] = useState<number | null>(null);
  const [volIsSubmitting, setVolIsSubmitting] = useState(false);
  const [volError, setVolError] = useState<string | null>(null);
  const [volConsent, setVolConsent] = useState(false);
  const [volData, setVolData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Academic & Career Mentorship",
    notes: "",
  });

  const handleVolSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setVolIsSubmitting(true);
    setVolError(null);

    if (!volConsent) {
      setVolError("Please acknowledge the student safeguarding principles and voluntary service charter.");
      setVolIsSubmitting(false);
      return;
    }

    try {
      const response = await submitVolunteerRegistration({
        fullName: volData.name,
        email: volData.email,
        phone: volData.phone,
        roleInterest: volData.role,
        backgroundNotes: volData.notes,
        consentDeclared: true,
        consentVersion: "v1.0-2026",
      });
      setVolReferenceId(response.referenceId || null);
      setVolSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setVolError(err.message);
      } else {
        setVolError("Unable to record volunteer registration. Please try again.");
      }
    } finally {
      setVolIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION: Institutional Prestige & Grand Narrative */}
      <section className="relative overflow-hidden bg-[#072617] text-[#EDE6D8] pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#C5A059]/30">
        {/* Architectural background pattern & ambient lighting */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#165B38]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-7">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#0B3B24] border border-[#C5A059]/40 text-xs text-[#E4C88A] tracking-wider uppercase font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Philanthropic Education & Merit Mission • Odisha, India</span>
            </div>

            {/* Grand Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Empowering Odisha’s Next Generation of Scholars & Leaders.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-3xl mx-auto">
              MAHAVIR TRUST is dedicated to establishing direct-to-college tuition grants, 1-on-1 academic mentorship, and community study hubs so that no deserving student in Odisha is held back by financial hardship.
            </p>

            {/* Dual Primary Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link href="#programs">
                <Button variant="gold" size="lg" className="shadow-md">
                  <span>Explore Scholarship Schemes</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="#eligibility-calculator">
                <Button
                  variant="dark-outline"
                  size="lg"
                  className="font-semibold"
                >
                  <Award className="w-4 h-4 mr-1.5 text-[#E4C88A]" />
                  <span>Check Scholar Eligibility</span>
                </Button>
              </Link>
              <Link href="/governance">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-[#E4C88A] hover:bg-white/5"
                >
                  <span>Fiduciary Charter</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Statutory Compliance Indicator */}
            <p className="text-[11px] text-white/60 italic pt-2">
              Non-profit public charitable trust in Odisha. Strict 100% direct-to-college disbursement policy with zero cash intermediaries.
            </p>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 border-r border-white/10 last:border-r-0 pr-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">30</span>
              <p className="text-xs uppercase font-bold tracking-wider text-white/90">Districts Covered</p>
              <p className="text-[11px] text-white/60">Statewide mandate across Odisha</p>
            </div>
            <div className="space-y-1 border-r border-white/10 last:border-r-0 pr-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">100%</span>
              <p className="text-xs uppercase font-bold tracking-wider text-white/90">Direct Disbursals</p>
              <p className="text-[11px] text-white/60">Direct to college bursar accounts</p>
            </div>
            <div className="space-y-1 border-r border-white/10 last:border-r-0 pr-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">4</span>
              <p className="text-xs uppercase font-bold tracking-wider text-white/90">Core Pillars</p>
              <p className="text-[11px] text-white/60">Tuition, Mentors, Hubs & Guidance</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">Sec. 12A/80G</span>
              <p className="text-xs uppercase font-bold tracking-wider text-white/90">Fiduciary Standard</p>
              <p className="text-[11px] text-white/60">Certified statutory annual audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ACCREDITATION & ETHICS MARQUEE */}
      <InstitutionalMarquee />

      {/* 3. INTERACTIVE SCHOLAR ELIGIBILITY CALCULATOR */}
      <EligibilityCalculator />

      {/* 4. INSTITUTIONAL INTRODUCTION & FOUNDATIONAL HERITAGE */}
      <section id="about" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="forest">Stewardship & Purpose</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24] tracking-tight leading-snug">
                Founded on the Uncompromising Belief that Higher Education is a Universal Right.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                MAHAVIR TRUST was conceived to serve aspirational youth from economically disadvantaged families across Odisha. We believe that true institutional philanthropy is measured by scholars enabled to complete their degrees with dignity and self-reliance.
              </p>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Our operations combine direct college tuition grants with persistent 1-to-1 faculty mentorship, opening verified pathways into engineering, pure sciences, commerce, and public civil services.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/about">
                  <Button variant="secondary" size="md">
                    <span>Read Our Foundational Heritage</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/governance">
                  <Button variant="outline" size="md">
                    <span>Fiduciary Charter</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: 4 Foundation Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TRUST_CONFIG.pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  variant="elevated"
                  className="space-y-3 p-6 border-[#0B3B24]/12 hover:border-[#C5A059] transition-all duration-300"
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A5E24] bg-[#C5A059]/15 px-2 py-0.5 rounded-xs inline-block">
                    {pillar.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0B3B24]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SCHEME EXPLORER (With filter categories & timeline) */}
      <SchemeExplorer />

      {/* 6. DIRECT-TO-COLLEGE DISBURSAL GUARANTEE (Fiduciary Flowchart) */}
      <DirectDisbursalFlowchart />

      {/* 7. STRATEGIC MISSION & THREE PILLARS OF TRANSFORMATION */}
      <section id="mission" className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="forest">Strategic Framework</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Three Strategic Pillars of Transformation
            </h2>
            <p className="text-sm text-[#4A5568]">
              Targeted, auditable educational interventions designed to address foundational barriers faced by students across Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="elevated" className="p-8 space-y-4 bg-white border-[#0B3B24]/12">
              <div className="w-12 h-12 rounded-xs bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                1. Higher Education Grants
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Directly tackling post-secondary dropout rates. The Trust disburses degree tuition fee support straight to accredited colleges on behalf of verified meritorious scholars.
              </p>
            </Card>

            <Card variant="elevated" className="p-8 space-y-4 bg-white border-[#0B3B24]/12">
              <div className="w-12 h-12 rounded-xs bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                2. Academic Mentorship
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Financial support alone is incomplete without sustained guidance. Our model links students with university professors and industry leaders for structured career navigation.
              </p>
            </Card>

            <Card variant="elevated" className="p-8 space-y-4 bg-white border-[#0B3B24]/12">
              <div className="w-12 h-12 rounded-xs bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center">
                <School className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                3. Rural Learning Hubs
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Establishing community study points (Project Samarth) equipped with solar-backed power, high-speed study desks, and standard competitive entrance reference texts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. FROM THE SECRETARIAT DESK: Institutional Vision & Quality Benchmark */}
      <section className="py-20 bg-[#F4EFE6] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#0B3B24] text-white rounded-xs p-8 sm:p-12 relative overflow-hidden border border-[#C5A059]/40 shadow-xl">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#072617] border border-[#C5A059]/30 text-[10px] uppercase font-bold tracking-widest text-[#E4C88A]">
                  <Landmark className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>From The Secretariat Desk</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  “A Guarantee that Academic Excellence Transcends Economic Hardship.”
                </h3>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans">
                  The Mahavir Trust was established on the fundamental premise that talent is ubiquitous, but opportunity is unevenly distributed. By instituting direct-to-college disbursements, impartial scrutiny committees, and continuous academic mentorship, we are laying the groundwork for a transparent, durable institution that will serve students across Odisha for generations.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E4C88A]">
                  <span className="flex items-center gap-1.5 font-serif font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    Fiduciary Board of Trustees
                  </span>
                  <span className="text-white/40">•</span>
                  <span>Bhubaneswar Secretariat</span>
                  <span className="text-white/40">•</span>
                  <span>Non-Profit Public Charitable Charter</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#072617] rounded-xs border border-[#C5A059]/40 text-center space-y-3.5">
                <div className="w-14 h-14 rounded-xs bg-[#0B3B24] border-2 border-[#C5A059] flex items-center justify-center text-[#E4C88A] shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Mahavir Trust Secretariat
                  </h4>
                  <p className="text-[11px] text-[#E4C88A] font-semibold">
                    Office of Public Disbursals & Compliance
                  </p>
                </div>
                <p className="text-[10px] text-white/70 italic leading-snug">
                  Established under the Indian Trusts Act framework. Statutory registration details will be gazetted upon regulatory formalisation.
                </p>
                <Link href="#contact-desk" className="w-full pt-1">
                  <Button variant="gold" size="sm" className="w-full justify-center text-xs">
                    Connect with Secretariat Desk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STUDENT SUPPORT & ENABLEMENT BEYOND FINANCIAL GRANTS */}
      <section id="support" className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <Badge variant="forest">Comprehensive Enablement</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Student Support Beyond Financial Grants
            </h2>
            <p className="text-sm text-[#4A5568]">
              Nurturing professional competence, critical reasoning, and community stewardship across our scholar fraternity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="elevated" className="p-6 space-y-3 bg-white border-[#0B3B24]/12">
              <Users className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                1-on-1 Mentorship
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Scholars are paired with university faculty and professionals for monthly academic guidance throughout their degree.
              </p>
            </Card>

            <Card variant="elevated" className="p-6 space-y-3 bg-white border-[#0B3B24]/12">
              <BookOpen className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Textbook & Reference Sets
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Annual allocations covering expensive engineering, medical, and graduate degree textbooks and digital journal access.
              </p>
            </Card>

            <Card variant="elevated" className="p-6 space-y-3 bg-white border-[#0B3B24]/12">
              <Compass className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Career Readiness
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Practical workshops on resume writing, communication, and mock corporate placement interviews.
              </p>
            </Card>

            <Card variant="elevated" className="p-6 space-y-3 bg-white border-[#0B3B24]/12">
              <HeartHandshake className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Community Service Ethos
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Scholars are encouraged to contribute 2 hours weekly tutoring younger school pupils in their home villages.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. COMMUNITY IMPACT & ODISHA STATE OUTREACH */}
      <section id="impact" className="py-20 bg-[#F4EFE6] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="gold">Geographic Scope</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Odisha State Outreach Vision
            </h2>
            <p className="text-sm text-[#4A5568]">
              Targeting students from rural and semi-urban institutions across all 30 districts of Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRUST_CONFIG.perspectives.map((item, idx) => (
              <Card
                key={idx}
                variant="accent"
                className="p-8 space-y-4 bg-white flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A5E24] bg-[#C5A059]/15 px-2.5 py-0.5 rounded-xs inline-block">
                    {item.focus}
                  </span>
                  <p className="font-serif text-base sm:text-lg italic text-[#1C2421] leading-relaxed">
                    “{item.statement}”
                  </p>
                </div>
                <div className="pt-4 border-t border-[#0B3B24]/10">
                  <p className="text-xs font-bold text-[#0B3B24]">
                    {item.authorNote}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PARTICIPATION & VOLUNTEER REGISTRATION DESK */}
      <section id="participate" className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="forest">Community Participation</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                Join the Cause as a Mentor, Volunteer, or Institutional Partner.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                MAHAVIR TRUST welcomes academicians, working professionals, alumni, and college faculties who share our dedication to educational access in Odisha.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B3B24]">
                      Academic & Professional Mentors
                    </h3>
                    <p className="text-xs text-[#4A5568] mt-0.5 leading-relaxed">
                      Dedicate 2 hours monthly to guide an undergraduate scholar in your discipline with entrance exams or career paths.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B3B24]">
                      College & University Affiliations
                    </h3>
                    <p className="text-xs text-[#4A5568] mt-0.5 leading-relaxed">
                      Degree colleges in Odisha can coordinate with our desk for student grant endorsements and fee verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B3B24]">
                      Project Samarth Study Hub Stewards
                    </h3>
                    <p className="text-xs text-[#4A5568] mt-0.5 leading-relaxed">
                      Assist in managing community reference book collections and study rooms in cluster districts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Volunteer Form */}
            <div className="lg:col-span-6 bg-[#F4EFE6] p-8 sm:p-10 rounded-xs border border-[#0B3B24]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24] mb-1">
                Register as a Mentor or Volunteer
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Submit your background to connect with the Secretariat Coordinator.
              </p>

              {volSubmitted ? (
                <div className="p-6 bg-[#0B3B24] text-white rounded-xs space-y-3 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#E4C88A] mx-auto" />
                  <h4 className="font-serif text-xl font-bold">
                    Registration Recorded
                  </h4>
                  {volReferenceId && (
                    <p className="text-xs font-mono text-[#E4C88A] bg-black/20 py-1 px-3 rounded inline-block">
                      Volunteer Registry Ref: #{volReferenceId}
                    </p>
                  )}
                  <p className="text-xs text-white/85 leading-relaxed">
                    Thank you for your willingness to guide Odisha’s students. The Secretariat team will review your profile and reach out via email.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-3 text-xs !border-[#E4C88A] !text-[#E4C88A] hover:!bg-[#E4C88A]/10"
                    onClick={() => {
                      setVolSubmitted(false);
                      setVolConsent(false);
                      setVolData({
                        name: "",
                        email: "",
                        phone: "",
                        role: "Academic & Career Mentorship",
                        notes: "",
                      });
                    }}
                  >
                    Register Another Volunteer
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleVolSubmit} className="space-y-4">
                  {volError && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xs text-xs flex items-start gap-2" role="alert">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{volError}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="vol-fullname"
                      className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="vol-fullname"
                      type="text"
                      required
                      value={volData.name}
                      onChange={(e) => setVolData({ ...volData, name: e.target.value })}
                      placeholder="e.g. Prof. Sandeep Jena"
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="vol-email"
                        className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="vol-email"
                        type="email"
                        required
                        value={volData.email}
                        onChange={(e) => setVolData({ ...volData, email: e.target.value })}
                        placeholder="sandeep@example.com"
                        className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-phone"
                        className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="vol-phone"
                        type="tel"
                        required
                        value={volData.phone}
                        onChange={(e) => setVolData({ ...volData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-role"
                      className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1"
                    >
                      Area of Participation *
                    </label>
                    <select
                      id="vol-role"
                      value={volData.role}
                      onChange={(e) => setVolData({ ...volData, role: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                    >
                      <option value="Academic & Career Mentorship">Academic & Career Mentorship</option>
                      <option value="College Institutional Partnership">College / University Institutional Liaison</option>
                      <option value="Project Samarth Learning Hub Steward">Project Samarth Study Hub Steward</option>
                      <option value="Community Field Volunteering">District Field Volunteering</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-notes"
                      className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1"
                    >
                      Academic & Professional Background
                    </label>
                    <textarea
                      id="vol-notes"
                      rows={3}
                      value={volData.notes}
                      onChange={(e) => setVolData({ ...volData, notes: e.target.value })}
                      placeholder="Share your university affiliation, corporate background, or subject expertise..."
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      id="vol-consent-homepage"
                      type="checkbox"
                      required
                      checked={volConsent}
                      onChange={(e) => setVolConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded-xs border-[#0B3B24]/30 text-[#072617] focus:ring-[#C5A059]"
                    />
                    <label htmlFor="vol-consent-homepage" className="text-[11px] text-[#4A5568] leading-tight select-none">
                      I agree to the voluntary service charter and student safeguarding principles. For comprehensive tracks, code of conduct, and district scoping, view our{" "}
                      <Link href="/volunteer" className="text-[#072617] font-semibold underline hover:text-[#C5A059]">
                        Volunteer Portal
                      </Link>.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={volIsSubmitting}
                    className="w-full justify-center shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Submit Volunteer Registration</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. PUBLIC SECRETARIAT INQUIRY DESK */}
      <section id="contact-desk" className="py-20 md:py-28 bg-[#F4EFE6] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge variant="gold">Direct Public Access</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Secretariat Inquiry & Scholar Guidance Desk
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568]">
              Connect directly with our administration regarding upcoming scholarship schedules, eligibility documentation, or institutional affiliations.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-xs border-2 border-[#C5A059]/40 shadow-lg">
            {inquirySubmitted ? (
              <div className="p-8 bg-[#0B3B24] text-white rounded-xs space-y-4 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#E4C88A] mx-auto" />
                <h3 className="font-serif text-2xl font-bold">
                  Inquiry Successfully Registered
                </h3>
                {inquiryReferenceId && (
                  <p className="text-sm font-mono text-[#E4C88A] bg-black/25 py-1.5 px-4 rounded inline-block">
                    Secretariat Registry Ref: #{inquiryReferenceId}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to MAHAVIR TRUST. Our Secretariat Coordinator has logged your query and will dispatch an official advisory via email within 2 business days.
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => {
                    setInquirySubmitted(false);
                    setInquiryData({
                      name: "",
                      email: "",
                      phone: "",
                      district: "",
                      category: "Scholarship Guidance",
                      message: "",
                    });
                  }}
                  className="mt-2"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                {inquiryError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xs text-xs flex items-start gap-2" role="alert">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{inquiryError}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                    Candidate / Guardian Full Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    placeholder="e.g. Subhashree Mohanty"
                    className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="subhashree@example.com"
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="inquiry-district" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                      Home District (Odisha) *
                    </label>
                    <input
                      id="inquiry-district"
                      type="text"
                      required
                      value={inquiryData.district}
                      onChange={(e) => setInquiryData({ ...inquiryData, district: e.target.value })}
                      placeholder="e.g. Khordha, Cuttack"
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-category" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      id="inquiry-category"
                      value={inquiryData.category}
                      onChange={(e) => setInquiryData({ ...inquiryData, category: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                    >
                      <option value="Scholarship Guidance">Scholarship Scheme Guidance</option>
                      <option value="Eligibility & Document Appraisal">Eligibility & Document Appraisal</option>
                      <option value="College Institutional Partnership">College / University Institutional Partnership</option>
                      <option value="Corporate CSR & Philanthropy">Corporate CSR & Philanthropy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                    Inquiry Details / Specific Questions
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Provide details on your current college enrollment, course stream, or specific queries..."
                    className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  isLoading={inquiryIsSubmitting}
                  className="w-full justify-center shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  <span>Transmit Official Inquiry</span>
                </Button>

                <p className="text-[11px] text-[#4A5568] text-center italic">
                  Zero processing fees. Protected by automated rate limiting and institutional duplicate prevention.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 13. PHILANTHROPIC COMMITMENT & DONOR CALL TO ACTION */}
      <section id="donate" className="py-20 bg-[#072617] text-[#EDE6D8] border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="gold-dark">Philanthropic Commitment</Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Invest in a Scholar’s Future. Transform an Entire Family.
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-sans">
              Every contribution to MAHAVIR TRUST is channeled toward verified institutional tuition fees and student enablement under our direct-to-college disbursement policy.
            </p>

            <div className="p-5 rounded-xs bg-[#0B3B24]/80 border border-[#C5A059]/30 text-left max-w-xl mx-auto space-y-2">
              <div className="flex items-center gap-2 text-[#E4C88A] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Pre-Launch Regulatory Notice</span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Online payment gateways and Section 80G tax exemption receipts will be activated strictly following formal statutory gazette notification. Pledges may be communicated directly to the Secretariat desk.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${TRUST_CONFIG.contact.generalEmail}?subject=Donor%20Pledge%20Inquiry%20-%20Mahavir%20Trust`}>
                <Button variant="gold" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Connect with Donor Secretariat</span>
                </Button>
              </a>
              <Link href="/governance">
                <Button
                  variant="dark-outline"
                  size="lg"
                >
                  Our Fiduciary Governance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
