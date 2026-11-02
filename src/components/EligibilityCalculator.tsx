"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  HelpCircle,
} from "lucide-react";

const ODISHA_DISTRICTS = [
  "Khordha (Bhubaneswar)",
  "Cuttack",
  "Ganjam (Berhampur)",
  "Sambalpur",
  "Balasore",
  "Puri",
  "Mayurbhanj (Baripada)",
  "Sundargarh (Rourkela)",
  "Bhadrak",
  "Jajpur",
  "Kalahandi",
  "Koraput",
  "Bolangir",
  "Dhenkanal",
  "Angul",
  "Other Odisha District (All 30 Covered)",
];

export function EligibilityCalculator() {
  const [district, setDistrict] = useState("Khordha (Bhubaneswar)");
  const [stream, setStream] = useState("undergraduate");
  const [scoreBracket, setScoreBracket] = useState("first-class");
  const [incomeBracket, setIncomeBracket] = useState("below-150k");

  // Determine eligibility matches
  const isScoreEligible = scoreBracket !== "below-60";
  const isMeansEligible = incomeBracket === "below-150k" || incomeBracket === "150k-250k";
  const isHighMerit = scoreBracket === "distinction";

  return (
    <section id="eligibility-calculator" className="py-20 md:py-28 bg-[#F4EFE6] border-b border-[#0B3B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold">Interactive Scholar Discovery</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3B24] tracking-tight">
            Check Your Eligibility & Match Schemes
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            Select your academic stream, previous exam performance, and district in Odisha to discover qualifying tuition grants, STEM fellowships, and study hub benefits.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Criteria Controls */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xs border border-[#0B3B24]/15 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#0B3B24]/10">
              <span className="font-serif font-bold text-lg text-[#0B3B24]">
                Scholar Profile Criteria
              </span>
              <span className="text-[11px] text-[#7A5E24] font-semibold bg-[#C5A059]/15 px-2.5 py-0.5 rounded-xs">
                Odisha Domicile
              </span>
            </div>

            {/* 1. Domicile District */}
            <div className="space-y-1.5">
              <label htmlFor="calc-district" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                1. Home District (Odisha)
              </label>
              <select
                id="calc-district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
              >
                {ODISHA_DISTRICTS.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Academic Level & Stream */}
            <div className="space-y-1.5">
              <label htmlFor="calc-stream" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                2. Academic Stream / Degree
              </label>
              <select
                id="calc-stream"
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
              >
                <option value="undergraduate">Undergraduate Degree (B.Sc / B.Com / B.A)</option>
                <option value="engineering">Engineering & Technology (B.Tech / Diploma)</option>
                <option value="stem-fellowship">Competitive Exam & STEM Fellowship (GATE/State Exams)</option>
                <option value="higher-secondary">+2 Higher Secondary (Science / Commerce / Arts)</option>
              </select>
            </div>

            {/* 3. Previous Academic Score */}
            <div className="space-y-1.5">
              <label htmlFor="calc-score" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                3. Qualifying Exam Performance
              </label>
              <select
                id="calc-score"
                value={scoreBracket}
                onChange={(e) => setScoreBracket(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
              >
                <option value="distinction">85% and above (High Distinction)</option>
                <option value="first-class">70% to 84% Aggregate (First Division)</option>
                <option value="qualifying">60% to 69% Aggregate (Qualifying Merit)</option>
                <option value="below-60">Below 60% Aggregate</option>
              </select>
            </div>

            {/* 4. Annual Household Income */}
            <div className="space-y-1.5">
              <label htmlFor="calc-income" className="block text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                4. Annual Household Income Bracket
              </label>
              <select
                id="calc-income"
                value={incomeBracket}
                onChange={(e) => setIncomeBracket(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
              >
                <option value="below-150k">Below ₹1,50,000 / year (Priority Need Tier 1)</option>
                <option value="150k-250k">₹1,50,000 to ₹2,50,000 / year (Need Tier 2)</option>
                <option value="250k-400k">₹2,50,000 to ₹4,00,000 / year (Special Assistance)</option>
                <option value="above-400k">Above ₹4,00,000 / year (Mentorship & Study Hubs Only)</option>
              </select>
            </div>

            {/* Fiduciary disclaimer */}
            <div className="p-3 bg-[#F4EFE6] rounded-xs border border-[#0B3B24]/10 text-[11px] text-[#4A5568] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0B3B24] shrink-0 mt-0.5" />
              <span>
                Calculations are provisional estimates based on draft trustee appraisal norms. Formal income certificate verification is mandatory.
              </span>
            </div>
          </div>

          {/* Right Column: Matched Trust Schemes & Entitlements */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0B3B24]">
                Matched Institutional Initiatives
              </span>
              <span className="text-xs text-[#7A5E24] font-semibold">
                District Context: {district.split(" ")[0]}
              </span>
            </div>

            {/* Scheme 1: Higher Education Tuition Grant */}
            {isScoreEligible && isMeansEligible ? (
              <div className="bg-white p-6 rounded-xs border-2 border-[#C5A059] shadow-sm space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#C5A059] text-[#072617] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-bl-xs">
                  Primary Recommendation
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xs bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A5E24] tracking-wider block">
                      Undergraduate Need-cum-Merit Grant
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B3B24]">
                      Mahavir Shiksha Protsahan Yojana
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#4A5568] leading-relaxed">
                  You meet the provisional qualifying merit score and family means criteria for direct college tuition fee support across accredited degree institutions in Odisha.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                  <div className="bg-[#FDFBF7] p-2 rounded-xs border border-[#0B3B24]/10">
                    <span className="text-[10px] text-[#4A5568] block">Fee Disbursal</span>
                    <span className="font-bold text-[#0B3B24]">100% Direct to College</span>
                  </div>
                  <div className="bg-[#FDFBF7] p-2 rounded-xs border border-[#0B3B24]/10">
                    <span className="text-[10px] text-[#4A5568] block">Study Materials</span>
                    <span className="font-bold text-[#0B3B24]">Annual Textbook Grant</span>
                  </div>
                  <div className="bg-[#FDFBF7] p-2 rounded-xs border border-[#0B3B24]/10">
                    <span className="text-[10px] text-[#4A5568] block">Appraisal Norm</span>
                    <span className="font-bold text-[#0B3B24]">Blind Committee Review</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#0B3B24]/10">
                  <span className="text-[11px] text-[#0B3B24] font-medium">
                    Status: <span className="text-emerald-700 font-bold">Eligible to Apply</span>
                  </span>
                  <Link href="#contact-desk">
                    <Button variant="primary" size="sm">
                      <span>Request Secretariat Guidance</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : null}

            {/* Scheme 2: STEM & Entrance Exam Fellowship */}
            {(stream === "engineering" || stream === "stem-fellowship") && isScoreEligible ? (
              <div className="bg-white p-5 rounded-xs border border-[#0B3B24]/15 shadow-xs space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xs bg-[#C5A059]/20 text-[#7A5E24] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A5E24] tracking-wider block">
                      Competitive Entrance & Technical Grant
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B3B24]">
                      Pratibha Excellence Fellowship
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Eligible for national examination registration fee subsidies, STEM reference text allocations, and technical mentor advisories.
                </p>
                <div className="pt-1 flex items-center justify-between text-xs border-t border-[#0B3B24]/10">
                  <span className="text-[11px] text-emerald-700 font-bold">
                    ✓ Technical & STEM Stream Matched
                  </span>
                  <Link href="/scholarships">
                    <span className="text-[#0B3B24] hover:underline font-semibold flex items-center gap-1">
                      View Syllabus & Norms <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            ) : null}

            {/* Scheme 3: Universal Community Learning Hubs & Mentorship */}
            <div className="bg-white p-5 rounded-xs border border-[#0B3B24]/15 shadow-xs space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xs bg-[#0B3B24]/10 text-[#0B3B24] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0B3B24] tracking-wider block">
                    Community Infrastructure & Mentorship
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B3B24]">
                    Project Samarth & Mentorship Circle
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Open to all enrolled students across Odisha. Gain access to community reference study halls, competitive exam text archives, and 1-to-1 career guidance sessions.
              </p>
              <div className="pt-1 flex items-center justify-between text-xs border-t border-[#0B3B24]/10">
                <span className="text-[11px] text-emerald-700 font-bold">
                  ✓ Universal Access Across All 30 Districts
                </span>
                <Link href="/programmes">
                  <span className="text-[#0B3B24] hover:underline font-semibold flex items-center gap-1">
                    Hub Locations <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Fallback note if below minimum criteria */}
            {!isScoreEligible && (
              <div className="bg-amber-50 p-4 rounded-xs border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-bold block">Appraisal Guidance:</span>
                While tuition fee grants require a minimum 60% qualifying score, you are warmly invited to enroll in our <strong>Academic Mentorship Circle</strong> and utilize <strong>Project Samarth Study Hubs</strong> to strengthen your academic preparations.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
