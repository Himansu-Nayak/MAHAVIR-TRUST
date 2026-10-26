"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquareText, PhoneCall, FileDown, HeartHandshake, X } from "lucide-react";

export function QuickActionDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Floating Right Dock */}
      <aside
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col bg-[#072617]/95 backdrop-blur-md border-l border-y border-[#C5A059]/40 rounded-l-md shadow-2xl overflow-hidden py-1 transition-all"
        aria-label="Quick Action Services"
      >
        <Link
          href="/contact"
          className="flex items-center gap-3 px-3.5 py-2.5 text-white/90 hover:text-[#E4C88A] hover:bg-white/5 transition-colors group relative border-b border-white/5"
          title="Send Official Inquiry"
        >
          <div className="w-8 h-8 rounded-sm bg-[#0B3B24] border border-[#C5A059]/30 flex items-center justify-center text-[#E4C88A] group-hover:scale-105 transition-transform">
            <MessageSquareText className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium tracking-wide pr-2">Quick Inquiry</span>
        </Link>

        <Link
          href="/scholarships"
          className="flex items-center gap-3 px-3.5 py-2.5 text-white/90 hover:text-[#E4C88A] hover:bg-white/5 transition-colors group relative border-b border-white/5"
          title="Explore Scholarship Schemes"
        >
          <div className="w-8 h-8 rounded-sm bg-[#0B3B24] border border-[#C5A059]/30 flex items-center justify-center text-[#E4C88A] group-hover:scale-105 transition-transform">
            <FileDown className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium tracking-wide pr-2">Scholarship Prospectus</span>
        </Link>

        <Link
          href="/volunteer"
          className="flex items-center gap-3 px-3.5 py-2.5 text-white/90 hover:text-[#E4C88A] hover:bg-white/5 transition-colors group relative border-b border-white/5"
          title="Join Volunteer Network"
        >
          <div className="w-8 h-8 rounded-sm bg-[#0B3B24] border border-[#C5A059]/30 flex items-center justify-center text-[#E4C88A] group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium tracking-wide pr-2">Mentor / Volunteer</span>
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-3 px-3.5 py-2.5 text-white/90 hover:text-[#E4C88A] hover:bg-white/5 transition-colors group relative"
          title="Contact Secretariat"
        >
          <div className="w-8 h-8 rounded-sm bg-[#0B3B24] border border-[#C5A059]/30 flex items-center justify-center text-[#E4C88A] group-hover:scale-105 transition-transform">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium tracking-wide pr-2">Secretariat Desk</span>
        </Link>
      </aside>

      {/* Mobile Floating Action Button & Modal */}
      <div className="xl:hidden fixed bottom-6 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Quick Support Navigation"
          className="w-13 h-13 rounded-full bg-[#072617] text-[#E4C88A] border-2 border-[#C5A059] shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquareText className="w-6 h-6" />}
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 w-64 bg-[#072617] border border-[#C5A059]/40 rounded-md shadow-2xl p-2.5 space-y-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#E4C88A] block px-2 pt-1 pb-0.5">
              MAHAVIR Quick Actions
            </span>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-xs text-xs text-white hover:bg-white/10 transition-colors"
            >
              <MessageSquareText className="w-4 h-4 text-[#C5A059]" />
              <span>Send Official Inquiry</span>
            </Link>
            <Link
              href="/scholarships"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-xs text-xs text-white hover:bg-white/10 transition-colors"
            >
              <FileDown className="w-4 h-4 text-[#C5A059]" />
              <span>Scholarship Prospectus</span>
            </Link>
            <Link
              href="/volunteer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-xs text-xs text-white hover:bg-white/10 transition-colors"
            >
              <HeartHandshake className="w-4 h-4 text-[#C5A059]" />
              <span>Mentor a Scholar</span>
            </Link>
            <Link
              href="/governance"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-xs text-xs text-white hover:bg-white/10 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
              <span>Public Governance</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
