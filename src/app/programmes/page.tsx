import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { GraduationCap, Award, School, Users, BookOpen, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational & Community Programmes — MAHAVIR TRUST",
  description:
    "Comprehensive overview of educational grant programmes, Project Samarth learning hubs, and mentorship initiatives by MAHAVIR TRUST in Odisha.",
};

export default function ProgrammesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Programmatic Portfolio"
        title="Educational Initiatives & Learning Hubs"
        description="Explore the full spectrum of educational grants, rural study centers, and career incubation cohorts designed to uplift students across Odisha."
        breadcrumbs={[{ label: "Programmes" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {/* Main 3 Initiatives in Depth */}
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <Badge variant="forest">Core Schemes</Badge>
              <h2 className="font-serif text-3xl font-bold text-[#0B3B24]">
                Proposed Programmatic Initiatives
              </h2>
            </div>

            <div className="space-y-8">
              {TRUST_CONFIG.programs.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-[#F4EFE6] border border-[#0B3B24]/15 rounded-sm p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-8 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      Program {idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                      {item.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#0B3B24]/80">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      {item.overview}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#0B3B24]">
                      <span className="font-medium">
                        <strong>Target Region:</strong> {item.scope}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-[#FDFBF7] p-6 rounded-xs border border-[#0B3B24]/10 space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#9E7D3B] block">
                      Operational Status
                    </span>
                    <p className="text-xs text-[#4A5568] leading-snug">
                      {item.status}
                    </p>
                    <div className="pt-2">
                      <Link href="/scholarships">
                        <Button variant="outline" size="sm" className="w-full justify-center">
                          Appraisal Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Support Ecosystem */}
          <div className="space-y-8 pt-8 border-t border-[#0B3B24]/10">
            <div className="max-w-2xl space-y-2">
              <Badge variant="gold">Holistic Enablement</Badge>
              <h2 className="font-serif text-3xl font-bold text-[#0B3B24]">
                Complementary Student Services
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568]">
                Beyond financial subsidies, MAHAVIR TRUST intends to provide supportive infrastructure to ensure student retention and career outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
                <Users className="w-6 h-6 text-[#0B3B24]" />
                <h3 className="font-serif text-lg font-bold text-[#0B3B24]">
                  Mentorship Cohorts
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Scholars receive structured 1-on-1 advice regarding degree specializations, competitive exams, and interview readiness.
                </p>
              </Card>

              <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
                <BookOpen className="w-6 h-6 text-[#0B3B24]" />
                <h3 className="font-serif text-lg font-bold text-[#0B3B24]">
                  Textbook Grants
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Essential syllabus reference book sets provided to students in engineering, commerce, and science streams.
                </p>
              </Card>

              <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
                <Compass className="w-6 h-6 text-[#0B3B24]" />
                <h3 className="font-serif text-lg font-bold text-[#0B3B24]">
                  Career Guidance
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Workshops conducted in partnership with corporate and academic volunteers to prepare students for campus hiring.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
