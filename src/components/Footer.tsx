import React from "react";
import Link from "next/link";
import { TRUST_CONFIG } from "@/lib/config";
import { ShieldAlert, Mail, MapPin, ExternalLink, ArrowRight, BookOpen, HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#072617] text-[#EDE6D8] border-t border-[#C5A059]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Mandatory Transparency Notice Box */}
        <div className="bg-[#0B3B24]/70 border border-[#C5A059]/30 rounded-sm p-4 sm:p-5 mb-14 text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#E4C88A] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#E4C88A] tracking-wide uppercase text-[11px]">
                Statutory & Compliance Transparency Notice
              </p>
              <p className="text-white/80 text-[12px] mt-0.5 leading-relaxed">
                {TRUST_CONFIG.legal.registrationNotice} No live transactions, fee collections, or financial settlements are processed on this pre-launch institutional portal.
              </p>
            </div>
          </div>
          <Link
            href="#governance"
            className="inline-flex items-center gap-1.5 text-xs text-[#E4C88A] hover:underline font-semibold whitespace-nowrap"
          >
            <span>Governance Principles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm bg-[#0B3B24] border border-[#C5A059] flex items-center justify-center text-[#E4C88A] font-serif font-bold text-xl">
                M
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-wider">
                MAHAVIR TRUST
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              {TRUST_CONFIG.subtext}
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  {TRUST_CONFIG.contact.addressLine1}, {TRUST_CONFIG.contact.city}, {TRUST_CONFIG.contact.state} - {TRUST_CONFIG.contact.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`mailto:${TRUST_CONFIG.contact.generalEmail}`}
                  className="hover:text-[#E4C88A] transition-colors"
                >
                  {TRUST_CONFIG.contact.generalEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Scholarship Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#E4C88A]">
              Scholarship Initiatives
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="#scholarships" className="hover:text-white transition-colors">
                  Shiksha Protsahan Yojana
                </Link>
              </li>
              <li>
                <Link href="#scholarships" className="hover:text-white transition-colors">
                  Pratibha Excellence Fellowship
                </Link>
              </li>
              <li>
                <Link href="#scholarships" className="hover:text-white transition-colors">
                  STEM & Women in Tech Grants
                </Link>
              </li>
              <li>
                <Link href="#eligibility" className="hover:text-white transition-colors">
                  Eligibility & Appraisal Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Support & Impact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#E4C88A]">
              Student & Community
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="#support" className="hover:text-white transition-colors">
                  Project Samarth Learning Hubs
                </Link>
              </li>
              <li>
                <Link href="#support" className="hover:text-white transition-colors">
                  Career Mentorship Network
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-white transition-colors">
                  Odisha District Impact Log
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-white transition-colors">
                  Perspectives & Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Engagement & Disclosures */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#E4C88A]">
              Institutional Ethics
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="#governance" className="hover:text-white transition-colors">
                  Trustee Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="#participate" className="hover:text-white transition-colors">
                  Volunteer & Mentor Sign-Up
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Grievance & Secretariat Desk
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Annual Audit Standards (Draft)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} MAHAVIR TRUST. All Rights Reserved. Serving Odisha, India.</p>
          <div className="flex items-center space-x-6 text-xs">
            <Link href="#governance" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="#governance" className="hover:text-white transition-colors">
              Privacy Disclosures
            </Link>
            <Link href="#governance" className="hover:text-white transition-colors">
              Fiduciary Charter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
