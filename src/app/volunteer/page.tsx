"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Building2, CheckCircle2, Send, HeartHandshake, ShieldCheck } from "lucide-react";

export default function VolunteerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("mentorship");

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Community Engagement"
        title="Volunteer & Mentorship Network"
        description="Lend your knowledge, academic experience, and time to guide first-generation college scholars across Odisha toward professional self-reliance."
        breadcrumbs={[{ label: "Get Involved" }, { label: "Volunteer & Mentor" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="forest">Ways to Contribute</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B3B24]">
                Shape a Scholar’s Career Through Purposeful Mentorship.
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Many capable students discontinue studies or struggle in the job market not due to lack of talent, but because they have never interacted with a professional in their field. Your mentorship can change that trajectory.
              </p>

              <div className="space-y-4 pt-2">
                <Card variant="default" className="p-6 space-y-2 bg-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-[#0B3B24]">
                    <Users className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-serif text-base font-bold">
                      Academic & Career Mentors
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    Commit 2 hours monthly to review coursework dilemmas, offer entrance exam guidance, and share real-world career expectations.
                  </p>
                </Card>

                <Card variant="default" className="p-6 space-y-2 bg-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-[#0B3B24]">
                    <Building2 className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-serif text-base font-bold">
                      Institutional & College Coordinators
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    Faculty members in Odisha colleges who can identify deserving candidates and assist with authentic verification.
                  </p>
                </Card>

                <Card variant="default" className="p-6 space-y-2 bg-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-[#0B3B24]">
                    <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="font-serif text-base font-bold">
                      Community Study Hub Volunteers
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    Help organize and steward Project Samarth reading centers in rural and semi-urban clusters.
                  </p>
                </Card>
              </div>
            </div>

            {/* Registration Form with Complete Accessibility */}
            <div className="lg:col-span-6 bg-[#F4EFE6] p-8 sm:p-10 rounded-sm border border-[#0B3B24]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#0B3B24] mb-2">
                Register as a Mentor or Volunteer
              </h3>
              <p className="text-xs text-[#4A5568] mb-6">
                Submit your profile to join the Mahavir Trust volunteer orientation cohort.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-[#0B3B24] text-white rounded-sm space-y-3 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#E4C88A] mx-auto" />
                  <h4 className="font-serif text-xl font-bold">
                    Volunteer Registration Recorded
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Thank you for your willingness to support Odisha’s students. The Secretariat team will review your background and communicate orientation details via email.
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
                  <div>
                    <label
                      htmlFor="vol-name"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="vol-name"
                      name="fullname"
                      type="text"
                      required
                      placeholder="e.g. Prof. Sandeep Jena"
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="vol-email"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="vol-email"
                        name="email"
                        type="email"
                        required
                        placeholder="sandeep@example.com"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vol-phone"
                        className="block text-xs font-semibold text-[#0B3B24] mb-1"
                      >
                        Phone / Contact *
                      </label>
                      <input
                        id="vol-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-interest"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Role of Interest *
                    </label>
                    <select
                      id="vol-interest"
                      name="role"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                    >
                      <option value="mentorship">Academic & Career Mentorship</option>
                      <option value="faculty">College Faculty / Campus Liaison</option>
                      <option value="hub">Project Samarth Learning Hub Steward</option>
                      <option value="general">General Community Volunteering</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-notes"
                      className="block text-xs font-semibold text-[#0B3B24] mb-1"
                    >
                      Academic / Professional Background
                    </label>
                    <textarea
                      id="vol-notes"
                      name="notes"
                      rows={3}
                      placeholder="Brief note on your qualifications, employer/institution, or subject areas you can mentor in..."
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center">
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    <span>Submit Volunteer Registration</span>
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
