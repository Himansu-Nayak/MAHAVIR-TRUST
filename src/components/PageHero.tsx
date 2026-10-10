import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#072617] text-[#EDE6D8] pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#C5A059]/20">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-white/60">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#E4C88A] transition-colors focus:outline-none"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-[#E4C88A] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#E4C88A] font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title & Badge */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-xs bg-[#0B3B24] border border-[#C5A059]/30 text-[11px] font-semibold uppercase tracking-wider text-[#E4C88A]">
              {badge}
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans max-w-2xl">
            {description}
          </p>
          {actions && <div className="pt-2 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
