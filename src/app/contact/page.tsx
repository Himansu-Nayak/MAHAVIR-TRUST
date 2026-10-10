"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TRUST_CONFIG } from "@/lib/config";
import { MapPin, Mail, AlertCircle, Send, CheckCircle2, Loader2, FileText } from "lucide-react";
import { submitInquiry } from "@/lib/api";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Scholarship Guidance",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await submitInquiry({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        message: formData.message,
      });

      setReferenceId(response.referenceId || null);
      setFormSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected network error occurred while connecting to the secretariat.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  {referenceId && (
                    <p className="text-xs font-mono text-[#E4C88A] bg-black/20 py-1 px-3 rounded inline-block">
                      Reference ID: #{referenceId}
                    </p>
                  )}
                  <p className="text-xs text-white/80 leading-relaxed">
                    Thank you for reaching out to MAHAVIR TRUST. Your inquiry has been securely stored in the secretariat registry and our team will reply via official correspondence.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-xs !border-[#E4C88A] !text-[#E4C88A] hover:!bg-[#E4C88A]/10"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        category: "Scholarship Guidance",
                        message: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-sm text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
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
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none text-[#1C2421]"
                      >
                        <option value="Scholarship Guidance">Scholarship Guidance</option>
                        <option value="Institutional Liaison">College / Institutional Liaison</option>
                        <option value="Donor Consultation">Donor / Endowment Consultation</option>
                        <option value="Governance & Audit">Governance / Audit Query</option>
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share the details of your inquiry or proposal..."
                      className="w-full text-xs p-2.5 rounded-xs bg-[#FDFBF7] border border-[#0B3B24]/20 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                        <span>Transmitting to Secretariat...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        <span>Send Message to Secretariat</span>
                      </>
                    )}
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
