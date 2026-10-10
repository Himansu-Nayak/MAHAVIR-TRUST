"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { MapPin, Mail, PhoneCall, AlertCircle, Send, CheckCircle2, FileText } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Direct Secretariat Desk"
        title="Contact MAHAVIR TRUST"
        description="Connect with our administrative secretariat for institutional collaborations, scholarship inquiries, and governance disclosures."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="forest">Secretariat Information</Badge>
              <h2 className="font-serif text-3xl font-bold text-[#0B3B24]">
                Reach Out to Our Administrative Desk
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                We welcome inquiries from students, university administrators, educators, and prospective institutional donors.
              </p>

              <div className="space-y-4 pt-2">
                <Card variant="default" className="p-6 space-y-2 bg-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-[#0B3B24]">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-serif text-base font-bold">
                      Secretariat Location
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {TRUST_CONFIG.contact.addressLine1}, {TRUST_CONFIG.contact.city}, {TRUST_CONFIG.contact.state} - {TRUST_CONFIG.contact.pin}
                  </p>
                  <p className="text-[11px] text-[#9E7D3B] font-medium pt-1">
                    {TRUST_CONFIG.contact.verificationStatus}
                  </p>
                </Card>

                <Card variant="default" className="p-6 space-y-2 bg-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-[#0B3B24]">
                    <Mail className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-serif text-base font-bold">
                      Email Inquiries
                    </h3>
                  </div>
                  <div className="text-xs text-[#4A5568] space-y-1">
                    <p>
                      General Secretariat:{" "}
                      <a href={`mailto:${TRUST_CONFIG.contact.generalEmail}`} className="underline text-[#0B3B24] font-medium">
                        {TRUST_CONFIG.contact.generalEmail}
                      </a>
                    </p>
                    <p>
                      Scholarships Desk:{" "}
                      <a href={`mailto:${TRUST_CONFIG.contact.scholarshipEmail}`} className="underline text-[#0B3B24] font-medium">
                        {TRUST_CONFIG.contact.scholarshipEmail}
                      </a>
                    </p>
                  </div>
                </Card>

                <Card variant="default" className="p-6 space-y-2 bg-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-[#0B3B24]">
                    <FileText className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-serif text-base font-bold">
                      Grievance & Audit Redressal
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    Formal complaints or governance queries can be dispatched directly to the Secretariat with the subject tag <code>[AUDIT_QUERY]</code>.
                  </p>
                </Card>
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F4EFE6] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24] mb-2">
                Send an Official Message
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Fill in the form below to register your communication with our secretariat coordinators.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-[#0B3B24] text-white rounded-sm space-y-3 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#E4C88A] mx-auto" />
                  <h4 className="font-serif text-xl font-bold">
                    Message Logged with Secretariat
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Thank you for reaching out to MAHAVIR TRUST. Our team will review your message and reply via official email correspondence.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Ananya Dash"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="ananya@example.com"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Contact Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Subject Category *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                      >
                        <option value="scholarship">Scholarship Inquiry</option>
                        <option value="institutional">College / Institutional Liaison</option>
                        <option value="donor">Donor / Endowment Pledge</option>
                        <option value="governance">Governance / Audit Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Message Content *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Please share the details of your inquiry or proposal..."
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center">
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Send Message to Secretariat</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
