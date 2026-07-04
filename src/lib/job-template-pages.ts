import type { ResumePreviewVariant } from "@/components/marketing/mockups/resume-preview";

export type CvExperience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type JobCvData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string[];
  experience: CvExperience[];
  education: string;
};

export type JobTemplatePage = {
  slug: string;
  h1: string;
  heroHeadline: string;
  heroSubtext: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  previewVariant: ResumePreviewVariant;
  cvData: JobCvData;
  whyItWorks: string[];
  relatedSlugs: string[];
  builderLabel: string;
};

export const JOB_TEMPLATE_PAGES: JobTemplatePage[] = [
  {
    slug: "retail-assistant-cv-uk",
    h1: "Retail Assistant CV Example That Gets Interviews (UK)",
    heroHeadline: "Retail Assistant CV Example That Gets Interviews (UK)",
    heroSubtext:
      "Copy this proven UK retail CV layout — ATS-friendly, recruiter-ready, and built for shop floor, sales floor, and customer-facing roles.",
    metaTitle:
      "Retail Assistant CV Example UK — Free Template & CV Builder App",
    metaDescription:
      "Retail assistant CV example for UK jobs. ATS-friendly format, real layout preview, and free Android app to build and export your CV as PDF in minutes.",
    keywords: [
      "retail assistant CV UK",
      "retail CV example",
      "shop assistant CV",
      "retail resume template UK",
      "CV maker app",
    ],
    previewVariant: "ats-standard",
    builderLabel: "Retail Assistant",
    relatedSlugs: [
      "customer-service-cv-uk",
      "sales-associate-cv-uk",
      "warehouse-worker-cv-uk",
    ],
    whyItWorks: [
      "Single-column ATS-friendly layout — parsers read every section correctly",
      "UK-style contact block with location and mobile number upfront",
      "Customer service keywords recruiters search for: POS, stock, upselling",
      "Quantified retail achievements (sales targets, footfall, satisfaction scores)",
      "Skills section matched to high-street and supermarket job descriptions",
    ],
    cvData: {
      name: "Sophie Turner",
      title: "Retail Assistant",
      email: "sophie.turner@email.co.uk",
      phone: "+44 7700 900456",
      location: "Leeds, UK",
      summary:
        "Friendly retail assistant with 3+ years on busy UK high-street floors. Skilled in customer service, till operation, visual merchandising, and hitting daily sales KPIs. Reliable team player available for weekends and peak trading.",
      skills: [
        "Customer Service",
        "POS / Till Operation",
        "Stock Replenishment",
        "Visual Merchandising",
        "Cash Handling",
        "Team Collaboration",
      ],
      experience: [
        {
          role: "Retail Sales Assistant",
          company: "Riverstone Fashion, Leeds",
          period: "2022 – Present",
          bullets: [
            "Served 80+ customers daily with 4.8/5 satisfaction scores on mystery shops",
            "Exceeded personal sales targets by 18% during Q4 trading periods",
            "Trained 2 new starters on till procedures and store standards",
          ],
        },
        {
          role: "Shop Floor Assistant",
          company: "ValueMart Superstore",
          period: "2021 – 2022",
          bullets: [
            "Maintained aisle standards and reduced out-of-stock complaints by 25%",
            "Processed returns and exchanges accurately at busy checkout desks",
          ],
        },
      ],
      education: "BTEC Level 2 Retail Knowledge — Leeds City College, 2021",
    },
  },
  {
    slug: "warehouse-worker-cv-uk",
    h1: "Warehouse Worker CV Example UK — Picking, Packing & Logistics",
    heroHeadline: "Warehouse Worker CV Example UK — Picking, Packing & Logistics",
    heroSubtext:
      "Stand out for warehouse operative, picker-packer, and logistics roles with a CV structured for UK recruiters and ATS systems.",
    metaTitle:
      "Warehouse Worker CV Example UK — Free Template & PDF Export App",
    metaDescription:
      "Warehouse worker CV example for UK logistics jobs. ATS-optimised layout, skills for picking and packing, and free Android CV maker to export PDF.",
    keywords: [
      "warehouse worker CV UK",
      "warehouse operative CV",
      "picker packer CV",
      "logistics CV template",
      "warehouse CV example",
    ],
    previewVariant: "ats-simple",
    builderLabel: "Warehouse Worker",
    relatedSlugs: [
      "retail-assistant-cv-uk",
      "career-change-cv-uk",
      "ats-friendly-cv-template",
    ],
    whyItWorks: [
      "Highlights health & safety, RF scanners, and KPI metrics recruiters expect",
      "Clear job titles — Warehouse Operative, Picker Packer — match ATS filters",
      "Physical role skills listed in plain text (no graphics that break parsers)",
      "Shift flexibility and reliability called out for 24/7 operations",
      "Achievement bullets use numbers: picks per hour, accuracy rates, zero incidents",
    ],
    cvData: {
      name: "Marcus Hughes",
      title: "Warehouse Operative",
      email: "marcus.hughes@email.co.uk",
      phone: "+44 7700 900789",
      location: "Birmingham, UK",
      summary:
        "Hard-working warehouse operative with 4 years in high-volume distribution centres. Experienced in pick-and-pack, forklift operation (FLT certified), and meeting daily dispatch targets in fast-paced UK logistics environments.",
      skills: [
        "Pick & Pack",
        "Forklift / FLT",
        "RF Handheld Scanners",
        "Health & Safety",
        "Stock Control",
        "Loading Bays",
      ],
      experience: [
        {
          role: "Warehouse Operative",
          company: "SwiftLogistics UK, Birmingham",
          period: "2021 – Present",
          bullets: [
            "Consistently picked 120+ units/hour with 99.4% accuracy across peak seasons",
            "Operated counterbalance forklift in loading bays with zero safety incidents",
            "Supported inventory counts reducing shrinkage discrepancies by 15%",
          ],
        },
        {
          role: "Picker Packer",
          company: "NorthPack Fulfilment",
          period: "2020 – 2021",
          bullets: [
            "Packed 200+ orders per shift for e-commerce clients to SLA deadlines",
            "Maintained clean workstation standards under ISO warehouse procedures",
          ],
        },
      ],
      education: "NVQ Level 2 Warehousing & Storage — 2020",
    },
  },
  {
    slug: "student-cv-no-experience",
    h1: "Student CV Template UK — No Experience Needed",
    heroHeadline: "Student CV Template UK — No Experience Needed",
    heroSubtext:
      "First CV? No problem. This student CV template focuses on education, skills, and part-time work — perfect for internships, placements, and graduate schemes.",
    metaTitle:
      "Student CV Template UK No Experience — Free CV Builder for Freshers",
    metaDescription:
      "Student CV template with no work experience required. UK fresher format, education-first layout, and free Android app to build and download your CV as PDF.",
    keywords: [
      "student CV template UK",
      "CV no experience",
      "fresher CV UK",
      "graduate CV template",
      "first CV example",
    ],
    previewVariant: "minimal-clean",
    builderLabel: "Student",
    relatedSlugs: [
      "international-student-cv-uk",
      "simple-cv-template-interviews",
      "retail-assistant-cv-uk",
    ],
    whyItWorks: [
      "Education section leads — ideal when you have limited work history",
      "Projects, volunteering, and societies replace traditional experience blocks",
      "Skills framed for transferable strengths: communication, teamwork, Microsoft Office",
      "One-page UK format recruiters expect from school leavers and undergraduates",
      "ATS-safe headings: Education, Skills, Experience — no creative labels",
    ],
    cvData: {
      name: "Aisha Khan",
      title: "Business Management Student",
      email: "aisha.khan@university.ac.uk",
      phone: "+44 7700 900321",
      location: "Manchester, UK",
      summary:
        "Motivated second-year Business Management student seeking part-time retail or admin roles. Strong communicator with society leadership experience and proven ability to balance studies with customer-facing work.",
      skills: [
        "Microsoft Office",
        "Customer Service",
        "Team Leadership",
        "Time Management",
        "Cash Handling",
        "Social Media",
      ],
      experience: [
        {
          role: "Volunteer Shop Assistant",
          company: "British Heart Foundation Charity Shop",
          period: "2024 – Present",
          bullets: [
            "Assisted customers and organised stock on busy Saturday shifts",
            "Processed donations and maintained tidy shop floor displays",
          ],
        },
        {
          role: "Treasurer",
          company: "University Finance Society",
          period: "2023 – 2024",
          bullets: [
            "Managed society budget of £2,400 and reported to 80+ members",
            "Organised two careers events with local employers",
          ],
        },
      ],
      education:
        "BSc Business Management (2:1 predicted) — University of Manchester, 2023 – 2026\nA-Levels: Business (A), Economics (B), Maths (B) — 2023",
    },
  },
  {
    slug: "ats-friendly-cv-template",
    h1: "ATS Friendly CV Template UK — Pass Applicant Tracking Systems",
    heroHeadline: "ATS Friendly CV Template UK — Pass Applicant Tracking Systems",
    heroSubtext:
      "Beat the bots before a human reads your CV. This ATS-friendly template uses parser-safe formatting every UK employer's screening software can read.",
    metaTitle:
      "ATS Friendly CV Template UK — Free ATS Resume Format & CV App",
    metaDescription:
      "ATS friendly CV template for UK job applications. Single-column format, keyword-ready sections, and free Android CV maker with ATS score checker and PDF export.",
    keywords: [
      "ATS friendly CV template",
      "ATS resume UK",
      "applicant tracking system CV",
      "ATS CV format",
      "ATS resume template",
    ],
    previewVariant: "ats-keyword",
    builderLabel: "ATS Optimised",
    relatedSlugs: [
      "retail-assistant-cv-uk",
      "warehouse-worker-cv-uk",
      "career-change-cv-uk",
    ],
    whyItWorks: [
      "No tables, columns, or icons — the top causes of ATS parsing failures",
      "Standard section headings: Summary, Skills, Experience, Education",
      "Keywords listed in plain text for job-description matching",
      "Reverse-chronological experience — the format most ATS rank highest",
      "Works with Workday, Greenhouse, Taleo, and UK NHS / civil service portals",
    ],
    cvData: {
      name: "Daniel Wright",
      title: "Operations Coordinator",
      email: "daniel.wright@email.co.uk",
      phone: "+44 7700 900654",
      location: "London, UK",
      summary:
        "Operations coordinator with 5 years improving processes in UK SMEs. Experienced in scheduling, vendor management, and cross-functional reporting. Seeking roles where data-driven operations drive growth.",
      skills: [
        "Process Improvement",
        "Microsoft Excel",
        "Project Coordination",
        "Stakeholder Management",
        "SAP",
        "Reporting & KPIs",
      ],
      experience: [
        {
          role: "Operations Coordinator",
          company: "HarborTech Solutions Ltd",
          period: "2022 – Present",
          bullets: [
            "Reduced order processing time by 30% through workflow standardisation",
            "Coordinated 12 vendors and maintained 98% on-time delivery rate",
            "Built weekly KPI dashboards used by senior leadership",
          ],
        },
        {
          role: "Operations Administrator",
          company: "ClearPath Services",
          period: "2019 – 2022",
          bullets: [
            "Managed scheduling for 25 field staff across London and the South East",
            "Cut invoice errors by 40% after implementing checklist procedures",
          ],
        },
      ],
      education: "BA Business Administration — University of Greenwich, 2019",
    },
  },
  {
    slug: "career-change-cv-uk",
    h1: "Career Change CV Example UK — Switch Industries With Confidence",
    heroHeadline: "Career Change CV Example UK — Switch Industries With Confidence",
    heroSubtext:
      "Changing careers? This UK CV template leads with transferable skills and a compelling summary so recruiters see your potential — not just your old job title.",
    metaTitle:
      "Career Change CV Example UK — Transferable Skills Template & App",
    metaDescription:
      "Career change CV example for UK job seekers. Highlight transferable skills, reframe experience, and build your new CV free on Android with PDF export.",
    keywords: [
      "career change CV UK",
      "career change resume",
      "transferable skills CV",
      "CV for career switch",
      "UK career change template",
    ],
    previewVariant: "professional-classic",
    builderLabel: "Career Change",
    relatedSlugs: [
      "career-change-cv-no-experience",
      "cv-after-career-break-uk",
      "ats-friendly-cv-template",
    ],
    whyItWorks: [
      "Professional summary reframes your pivot in the first 4 lines recruiters read",
      "Transferable skills block bridges your old industry to the new role",
      "Achievement bullets focus on results — not outdated job-specific jargon",
      "Functional-meets-chronological structure trusted by UK career coaches",
      "ATS-compatible so your career change CV still passes automated screening",
    ],
    cvData: {
      name: "Elena Vasquez",
      title: "Aspiring HR Coordinator",
      email: "elena.vasquez@email.co.uk",
      phone: "+44 7700 900987",
      location: "Bristol, UK",
      summary:
        "Former retail team leader transitioning into HR coordination. 6 years managing people, rotas, and performance conversations on busy shop floors. Bringing strong communication, conflict resolution, and onboarding experience to people-focused roles.",
      skills: [
        "People Management",
        "Recruitment Support",
        "Onboarding",
        "Employee Relations",
        "Scheduling",
        "HR Administration",
      ],
      experience: [
        {
          role: "Team Leader (Retail)",
          company: "Coastal Home Stores, Bristol",
          period: "2019 – Present",
          bullets: [
            "Led team of 8; conducted monthly 1:1s and supported 3 internal promotions",
            "Reduced staff turnover by 22% through improved onboarding checklists",
            "Handled colleague grievances and escalations with store management",
          ],
        },
        {
          role: "HR Administration Certificate",
          company: "CIPD Level 3 (In Progress)",
          period: "2025 – Present",
          bullets: [
            "Studying employment law, recruitment fundamentals, and HR record-keeping",
            "Completed practical assignment on writing job descriptions and person specs",
          ],
        },
      ],
      education:
        "CIPD Level 3 Foundation Certificate in People Practice (in progress)\nNVQ Level 3 Management — 2020",
    },
  },
  {
    slug: "customer-service-cv-uk",
    h1: "Customer Service CV Example UK — Get More Interviews",
    heroHeadline: "Customer Service CV Example UK — Get More Interviews",
    heroSubtext:
      "Win call centre, helpdesk, and front-line customer service roles with a UK CV built around resolution rates, empathy, and CRM skills recruiters search for.",
    metaTitle:
      "Customer Service CV Example UK — Free Template & CV Builder App",
    metaDescription:
      "Customer service CV example for UK jobs. ATS-friendly layout, complaint handling keywords, and free Android app to build and export your CV as PDF.",
    keywords: [
      "customer service CV UK",
      "customer service CV example",
      "call centre CV UK",
      "helpdesk CV template",
      "customer support CV",
    ],
    previewVariant: "ats-standard",
    builderLabel: "Customer Service",
    relatedSlugs: [
      "retail-assistant-cv-uk",
      "sales-associate-cv-uk",
      "receptionist-cv-uk",
    ],
    whyItWorks: [
      "Highlights KPIs recruiters expect: CSAT, first-call resolution, response times",
      "CRM and ticketing tools listed in plain text for ATS keyword matching",
      "UK contact format with location — essential for hybrid and on-site roles",
      "Experience bullets show de-escalation and complaint handling outcomes",
      "Single-column ATS layout passes Workday, Greenhouse, and retail ATS portals",
    ],
    cvData: {
      name: "Jordan Blake",
      title: "Customer Service Advisor",
      email: "jordan.blake@email.co.uk",
      phone: "+44 7700 901111",
      location: "Glasgow, UK",
      summary:
        "Customer-focused advisor with 4 years in UK call centre and retail support environments. Skilled in complaint resolution, CRM systems, and delivering 90%+ satisfaction scores while meeting SLA targets on busy shifts.",
      skills: [
        "Complaint Resolution",
        "Zendesk / CRM",
        "Active Listening",
        "SLA Management",
        "Live Chat & Email",
        "Upselling & Retention",
      ],
      experience: [
        {
          role: "Customer Service Advisor",
          company: "ConnectUK Telecom",
          period: "2022 – Present",
          bullets: [
            "Maintained 92% first-contact resolution across 60+ daily inbound calls",
            "Reduced average handle time by 18% while improving CSAT to 4.7/5",
            "Mentored 4 new advisors on de-escalation scripts and CRM workflows",
          ],
        },
        {
          role: "Customer Support Agent",
          company: "ShopDirect Online",
          period: "2020 – 2022",
          bullets: [
            "Handled order queries and refunds via live chat with 95% positive feedback",
            "Logged and escalated complex cases accurately in Zendesk",
          ],
        },
      ],
      education: "NVQ Level 2 Customer Service — City of Glasgow College, 2020",
    },
  },
  {
    slug: "admin-assistant-cv-uk",
    h1: "Admin Assistant CV Template UK — Office & PA Roles",
    heroHeadline: "Admin Assistant CV Template UK — Office & PA Roles",
    heroSubtext:
      "Land admin assistant, office coordinator, and PA interviews with a clean UK CV that showcases organisation, diary management, and Microsoft Office skills.",
    metaTitle:
      "Admin Assistant CV Template UK — Free Example & PDF Export App",
    metaDescription:
      "Admin assistant CV template for UK office jobs. ATS-optimised format, diary management skills, and free Android CV maker to download your CV as PDF.",
    keywords: [
      "admin assistant CV UK",
      "administrator CV template",
      "office assistant CV",
      "PA CV example UK",
      "admin CV template",
    ],
    previewVariant: "classic-blue",
    builderLabel: "Admin Assistant",
    relatedSlugs: [
      "receptionist-cv-uk",
      "professional-cv-format-uk-2026",
      "simple-cv-template-interviews",
    ],
    whyItWorks: [
      "Leads with organisation, scheduling, and document management — top admin keywords",
      "Microsoft Office and Google Workspace listed for ATS and recruiter scans",
      "Confidentiality and stakeholder support called out for corporate environments",
      "Quantified admin wins: inbox zero, meeting prep, expense processing accuracy",
      "Professional UK layout suitable for public sector, NHS, and SME applications",
    ],
    cvData: {
      name: "Hannah Clarke",
      title: "Administrative Assistant",
      email: "hannah.clarke@email.co.uk",
      phone: "+44 7700 901222",
      location: "Edinburgh, UK",
      summary:
        "Reliable administrative assistant with 5 years supporting senior managers in professional services. Expert in diary management, travel booking, minute-taking, and maintaining confidential records in fast-paced UK offices.",
      skills: [
        "Diary Management",
        "Microsoft Office",
        "Minute Taking",
        "Travel Booking",
        "Expense Processing",
        "Data Entry",
      ],
      experience: [
        {
          role: "Administrative Assistant",
          company: "MacLeod & Partners Solicitors",
          period: "2021 – Present",
          bullets: [
            "Managed calendars for 3 partners and coordinated 15+ meetings weekly",
            "Processed £40K+ monthly expenses with 100% accuracy for finance review",
            "Drafted correspondence and formatted legal documents to firm standards",
          ],
        },
        {
          role: "Office Administrator",
          company: "Highland Property Group",
          period: "2019 – 2021",
          bullets: [
            "Maintained CRM records and responded to client enquiries within 24 hours",
            "Organised office supplies and onboarding packs for new starters",
          ],
        },
      ],
      education: "HNC Administration & IT — Edinburgh College, 2019",
    },
  },
  {
    slug: "sales-associate-cv-uk",
    h1: "Sales Associate CV Example UK — Retail & Floor Sales",
    heroHeadline: "Sales Associate CV Example UK — Retail & Floor Sales",
    heroSubtext:
      "Stand out for sales associate and floor sales roles with a CV that proves you hit targets, build rapport, and convert browsers into buyers on the UK high street.",
    metaTitle:
      "Sales Associate CV Example UK — Free Sales CV Template & App",
    metaDescription:
      "Sales associate CV example for UK retail jobs. Target-beating achievements, ATS-friendly format, and free Android app to build and export your sales CV as PDF.",
    keywords: [
      "sales associate CV UK",
      "sales assistant CV",
      "retail sales CV example",
      "floor sales CV",
      "sales CV template UK",
    ],
    previewVariant: "modern-green",
    builderLabel: "Sales Associate",
    relatedSlugs: [
      "retail-assistant-cv-uk",
      "customer-service-cv-uk",
      "simple-cv-template-interviews",
    ],
    whyItWorks: [
      "Sales KPIs upfront: conversion rate, average transaction value, units per transaction",
      "Product knowledge and upselling language matches retail job descriptions",
      "Team and commission-based achievements show commercial mindset",
      "Flexible availability noted — critical for weekend and peak trading roles",
      "ATS-safe structure with Skills section packed with retail sales keywords",
    ],
    cvData: {
      name: "Ryan O'Connor",
      title: "Sales Associate",
      email: "ryan.oconnor@email.co.uk",
      phone: "+44 7700 901333",
      location: "Manchester, UK",
      summary:
        "Energetic sales associate with 3 years on premium UK retail floors. Consistently exceeded personal sales targets through consultative selling, strong product knowledge, and building repeat customer relationships.",
      skills: [
        "Consultative Selling",
        "Upselling & Cross-Selling",
        "POS Systems",
        "Visual Merchandising",
        "KPI Tracking",
        "Customer Relationship Building",
      ],
      experience: [
        {
          role: "Sales Associate",
          company: "Apex Footwear, Trafford Centre",
          period: "2022 – Present",
          bullets: [
            "Exceeded monthly sales targets by 24% over 6 consecutive quarters",
            "Increased average transaction value by 15% through accessory upselling",
            "Named Employee of the Month twice for conversion and mystery shop scores",
          ],
        },
        {
          role: "Retail Sales Assistant",
          company: "Urban Style Co.",
          period: "2021 – 2022",
          bullets: [
            "Processed returns and exchanges while preserving customer loyalty",
            "Supported stock replenishment and floor resets during peak seasons",
          ],
        },
      ],
      education: "BTEC Level 3 Business — Manchester College, 2021",
    },
  },
  {
    slug: "receptionist-cv-uk",
    h1: "Receptionist CV Template UK — Front Desk & Office",
    heroHeadline: "Receptionist CV Template UK — Front Desk & Office",
    heroSubtext:
      "Make a polished first impression on paper before you greet visitors. This receptionist CV template is built for UK hotels, clinics, and corporate front desks.",
    metaTitle:
      "Receptionist CV Template UK — Free Front Desk CV Example & App",
    metaDescription:
      "Receptionist CV template for UK front desk jobs. Professional layout, visitor management skills, and free Android CV builder with PDF export.",
    keywords: [
      "receptionist CV UK",
      "receptionist CV template",
      "front desk CV example",
      "hotel receptionist CV",
      "office receptionist CV",
    ],
    previewVariant: "minimal-clean",
    builderLabel: "Receptionist",
    relatedSlugs: [
      "admin-assistant-cv-uk",
      "customer-service-cv-uk",
      "professional-cv-format-uk-2026",
    ],
    whyItWorks: [
      "Front-of-house skills highlighted: visitor management, switchboard, bookings",
      "Professional presentation and confidentiality — key for medical and legal receptions",
      "Multitasking examples under pressure during busy arrival periods",
      "Software skills (Outlook, booking systems) listed for ATS parsing",
      "Clean minimal layout mirrors the polished image receptionists must project",
    ],
    cvData: {
      name: "Priya Nair",
      title: "Receptionist",
      email: "priya.nair@email.co.uk",
      phone: "+44 7700 901444",
      location: "London, UK",
      summary:
        "Welcoming receptionist with 4 years managing busy UK corporate and clinic front desks. Experienced in visitor sign-in, switchboard operation, room bookings, and delivering a professional first impression for 100+ daily visitors.",
      skills: [
        "Visitor Management",
        "Switchboard Operation",
        "Outlook & Teams",
        "Room Bookings",
        "Confidentiality (GDPR)",
        "Cash Handling",
      ],
      experience: [
        {
          role: "Front Desk Receptionist",
          company: "Westbridge Medical Centre, London",
          period: "2021 – Present",
          bullets: [
            "Greeted 120+ patients daily while managing appointments and enquiries",
            "Maintained GDPR-compliant sign-in procedures with zero data breaches",
            "Coordinated courier deliveries and meeting room schedules for 20 staff",
          ],
        },
        {
          role: "Hotel Receptionist",
          company: "The Crown Inn, Kensington",
          period: "2019 – 2021",
          bullets: [
            "Handled check-ins, billing, and guest complaints with 4.8/5 review scores",
            "Managed night audit handovers and cash reconciliation accurately",
          ],
        },
      ],
      education: "Certificate in Hospitality — Westminster College, 2019",
    },
  },
  {
    slug: "simple-cv-template-interviews",
    h1: "Simple CV Template That Gets Interviews",
    heroHeadline: "Simple CV Template That Gets Interviews",
    heroSubtext:
      "No fancy graphics. No clutter. This simple CV template uses a proven one-page UK format that recruiters read in 10 seconds — and remember.",
    metaTitle:
      "Simple CV Template That Gets Interviews — Free UK Format & App",
    metaDescription:
      "Simple CV template that gets interviews. Clean one-page UK layout, ATS-friendly sections, and free Android app to build and export your CV as PDF in minutes.",
    keywords: [
      "simple CV template",
      "simple CV UK",
      "easy CV template",
      "CV template that gets interviews",
      "basic CV format UK",
    ],
    previewVariant: "ats-minimal",
    builderLabel: "Simple CV",
    relatedSlugs: [
      "ats-friendly-cv-template",
      "professional-cv-format-uk-2026",
      "student-cv-no-experience",
    ],
    whyItWorks: [
      "One-page simplicity — recruiters spend 6–10 seconds on first scan",
      "No tables, icons, or columns that break ATS parsers",
      "Clear hierarchy: name, summary, skills, experience, education",
      "Plain-language bullets focused on outcomes, not buzzwords",
      "Works for entry-level through mid-career UK applications",
    ],
    cvData: {
      name: "Tom Fletcher",
      title: "Operations Assistant",
      email: "tom.fletcher@email.co.uk",
      phone: "+44 7700 901555",
      location: "Sheffield, UK",
      summary:
        "Dependable operations assistant with 3 years supporting warehouse and office teams. Strong organiser with excellent attention to detail and a track record of meeting deadlines in busy environments.",
      skills: [
        "Scheduling",
        "Data Entry",
        "Team Support",
        "Health & Safety",
        "Microsoft Excel",
        "Communication",
      ],
      experience: [
        {
          role: "Operations Assistant",
          company: "Northern Logistics Ltd",
          period: "2022 – Present",
          bullets: [
            "Coordinated daily dispatch schedules for 12 drivers with 98% on-time rate",
            "Updated inventory spreadsheets and flagged stock issues before shortages",
          ],
        },
        {
          role: "Warehouse Administrator",
          company: "PackRight UK",
          period: "2020 – 2022",
          bullets: [
            "Processed shipping documentation and answered supplier queries",
            "Supported monthly stock counts with accurate record-keeping",
          ],
        },
      ],
      education: "GCSEs including Maths & English — 2019",
    },
  },
  {
    slug: "professional-cv-format-uk-2026",
    h1: "Professional CV Format UK (2026)",
    heroHeadline: "Professional CV Format UK (2026)",
    heroSubtext:
      "Use the 2026 UK professional CV format trusted by recruiters — two pages max, reverse-chronological experience, and ATS-safe styling throughout.",
    metaTitle:
      "Professional CV Format UK 2026 — Free Template & CV Builder App",
    metaDescription:
      "Professional CV format UK for 2026 job applications. Recruiter-approved structure, ATS-friendly layout, and free Android app to export your CV as PDF.",
    keywords: [
      "professional CV format UK",
      "UK CV format 2026",
      "professional CV template",
      "CV layout UK",
      "corporate CV example",
    ],
    previewVariant: "professional-navy",
    builderLabel: "Professional CV",
    relatedSlugs: [
      "ats-friendly-cv-template",
      "simple-cv-template-interviews",
      "admin-assistant-cv-uk",
    ],
    whyItWorks: [
      "2026 UK standard: 1–2 pages, reverse-chronological, no photo required",
      "Professional summary replaces outdated objective statements",
      "Corporate-friendly navy sidebar layout without ATS-breaking elements",
      "Skills aligned to job descriptions for finance, consulting, and operations",
      "Education and certifications in expected UK order and formatting",
    ],
    cvData: {
      name: "Victoria Hughes",
      title: "Finance Analyst",
      email: "victoria.hughes@email.co.uk",
      phone: "+44 7700 901666",
      location: "London, UK",
      summary:
        "ACA-part qualified finance analyst with 4 years in UK mid-market firms. Experienced in management reporting, variance analysis, and supporting audit-ready month-end close processes for stakeholders.",
      skills: [
        "Management Reporting",
        "Excel & Power BI",
        "Variance Analysis",
        "Month-End Close",
        "SAP",
        "Stakeholder Communication",
      ],
      experience: [
        {
          role: "Finance Analyst",
          company: "Sterling Advisory Group",
          period: "2022 – Present",
          bullets: [
            "Prepared monthly board packs used by CFO and department heads",
            "Improved forecast accuracy by 12% through revised driver-based models",
            "Supported external audit with clean PBC schedules two years running",
          ],
        },
        {
          role: "Assistant Accountant",
          company: "Bridgefield LLP",
          period: "2020 – 2022",
          bullets: [
            "Reconciled nominal ledgers and processed supplier payments on time",
            "Automated expense reports saving 6 hours per month in admin",
          ],
        },
      ],
      education:
        "BSc Accounting & Finance — LSE, 2020\nACA (part qualified) — ICAEW",
    },
  },
  {
    slug: "international-student-cv-uk",
    h1: "CV for International Students in the UK",
    heroHeadline: "CV for International Students in the UK",
    heroSubtext:
      "Studying in the UK on a visa? This CV template helps international students showcase degree progress, part-time work rights, and skills UK employers want.",
    metaTitle:
      "CV for International Students UK — Free Template & CV Builder App",
    metaDescription:
      "CV template for international students in the UK. Education-first layout, part-time work examples, and free Android app to build and export your CV as PDF.",
    keywords: [
      "international student CV UK",
      "student CV UK visa",
      "overseas student CV",
      "UK student job CV",
      "university CV template UK",
    ],
    previewVariant: "minimal-clean",
    builderLabel: "International Student",
    relatedSlugs: [
      "student-cv-no-experience",
      "simple-cv-template-interviews",
      "retail-assistant-cv-uk",
    ],
    whyItWorks: [
      "Education section leads — critical when UK work history is limited",
      "Visa work-rights clarity (e.g. 20hr/week) reduces recruiter uncertainty",
      "Highlights UK degree, language skills, and multicultural teamwork",
      "Part-time and campus roles framed as legitimate UK experience",
      "ATS-friendly headings work on university job boards and grad schemes",
    ],
    cvData: {
      name: "Wei Zhang",
      title: "MSc Data Science Student",
      email: "wei.zhang@university.ac.uk",
      phone: "+44 7700 901777",
      location: "Birmingham, UK",
      summary:
        "International MSc student seeking part-time analytics or admin roles in the UK (20 hours/week during term). Strong Python and SQL skills with internship experience in Shanghai and active membership in the university careers society.",
      skills: [
        "Python & SQL",
        "Microsoft Excel",
        "Data Visualisation",
        "Mandarin & English",
        "Team Collaboration",
        "Research & Reporting",
      ],
      experience: [
        {
          role: "Part-Time Library Assistant",
          company: "University of Birmingham",
          period: "2024 – Present",
          bullets: [
            "Supported 200+ students weekly with catalogue queries and study space bookings",
            "Maintained accurate loan records and assisted with events setup",
          ],
        },
        {
          role: "Data Analyst Intern",
          company: "Shanghai Retail Analytics Co.",
          period: "Summer 2024",
          bullets: [
            "Cleaned sales datasets and built dashboards that informed stock decisions",
            "Presented findings to managers in English and Mandarin",
          ],
        },
      ],
      education:
        "MSc Data Science — University of Birmingham, 2024 – 2025 (expected)\nBSc Statistics — Fudan University, 2020 – 2024",
    },
  },
  {
    slug: "career-change-cv-no-experience",
    h1: "CV for Career Change (No Experience in New Field)",
    heroHeadline: "CV for Career Change (No Experience in New Field)",
    heroSubtext:
      "Pivoting with zero direct experience? This CV template sells transferable skills, relevant training, and motivation — so recruiters give you a chance in your new field.",
    metaTitle:
      "Career Change CV No Experience UK — Free Template & CV App",
    metaDescription:
      "CV for career change with no experience in your new field. Transferable skills format, UK layout, and free Android app to build and export your pivot CV as PDF.",
    keywords: [
      "career change CV no experience",
      "career switch CV UK",
      "transferable skills CV",
      "CV new career no experience",
      "career change template UK",
    ],
    previewVariant: "professional-classic",
    builderLabel: "Career Pivot",
    relatedSlugs: [
      "career-change-cv-uk",
      "cv-after-career-break-uk",
      "simple-cv-template-interviews",
    ],
    whyItWorks: [
      "Skills-first summary bridges your old career to the new role explicitly",
      "Training, certificates, and projects stand in for missing job titles",
      "Volunteering and side projects count as credible experience blocks",
      "Honest career narrative without hiding your pivot — builds recruiter trust",
      "ATS keywords from the target job description woven into skills and summary",
    ],
    cvData: {
      name: "Michael Osei",
      title: "Aspiring Digital Marketing Assistant",
      email: "michael.osei@email.co.uk",
      phone: "+44 7700 901888",
      location: "Cardiff, UK",
      summary:
        "Former secondary school teacher transitioning into digital marketing. No agency experience yet — but 5 years creating engaging content, analysing engagement data, and managing projects. Completed Google Digital Garage and built 3 live portfolio campaigns.",
      skills: [
        "Content Writing",
        "Social Media",
        "Google Analytics",
        "Canva & Adobe Express",
        "SEO Basics",
        "Project Management",
      ],
      experience: [
        {
          role: "Secondary School Teacher",
          company: "Cardiff County Council Schools",
          period: "2018 – 2024",
          bullets: [
            "Designed termly content and presentations for 150+ students and parents",
            "Analysed assessment data to improve outcomes by 14% over two years",
            "Led after-school media club producing newsletters and social posts",
          ],
        },
        {
          role: "Marketing Portfolio Projects",
          company: "Self-Directed (2025)",
          period: "2025",
          bullets: [
            "Ran Instagram campaign for local café — grew followers 40% in 8 weeks",
            "Completed Google Digital Garage and HubSpot Inbound certifications",
          ],
        },
      ],
      education:
        "PGCE Secondary Education — Cardiff Met, 2018\nBA English — University of Cardiff, 2017",
    },
  },
  {
    slug: "cv-after-career-break-uk",
    h1: "CV After a Career Break (UK Example)",
    heroHeadline: "CV After a Career Break (UK Example)",
    heroSubtext:
      "Returning after parental leave, illness, or redundancy? This UK CV example addresses the gap honestly and refocuses recruiters on what you can deliver now.",
    metaTitle:
      "CV After Career Break UK Example — Free Return-to-Work Template",
    metaDescription:
      "CV example after a career break in the UK. Gap-friendly format, return-to-work skills, and free Android CV maker to rebuild and export your CV as PDF.",
    keywords: [
      "CV after career break UK",
      "return to work CV",
      "career gap CV example",
      "parental leave CV UK",
      "CV employment gap UK",
    ],
    previewVariant: "ats-standard",
    builderLabel: "Return to Work",
    relatedSlugs: [
      "career-change-cv-uk",
      "career-change-cv-no-experience",
      "professional-cv-format-uk-2026",
    ],
    whyItWorks: [
      "Functional summary addresses the gap in 2 lines — then pivots to value",
      "Recent upskilling, volunteering, or freelance work fills the timeline credibly",
      "Dates are clear and consistent — no hidden gaps that fail background checks",
      "Flexible start date and reliability emphasised for return-to-work programmes",
      "ATS-compatible format works with UK returner job boards and recruiters",
    ],
    cvData: {
      name: "Sarah Mitchell",
      title: "Project Coordinator",
      email: "sarah.mitchell@email.co.uk",
      phone: "+44 7700 901999",
      location: "Oxford, UK",
      summary:
        "Project coordinator returning to work after a 3-year career break for family care. Previously 7 years in PMO roles. Recently completed PRINCE2 Foundation and volunteer project coordination to refresh skills. Available immediately for hybrid or office roles.",
      skills: [
        "Project Coordination",
        "Stakeholder Updates",
        "Microsoft Project",
        "Risk Logs",
        "Meeting Facilitation",
        "PRINCE2 Foundation",
      ],
      experience: [
        {
          role: "Volunteer Project Coordinator",
          company: "Oxford Community Hub",
          period: "2024 – Present",
          bullets: [
            "Coordinated refurbishment project with 12 volunteers and £15K budget",
            "Maintained RAID logs and weekly status reports for charity trustees",
          ],
        },
        {
          role: "PMO Analyst",
          company: "TechVenture Solutions",
          period: "2014 – 2021",
          bullets: [
            "Supported portfolio of 8 IT projects with reporting for senior sponsors",
            "Streamlined status reporting templates saving 4 hours per week team-wide",
            "Facilitated steering meetings and tracked actions to closure",
          ],
        },
      ],
      education:
        "PRINCE2 Foundation — 2024\nBA Business Management — Oxford Brookes, 2014",
    },
  },
];

const pageMap = new Map(JOB_TEMPLATE_PAGES.map((p) => [p.slug, p]));

export function getJobTemplatePage(slug: string): JobTemplatePage | undefined {
  return pageMap.get(slug);
}

export function getAllJobTemplateSlugs(): string[] {
  return JOB_TEMPLATE_PAGES.map((p) => p.slug);
}

export function getRelatedTemplates(slugs: string[]): JobTemplatePage[] {
  return slugs
    .map((s) => pageMap.get(s))
    .filter((p): p is JobTemplatePage => p !== undefined);
}
