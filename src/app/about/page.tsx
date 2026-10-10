import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { ShieldCheck, Target, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — MAHAVIR TRUST",
  description:
    "Learn about MAHAVIR TRUST's founding vision, philanthropic heritage, and dedication to educational access in Odisha, India.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Institutional Heritage"
        title="Founded to Advance Educational Dignity in Odisha"
        description="MAHAVIR TRUST was conceived as a non-profit philanthropic initiative to ensure that deserving students across Odisha are never forced to abandon their studies due to household financial distress."
        breadcrumbs={[{ label: "About Trust" }]}
        actions={
          <>
            <Link href="/governance">
              <Button variant="gold" size="sm">
                Governance Charter
              </Button>
            </Link>
            <Link href="/scholarships">
              <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                Explore Scholarships
              </Button>
            </Link>
          </>
        }
      />

      {/* Narrative Section */}
      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="forest">Our Core Belief</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24] leading-snug">
                True Philanthropy Enables Self-Reliance Through Education.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Higher education is the most reliable ladder of socioeconomic mobility in India. Yet, thousands of capable students across Odisha find that secondary school graduation is where their educational journeys abruptly end.
              </p>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                MAHAVIR TRUST addresses this structural drop-off. By establishing direct-to-institution course fee subsidies, we eliminate administrative frictions and ensure transparent support for scholars pursuing degrees in engineering, commerce, sciences, and public administration.
              </p>

              <div className="pt-4 border-t border-[#0B3B24]/10 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B3B24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#0B3B24]">
                      Zero Cash Intermediary Framework
                    </h3>
                    <p className="text-xs text-[#4A5568]">
                      Tuition subsidies are remitted directly to accredited university colleges upon admission confirmation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B3B24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#0B3B24]">
                      Mentorship as an Inseparable Pillar
                    </h3>
                    <p className="text-xs text-[#4A5568]">
                      Scholars receive regular career guidance from experienced academicians, corporate practitioners, and mentors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F4EFE6] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                Foundational Tenets
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Vision
                  </span>
                  <p className="text-xs text-[#1C2421] leading-relaxed">
                    An Odisha where every hardworking student has access to quality higher education and dignified career opportunities, free from financial anxiety.
                  </p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Mission
                  </span>
                  <p className="text-xs text-[#1C2421] leading-relaxed">
                    To disburse targeted tuition subsidies, build community study hubs, and nurture a culture of student leadership and reciprocity across all 30 districts of Odisha.
                  </p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Values
                  </span>
                  <p className="text-xs text-[#1C2421] leading-relaxed">
                    Fiduciary transparency, objective merit-cum-means appraisal, zero political or sectarian bias, and deep respect for student dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Grid */}
      <section className="py-16 bg-[#F4EFE6] border-t border-[#0B3B24]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="gold">Action Agenda</Badge>
            <h2 className="font-serif text-3xl font-bold text-[#0B3B24]">
              How the Trust Executes its Charter
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568]">
              Targeted, auditable interventions tailored to resolve the foundational hurdles faced by Odisha’s student community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_CONFIG.pillars.map((pillar) => (
              <Card key={pillar.title} variant="default" className="p-6 space-y-3 bg-[#FDFBF7]">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-base font-bold text-[#0B3B24]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/programmes">
              <Button variant="primary" size="md">
                <span>View All Proposed Programmes</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
