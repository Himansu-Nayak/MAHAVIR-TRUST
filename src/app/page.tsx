"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRUST_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Card, Badge } from "@/components/ui/Card";
import { InstitutionalMarquee } from "@/components/InstitutionalMarquee";
import { SchemeExplorer } from "@/components/SchemeExplorer";
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
} from "lucide-react";
import { submitInquiry, submitVolunteerRegistration } from "@/lib/api";

export default function HomePage() {
  // Hero Quick Intake state
  const [heroIntakeSubmitted, setHeroIntakeSubmitted] = useState(false);
  const [heroReferenceId, setHeroReferenceId] = useState<number | null>(null);
  const [heroIsSubmitting, setHeroIsSubmitting] = useState(false);
  const [heroError, setHeroError] = useState<string | null>(null);
  const [heroData, setHeroData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    category: "undergraduate",
  });

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroIsSubmitting(true);
    setHeroError(null);

    try {
      const response = await submitInquiry({
        fullName: heroData.name,
        email: heroData.email,
        phone: heroData.phone,
        category: `Pre-Admissions: ${heroData.category} (${heroData.district})`,
        message: `Scholar Eligibility Inquiry from ${heroData.district}, Odisha for ${heroData.category} degree level.`,
      });
      setHeroReferenceId(response.referenceId || null);
      setHeroIntakeSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setHeroError(err.message);
      } else {
        setHeroError("Unable to connect to the secretariat desk. Please check your network or try again.");
      }
    } finally {
      setHeroIsSubmitting(false);
    }
  };

  // Volunteer / Interest state
  const [volSubmitted, setVolSubmitted] = useState(false);
  const [volReferenceId, setVolReferenceId] = useState<number | null>(null);
  const [volIsSubmitting, setVolIsSubmitting] = useState(false);
  const [volError, setVolError] = useState<string | null>(null);
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

    try {
      const response = await submitVolunteerRegistration({
        fullName: volData.name,
        email: volData.email,
        phone: volData.phone,
        roleInterest: volData.role,
        backgroundNotes: volData.notes,
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
      {/* 1. HERO SECTION: Institutional Prestige & Split-Screen Quick Intake */}
      <section className="relative overflow-hidden bg-[#072617] text-[#EDE6D8] pt-14 pb-20 md:pt-20 md:pb-28 border-b border-[#C5A059]/20">
        {/* Subtle decorative architectural grid background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Subtle ambient lighting */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#165B38]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#0B3B24] border border-[#C5A059]/30 text-xs text-[#E4C88A] tracking-wider uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Philanthropic Education & Merit Mission</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
                Empowering Odisha’s Next Generation of Scholars & Leaders.
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans max-w-2xl">
                MAHAVIR TRUST is dedicated to establishing direct-to-college tuition grants, academic mentorship circles, and community learning hubs so that no deserving student in Odisha is held back by financial distress.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="#programs">
                  <Button variant="gold" size="lg" className="shadow-md">
                    <span>Explore Scholarship Schemes</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/governance">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Our Fiduciary Charter
                  </Button>
                </Link>
              </div>

              {/* Guiding Principles Strip */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10 text-left">
                {TRUST_CONFIG.guidingPrinciples.map((item) => (
                  <div
                    key={item.title}
                    className="p-3 rounded-xs bg-white/5 border border-white/10 space-y-1"
                  >
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[#E4C88A] block">
                      {item.badge}
                    </span>
                    <h2 className="font-serif text-xs font-bold text-white">
                      {item.title}
                    </h2>
                    <p className="text-[10px] text-white/70 leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero: Institutional Quick Intake Card (Inspired by RCM's high-conversion desk) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFBF7] text-[#1C2421] p-6 sm:p-8 rounded-sm shadow-2xl border-2 border-[#C5A059] relative">
                <div className="absolute -top-3 right-6 bg-[#C5A059] text-[#072617] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                  Secretariat Desk
                </div>

                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7D3B] block">
                    Pre-Admissions Inquiry
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24]">
                    Scholar Eligibility Check
                  </h3>
                  <p className="text-xs text-[#4A5568] mt-1">
                    Connect with the Trust Secretariat regarding upcoming grant schedules, norms, or institutional partner endorsements.
                  </p>
                </div>

                {heroIntakeSubmitted ? (
                  <div className="p-6 bg-[#0B3B24] text-white rounded-xs space-y-3 text-center animate-in fade-in">
                    <CheckCircle2 className="w-10 h-10 text-[#E4C88A] mx-auto" />
                    <h4 className="font-serif text-lg font-bold">
                      Inquiry Registered
                    </h4>
                    {heroReferenceId && (
                      <p className="text-xs font-mono text-[#E4C88A] bg-black/20 py-1 px-3 rounded inline-block">
                        Registry Ref: #{heroReferenceId}
                      </p>
                    )}
                    <p className="text-xs text-white/80 leading-relaxed">
                      Thank you for contacting MAHAVIR TRUST. The Secretariat Coordinator has logged your query and will send the draft eligibility prospectus via email.
                    </p>
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => {
                        setHeroIntakeSubmitted(false);
                        setHeroData({
                          name: "",
                          email: "",
                          phone: "",
                          district: "",
                          category: "undergraduate",
                        });
                      }}
                      className="mt-2"
                    >
                      Submit Another Query
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    {heroError && (
                      <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xs text-[11px] flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{heroError}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="hero-name" className="block text-[11px] font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                        Candidate / Guardian Name *
                      </label>
                      <input
                        id="hero-name"
                        type="text"
                        required
                        value={heroData.name}
                        onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                        placeholder="e.g. Subhashree Mohanty"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#F4EFE6] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="hero-email" className="block text-[11px] font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          id="hero-email"
                          type="email"
                          required
                          value={heroData.email}
                          onChange={(e) => setHeroData({ ...heroData, email: e.target.value })}
                          placeholder="subhashree@example.com"
                          className="w-full text-xs p-2.5 rounded-xs bg-[#F4EFE6] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="hero-phone" className="block text-[11px] font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          value={heroData.phone}
                          onChange={(e) => setHeroData({ ...heroData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full text-xs p-2.5 rounded-xs bg-[#F4EFE6] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="hero-district" className="block text-[11px] font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                          Home District (Odisha) *
                        </label>
                        <input
                          id="hero-district"
                          type="text"
                          required
                          value={heroData.district}
                          onChange={(e) => setHeroData({ ...heroData, district: e.target.value })}
                          placeholder="e.g. Khordha, Cuttack"
                          className="w-full text-xs p-2.5 rounded-xs bg-[#F4EFE6] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="hero-category" className="block text-[11px] font-bold text-[#0B3B24] uppercase tracking-wider mb-1">
                          Academic Level *
                        </label>
                        <select
                          id="hero-category"
                          value={heroData.category}
                          onChange={(e) => setHeroData({ ...heroData, category: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-xs bg-[#F4EFE6] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                        >
                          <option value="undergraduate">Undergraduate Degree (B.Sc / B.Com / B.A)</option>
                          <option value="engineering">Engineering & Technology (B.Tech / Poly)</option>
                          <option value="stem-fellowship">Competitive Entrance / STEM Fellowship</option>
                          <option value="college-liaison">College Administration / Verification Desk</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={heroIsSubmitting}
                      className="w-full justify-center shadow-sm"
                    >
                      {heroIsSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 mr-1.5" />
                          <span>Request Secretariat Guidance</span>
                        </>
                      )}
                    </Button>

                    <p className="text-[10px] text-[#4A5568] text-center italic">
                      Zero fee required. All scholarship appraisals follow strict merit-cum-means criteria.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ACCREDITATION & ETHICS MARQUEE */}
      <InstitutionalMarquee />

      {/* 3. KEY STATISTICAL INDICATORS & PUBLIC METRICS */}
      <section className="bg-[#0B3B24] text-white py-10 border-b border-[#C5A059]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-1 border-r last:border-r-0 border-white/10 pr-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">30</span>
              <p className="text-xs uppercase font-semibold tracking-wider text-white/80">Districts Covered</p>
              <p className="text-[10px] text-white/60">Statewide mandate across Odisha</p>
            </div>
            <div className="space-y-1 border-r last:border-r-0 border-white/10 pr-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">100%</span>
              <p className="text-xs uppercase font-semibold tracking-wider text-white/80">Direct College Disbursal</p>
              <p className="text-[10px] text-white/60">Zero intermediary cash leakage</p>
            </div>
            <div className="space-y-1 border-r last:border-r-0 border-white/10 pr-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">4</span>
              <p className="text-xs uppercase font-semibold tracking-wider text-white/80">Strategic Pillars</p>
              <p className="text-[10px] text-white/60">Grants, Mentorship, Hubs & Guidance</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#E4C88A]">Sec. 12A/80G</span>
              <p className="text-xs uppercase font-semibold tracking-wider text-white/80">Statutory Standard</p>
              <p className="text-[10px] text-white/60">Committed fiduciary compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & INSTITUTIONAL HERITAGE */}
      <section id="about" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="forest">Stewardship & Purpose</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24] tracking-tight leading-snug">
                Founded on the Uncompromising Belief that Education is a Universal Right.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                MAHAVIR TRUST was conceived to serve aspirational youth from under-resourced families across Odisha. We believe that true institutional philanthropy is measured by students enabled to complete their higher education with confidence and dignity.
              </p>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Our proposed operations pair direct institutional tuition subsidies with persistent 1-to-1 mentoring, unlocking pathways into engineering, science, management, and public leadership.
              </p>

              <div className="pt-2">
                <Link href="#governance">
                  <Button variant="secondary" size="md">
                    <span>View Institutional Governance Charter</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TRUST_CONFIG.pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  variant="elevated"
                  className="space-y-3 p-6 border-[#0B3B24]/10 hover:border-[#C5A059]/40 transition-colors"
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
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

      {/* 3. MISSION & CORE OBJECTIVES */}
      <section id="mission" className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Badge variant="gold">Institutional Focus</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Three Strategic Pillars of Transformation
            </h2>
            <p className="text-sm text-[#4A5568]">
              Targeted, auditable interventions tailored to resolve foundational obstacles faced by aspiring students across Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" className="p-8 space-y-4 bg-[#FDFBF7]">
              <div className="w-12 h-12 rounded-sm bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                1. Higher Education Grants
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Directly tackling student dropout rates after higher secondary education. The Trust aims to disburse course fee assistance straight to accredited degree-granting colleges on behalf of verified scholars.
              </p>
            </Card>

            <Card variant="default" className="p-8 space-y-4 bg-[#FDFBF7]">
              <div className="w-12 h-12 rounded-sm bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                2. Academic Mentorship
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Financial support alone is incomplete without professional context. Our proposed model links scholars with professors, technical practitioners, and leaders for career navigation and entrance guidance.
              </p>
            </Card>

            <Card variant="default" className="p-8 space-y-4 bg-[#FDFBF7]">
              <div className="w-12 h-12 rounded-sm bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center">
                <School className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
                3. Rural Learning Infrastructure
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Establishing community study points (Project Samarth) in semi-urban and rural clusters equipped with power backups, internet access, and competitive reference textbooks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. SCHOLARSHIP PROGRAMS & SCHEME EXPLORER (Interactive with category tabs) */}
      <SchemeExplorer />

      {/* 4B. FROM THE SECRETARIAT DESK: Institutional Vision & Quality Benchmark */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#0B3B24] text-white rounded-sm p-8 sm:p-12 relative overflow-hidden border border-[#C5A059]/30 shadow-xl">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#072617] border border-[#C5A059]/30 text-[10px] uppercase font-bold tracking-widest text-[#E4C88A]">
                  <Landmark className="w-3 h-3 text-[#C5A059]" />
                  <span>From The Secretariat Desk</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  “A Guarantee that Educational Excellence Transcends Economic Barriers.”
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  The Mahavir Trust was established on the fundamental premise that talent is everywhere, but opportunity is unevenly distributed. By instituting direct-to-college disbursements, impartial scrutiny committees, and continuous academic mentorship, we are laying the groundwork for a transparent, durable institution that will serve students across Odisha for generations.
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

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#072617] rounded-sm border border-[#C5A059]/40 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#0B3B24] border-2 border-[#C5A059] flex items-center justify-center text-[#E4C88A] shadow-inner">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Mahavir Trust Secretariat
                  </h4>
                  <p className="text-[11px] text-[#C5A059] font-medium">
                    Office of Public Disbursals & Compliance
                  </p>
                </div>
                <p className="text-[10px] text-white/60 italic leading-snug">
                  Established under the Indian Trusts Act framework. Formal Gazette details to be notified upon statutory completion.
                </p>
                <Link href="/contact" className="w-full pt-1">
                  <Button variant="gold" size="sm" className="w-full justify-center text-xs">
                    Connect with Secretariat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY & SELECTION INTEGRITY */}
      <section id="eligibility" className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="gold">Proposed Appraisal Norms</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                A Transparent, Fair, and Auditable Appraisal Model.
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                To preserve philanthropic integrity, Mahavir Trust is designing a blind-appraisal system. Evaluation combines validated household economic criteria with consistent academic dedication.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Proposed requirement: Domicile or accredited college enrollment within Odisha",
                  "Verified annual household income threshold (objective means review)",
                  "Minimum qualifying percentage in Class 10/12 or undergraduate examinations",
                  "Strict 100% direct-to-institution disbursement (zero intermediary cash)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3B24] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#1C2421] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="p-4 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/15 text-xs text-[#4A5568] space-y-1">
                  <span className="font-bold text-[#0B3B24] block">
                    Pre-Launch Regulatory Notice:
                  </span>
                  Official income certificate thresholds and exact scholarship quotas will be formally issued by the Trustee Board ahead of the first public admissions cycle.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FDFBF7] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                Proposed Appraisal Journey
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Application & Documentation
                    </h4>
                    <p className="text-xs text-[#4A5568] mt-1">
                      Academic marksheets, proof of college admission, and certified income documents submitted online.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Document & Institutional Verification
                    </h4>
                    <p className="text-xs text-[#4A5568] mt-1">
                      Verification of college enrollment and revenue authority documentation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Committee Review & College Disbursement
                    </h4>
                    <p className="text-xs text-[#4A5568] mt-1">
                      Appraisal committee confirmation, mentor assignment, and fee disbursement to the educational institution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDENT SUPPORT & COMMUNITY IMPACT */}
      <section id="support" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <Badge variant="forest">Comprehensive Enablement</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Student Support Beyond Financial Grants
            </h2>
            <p className="text-sm text-[#4A5568]">
              Nurturing character, professional competence, and community spirit across our future scholar fraternity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <Users className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                1-on-1 Mentorship
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Scholars will be paired with professors and working professionals for guidance throughout their academic journey.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <BookOpen className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Textbook & Reference Sets
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Planned grants for expensive textbooks, reference material, and entrance exam preparation manuals.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <Compass className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Career Guidance
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Workshops on communication, resume building, and corporate interview preparation conducted with volunteers.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <HeartHandshake className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Community Service Ethos
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Encouraging scholars to give back by tutoring younger learners in their localities, multiplying positive impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY IMPACT SECTION (Anchor for #impact) */}
      <section id="impact" className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="gold">Target Scope</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Odisha State Outreach Vision
            </h2>
            <p className="text-sm text-[#4A5568]">
              Targeting students from rural and semi-urban educational institutions across all 30 districts of Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRUST_CONFIG.perspectives.map((item, idx) => (
              <Card
                key={idx}
                variant="accent"
                className="p-8 space-y-4 bg-[#FDFBF7] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
                    {item.focus}
                  </span>
                  <p className="font-serif text-base sm:text-lg italic text-[#1C2421] leading-relaxed">
                    “{item.statement}”
                  </p>
                </div>
                <div className="pt-4 border-t border-[#0B3B24]/10">
                  <p className="text-xs font-semibold text-[#0B3B24]">
                    {item.authorNote}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PARTICIPATION & VOLUNTEERING */}
      <section id="participate" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="forest">Community Participation</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                Join the Cause as a Mentor, Volunteer, or Institutional Partner.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                MAHAVIR TRUST welcomes academicians, professionals, corporate partners, and college faculties who share a dedication to educational equity in Odisha.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#0B3B24]/10 flex items-center justify-center shrink-0 text-[#0B3B24]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Academic & Professional Mentors
                    </h4>
                    <p className="text-xs text-[#4A5568]">
                      Offer 2 hours monthly to guide an undergraduate scholar in your discipline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#0B3B24]/10 flex items-center justify-center shrink-0 text-[#0B3B24]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Institutional & College Affiliations
                    </h4>
                    <p className="text-xs text-[#4A5568]">
                      Colleges in Odisha can coordinate with our desk for student grant endorsements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Volunteer Inquiry Form with Accessibility Labels */}
            <div className="lg:col-span-6 bg-[#F4EFE6] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24] mb-2">
                Register Your Interest
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Submit your details to connect with the Secretariat regarding mentorship or volunteering.
              </p>

              {volSubmitted ? (
                <div className="p-6 bg-[#0B3B24] text-white rounded-sm space-y-3 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#E4C88A] mx-auto" />
                  <h4 className="font-serif text-xl font-bold">
                    Volunteer Registration Recorded
                  </h4>
                  {volReferenceId && (
                    <p className="text-xs font-mono text-[#E4C88A] bg-black/20 py-1 px-3 rounded inline-block">
                      Volunteer Registry Ref: #{volReferenceId}
                    </p>
                  )}
                  <p className="text-xs text-white/80 leading-relaxed">
                    Thank you for your willingness to support Odisha’s students. The Secretariat team will review your background and communicate orientation details via email.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-xs !border-[#E4C88A] !text-[#E4C88A] hover:!bg-[#E4C88A]/10"
                    onClick={() => {
                      setVolSubmitted(false);
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
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-sm text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{volError}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="volunteer-fullname"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="volunteer-fullname"
                      name="fullname"
                      type="text"
                      required
                      value={volData.name}
                      onChange={(e) => setVolData({ ...volData, name: e.target.value })}
                      placeholder="e.g. Prof. Sandeep Jena"
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="volunteer-email"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="volunteer-email"
                        name="email"
                        type="email"
                        required
                        value={volData.email}
                        onChange={(e) => setVolData({ ...volData, email: e.target.value })}
                        placeholder="sandeep@example.com"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="volunteer-phone"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Phone / Contact Number *
                      </label>
                      <input
                        id="volunteer-phone"
                        name="phone"
                        type="tel"
                        required
                        value={volData.phone}
                        onChange={(e) => setVolData({ ...volData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="volunteer-interest"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Area of Interest / Participation *
                    </label>
                    <select
                      id="volunteer-interest"
                      name="interest"
                      value={volData.role}
                      onChange={(e) => setVolData({ ...volData, role: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                    >
                      <option value="Academic & Career Mentorship">Academic & Career Mentorship</option>
                      <option value="College / Institutional Partnership">College / Institutional Partnership</option>
                      <option value="Learning Hub Steward">Project Samarth Learning Hub Steward</option>
                      <option value="Community Field Volunteering">Community Field Volunteering</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="volunteer-notes"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Brief Background Note
                    </label>
                    <textarea
                      id="volunteer-notes"
                      name="notes"
                      rows={3}
                      value={volData.notes}
                      onChange={(e) => setVolData({ ...volData, notes: e.target.value })}
                      placeholder="Share your current affiliation, academic background, or how you wish to collaborate..."
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={volIsSubmitting}
                    className="w-full justify-center"
                  >
                    {volIsSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                        <span>Transmitting Registration...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        <span>Submit Volunteer Registration</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DONATION & PHILANTHROPIC SUPPORT CALL TO ACTION */}
      <section id="donate" className="py-20 bg-[#072617] text-[#EDE6D8] border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="gold">Philanthropic Commitment</Badge>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Invest in a Scholar’s Future. Transform an Entire Family.
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              Every donation to MAHAVIR TRUST will be directed toward verified institutional tuition fees and student enablement under our direct-to-college disbursement policy.
            </p>

            <div className="p-5 rounded-sm bg-[#0B3B24]/80 border border-[#C5A059]/30 text-left max-w-xl mx-auto space-y-2">
              <div className="flex items-center gap-2 text-[#E4C88A] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Pre-Launch Regulatory Notice</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Online payment gateways and formal tax-exemption receipts (Section 80G) will be activated strictly following statutory trust registration. Pledges may be communicated directly to the Secretariat desk.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${TRUST_CONFIG.contact.generalEmail}?subject=Donor%20Pledge%20Inquiry%20-%20Mahavir%20Trust`}>
                <Button variant="gold" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Connect with Donor Secretariat</span>
                </Button>
              </a>
              <Link href="#governance">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Our Fiduciary Governance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GOVERNANCE & ETHICAL CHARTER (Anchor for #governance) */}
      <section id="governance" className="py-16 bg-[#FDFBF7] border-b border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#F4EFE6] border border-[#0B3B24]/10 rounded-sm p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3B24]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Public Governance & Fiduciary Disclosures</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
              Institutional Code of Ethics
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              MAHAVIR TRUST strictly upholds transparency. In compliance with the trust deed and charitable standards in Odisha, India, our accounts will undergo certified annual statutory audits. Beneficiary lists will be evaluated under academic committee oversight, ensuring equitable access.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#0B3B24]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                Zero Political or Religious Bias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                100% Direct College Disbursements
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                Public Annual Audit Reports (Post Statutory Registration)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONTACT & SECRETARIAT (Anchor for #contact) */}
      <section id="contact" className="py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0B3B24]" />
                Secretariat Location
              </span>
              <h4 className="font-serif text-base font-bold text-[#0B3B24]">
                Bhubaneswar, Odisha
              </h4>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                {TRUST_CONFIG.contact.addressLine1}, {TRUST_CONFIG.contact.city}, Odisha - {TRUST_CONFIG.contact.pin}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0B3B24]" />
                Official Correspondence
              </span>
              <h4 className="font-serif text-base font-bold text-[#0B3B24]">
                Secretariat Desk
              </h4>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                <a
                  href={`mailto:${TRUST_CONFIG.contact.generalEmail}`}
                  className="hover:text-[#0B3B24] underline"
                >
                  {TRUST_CONFIG.contact.generalEmail}
                </a>
              </p>
              <p className="text-xs text-[#4A5568]">
                Scholarship Inquiries:{" "}
                <a
                  href={`mailto:${TRUST_CONFIG.contact.scholarshipEmail}`}
                  className="hover:text-[#0B3B24] underline"
                >
                  {TRUST_CONFIG.contact.scholarshipEmail}
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#0B3B24]" />
                Compliance Status
              </span>
              <h4 className="font-serif text-base font-bold text-[#0B3B24]">
                Registration In-Progress
              </h4>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                {TRUST_CONFIG.contact.verificationStatus}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
