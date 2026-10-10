import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Accordion, FAQItem } from "@/components/Accordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — MAHAVIR TRUST",
  description:
    "Find answers to common questions regarding scholarship eligibility, applications, governance, and institutional volunteering at MAHAVIR TRUST.",
};

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Scholarships",
    question: "Who is eligible to apply for Mahavir Trust scholarships?",
    answer:
      "Under our proposed framework, applicants must be residents of Odisha or enrolled in an accredited higher education college/institution in Odisha, coming from economically challenged household backgrounds with consistent prior academic performance.",
  },
  {
    category: "Scholarships",
    question: "How are scholarship funds disbursed?",
    answer:
      "MAHAVIR TRUST operates on a strict zero-cash intermediary policy. Approved tuition subsidies are disbursed directly to the verified bank account of the student's accredited college or university upon receipt of legitimate admission verification.",
  },
  {
    category: "Scholarships",
    question: "When will the application window open?",
    answer:
      "Formal scholarship application cycles are planned for the upcoming academic year following completion of statutory trust registration procedures and publication of the official Trustee Board gazette.",
  },
  {
    category: "Mentorship",
    question: "Is academic mentorship mandatory for scholarship recipients?",
    answer:
      "Yes. The Trust pairs financial assistance with 1-on-1 career guidance. Scholars are encouraged to participate in periodic mentoring sessions to build communication skills, career clarity, and professional readiness.",
  },
  {
    category: "Governance",
    question: "How does the Trust ensure fairness in selecting candidates?",
    answer:
      "Beneficiary evaluation will be conducted under the oversight of an independent Academic Advisory Committee using objective, means-and-merit metrics. Trustees do not possess unilateral discretion over scholarship allocations.",
  },
  {
    category: "Donations",
    question: "Can I donate online or claim Section 80G tax deductions right now?",
    answer:
      "No live payment gateway is currently active on this pre-launch informational platform. Formal tax-deductible receipting (Section 80G / 12A) will be introduced strictly following the completion of statutory registrations. Pledges can be recorded with our Secretariat desk.",
  },
  {
    category: "Volunteering",
    question: "How can academicians and professionals participate?",
    answer:
      "Educators, industry professionals, and civil society volunteers can register through our Volunteer portal to serve as career mentors, campus liaisons, or study center stewards.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Knowledge Base"
        title="Frequently Asked Questions"
        description="Comprehensive answers concerning scholarship appraisal, institutional governance, mentorship requirements, and public participation."
        breadcrumbs={[{ label: "Frequently Asked Questions" }]}
      />

      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B3B24]">
              Institutional & Scholarship Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568]">
              Select a question to view clear institutional guidelines and operational policies.
            </p>
          </div>

          <Accordion items={FAQ_ITEMS} />

          <div className="p-8 bg-[#F4EFE6] rounded-sm border border-[#0B3B24]/15 text-center space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#0B3B24]">
              Didn’t find the answer you were looking for?
            </h3>
            <p className="text-xs text-[#4A5568] max-w-md mx-auto">
              Feel free to send your query directly to our Secretariat desk. We respond promptly to student and institutional questions.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="primary" size="md">
                  Contact Secretariat Desk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
