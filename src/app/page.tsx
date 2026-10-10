"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRUST_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Card, Badge } from "@/components/ui/Card";
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
} from "lucide-react";

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("scholarship");

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION: Institutional Prestige & Clear Mission */}
      <section className="relative overflow-hidden bg-[#072617] text-[#EDE6D8] pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[#C5A059]/20">
        {/* Subtle decorative architectural grid background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Subtle golden ambient accent */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#165B38]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#0B3B24] border border-[#C5A059]/30 text-xs text-[#E4C88A] tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Philanthropic Education & Merit Mission</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              Empowering Odisha’s Next Generation of Scholars & Leaders.
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans max-w-2xl">
              MAHAVIR TRUST provides direct scholarship grants, academic mentorship, and community learning hubs so that no deserving student in Odisha is held back by financial barriers.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="#scholarships">
                <Button variant="gold" size="lg" className="shadow-md">
                  <span>Explore Scholarships</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Our Charter & Heritage
                </Button>
              </Link>
            </div>

            {/* Factual Institutional Highlights */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 text-left">
              {TRUST_CONFIG.impactMetrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E4C88A]">
                    {metric.figure}
                  </span>
                  <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-white/60 leading-tight">
                    {metric.subtext}
                  </p>
                </div>
              ))}
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
                MAHAVIR TRUST was conceived to serve aspirational youth from under-resourced communities across Odisha. We believe that true institutional philanthropy is measured not by mere endowments, but by students enabled to complete their higher education with dignity.
              </p>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Our operations pair direct institutional fee subsidies with persistent 1-to-1 mentoring, creating pathways into science, technology, management, and public service.
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
              Targeted, auditable interventions tailored to resolve foundational hurdles faced by students across Odisha.
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
                Directly addressing dropout rates occurring between secondary schooling and degree enrollment. We disburse course fee assistance to university-accredited institutions on behalf of certified scholars.
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
                Financial support alone is incomplete without professional context. Our scholars are linked with professors, technical practitioners, and leaders who provide interview coaching and career guidance.
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
                Establishing community study points (Project Samarth) in semi-urban and rural clusters with power backups, internet access, and entrance test study materials for self-directed study.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. SCHOLARSHIP PROGRAMS OVERVIEW */}
      <section id="scholarships" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-xl">
              <Badge variant="forest">Scholarship Roadmap</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                Flagship Academic Grant Initiatives
              </h2>
              <p className="text-sm text-[#4A5568]">
                Applications open annually based on established merit-cum-means criteria. Review current programmatic structures below.
              </p>
            </div>
            <Link href="#eligibility">
              <Button variant="outline" size="sm">
                <span>View Eligibility Standards</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TRUST_CONFIG.programs.map((program) => (
              <Card
                key={program.id}
                variant="elevated"
                className="flex flex-col justify-between p-8 border-[#0B3B24]/10 space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-[#C5A059]/15 text-[#9E7D3B] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0B3B24] leading-snug">
                      {program.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C5A059] mt-1">
                      {program.tagline}
                    </p>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {program.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B3B24]/10 space-y-3">
                  <div className="text-[11px] text-[#4A5568]">
                    <span className="font-semibold text-[#0B3B24]">Geographic Scope:</span>{" "}
                    {program.scope}
                  </div>
                  <div className="text-[11px] bg-[#F4EFE6] p-2.5 rounded-xs text-[#0B3B24] border border-[#0B3B24]/10 font-medium">
                    <span className="text-[10px] uppercase font-bold text-[#9E7D3B] block mb-0.5">
                      Cycle Status
                    </span>
                    {program.status}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ELIGIBILITY & SELECTION INTEGRITY */}
      <section id="eligibility" className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="gold">Selection Integrity</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                A Transparent, Fair, and Auditable Appraisal Model.
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                To preserve philanthropic integrity, Mahavir Trust implements a blind-appraisal system. Evaluation combines validated household economic criteria with consistent academic commitment.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Domicile or institutional enrollment inside the State of Odisha",
                  "Verified annual household income below threshold limits (means review)",
                  "Minimum qualifying percentage in Class 10/12 or undergraduate examinations",
                  "Direct fee disbursement to accredited colleges/institutions (zero intermediary cash)",
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
                    Important Statutory Note:
                  </span>
                  Official income certificate thresholds and exact scholarship quotas will be formally issued by the Trustee Board ahead of the academic admissions cycle.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FDFBF7] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                Appraisal Journey
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Application & Document Submission
                    </h4>
                    <p className="text-xs text-[#4A5568] mt-1">
                      Academic transcripts, enrollment proof, and income documentation uploaded via the student registry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Independent Document Verification
                    </h4>
                    <p className="text-xs text-[#4A5568] mt-1">
                      Field/telephonic confirmation with institutional registrar and local administration records.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#0B3B24] text-[#E4C88A] font-serif font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B3B24]">
                      Committee Interview & Scholar Onboarding
                    </h4>
                    <p className="text-xs text-[#4A5568] mt-1">
                      Academic aspirations assessment, mentor pairing, and institution-level payment schedule release.
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
              Nurturing character, professional competence, and community spirit across our scholar fraternity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <Users className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                1-on-1 Mentorship
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Scholars are paired with professors and alumni for continual guidance through their academic syllabus and career choices.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <BookOpen className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Textbook & Digital Grants
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Providing specialized academic books, reference sets, and digital access subscriptions for technical students.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <Compass className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Career Incubation
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Resume workshops, soft skill coaching, and mock interview drills conducted with corporate industry volunteers.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
              <HeartHandshake className="w-6 h-6 text-[#0B3B24]" />
              <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                Community Service Hours
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Scholars pay it forward by tutoring younger students in their home villages, creating a self-sustaining cycle of upliftment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED PERSPECTIVES & TESTIMONIALS */}
      <section id="stories" className="py-20 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="gold">Voices of Vision</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
              Perspectives from Odisha’s Academic Community
            </h2>
            <p className="text-sm text-[#4A5568]">
              Observations from educational leaders and advisors on the structural necessity of Mahavir Trust’s mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRUST_CONFIG.stories.map((story, idx) => (
              <Card
                key={idx}
                variant="accent"
                className="p-8 space-y-4 bg-[#FDFBF7] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
                    {story.category}
                  </span>
                  <p className="font-serif text-base sm:text-lg italic text-[#1C2421] leading-relaxed">
                    “{story.quote}”
                  </p>
                </div>
                <div className="pt-4 border-t border-[#0B3B24]/10">
                  <p className="text-sm font-bold text-[#0B3B24]">
                    {story.speaker}
                  </p>
                  <p className="text-xs text-[#4A5568]">
                    {story.designation}
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
                MAHAVIR TRUST welcomes academicians, professionals, corporate partners, and university faculties who share a commitment to educational equity in Odisha.
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
                      Dedicate 2 hours per month to guide an undergraduate scholar in your discipline.
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

            {/* Interactive Volunteer Inquiry Form */}
            <div className="lg:col-span-6 bg-[#F4EFE6] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24] mb-2">
                Register Your Interest
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Submit your details to connect with the Secretariat regarding mentorship or volunteering.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-[#0B3B24] text-white rounded-sm space-y-2 text-center animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-[#E4C88A] mx-auto" />
                  <h4 className="font-serif text-lg font-bold">
                    Acknowledgment Received
                  </h4>
                  <p className="text-xs text-white/80">
                    Thank you for expressing interest in MAHAVIR TRUST. The Secretariat coordinator will review and reach out ahead of our upcoming orientation session.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3B24] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Pattnaik"
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B3B24] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0B3B24] mb-1">
                        Phone / Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B3B24] mb-1">
                      Area of Interest / Participation *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                    >
                      <option value="mentorship">Academic & Career Mentorship</option>
                      <option value="scholarship">Student Scholarship Inquiry</option>
                      <option value="institutional">College / Institutional Partnership</option>
                      <option value="volunteer">Community Field Volunteering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B3B24] mb-1">
                      Brief Background Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your current affiliation, academic background, or how you wish to collaborate..."
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center">
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Submit Volunteer Registration</span>
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
              Every rupee directed to MAHAVIR TRUST goes toward verified tuition fees and student enablement. We operate on a direct-to-institution disbursement framework.
            </p>

            <div className="p-5 rounded-sm bg-[#0B3B24]/80 border border-[#C5A059]/30 text-left max-w-xl mx-auto space-y-2">
              <div className="flex items-center gap-2 text-[#E4C88A] text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Pre-Launch Regulatory Notice</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Online payment gateways and tax-exemption receipts (80G) will be active subsequent to statutory registration publication. You may register donor pledges or institutional endowments with the Secretariat.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${TRUST_CONFIG.contact.generalEmail}?subject=Donation%20Pledge%20Inquiry%20-%20Mahavir%20Trust`}>
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

      {/* 10. GOVERNANCE & ETHICAL CHARTER */}
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
              MAHAVIR TRUST strictly abhors misrepresentation. In compliance with the trust deed and charitable norms in the State of Odisha, India, our accounts will undergo certified statutory audits annually. All beneficiary lists are subject to academic council oversight, ensuring zero nepotism and absolute equity.
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
    </div>
  );
}
