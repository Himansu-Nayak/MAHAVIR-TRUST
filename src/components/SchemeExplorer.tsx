"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GraduationCap, BookOpen, Award, ArrowRight, ShieldCheck, Clock, Users, Building2 } from "lucide-react";

export function SchemeExplorer() {
  const [activeTab, setActiveTab] = useState<"all" | "grants" | "stem" | "mentorship">("all");

  const initiatives = [
    {
      id: "shiksha-protsahan",
      category: "grants",
      badge: "Undergraduate Tuition Grant",
      title: "Mahavir Shiksha Protsahan Yojana",
      tagline: "Proposed Need-cum-Merit Higher Education Tuition Fee Grants",
      target: "Underprivileged undergraduate scholars across Odisha",
      criteria: "Minimum 65% aggregate in +2 / Higher Secondary; verified household annual income criteria.",
      disbursement: "100% Direct College Disbursal (Zero Cash Policy)",
      timeline: "Annual Academic Cycle (Provisional)",
      icon: GraduationCap,
      href: "/scholarships",
    },
    {
      id: "pratibha-fellowship",
      category: "stem",
      badge: "Competitive Exam & STEM Fellowship",
      title: "Pratibha Excellence Fellowship",
      tagline: "Proposed Entrance Test & Professional Certification Stipend",
      target: "Merit-ranked candidates preparing for national professional and graduate admissions",
      criteria: "Demonstrated academic aptitude in state/national entrance rankings and STEM disciplines.",
      disbursement: "Direct study grant toward examination fees & learning resources",
      timeline: "Quarterly Application Review (Draft Proposal)",
      icon: Award,
      href: "/scholarships",
    },
    {
      id: "samarth-learning",
      category: "mentorship",
      badge: "Community Infrastructure",
      title: "Project Samarth: Community Study Hubs",
      tagline: "Proposed Reference Study Points & High-Speed Learning Desks",
      target: "Rural and semi-urban scholars lacking quiet study spaces and exam texts",
      criteria: "Open to enrolled higher education students in pilot cluster districts.",
      disbursement: "Physical infrastructure, text archives, and supervised study halls",
      timeline: "Phase 1 Logistics & Cluster Pilot (Khordha)",
      icon: BookOpen,
      href: "/programmes",
    },
    {
      id: "mentorship-circle",
      category: "mentorship",
      badge: "Career Stewardship",
      title: "Academic & Career Mentorship Circle",
      tagline: "1-to-1 Guidance from University Faculty & Industry Leaders",
      target: "First-generation degree college students across Odisha",
      criteria: "Enrolled Mahavir Trust grant recipients and university partner referrals.",
      disbursement: "Structured monthly advisory sessions and mock career reviews",
      timeline: "Year-round Volunteer Cohorts",
      icon: Users,
      href: "/volunteer",
    },
  ];

  const filtered = activeTab === "all" ? initiatives : initiatives.filter((item) => item.category === activeTab);

  return (
    <section id="programs" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#0B3B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="gold">Institutional Initiatives</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24] tracking-tight">
            Academic Grants & Student Support Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            Explorable educational interventions designed to address critical barriers across a scholar’s journey from college entry to professional independence.
          </p>

          {/* Interactive Filter Tabs matching RCM academic program selector */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors ${
                activeTab === "all"
                  ? "bg-[#0B3B24] text-white shadow-xs"
                  : "bg-white/80 text-[#0B3B24] hover:bg-white border border-[#0B3B24]/10"
              }`}
            >
              All Initiatives
            </button>
            <button
              onClick={() => setActiveTab("grants")}
              className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors ${
                activeTab === "grants"
                  ? "bg-[#0B3B24] text-white shadow-xs"
                  : "bg-white/80 text-[#0B3B24] hover:bg-white border border-[#0B3B24]/10"
              }`}
            >
              Tuition Grants
            </button>
            <button
              onClick={() => setActiveTab("stem")}
              className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors ${
                activeTab === "stem"
                  ? "bg-[#0B3B24] text-white shadow-xs"
                  : "bg-white/80 text-[#0B3B24] hover:bg-white border border-[#0B3B24]/10"
              }`}
            >
              STEM Fellowships
            </button>
            <button
              onClick={() => setActiveTab("mentorship")}
              className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors ${
                activeTab === "mentorship"
                  ? "bg-[#0B3B24] text-white shadow-xs"
                  : "bg-white/80 text-[#0B3B24] hover:bg-white border border-[#0B3B24]/10"
              }`}
            >
              Mentorship & Study Hubs
            </button>
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                variant="elevated"
                className="p-7 bg-[#FDFBF7] border-[#0B3B24]/15 hover:border-[#C5A059] transition-all duration-200 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7D3B] bg-[#9E7D3B]/10 px-2.5 py-1 rounded-xs">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#0B3B24] text-[#E4C88A] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B3B24] group-hover:text-[#072617] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#C5A059] font-medium mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-[#4A5568] border-t border-[#0B3B24]/10 pt-4">
                    <div className="flex items-start gap-2">
                      <strong className="text-[#0B3B24] shrink-0 font-semibold">Target Group:</strong>
                      <span>{item.target}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#0B3B24] shrink-0 font-semibold">Criteria:</strong>
                      <span>{item.criteria}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <strong className="text-[#0B3B24] shrink-0 font-semibold">Disbursal:</strong>
                      <span className="font-mono text-[#0B3B24] font-medium">{item.disbursement}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0B3B24]/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#4A5568] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{item.timeline}</span>
                  </span>

                  <Link href={item.href}>
                    <Button variant="secondary" size="sm" className="group-hover:border-[#C5A059]">
                      <span>Program Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
