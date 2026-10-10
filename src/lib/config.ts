/**
 * MAHAVIR TRUST - Institutional Configuration & Content Data
 * 
 * CONTENT INTEGRITY & STATUTORY COMPLIANCE DIRECTIVE:
 * In accordance with client specifications, non-verified figures,
 * addresses, phone numbers, individual quotes, and legal registration
 * numbers are designated with explicit [DRAFT FOR TRUSTEE APPROVAL]
 * flags so they cannot be mistaken for verified factual claims.
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
  subtext: "A philanthropic educational trust initiative established to advance higher education access, merit grants, and academic mentorship across Odisha, India.",
  foundedYear: "Draft (Subject to Trust Deed Formalisation)",
  region: "Bhubaneswar, Odisha, India",
  
  // Contact placeholders clearly labeled as pre-launch drafts
  contact: {
    addressLine1: "Administrative Secretariat [Permanent Physical Address Subject to Trustee Confirmation]",
    city: "Bhubaneswar",
    state: "Odisha",
    pin: "751001",
    country: "India",
    generalEmail: "contact@mahavirtrust.org",
    scholarshipEmail: "scholarships@mahavirtrust.org",
    verificationStatus: "Official secretariat office and telephone helpline awaiting gazetted registration confirmation.",
  },

  // Governance & Legal Notice
  legal: {
    trustStatus: "Charitable Trust under public deed formalisation (Odisha)",
    registrationNotice: "Official Trust Registration Number, Section 80G / 12A exemption credentials will be published upon statutory certificate issuance.",
  },

  // Navigation schema - all anchors map to actual verified DOM sections
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
          description: "Fiduciary code and governance framework [Trustee Names Pending Gazette].",
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
          description: "Proposed tuition fee assistance for underprivileged students in Odisha.",
        },
        {
          label: "STEM & Professional Fellowships",
          href: "#scholarships",
          description: "Proposed technical and management grant categories.",
        },
        {
          label: "Eligibility Guidelines",
          href: "#eligibility",
          description: "Transparent, need-cum-merit appraisal standards (Draft Proposal).",
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
          description: "Connecting scholars with academicians and corporate guides.",
        },
        {
          label: "Digital Learning & Study Centers",
          href: "#support",
          description: "Projected reference book grants and community learning points.",
        },
      ],
    },
    {
      label: "Community Impact",
      href: "#impact",
      children: [
        {
          label: "District Outreach Framework",
          href: "#impact",
          description: "Focus on 30 districts of Odisha for educational equity.",
        },
        {
          label: "Fiduciary Standards",
          href: "#governance",
          description: "Commitment to 100% direct college fee disbursements.",
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
      title: "Need-cum-Merit Grant Model",
      description: "Direct academic fee assistance ensuring financial barriers do not halt promising undergraduate and diploma students.",
      tag: "Academic Access",
    },
    {
      title: "1-on-1 Academic Mentorship",
      description: "Proposed mentor network pairing scholars with educators and professionals for sustained career clarity.",
      tag: "Capacity Building",
    },
    {
      title: "Community Learning Hubs",
      description: "Grassroots study points equipped with entrance test references and reliable study facilities.",
      tag: "Regional Upliftment",
    },
    {
      title: "Auditable Institutional Governance",
      description: "Zero intermediary policy with disbursements directed straight to accredited educational institutions.",
      tag: "Fiduciary Integrity",
    },
  ],

  // Programmatic Concepts (Draft frameworks for trustee approval)
  programs: [
    {
      id: "shiksha-protsahan",
      name: "Mahavir Shiksha Protsahan Yojana [Draft Proposal]",
      tagline: "Proposed Undergraduate & Technical Tuition Grants",
      overview: "Conceptualized to support meritorious students from economically challenged backgrounds pursuing degree programs in recognized Odisha institutions.",
      scope: "All 30 districts of Odisha (Target Scope)",
      status: "Program Framework Finalized — Application Cycles Pending Trustee Gazette",
    },
    {
      id: "pratibha-fellowship",
      name: "Pratibha Excellence Fellowship [Draft Proposal]",
      tagline: "Proposed Postgraduate & Entrance Examination Stipend",
      overview: "Selective fellowship model designed for top-performing scholars preparing for national competitive exams and professional certifications.",
      scope: "Merit-qualified applicants across Odisha",
      status: "Draft Criteria under Review by Academic Working Group",
    },
    {
      id: "samarth-learning",
      name: "Project Samarth: Learning Centers [Draft Proposal]",
      tagline: "Proposed Community Study Hubs & Reference Libraries",
      overview: "Planned community study hubs in semi-urban and rural clusters to provide quiet study environments and competitive examination resources.",
      scope: "Pilot Phase Planned for Khordha District",
      status: "Site Assessment & Logistics Planning Stage",
    },
  ],

  // Guiding Operational Principles (Replacing arbitrary metrics with institutional commitments)
  guidingPrinciples: [
    {
      title: "Direct College Disbursement",
      description: "Funds are disbursed straight to accredited colleges, eliminating intermediaries.",
      badge: "Zero Cash Policy",
    },
    {
      title: "Merit-cum-Means Appraisal",
      description: "Rigorous verification combining income validation with academic commitment.",
      badge: "Equity Standard",
    },
    {
      title: "Statewide Coverage Vision",
      description: "Designed to progressively serve students across all 30 districts of Odisha.",
      badge: "Odisha Focus",
    },
    {
      title: "Persistent Mentorship",
      description: "Scholars are supported by volunteer mentors throughout their degree courses.",
      badge: "Holistic Growth",
    },
  ],

  // Institutional Mission Perspectives (Identified as draft guiding perspectives)
  perspectives: [
    {
      statement: "Access to quality higher education must not be confined by household economic distress. The Trust's framework is architected to ensure that no aspiring student in Odisha is forced to discontinue studies for lack of tuition.",
      focus: "Educational Equity Mission",
      authorNote: "Guiding Institutional Charter Draft",
    },
    {
      statement: "Effective philanthropy pairs monetary assistance with sustained mentorship. Building character, technical competence, and career readiness alongside financial aid is central to the Mahavir Trust philosophy.",
      focus: "Mentorship & Dignity",
      authorNote: "Academic Advisory Guidelines Draft",
    },
  ],
};
