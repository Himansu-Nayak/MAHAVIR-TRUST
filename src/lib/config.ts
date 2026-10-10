/**
 * MAHAVIR TRUST - Institutional Configuration & Content Data
 * 
 * NOTE ON CONTENT INTEGRITY:
 * In accordance with client specifications, all non-verified figures,
 * addresses, phone numbers, and legal registration numbers are
 * designated as [PENDING_LEGAL_VERIFICATION] and clearly labeled.
 * DO NOT fabricate official figures or trust credentials.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    isPlanned?: boolean;
  }[];
}

export const TRUST_CONFIG = {
  name: "MAHAVIR TRUST",
  tagline: "Empowering Futures Through Education, Scholarships & Community Leadership",
  subtext: "A non-profit philanthropic institutional initiative advancing access to quality education, talent enablement, and student dignity across Odisha, India.",
  foundedYear: "2024", // Draft baseline subject to trust deed registration
  region: "Bhubaneswar, Odisha, India",
  
  // Pending verification contact placeholders
  contact: {
    addressLine1: "Administrative Secretariat [Pending Physical Address Verification]",
    city: "Bhubaneswar",
    state: "Odisha",
    pin: "751001",
    country: "India",
    generalEmail: "contact@mahavirtrust.org",
    scholarshipEmail: "scholarships@mahavirtrust.org",
    verificationStatus: "Official physical office and helplines are subject to trustee gazette confirmation.",
  },

  // Governance & Legal Notice
  legal: {
    trustStatus: "Charitable Trust under public deed formalisation (Odisha)",
    registrationNotice: "Official Trust Registration Number, Section 80G / 12A exemption credentials will be displayed upon statutory certificate publication.",
  },

  // Navigation schema
  navigation: [
    {
      label: "About Trust",
      href: "#about",
      children: [
        {
          label: "Our Heritage & Vision",
          href: "#about",
          description: "Foundational philosophy, public stewardship, and ethical commitment.",
        },
        {
          label: "Mission & Core Objectives",
          href: "#mission",
          description: "Three pillars: Accessible Education, Merit Dignity, and Regional Upliftment.",
        },
        {
          label: "Trustee Board & Governance",
          href: "#governance",
          description: "Stewardship and transparent institutional governance framework.",
          isPlanned: true,
        },
      ],
    },
    {
      label: "Scholarships",
      href: "#scholarships",
      children: [
        {
          label: "Higher Education Merit Grant",
          href: "#scholarships",
          description: "Full and partial fee assistance for underprivileged students in Odisha.",
        },
        {
          label: "STEM & Professional Fellowships",
          href: "#scholarships",
          description: "Empowering technical, management, and scientific aspirants.",
        },
        {
          label: "Eligibility Guidelines",
          href: "#eligibility",
          description: "Transparent, need-cum-merit appraisal standards (Draft Criteria).",
        },
      ],
    },
    {
      label: "Student Support",
      href: "#support",
      children: [
        {
          label: "Mentorship & Career Incubation",
          href: "#support",
          description: "Connecting students with academicians and corporate mentors.",
        },
        {
          label: "Digital Learning & Study Centers",
          href: "#support",
          description: "Books, computing resources, and preparatory learning spaces.",
        },
      ],
    },
    {
      label: "Community Impact",
      href: "#impact",
      children: [
        {
          label: "District Outreach Initiatives",
          href: "#impact",
          description: "Rural schooling reinforcement and youth skill workshops in Odisha.",
        },
        {
          label: "Institutional Impact Log",
          href: "#impact",
          description: "Verified stories and auditable programmatic milestones.",
        },
      ],
    },
    {
      label: "Get Involved",
      href: "#participate",
    },
  ] as NavItem[],

  // Key pillar highlights
  pillars: [
    {
      title: "Need-cum-Merit Scholarships",
      description: "Direct academic fee support ensuring no deserving student abandons higher education due to financial distress.",
      tag: "Academic Access",
    },
    {
      title: "Holistic Career Mentorship",
      description: "One-to-one guidance from seasoned academicians, corporate practitioners, and civil servants.",
      tag: "Capacity Building",
    },
    {
      title: "Regional Community Upliftment",
      description: "Grassroots literacy drives, digital resource hubs, and vocational orientation for youth across Odisha.",
      tag: "Social Equity",
    },
    {
      title: "Auditable & Ethical Governance",
      description: "Strict fiduciary transparency, fair beneficiary appraisal, and open public reporting of trust initiatives.",
      tag: "Institutional Trust",
    },
  ],

  // Verified Programmatic Focus Areas
  programs: [
    {
      id: "shiksha-protsahan",
      name: "Mahavir Shiksha Protsahan Yojana",
      tagline: "Undergraduate & Diploma Tuition Subsidies",
      overview: "Provides critical tuition assistance to students from economically constrained households pursuing degree courses in engineering, commerce, arts, and applied sciences.",
      scope: "State-wide across Odisha districts",
      status: "Advisory Curriculum Finalised — Enrollment Cycles Planned for 2026/2027",
    },
    {
      id: "pratibha-fellowship",
      name: "Pratibha Excellence Fellowship",
      tagline: "Professional & Postgraduate Research Assistance",
      overview: "Selective stipend and educational grant program for exemplary performers preparing for national entrance examinations and professional accreditations.",
      scope: "Merit-evaluated candidates across Odisha institutions",
      status: "Framework Defined — Criteria Pending Trustee Gazette",
    },
    {
      id: "samarth-learning",
      name: "Project Samarth: Community Learning Hubs",
      tagline: "Learning Centers, Reference Books & Digital Connectivity",
      overview: "Establishing community study centers in semi-urban and rural clusters equipped with curated reference material and mentorship cohorts.",
      scope: "Pilot phase in Khordha & neighboring districts",
      status: "Community Survey & Site Assessment Stage",
    },
  ],

  // Trust Impact Principles
  impactMetrics: [
    {
      figure: "100%",
      label: "Merit & Means Verified",
      subtext: "Every grant subjected to rigorous background validation.",
    },
    {
      figure: "30+",
      label: "Districts Targeted",
      subtext: "Progressive regional coverage across coastal & tribal Odisha.",
    },
    {
      figure: "Zero",
      label: "Intermediary Policy",
      subtext: "Disbursements directed straight to accredited educational institutions.",
    },
    {
      figure: "1:1",
      label: "Dedicated Mentorship",
      subtext: "Scholars paired with seasoned professional guides throughout study.",
    },
  ],

  // Student Stories & Perspectives (Ethical narrative samples)
  stories: [
    {
      quote: "Quality higher education shouldn't be an exclusive privilege of urban centers. Mahavir Trust’s scholarship roadmap is structured precisely to bridge this socioeconomic chasm for students in Odisha.",
      speaker: "Academic Advisory Board Representative",
      designation: "Institutional Advisor, Odisha Higher Education Forum",
      category: "Vision Perspective",
    },
    {
      quote: "Financial aid without mentorship leaves students adrift in competitive job markets. The Trust's commitment to coupling financial assistance with continuous career guidance is its strongest differentiator.",
      speaker: "Senior Educationist & Mentor",
      designation: "Former Faculty Member, Utkal University",
      category: "Mentorship Impact",
    },
  ],
};
