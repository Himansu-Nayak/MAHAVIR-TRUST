"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Card, Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/Accordion";
import {
  Users,
  GraduationCap,
  Building2,
  BookOpen,
  Clock,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle,
  ChevronRight,
  Compass,
  Award,
  Globe2,
  MapPin,
  HeartHandshake,
  FileCheck2,
  HelpCircle,
  PhoneCall,
  Mail,
  ArrowRight,
} from "lucide-react";
import { submitVolunteerRegistration } from "@/lib/api";

const ODISHA_DISTRICTS = [
  "Angul",
  "Balangir",
  "Balasore (Baleswar)",
  "Bargarh",
  "Bhadrak",
  "Boudh",
  "Cuttack",
  "Deogarh",
  "Dhenkanal",
  "Gajapati",
  "Ganjam",
  "Jagatsinghpur",
  "Jajpur",
  "Jharsuguda",
  "Kalahandi",
  "Kandhamal",
  "Kendrapara",
  "Kendujhar (Keonjhar)",
  "Khordha (Bhubaneswar)",
  "Koraput",
  "Malkangiri",
  "Mayurbhanj",
  "Nabarangpur",
  "Nayagarh",
  "Nuapada",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Subarnapur (Sonepur)",
  "Sundargarh (Rourkela)",
  "Outside Odisha / NRI",
];

const VOLUNTEER_ROLES = [
  "Academic & Entrance Exam Mentor",
  "Career & Professional Guide",
  "Project Samarth Hub Steward",
  "College & Faculty Liaison",
];

const QUALIFICATIONS = [
  "Doctorate / Ph.D.",
  "Post-Graduate (M.Tech, M.Sc, M.Com, M.A, MCA, MBA)",
  "Graduate (B.Tech, B.Sc, B.Com, B.A, MBBS)",
  "Professional (CA, CS, Law, Civil Services)",
  "Other Relevant Academic / Industry Credential",
];

const AVAILABILITY_OPTIONS = [
  "1 to 2 hours / month (Standard Virtual Track)",
  "2 to 4 hours / month (Intensive Mentorship)",
  "4 to 8 hours / week (Community Study Hub Steward)",
  "1 to 2 hours / semester (Institutional College Liaison)",
];

const ENGAGEMENT_MODES = [
  "Virtual / Remote (Video, Phone & Email)",
  "In-Person at District Study Hub",
  "Hybrid (Virtual + Periodic Hub Visits)",
];

const FAQ_ITEMS = [
  {
    question: "Can I mentor students if I live outside Odisha or abroad?",
    answer:
      "Yes, absolutely. The Academic Mentor and Career Guide tracks operate remotely via structured video calls, phone check-ins, and digital review. We welcome educators, corporate professionals, and the global Odia diaspora who wish to guide promising undergraduate scholars in Odisha.",
  },
  {
    question: "What is the expected monthly time commitment?",
    answer:
      "Academic and Career Mentors commit just 2 to 4 hours monthly (typically two 1-hour sessions per month). College Faculty Liaisons coordinate periodically per semester, while Project Samarth Study Hub Stewards volunteer 4 to 8 hours weekly at local physical centers.",
  },
  {
    question: "Do volunteers receive an honorarium or certificate of service?",
    answer:
      "All volunteer and mentor positions at MAHAVIR TRUST are strictly honorary and unpaid, in accordance with our 100% charitable trust deed. Mentors who complete one academic year of verified guidance receive an official Institutional Certificate of Appreciation from the Board of Trustees.",
  },
  {
    question: "How are scholars selected and paired with mentors?",
    answer:
      "Scholars are evaluated and verified by our Academic Scrutiny Committee based on financial need and academic merit. Once admitted, scholars are matched with mentors in their discipline (e.g. engineering, nursing, commerce, sciences) based on subject alignment, language comfort, and career aspirations.",
  },
  {
    question: "What safeguarding rules apply to mentor-scholar interactions?",
    answer:
      "MAHAVIR TRUST enforces a strict Student Protection and Safeguarding Code of Conduct. Mentors may never solicit financial transactions, charge private tuition fees, or communicate outside approved professional platforms. Any student in need of financial aid is directed exclusively to the Trust's direct college fee grant scheme.",
  },
  {
    question: "Can current college students apply to become mentors?",
    answer:
      "Final-year post-graduate students and doctoral scholars may apply as Academic Mentors for undergraduate juniors. Undergraduate students are encouraged to participate as Student Hub Volunteers at our Project Samarth reading centers.",
  },
];

export default function VolunteerPage() {
  const shouldReduceMotion = useReducedMotion();
  const formRef = useRef<HTMLDivElement>(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    district: "Khordha (Bhubaneswar)",
    roleInterest: "Academic & Entrance Exam Mentor",
    qualification: "Post-Graduate (M.Tech, M.Sc, M.Com, M.A, MCA, MBA)",
    availability: "1 to 2 hours / month (Standard Virtual Track)",
    engagementMode: "Virtual / Remote (Video, Phone & Email)",
    backgroundNotes: "",
    consentDeclared: false,
  });

  const handleSelectRole = (role: string) => {
    setFormData((prev) => ({ ...prev, roleInterest: role }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    if (!formData.consentDeclared) {
      setErrorMessage("You must accept the student safeguarding and ethical mentorship declaration to proceed.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitVolunteerRegistration({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        district: formData.district,
        roleInterest: formData.roleInterest,
        qualification: formData.qualification,
        availability: formData.availability,
        engagementMode: formData.engagementMode,
        backgroundNotes: formData.backgroundNotes.trim(),
        consentDeclared: true,
        consentVersion: "v1.0-2026",
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
    <div className="flex flex-col w-full bg-[#FDFBF7] text-[#1C2421]">
      {/* 1. HERO SECTION: Institutional Prestige & Grand Narrative */}
      <section className="relative overflow-hidden bg-[#072617] text-[#EDE6D8] pt-14 pb-20 md:pt-20 md:pb-24 border-b border-[#C5A059]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#165B38]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-[#E4C88A]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white/80">Get Involved</li>
              <li className="text-white/40">/</li>
              <li className="text-white font-semibold" aria-current="page">
                Volunteer & Mentorship Network
              </li>
            </ol>
          </nav>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E4C88A] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Institutional Mentorship Network</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Lend Your Academic Excellence & Professional Insight to Odisha’s Deserving Scholars.
            </h1>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-3xl">
              Financial grants remove the immediate economic barrier to college education; sustained mentorship provides the vision, confidence, and career roadmap needed to transform opportunity into lifelong self-reliance.
            </p>

            {/* Trust Metrics Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#E4C88A] font-medium">
              <div className="flex items-center gap-1.5 bg-[#0B3B24]/80 px-3 py-1.5 rounded-xs border border-[#C5A059]/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>100% Non-Commercial</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0B3B24]/80 px-3 py-1.5 rounded-xs border border-[#C5A059]/20">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Verified Scholar Pairing</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0B3B24]/80 px-3 py-1.5 rounded-xs border border-[#C5A059]/20">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Flexible 2–4 hrs / month</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0B3B24]/80 px-3 py-1.5 rounded-xs border border-[#C5A059]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Student Safeguarding Protocol</span>
              </div>
            </div>

            {/* Quick Action Navigation CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xs bg-[#C5A059] text-[#072617] text-xs font-bold uppercase tracking-wider hover:bg-[#E4C88A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#072617]"
              >
                <span>Explore 4 Volunteer Tracks</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xs bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#072617]"
              >
                <span>Register as a Mentor</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION: The Guidance Deficit */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-b border-[#072617]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="forest">The Mentorship Philosophy</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072617] leading-snug">
                Bridging the “Guidance Deficit” for First-Generation College Learners.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                In Odisha’s rural and tribal heartlands, hundreds of meritorious students enter undergraduate and professional programs with extraordinary grit, but without family members who have navigated higher education or formal corporate job markets.
              </p>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                They often lack guidance on entrance tests, resume structuring, workplace culture, or academic persistence. By pairing scholars with empathetic professors, engineers, doctors, and civil servants, MAHAVIR TRUST builds a durable bridge between rural talent and professional achievement.
              </p>

              <div className="p-4 bg-[#F4EFE6] border-l-4 border-[#C5A059] rounded-r-xs">
                <p className="text-xs text-[#072617] italic leading-relaxed">
                  “Tuition grants ensure a student enrolls in college; mentorship ensures they graduate with competence, dignity, and career clarity.”
                </p>
                <p className="text-[11px] font-semibold text-[#7A5E24] mt-1">
                  — MAHAVIR TRUST Academic Advisory Charter (Draft)
                </p>
              </div>
            </div>

            {/* Comparison Cards: Trust Support vs Volunteer Role */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-xs bg-[#072617] text-white border border-[#C5A059]/30 space-y-3">
                <div className="flex items-center gap-2.5 text-[#E4C88A]">
                  <Building2 className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="font-serif text-lg font-bold">What MAHAVIR TRUST Provides</h3>
                </div>
                <ul className="text-xs text-white/80 space-y-2 list-disc list-inside leading-relaxed">
                  <li>Direct non-cash tuition fee settlements with accredited colleges.</li>
                  <li>Curated reference textbook libraries through Project Samarth Study Hubs.</li>
                  <li>Pre-screening and academic verification through our Scrutiny Committee.</li>
                  <li>Institutional liaison to protect scholars from financial dropouts.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xs bg-white border border-[#072617]/15 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5 text-[#072617]">
                  <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="font-serif text-lg font-bold">What Volunteer Mentors Bring</h3>
                </div>
                <ul className="text-xs text-[#4A5568] space-y-2 list-disc list-inside leading-relaxed">
                  <li>One-on-one coursework clarification and entrance exam strategies.</li>
                  <li>Honest workplace orientation and mock interview preparation.</li>
                  <li>Emotional resilience and pastoral encouragement during critical semester exams.</li>
                  <li>Long-term professional networks that rural students rarely possess.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS: Why Guide Scholars with MAHAVIR TRUST */}
      <section className="py-16 md:py-24 bg-[#F4EFE6] border-b border-[#072617]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="gold">Institutional Principles</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072617]">
              Four Pillars of Our Mentorship Network.
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              We operate our volunteering framework with the same fiduciary rigor, privacy protections, and transparency that govern our financial scholarship disbursements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7] border-t-4 border-t-[#072617]">
              <div className="w-10 h-10 rounded-xs bg-[#072617]/10 text-[#072617] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#072617]">
                Strictly Non-Commercial
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Purely charitable. Zero fees collected from scholars; zero fees paid to mentors. No commercial coaching solicitation is permitted.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7] border-t-4 border-t-[#072617]">
              <div className="w-10 h-10 rounded-xs bg-[#072617]/10 text-[#072617] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#072617]">
                Respect for Your Time
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Structured 2-hour monthly sessions. The secretariat handles scheduling and pre-session topic agendas so your time is utilized with maximum impact.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7] border-t-4 border-t-[#072617]">
              <div className="w-10 h-10 rounded-xs bg-[#072617]/10 text-[#072617] flex items-center justify-center">
                <FileCheck2 className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#072617]">
                Pre-Vetted Scholars
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Every mentee has been verified for genuine socio-economic need, bona fide college enrollment, and serious academic commitment.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3 bg-[#FDFBF7] border-t-4 border-t-[#072617]">
              <div className="w-10 h-10 rounded-xs bg-[#072617]/10 text-[#072617] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#072617]">
                Auditable Impact
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Track graduation persistence and career placements. Mentors completing one academic cycle receive institutional recognition.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. ROLE CATALOGUE: Four Approved Volunteer Tracks */}
      <section id="tracks" className="py-16 md:py-24 bg-[#FDFBF7] border-b border-[#072617]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="forest">Volunteer Opportunities</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072617]">
              Four Specialized Tracks to Contribute Your Skills.
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              Select the engagement mode that matches your professional background, geographic availability, and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track A */}
            <div className="p-8 rounded-xs bg-white border border-[#072617]/15 shadow-xs flex flex-col justify-between hover:border-[#C5A059] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#072617] text-[#E4C88A] px-2.5 py-1 rounded-xs">
                    Track A
                  </span>
                  <span className="text-xs font-semibold text-[#7A5E24] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 2–4 hrs / month
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#072617]">
                  Academic & Entrance Exam Mentor
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Guide undergraduate students in core subject dilemmas, review challenging coursework concepts, and advise on national/state entrance examinations (GATE, OPSC, IIT-JAM, NET).
                </p>

                <div className="pt-2 border-t border-[#072617]/10 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Prerequisites:</span>
                    <span className="font-semibold text-[#072617]">Post-Graduate / Ph.D. / Faculty</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Engagement Mode:</span>
                    <span className="font-semibold text-[#072617]">Virtual (Video / Phone)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#4A5568]">Target Students:</span>
                    <span className="font-semibold text-[#072617]">B.Tech, B.Sc, B.Com, B.A Scholars</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectRole("Academic & Entrance Exam Mentor")}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-[#072617] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3B24] transition-colors"
                >
                  <span>Apply for Academic Mentorship</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* Track B */}
            <div className="p-8 rounded-xs bg-white border border-[#072617]/15 shadow-xs flex flex-col justify-between hover:border-[#C5A059] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#072617] text-[#E4C88A] px-2.5 py-1 rounded-xs">
                    Track B
                  </span>
                  <span className="text-xs font-semibold text-[#7A5E24] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 2 hrs / month
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#072617]">
                  Career & Industry Guide
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Support final-year scholars with resume structuring, technical/HR mock interviews, workplace etiquette, and navigating entry-level corporate or civil service recruitment.
                </p>

                <div className="pt-2 border-t border-[#072617]/10 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Prerequisites:</span>
                    <span className="font-semibold text-[#072617]">3+ Years Professional Experience</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Engagement Mode:</span>
                    <span className="font-semibold text-[#072617]">Virtual (Video / Phone)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#4A5568]">Target Students:</span>
                    <span className="font-semibold text-[#072617]">Final-Year Degree & Diploma Scholars</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectRole("Career & Professional Guide")}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-[#072617] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3B24] transition-colors"
                >
                  <span>Apply for Career Mentorship</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* Track C */}
            <div className="p-8 rounded-xs bg-white border border-[#072617]/15 shadow-xs flex flex-col justify-between hover:border-[#C5A059] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#072617] text-[#E4C88A] px-2.5 py-1 rounded-xs">
                    Track C
                  </span>
                  <span className="text-xs font-semibold text-[#7A5E24] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 4–8 hrs / week
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#072617]">
                  Project Samarth Hub Steward
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Provide physical stewardship at rural and semi-urban learning hubs. Manage book loan records, ensure solar terminal operation, and maintain quiet, disciplined study hours.
                </p>

                <div className="pt-2 border-t border-[#072617]/10 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Prerequisites:</span>
                    <span className="font-semibold text-[#072617]">Local Resident / Graduate Degree</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Engagement Mode:</span>
                    <span className="font-semibold text-[#072617]">In-Person at District Learning Hub</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#4A5568]">Priority Districts:</span>
                    <span className="font-semibold text-[#072617]">Mayurbhanj, Koraput, Sundargarh</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectRole("Project Samarth Hub Steward")}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-[#072617] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3B24] transition-colors"
                >
                  <span>Apply as Hub Steward</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* Track D */}
            <div className="p-8 rounded-xs bg-white border border-[#072617]/15 shadow-xs flex flex-col justify-between hover:border-[#C5A059] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#072617] text-[#E4C88A] px-2.5 py-1 rounded-xs">
                    Track D
                  </span>
                  <span className="text-xs font-semibold text-[#7A5E24] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 1–2 hrs / semester
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#072617]">
                  College & Faculty Liaison
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Serve as our trusted institutional contact in degree and polytechnic colleges across Odisha to verify student bona fide enrollments, validate fee structures, and flag drop-out risks.
                </p>

                <div className="pt-2 border-t border-[#072617]/10 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Prerequisites:</span>
                    <span className="font-semibold text-[#072617]">College Faculty / Administrative Staff</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#072617]/5">
                    <span className="text-[#4A5568]">Engagement Mode:</span>
                    <span className="font-semibold text-[#072617]">Institutional / On-Campus</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#4A5568]">Scope:</span>
                    <span className="font-semibold text-[#072617]">Statewide Degree & Polytechnic Colleges</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleSelectRole("College & Faculty Liaison")}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-[#072617] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3B24] transition-colors"
                >
                  <span>Apply as Faculty Liaison</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUCTION PATHWAY: 4-Stage Onboarding Process */}
      <section className="py-16 md:py-24 bg-[#F4EFE6] border-b border-[#072617]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <Badge variant="gold">Vetting & Onboarding</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072617]">
              The Four-Stage Volunteer Induction Pathway.
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              To safeguard both scholars and volunteers, every applicant completes a structured screening and induction process before mentoring begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xs bg-[#FDFBF7] border border-[#072617]/15 space-y-3 relative">
              <span className="font-serif text-3xl font-bold text-[#C5A059]">01</span>
              <h3 className="font-serif text-lg font-bold text-[#072617]">
                Expression of Interest
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Submit your profile, academic credentials, district location, and preferred role through the registration portal below.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#FDFBF7] border border-[#072617]/15 space-y-3 relative">
              <span className="font-serif text-3xl font-bold text-[#C5A059]">02</span>
              <h3 className="font-serif text-lg font-bold text-[#072617]">
                Secretariat Review
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Our Volunteer Coordinator reviews professional backgrounds, confirms identity authenticity, and checks subject fit.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#FDFBF7] border border-[#072617]/15 space-y-3 relative">
              <span className="font-serif text-3xl font-bold text-[#C5A059]">03</span>
              <h3 className="font-serif text-lg font-bold text-[#072617]">
                Safeguarding Induction
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Participate in a 45-minute virtual induction on child protection, ethical boundaries, and Trust reporting protocols.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#FDFBF7] border border-[#072617]/15 space-y-3 relative">
              <span className="font-serif text-3xl font-bold text-[#C5A059]">04</span>
              <h3 className="font-serif text-lg font-bold text-[#072617]">
                Scholar Allocation
              </h3>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Receive matched scholar profiles in your discipline. Begin structured monthly mentorship with bi-annual feedback reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAFEGUARDING & CODE OF CONDUCT CALLOUT */}
      <section className="py-12 md:py-16 bg-[#FDFBF7] border-b border-[#072617]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-10 rounded-xs bg-[#072617] text-[#EDE6D8] border border-[#C5A059]/40 relative overflow-hidden space-y-6">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-[#C5A059] shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Institutional Student Welfare & Safeguarding Policy
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              MAHAVIR TRUST maintains a zero-tolerance policy against any form of exploitation, commercial solicitation, or unauthorized financial transactions involving students.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs">
              <div className="space-y-1.5 p-4 bg-white/5 rounded-xs border border-white/10">
                <span className="font-bold text-[#E4C88A]">Zero Commercial Solicitation</span>
                <p className="text-white/75 leading-relaxed">
                  Volunteers may never offer paid coaching, commercial tutoring, or solicit donations directly from assigned scholars.
                </p>
              </div>

              <div className="space-y-1.5 p-4 bg-white/5 rounded-xs border border-white/10">
                <span className="font-bold text-[#E4C88A]">Official Communication Channels</span>
                <p className="text-white/75 leading-relaxed">
                  All mentoring interactions must be conducted via scheduled video links or registered institutional emails with pastoral oversight.
                </p>
              </div>

              <div className="space-y-1.5 p-4 bg-white/5 rounded-xs border border-white/10">
                <span className="font-bold text-[#E4C88A]">Confidential Student Records</span>
                <p className="text-white/75 leading-relaxed">
                  Student family backgrounds and financial vulnerability data are strictly confidential and protected under DPDPA standards.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-[#E4C88A] pt-2">
              Concerns or breaches may be reported directly to the Independent Ethics Desk:{" "}
              <a href="mailto:governance@mahavirtrust.org" className="underline hover:text-white">
                governance@mahavirtrust.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 7. GEOGRAPHIC SCOPE: Odisha District Focus */}
      <section className="py-16 md:py-20 bg-[#FDFBF7] border-b border-[#072617]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="forest">Geographic Focus</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072617]">
              Reaching Deserving Talent Across All 30 Districts of Odisha.
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              While our physical Project Samarth Study Hubs are piloted in selected cluster districts, our virtual mentorship network connects scholars from all corners of Odisha with mentors worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xs bg-[#F4EFE6] border border-[#072617]/15 space-y-2">
              <div className="flex items-center gap-2 text-[#072617] font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Priority Rural & Tribal Hubs (Pilot)</span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Mayurbhanj, Koraput, Rayagada, Malkangiri, Nabarangpur, Kalahandi. Highest focus for physical hub stewards and college liaisons.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#F4EFE6] border border-[#072617]/15 space-y-2">
              <div className="flex items-center gap-2 text-[#072617] font-bold text-sm">
                <Building2 className="w-4 h-4 text-[#C5A059]" />
                <span>Urban & Technical Corridors</span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Khordha (Bhubaneswar), Cuttack, Sundargarh (Rourkela), Sambalpur, Balasore, Ganjam. Faculty liaisons for engineering and medical colleges.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#F4EFE6] border border-[#072617]/15 space-y-2">
              <div className="flex items-center gap-2 text-[#072617] font-bold text-sm">
                <Globe2 className="w-4 h-4 text-[#C5A059]" />
                <span>National & Diaspora Network</span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Mentors outside Odisha and global NRIs. Digital sessions bridge geographic distance to offer cutting-edge industry perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPLICATION DESK: Complete Responsive Form */}
      <section id="apply" ref={formRef} className="py-16 md:py-24 bg-[#F4EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-xs border border-[#072617]/15 shadow-sm space-y-8">
            <div className="border-b border-[#072617]/10 pb-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#072617]/10 text-[#072617] text-[11px] font-bold uppercase tracking-wider">
                <FileCheck2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Official Volunteer Intake</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072617]">
                Register as an Academic Mentor or Community Volunteer
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568]">
                Please complete all fields below. Our Volunteer Coordinator will review your submission and contact you for orientation within 5 business days.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#072617] text-white rounded-xs space-y-4 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-white">
                  Volunteer Application Successfully Recorded
                </h3>
                {referenceId && (
                  <p className="text-xs font-mono text-[#E4C88A] bg-black/30 py-1.5 px-4 rounded-xs inline-block border border-[#C5A059]/40">
                    Application Reference ID: #{referenceId}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-lg mx-auto">
                  Thank you for dedicating your time and knowledge to Odisha’s scholars. The Secretariat Desk will review your qualifications and reach out via email with orientation dates and safeguarding guidelines.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    className="text-xs !border-[#C5A059] !text-[#E4C88A] hover:!bg-[#C5A059]/20"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        district: "Khordha (Bhubaneswar)",
                        roleInterest: "Academic & Entrance Exam Mentor",
                        qualification: "Post-Graduate (M.Tech, M.Sc, M.Com, M.A, MCA, MBA)",
                        availability: "1 to 2 hours / month (Standard Virtual Track)",
                        engagementMode: "Virtual / Remote (Video, Phone & Email)",
                        backgroundNotes: "",
                        consentDeclared: false,
                      });
                    }}
                  >
                    Register Another Volunteer
                  </Button>
                  <Link
                    href="/programmes"
                    className="text-xs inline-flex items-center gap-1.5 py-2 px-4 rounded-xs bg-[#C5A059] text-[#072617] font-bold hover:bg-[#E4C88A] transition-colors"
                  >
                    Explore Programmes
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xs text-xs flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="vol-fullname"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="vol-fullname"
                      name="fullName"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Prof. Sandeep Mohanty"
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vol-email"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="vol-email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sandeep.m@example.org"
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="vol-phone"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Phone / Mobile Number *
                    </label>
                    <input
                      id="vol-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={30}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vol-district"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Location / District in Odisha *
                    </label>
                    <select
                      id="vol-district"
                      name="district"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#1C2421]"
                    >
                      {ODISHA_DISTRICTS.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Role & Qualification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="vol-role"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Preferred Volunteer Track *
                    </label>
                    <select
                      id="vol-role"
                      name="roleInterest"
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#1C2421]"
                    >
                      {VOLUNTEER_ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-qualification"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Highest Academic / Professional Qualification
                    </label>
                    <select
                      id="vol-qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#1C2421]"
                    >
                      {QUALIFICATIONS.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Availability & Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="vol-availability"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Time Availability *
                    </label>
                    <select
                      id="vol-availability"
                      name="availability"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#1C2421]"
                    >
                      {AVAILABILITY_OPTIONS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vol-mode"
                      className="block text-xs font-semibold text-[#072617] mb-1.5"
                    >
                      Preferred Engagement Mode
                    </label>
                    <select
                      id="vol-mode"
                      name="engagementMode"
                      value={formData.engagementMode}
                      onChange={(e) => setFormData({ ...formData, engagementMode: e.target.value })}
                      className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#1C2421]"
                    >
                      {ENGAGEMENT_MODES.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Background Notes */}
                <div>
                  <label
                    htmlFor="vol-notes"
                    className="block text-xs font-semibold text-[#072617] mb-1.5"
                  >
                    Academic / Professional Background & Subject Areas
                  </label>
                  <textarea
                    id="vol-notes"
                    name="backgroundNotes"
                    rows={4}
                    maxLength={2000}
                    value={formData.backgroundNotes}
                    onChange={(e) => setFormData({ ...formData, backgroundNotes: e.target.value })}
                    placeholder="Briefly describe your discipline (e.g. Physics, Mechanical Engg, Nursing, Banking), your institution/employer, and how you would like to guide scholars..."
                    className="w-full text-xs p-3 rounded-xs bg-[#FDFBF7] border border-[#072617]/20 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                  <span className="text-[10px] text-[#4A5568] mt-1 block">
                    Maximum 2000 characters.
                  </span>
                </div>

                {/* Mandatory Consent Checkbox */}
                <div className="p-4 bg-[#F4EFE6] rounded-xs border border-[#072617]/10 space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="vol-consent"
                      type="checkbox"
                      checked={formData.consentDeclared}
                      onChange={(e) => setFormData({ ...formData, consentDeclared: e.target.checked })}
                      className="mt-0.5 w-4 h-4 text-[#072617] border-[#072617]/30 rounded-xs focus:ring-[#C5A059]"
                    />
                    <span className="text-xs text-[#072617] leading-relaxed select-none">
                      <strong>Institutional Declaration & Safeguarding Consent:</strong> I declare that all information provided is authentic. I agree to uphold the MAHAVIR TRUST Volunteer Code of Conduct, Student Safeguarding Policy, and strictly adhere to non-commercial, ethical mentorship.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full justify-center !py-3.5 text-xs uppercase tracking-wider font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Logging Volunteer Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Submit Volunteer Registration</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FAQ & SECRETARIAT DESK */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-b border-[#072617]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Badge variant="forest">Clarifications</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072617]">
              Frequently Asked Questions on Mentorship.
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] max-w-xl mx-auto">
              Find answers to common questions about time commitments, volunteer recognition, scholar matching, and remote participation.
            </p>
          </div>

          <Accordion items={FAQ_ITEMS} />

          {/* Secretariat Support Desk Card */}
          <div className="p-8 rounded-xs bg-[#072617] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C5A059]/30">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                <HelpCircle className="w-5 h-5 text-[#C5A059]" />
                Institutional & College Collaboration Desk
              </h3>
              <p className="text-xs text-white/80 max-w-lg">
                Are you a college principal, faculty dean, or corporate CSR representative interested in group volunteer cohorts?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:volunteers@mahavirtrust.org"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xs bg-[#C5A059] text-[#072617] text-xs font-bold uppercase tracking-wider hover:bg-[#E4C88A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>volunteers@mahavirtrust.org</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
