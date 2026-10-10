"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TRUST_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown, Award, Heart, PhoneCall, ShieldCheck } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Institutional Bar (Inspired by premier educational institutions) */}
      <div className="bg-[#072617] text-[#EDE6D8] border-b border-[#C5A059]/20 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#E4C88A]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Odisha Philanthropic Educational Initiative</span>
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/70">
              Need-Cum-Merit Grants & Leadership Incubation
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <Link
              href="#governance"
              className="text-white/80 hover:text-[#E4C88A] transition-colors"
            >
              Public Disclosure
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="#contact"
              className="text-white/80 hover:text-[#E4C88A] transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-[#C5A059]" />
              <span>Contact Secretariat</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md border-[#0B3B24]/15 shadow-sm py-3"
            : "bg-[#FDFBF7] border-[#0B3B24]/10 py-4.5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Institutional Identity / Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3.5 group focus:outline-none"
            aria-label="MAHAVIR TRUST Homepage"
          >
            <div className="w-10 h-10 rounded-sm bg-[#0B3B24] border border-[#C5A059] flex items-center justify-center text-[#E4C88A] font-serif font-bold text-xl shadow-xs group-hover:bg-[#072617] transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-wider font-bold text-lg sm:text-xl text-[#0B3B24] leading-tight group-hover:text-[#072617] transition-colors">
                MAHAVIR TRUST
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C5A059] font-sans">
                Odisha Educational Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {TRUST_CONFIG.navigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-[#1C2421] hover:text-[#0B3B24] rounded-sm transition-colors group-hover:text-[#0B3B24]"
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown className="w-3.5 h-3.5 text-[#1C2421]/60 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-72 bg-[#FDFBF7] border border-[#0B3B24]/15 rounded-sm shadow-xl p-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      {item.children?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block p-2.5 rounded-xs hover:bg-[#F4EFE6] transition-colors group/sub"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-[#0B3B24]">
                            <span>{subItem.label}</span>
                            {subItem.isPlanned && (
                              <span className="text-[9px] uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-xs border border-amber-300">
                                Planned
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#4A5568] mt-0.5 leading-snug">
                            {subItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link href="#scholarships">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Apply Scholarship</span>
              </Button>
            </Link>

            <Link href="#donate">
              <Button variant="gold" size="sm" className="gap-1.5 shadow-xs">
                <Heart className="w-3.5 h-3.5 fill-[#072617] text-[#072617]" />
                <span>Support Us</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B3B24] hover:bg-[#F4EFE6] rounded-sm transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-t border-[#0B3B24]/10 px-4 pt-3 pb-6 space-y-3">
            {TRUST_CONFIG.navigation.map((item) => (
              <div key={item.label} className="border-b border-[#0B3B24]/5 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold text-[#0B3B24] py-1.5"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-3 mt-1 space-y-1.5">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-[#4A5568] hover:text-[#0B3B24] py-1"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <Link href="#scholarships" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Apply Scholarship
                </Button>
              </Link>
              <Link href="#donate" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="gold" className="w-full justify-center">
                  Support the Trust
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
