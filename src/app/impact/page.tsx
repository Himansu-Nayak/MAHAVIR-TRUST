import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { MapPin, Target, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Impact Vision — MAHAVIR TRUST",
  description:
    "Discover MAHAVIR TRUST's district outreach model and educational access vision across all 30 districts of Odisha.",
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Regional Outreach"
        title="Educational Impact Vision for Odisha"
        description="Our programs are structured to progressively expand educational access across semi-urban and rural clusters across all 30 districts of Odisha, India."
        breadcrumbs={[{ label: "Community Impact" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          {/* Mission Perspectives */}
          <div className="space-y-6">
            <Badge variant="forest">Guiding Charter</Badge>
            <h2 className="font-serif text-3xl font-bold text-[#0B3B24]">
              Foundational Perspectives on Regional Upliftment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TRUST_CONFIG.perspectives.map((item, idx) => (
                <Card key={idx} variant="accent" className="p-8 space-y-4 bg-[#FDFBF7] flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A059]">
                      {item.focus}
                    </span>
                    <p className="font-serif text-lg italic text-[#1C2421] leading-relaxed">
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

          {/* Regional Framework */}
          <div className="bg-[#F4EFE6] p-8 sm:p-12 rounded-sm border border-[#0B3B24]/15 space-y-8">
            <div className="max-w-2xl space-y-2">
              <Badge variant="gold">Geographic Focus</Badge>
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24]">
                Phase-Wise District Engagement Strategy
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568]">
                While the Trust headquarters and administrative secretariat are based in Bhubaneswar, outreach will prioritize aspirational rural clusters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <span className="text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                  Phase 1: Pilot Cluster
                </span>
                <p className="font-serif text-lg font-bold text-[#0B3B24]">
                  Khordha & Cuttack
                </p>
                <p className="text-xs text-[#4A5568]">
                  Establishing initial college liaison protocols and community study hub proof-of-concepts.
                </p>
              </div>

              <div className="p-6 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <span className="text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                  Phase 2: Coastal & Central
                </span>
                <p className="font-serif text-lg font-bold text-[#0B3B24]">
                  Puri, Jagatsinghpur, Dhenkanal
                </p>
                <p className="text-xs text-[#4A5568]">
                  Expanding tuition subsidies for undergraduate science, arts, and commerce students.
                </p>
              </div>

              <div className="p-6 bg-[#FDFBF7] rounded-xs border border-[#0B3B24]/10 space-y-2">
                <span className="text-xs font-bold text-[#0B3B24] uppercase tracking-wider">
                  Phase 3: Southern & Western
                </span>
                <p className="font-serif text-lg font-bold text-[#0B3B24]">
                  Koraput, Rayagada, Sambalpur, Balangir
                </p>
                <p className="text-xs text-[#4A5568]">
                  Partnering with regional polytechnics and degree colleges to reach underrepresented communities.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/volunteer">
                <Button variant="primary" size="md">
                  Join as Regional Field Volunteer
                </Button>
              </Link>
              <Link href="/governance">
                <Button variant="secondary" size="md">
                  Fiduciary Guidelines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
