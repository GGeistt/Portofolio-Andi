export const developerData = {
  name: "Muhammad Rifqiandi",
  shortName: "Andi",
  role: "FULL STACK DEVELOPER / SOFTWARE DEVELOPER",
  location: "Kota Tangerang, Banten — Indonesia",
  availability: "AVAILABLE FOR CONTRACT & FULL-TIME",
  experienceYears: "Informatics Graduate — ITK",
  headline: "I build reliable digital products from interface to infrastructure.",
  supportingDescription: "Full-stack web and mobile developer specializing in .NET, Laravel, Vue.js, React, Flutter, and optimized database architectures.",
  aboutIntro: "Hello, my name is Muhammad Rifqiandi, usually called Andi. I graduated from the Department of Informatics at Kalimantan Institute of Technology (ITK). I am focused on full-stack web and mobile development, encompassing both frontend user interfaces and backend server architecture.",
  aboutPhilosophy: "My engineering work spans Procurement, Fixed Assets, Approval Systems, System Configs, Mobile Sales, Mobile Surveys, SIMGAJI Payroll systems, Venue Booking platforms, E-Learning applications, and Government Logistics tools — built to solve real operational problems cleanly and reliably.",
  contacts: {
    email: "andibeiber@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammad-rifqiandi",
    github: "https://github.com/MRifqiandii",
    whatsapp: "https://wa.me/6282150994837",
    phone: "0821-5099-4837"
  }
};

export const experienceData = [
  {
    id: "exp-1",
    period: "OCT 2025 — PRESENT",
    role: "Fullstack Developer",
    company: "PT Mobitech Media Integrasi",
    location: "Kota Tangerang, ID",
    type: "Full-Time",
    description: "Developing scalable web and mobile enterprise applications using .NET, Blazor, Angular, and Flutter.",
    responsibilities: [
      "Designed and architected base module architecture for enterprise systems: Procurement, Fixed Assets, Approval (integrated for transaction approvals), System Config, Mobile Sales Order, and Mobile Survey.",
      "Integrated advanced SQL Server and PostgreSQL optimization through stored procedures and database lock resolution.",
      "Maintained full ownership of server deployment, remote publishing, and database performance tuning."
    ],
    technologies: [".NET", "Blazor", "Angular", "Flutter", "SQL Server", "PostgreSQL", "Stored Procedures"]
  },
  {
    id: "exp-2",
    period: "MAY 2025 — OCT 2025",
    role: "Fullstack Developer",
    company: "CV Kolega Eksterior Interior",
    location: "Tanah Grogot, ID",
    type: "Contract",
    description: "Developed a web-based venue booking platform for sports and event facilities in Tanah Grogot for a local government agency.",
    responsibilities: [
      "Built venue slot scheduling, availability calendar, and booking management platform using Laravel and Bootstrap.",
      "Collaborated on-site with local government stakeholders for requirement gathering and user acceptance testing.",
      "Managed production deployment and system hand-over for public facility reservations."
    ],
    technologies: ["Laravel", "Bootstrap", "MySQL", "PHP", "On-site Deployment"]
  },
  {
    id: "exp-3",
    period: "JAN 2025 — JUN 2025",
    role: "Fullstack Developer",
    company: "Institut Teknologi Kalimantan",
    location: "Balikpapan, ID",
    type: "Project",
    description: "Developed a fullstack web-based Payroll Management Information System (SIMGAJI) for Kalimantan Institute of Technology.",
    responsibilities: [
      "Engineered automated SIMGAJI payroll engine processing employee salaries, government tax, BPJS deductions, and leave tracking.",
      "Implemented strict role-based access control (RBAC) for university staff, finance officers, and administrators.",
      "Unified disparate HR and payroll data into a single automated, audit-ready web system using Laravel."
    ],
    technologies: ["Laravel", "Bootstrap", "MySQL", "SIMGAJI", "PHP", "RBAC"]
  },
  {
    id: "exp-4",
    period: "AUG 2024 — SEP 2025",
    role: "Instructor Coding",
    company: "SMAIT Istiqamah YPAIT",
    location: "Kota Tangerang, ID",
    type: "Part-Time",
    description: "Taught web development concepts and fundamentals to high school students.",
    responsibilities: [
      "Designed interactive curriculum focusing on foundational web technologies: HTML5, CSS3, and JavaScript.",
      "Guided students through building responsive personal websites and basic web application projects."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Teaching", "Web Fundamentals"]
  },
  {
    id: "exp-5",
    period: "JUN 2024 — NOV 2024",
    role: "Front End Developer",
    company: "PT. Media Kreasi Abadi",
    location: "Kota Tangerang, ID",
    type: "Contract",
    description: "Developed an engaging and functional e-learning website collaborating with the Sobat UMKM digital marketing platform.",
    responsibilities: [
      "Built dynamic, interactive UI components using React JS for digital marketing course modules.",
      "Integrated RESTful API endpoints for user authentication, video lesson progress, and course certification.",
      "Ensured responsive cross-device layout performance and clean component structure."
    ],
    technologies: ["React JS", "JavaScript", "REST API", "HTML/CSS", "UI/UX"]
  },
  {
    id: "exp-6",
    period: "SEP 2023 — FEB 2024",
    role: "Fullstack Developer",
    company: "Dinas Lingkungan Hidup Kabupaten Bulungan",
    location: "Bulungan, ID",
    type: "Government Project",
    description: "Developed a waste transportation website in collaboration with the Bulungan Regency Environmental Agency.",
    responsibilities: [
      "Created operational management web application to monitor waste transportation schedules, fleet routes, and disposal logs.",
      "Collaborated directly with Bulungan Regency Environmental Agency officers to digitalize manual paper logs.",
      "Built backend logic and frontend administrative screens using JavaScript and PHP."
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Government Logistics"]
  }
];

export const projectsData = [
  {
    id: "procurement-system",
    number: "01",
    category: "Enterprise System",
    year: "2025",
    title: "Procurement Enterprise System",
    tagline: "End-to-end purchasing workflow integrated with Approval module for PR, PO, and invoice authorization.",
    image: "/images/project_procurement.jpg",
    technologies: [".NET Core", "Blazor", "Angular", "SQL Server", "Stored Procedures"],
    caseStudy: {
      overview: "An enterprise procurement management system built at PT Mobitech Media Integrasi for handling purchase requisitions, vendor price comparisons, purchase order generation, goods receiving, and 3-way invoice matching — fully integrated with the Approval module.",
      businessProblem: "Uncoordinated procurement across corporate divisions led to delayed purchases, unverified vendor quotes, and manual invoice matching errors.",
      objectives: [
        "Digitalize purchase requisitions (PR) and route automatically to the Approval module.",
        "Compare multiple vendor price quotes side-by-side before issuing POs upon approval.",
        "Ensure 3-way matching between PO, receiving logs, and vendor invoices."
      ],
      userRoles: ["Requisitioner", "Procurement Officer", "Vendor Manager", "Finance Auditor"],
      keyFeatures: [
        "Purchase Requisition (PR) creation integrated directly with the Approval module",
        "Threshold-based multi-tier manager sign-offs before Purchase Order issuance",
        "Vendor quotation comparison matrix and price history analysis",
        "Automated Purchase Order (PO) generation upon final approval sign-off",
        "Goods Receiving Notes (GRN) logging and 3-Way Invoice Matching (PO + GRN + Invoice)"
      ],
      applicationWorkflow: [
        { step: "01", title: "Requisition", desc: "Department submits PR with line item specs and required target dates." },
        { step: "02", title: "Approval Module", desc: "PR automatically routes to the Approval module for manager sign-offs based on monetary value." },
        { step: "03", title: "Vendor & PO", desc: "Upon approval, procurement compares vendor quotes and compiles formal PO." },
        { step: "04", title: "Receiving & Match", desc: "Warehouse logs receiving note, and finance verifies 3-way invoice match before payout." }
      ],
      technicalApproach: "Engineered using .NET Core Web API with Angular and Blazor frontend interfaces. Integrated directly with the Approval module REST endpoints to trigger workflow status transitions.",
      databaseApiNotes: "Utilized SQL Server transactional locks during PO generation to prevent duplicate PO numbering under high concurrent user load.",
      challengesAndSolutions: [
        {
          challenge: "Slow multi-item vendor quote comparisons across 10,000+ item master records.",
          solution: "Written indexed SQL stored procedures that return pre-aggregated vendor price history in under 200ms."
        }
      ],
      result: "Streamlined corporate purchasing operations into a transparent, fully auditable digital procurement workflow integrated with automated multi-stage manager approvals.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/procurement"
    }
  },
  {
    id: "fixed-asset-system",
    number: "02",
    category: "Asset Management",
    year: "2025",
    title: "Fixed Asset Management System",
    tagline: "Asset registration, depreciation, and barcode tracking integrated with Approval module for transfers & disposals.",
    image: "/images/project_fixed_asset.jpg",
    technologies: [".NET Core", "Blazor", "PostgreSQL", "Stored Procedures"],
    caseStudy: {
      overview: "A comprehensive enterprise asset platform built at PT Mobitech Media Integrasi for asset lifecycle management, depreciation schedules, location transfers, and physical audit logs — integrated with the Approval module to authorize asset transfers and write-offs.",
      businessProblem: "Corporate equipment and fixed assets were tracked manually across regional branch spreadsheets, leading to unrecorded asset write-offs and inaccurate financial balance sheets.",
      objectives: [
        "Automate straight-line and declining balance asset depreciation calculations.",
        "Integrate with the Approval module for inter-departmental asset transfers and disposals.",
        "Track asset physical locations, departmental hand-overs, and barcode tags."
      ],
      userRoles: ["Asset Manager", "Regional Custodian", "Financial Auditor"],
      keyFeatures: [
        "Asset registration with serial number, category, and photo upload",
        "Automated monthly depreciation engine (Straight-Line & Declining Balance)",
        "Asset Transfer & Disposal requests integrated with Approval module for sign-offs",
        "Barcode tag generation and physical audit verification tracking",
        "Disposal, maintenance logging, and residual valuation audit reports"
      ],
      applicationWorkflow: [
        { step: "01", title: "Asset Intake", desc: "New equipment registered with serial number, location, and cost basis." },
        { step: "02", title: "Depreciation", desc: "Engine executes monthly depreciation schedules automatically." },
        { step: "03", title: "Approval Routing", desc: "Asset transfers and disposal requests route to Approval module for manager sign-off." },
        { step: "04", title: "Audit Verification", desc: "Auditors scan barcode tags during physical inventory checks upon transfer approval." }
      ],
      technicalApproach: "Built with .NET Core backend and Blazor frontend. Integrated with Approval module API to update asset status (Active, Pending Approval, Transferred, Disposed).",
      databaseApiNotes: "Past depreciation periods locked in snapshot tables to maintain historical ledger integrity.",
      challengesAndSolutions: [
        {
          challenge: "Calculating monthly depreciation across 50,000+ asset records in real-time.",
          solution: "Offloaded calculations to batch PostgreSQL stored procedures running scheduled off-peak background runs."
        }
      ],
      result: "Achieved 100% asset location visibility, requiring formal approval sign-offs for all transfers and equipment disposals.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/fixed-asset"
    }
  },
  {
    id: "approval-module",
    number: "03",
    category: "Workflow & Approval",
    year: "2025",
    title: "Approval",
    tagline: "Central transaction approval workflow integrated with Procurement & Fixed Asset systems for PR, PO, transfer & disposal authorization.",
    image: "/images/project_approval.jpg",
    technologies: [".NET Core", "Angular", "SQL Server", "PostgreSQL"],
    caseStudy: {
      overview: "A core central approval workflow module built at PT Mobitech Media Integrasi, integrated directly with both the Procurement System (PR, PO, Invoices) and Fixed Asset System (Transfers, Disposals) to route transaction approvals through dynamic multi-tier manager authorization chains.",
      businessProblem: "Hardcoded approval logic required developer intervention whenever organizational charts, monetary limits, or approval thresholds changed across procurement and asset departments.",
      objectives: [
        "Serve as the central approval backbone for Procurement (PR, PO) and Fixed Asset (Transfer, Disposal) transactions.",
        "Enable non-technical administrators to configure multi-step approval nodes visually.",
        "Support substitute approver delegation when managers are out of office.",
        "Provide complete audit trail logs for every approval or rejection event."
      ],
      userRoles: ["Workflow Admin", "Approver Manager", "Procurement Approver", "Asset Approver"],
      keyFeatures: [
        "Direct integration with Procurement System to approve PRs, vendor selections, and PO issuances",
        "Direct integration with Fixed Asset System to approve inter-branch transfers and equipment disposals",
        "Dynamic node routing based on monetary threshold and department authorization rules",
        "Out-of-office delegation rules and automatic fallback escalation timers",
        "Complete historical audit log with IP, timestamp, and decision notes for compliance"
      ],
      applicationWorkflow: [
        { step: "01", title: "Transaction Trigger", desc: "Procurement (PR/PO) or Fixed Asset (Transfer/Disposal) transaction triggers approval request." },
        { step: "02", title: "Approval Evaluation", desc: "Module evaluates monetary threshold and department rules to identify approver sequence." },
        { step: "03", title: "Manager Review", desc: "Pending approver reviews transaction via 1-click web/email interface." },
        { step: "04", title: "Transaction Commit", desc: "Upon final approval sign-off, module notifies Procurement/Fixed Asset system to commit transaction." }
      ],
      technicalApproach: "Architected as a decoupled micro-workflow service in .NET Core. Communicates asynchronously via REST API events with Procurement and Fixed Asset application modules.",
      databaseApiNotes: "Uses optimistic concurrency control to prevent duplicate approval processing when multiple approvers review concurrently.",
      challengesAndSolutions: [
        {
          challenge: "Approvals stalling indefinitely when managers were on annual leave.",
          solution: "Implemented automated delegation rules and auto-escalation timers that route to alternate managers after 48 hours."
        }
      ],
      result: "Unified transaction authorization across Procurement and Fixed Asset departments, reducing request cycle times by 65% with 100% audit compliance.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/approval"
    }
  },
  {
    id: "config-permissions-module",
    number: "04",
    category: "Architecture & Config",
    year: "2025",
    title: "System Config & Dynamic Permissions",
    tagline: "Global parameters, dynamic permission matrices, tenant isolation, and code lookups.",
    image: "/images/project_config.jpg",
    technologies: [".NET Core", "Blazor", "SQL Server"],
    caseStudy: {
      overview: "The core foundational configuration module powering enterprise application settings, dynamic user role permissions, tenant data isolation, and system-wide code tables.",
      businessProblem: "Managing user permissions and global application settings across multi-tenant deployments was error-prone and lacked central governance.",
      objectives: [
        "Centralize global system parameter configuration without code redeployment.",
        "Implement granular feature-level and data-level permission matrices.",
        "Ensure strict multi-tenant data isolation at the database layer."
      ],
      userRoles: ["Super Administrator", "Tenant Admin", "Security Officer"],
      keyFeatures: [
        "Visual permission matrix builder (Granular CRUD per module)",
        "Global code lookup dictionary management (Currencies, Statuses, Units)",
        "Tenant isolation configuration and environment parameter flags",
        "System configuration audit log and rollback history"
      ],
      applicationWorkflow: [
        { step: "01", title: "Define Roles", desc: "Super admin configures roles and assigns granular permissions." },
        { step: "02", title: "Set Parameters", desc: "Global system flags and code tables updated without restarting server." },
        { step: "03", title: "Enforce", desc: "Middleware enforces permission matrix on every API endpoint call." }
      ],
      technicalApproach: "Built with .NET Core and Blazor. Memory-cached configuration tables ensure zero performance overhead on API permission checks.",
      databaseApiNotes: "Implemented Row-Level Security (RLS) in SQL Server driven by tenant configuration tokens.",
      challengesAndSolutions: [
        {
          challenge: "High database load checking permissions on every single user request.",
          solution: "Cached permission matrices in-memory with automatic cache invalidation on role updates."
        }
      ],
      result: "Provided robust security governance and simplified multi-tenant deployment management across all enterprise apps.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/system-config"
    }
  },
  {
    id: "mobile-sales-order",
    number: "05",
    category: "Mobile Application",
    year: "2025",
    title: "Mobile Sales Order App",
    tagline: "Offline-first sales catalog, order creation, stock availability, and customer pricing tiers.",
    image: "/images/project_mobile_sales.jpg",
    technologies: ["Flutter", "Dart", "SQLite", "REST API"],
    caseStudy: {
      overview: "A mobile application built for field sales representatives to check stock levels, view customer-specific discount tiers, create sales orders offline, and sync orders automatically.",
      businessProblem: "Field sales reps visiting client stores had no real-time inventory visibility and wrote orders on paper, leading to out-of-stock fulfillments and billing mistakes.",
      objectives: [
        "Provide a fast, visual product catalog with live stock status.",
        "Enable offline order creation during client visits in poor signal areas.",
        "Automatically apply customer-specific discount policies."
      ],
      userRoles: ["Field Sales Rep", "Sales Manager", "Warehouse Dispatcher"],
      keyFeatures: [
        "Offline product catalog with image gallery and barcode search",
        "Customer-specific pricing rules, credit limit check, and discount tiers",
        "Offline-first order drafting with background cloud upload queue",
        "Order status tracking (Draft, Submitted, Approved, Dispatched)"
      ],
      applicationWorkflow: [
        { step: "01", title: "Select Client", desc: "Sales rep selects client profile; app loads custom pricing and credit limits." },
        { step: "02", title: "Build Order", desc: "Rep adds items to cart with stock availability indicator." },
        { step: "03", title: "Offline Save", desc: "Order saved locally to SQLite queue if mobile network is unavailable." },
        { step: "04", title: "Auto Sync", desc: "App syncs order batch to backend server upon network restoration." }
      ],
      technicalApproach: "Built with Flutter for smooth iOS and Android performance. Uses local SQLite database with timestamped sync state markers.",
      databaseApiNotes: "Client-side UUID generation ensures order submission idempotency during unstable network retries.",
      challengesAndSolutions: [
        {
          challenge: "Sales reps placing orders for stock that sold out while they were offline.",
          solution: "Added provisional stock reservation hold timestamped on local creation with server validation on sync."
        }
      ],
      result: "Accelerated order processing times, eliminated paper order entry errors, and increased daily field sales visits by 35%.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/mobile-sales"
    }
  },
  {
    id: "mobile-survey-app",
    number: "06",
    category: "Mobile Field Inspection",
    year: "2025",
    title: "Mobile Field Survey App",
    tagline: "Geotagged site inspection forms, photo capture, dynamic audit checklists, and instant cloud sync.",
    image: "/images/project_mobile_survey.jpg",
    technologies: ["Flutter", "Dart", "Geolocation", "SQLite Sync"],
    caseStudy: {
      overview: "A mobile inspection app built for field survey auditors to conduct site assessments, capture GPS-geotagged photos, complete dynamic audit forms, and submit inspection reports.",
      businessProblem: "Field inspectors recorded site audits on paper forms and uploaded photos manually back at the office, leading to missing GPS location proofs and delayed audit reports.",
      objectives: [
        "Dynamic form rendering based on survey template configurations.",
        "Mandatory GPS geotagging and timestamping on captured inspection photos.",
        "Full offline support for remote field site audits."
      ],
      userRoles: ["Survey Auditor", "Field Inspector", "Quality Control Manager"],
      keyFeatures: [
        "Dynamic inspection checklist builder (Text, Choices, Signatures, Photos)",
        "Automatic GPS location capture and photo watermark embedding",
        "Offline audit storage with background synchronization worker",
        "Audit report PDF generation with photo appendix"
      ],
      applicationWorkflow: [
        { step: "01", title: "Load Template", desc: "Inspector opens assigned site survey template." },
        { step: "02", title: "Capture Audit", desc: "Fills checklist items, records GPS location, and takes photo proofs." },
        { step: "03", title: "Sign & Submit", desc: "Obtains client digital signature and queues report for upload." }
      ],
      technicalApproach: "Built using Flutter paired with native GPS location services and camera integration. SQLite stores survey responses offline.",
      databaseApiNotes: "Binary photo blobs saved directly to application document storage with file path references in SQLite.",
      challengesAndSolutions: [
        {
          challenge: "High resolution inspection photos failing to upload on weak 2G/3G signals.",
          solution: "Implemented client-side image compression before upload queue dispatch."
        }
      ],
      result: "Replaced paper audit forms 100%, providing real-time geotagged inspection proof and instant office report generation.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/mobile-survey"
    }
  },
  {
    id: "simgaji-itk",
    number: "07",
    category: "Payroll & HR System",
    year: "2025",
    title: "SIMGAJI ITK System",
    tagline: "Fullstack Payroll Management Information System for Kalimantan Institute of Technology.",
    image: "/images/project_simgaji.svg",
    technologies: ["Laravel", "Bootstrap", "MySQL", "PHP", "RBAC"],
    caseStudy: {
      overview: "A unified payroll management system (SIMGAJI) engineered for Kalimantan Institute of Technology to automate salary calculations, tax withholdings, BPJS deductions, and leave approvals.",
      businessProblem: "University HR and finance teams managed salary components and attendance records across fragmented spreadsheets, resulting in slow payroll processing and manual tax calculation errors.",
      objectives: [
        "Automate monthly salary processing, BPJS deductions, and tax withholdings.",
        "Implement role-based access control (RBAC) for staff, finance officers, and department heads.",
        "Provide an audit-ready digital ledger for all university payroll transactions."
      ],
      userRoles: ["University Employee", "Finance Officer", "HR Administrator"],
      keyFeatures: [
        "Automated salary calculation engine with BPJS & PPh21 tax formulas",
        "Employee leave management and automated deduction adjustments",
        "Role-Based Access Control (RBAC) with secure session management",
        "Automated PDF payslip rendering and financial summary reporting"
      ],
      applicationWorkflow: [
        { step: "01", title: "Data Input", desc: "HR registers employee records, base salary slabs, and leave approvals." },
        { step: "02", title: "Tax & BPJS", desc: "System computes net pay, tax withholdings, and BPJS contributions automatically." },
        { step: "03", title: "Approval", desc: "Finance department reviews payroll summary and approves payout batch." },
        { step: "04", title: "Payslip Export", desc: "Employees access their individual portal to download digital payslips." }
      ],
      technicalApproach: "Built on Laravel with MySQL database architecture. Formulated transactional database procedures to ensure retroactive employee record updates never alter historical payroll snapshots.",
      databaseApiNotes: "Utilized strict foreign key constraints and transactional isolation levels to guarantee data consistency during monthly batch processing.",
      challengesAndSolutions: [
        {
          challenge: "Handling complex tax brackets and BPJS contribution caps.",
          solution: "Architected configurable policy classes in Laravel to calculate withholdings without hardcoding rules."
        }
      ],
      result: "Digitized 100% of university payroll operations, eliminating manual calculation errors and cutting monthly processing time significantly.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/simgaji-itk"
    }
  },
  {
    id: "venue-booking-platform",
    number: "08",
    category: "Public Booking Web",
    year: "2025",
    title: "Tanah Grogot Venue Booking",
    tagline: "Web-based venue booking platform for sports and event facilities.",
    image: "/images/project_venue_booking.svg",
    technologies: ["Laravel", "Bootstrap", "MySQL", "PHP"],
    caseStudy: {
      overview: "A web platform developed for a local government agency in Tanah Grogot to digitize sports and event facility reservations for the general public.",
      businessProblem: "Public facility reservations were conducted via physical paper forms or chat messaging, causing double-bookings and lack of real-time schedule visibility.",
      objectives: [
        "Provide an online reservation calendar for sports fields and event halls.",
        "Prevent slot double-booking through automated real-time slot locks.",
        "Give government officers a central admin dashboard to verify bookings."
      ],
      userRoles: ["Public User", "Facility Operator", "Agency Admin"],
      keyFeatures: [
        "Interactive facility availability calendar and slot picker",
        "Automated booking verification and access code issuance",
        "Admin dashboard for session monitoring and booking approvals"
      ],
      applicationWorkflow: [
        { step: "01", title: "Select Venue", desc: "User picks sports facility or hall, selects date, and locks available time slot." },
        { step: "02", title: "Submit", desc: "User inputs booking details and submits reservation request." },
        { step: "03", title: "Verification", desc: "Government officer reviews and approves reservation request." }
      ],
      technicalApproach: "Developed with Laravel and Bootstrap for fast, responsive mobile and desktop access. On-site collaboration ensured direct alignment with agency operational workflows.",
      databaseApiNotes: "Row locking applied during checkout sequence to prevent race conditions on high-demand sports slots.",
      challengesAndSolutions: [
        {
          challenge: "Double-booking when two users submitted requests simultaneously.",
          solution: "Implemented pessimistic database locking during time slot reservation transactions."
        }
      ],
      result: "Successfully deployed on-site for the local government agency, streamlining public venue reservations into a self-service web platform.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/venue-booking"
    }
  },
  {
    id: "elearning-sobat-umkm",
    number: "09",
    category: "E-Learning Platform",
    year: "2024",
    title: "Sobat UMKM E-Learning",
    tagline: "React JS e-learning platform for digital marketing education for MSMEs.",
    image: "/images/project_elearning.svg",
    technologies: ["React JS", "JavaScript", "REST API", "HTML/CSS"],
    caseStudy: {
      overview: "An e-learning web platform built with React JS in collaboration with PT. Media Kreasi Abadi and Sobat UMKM to provide digital marketing education for local small businesses.",
      businessProblem: "MSME owners needed an accessible, fast-loading portal to learn digital marketing strategies without complex interface barriers.",
      objectives: [
        "Build a clean, responsive React JS web interface for course content.",
        "Integrate API endpoints for video progress tracking and course certificates."
      ],
      userRoles: ["MSME Student", "Course Instructor", "Admin"],
      keyFeatures: [
        "Interactive course lesson player with progress tracking",
        "Digital marketing resource downloads and quiz modules",
        "Seamless integration with Sobat UMKM ecosystem"
      ],
      applicationWorkflow: [
        { step: "01", title: "Enroll", desc: "User registers and browses digital marketing courses." },
        { step: "02", title: "Learn", desc: "User watches video modules and tracks completion status." },
        { step: "03", title: "Certify", desc: "System issues completion certificate upon passing quizzes." }
      ],
      technicalApproach: "Built with React JS using component-driven UI architecture and responsive Tailwind/CSS styling.",
      databaseApiNotes: "REST API integration handling asynchronous user progress sync.",
      challengesAndSolutions: [
        {
          challenge: "Slow video lesson state re-renders.",
          solution: "Memoized course player components and optimized state handlers."
        }
      ],
      result: "Successfully launched e-learning platform empowering local MSMEs with digital marketing skills.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/sobat-umkm"
    }
  },
  {
    id: "waste-logistics-system",
    number: "10",
    category: "Government Logistics",
    year: "2024",
    title: "Waste Logistics System",
    tagline: "Waste transportation web application for Bulungan Regency Environmental Agency.",
    image: "/images/project_waste_logistics.svg",
    technologies: ["JavaScript", "PHP", "MySQL", "Logistics"],
    caseStudy: {
      overview: "An operational web application developed for the Bulungan Regency Environmental Agency (Dinas Lingkungan Hidup Kabupaten Bulungan) to digitalize waste transportation schedules, fleet routes, and disposal tracking.",
      businessProblem: "Waste collection dispatchers relied on paper ledgers, causing untracked fleet routes, missed disposal schedules, and delayed operational reporting.",
      objectives: [
        "Digitalize waste collection schedules and truck fleet routes.",
        "Track daily disposal tonnage and driver logs across Bulungan Regency."
      ],
      userRoles: ["Agency Officer", "Fleet Supervisor", "Dispatcher"],
      keyFeatures: [
        "Fleet schedule and route assignment dashboard",
        "Daily waste disposal tonnage logging and statistics",
        "Driver shift logs and vehicle maintenance records"
      ],
      applicationWorkflow: [
        { step: "01", title: "Route Assign", desc: "Dispatcher assigns truck fleet to collection routes." },
        { step: "02", title: "Collect & Log", desc: "Drivers collect waste and record tonnage at disposal site." },
        { step: "03", title: "Agency Report", desc: "Agency officers view real-time disposal statistics." }
      ],
      technicalApproach: "Developed with PHP and JavaScript backed by MySQL database.",
      databaseApiNotes: "Structured route and vehicle relational schemas.",
      challengesAndSolutions: [
        {
          challenge: "Transitioning agency officers from paper ledgers to digital web application.",
          solution: "Built simplified single-screen entry forms with instant summary tables."
        }
      ],
      result: "Digitalized waste transportation logs across Bulungan Regency, improving fleet route accountability.",
      repoUrl: "https://github.com/MRifqiandii",
      demoUrl: "https://structured-digital-works.lovable.app/projects/waste-logistics"
    }
  }
];

export const skillsData = {
  backend: [
    { name: "Laravel", level: "Expert", desc: "Eloquent, REST API, SIMGAJI, Auth" },
    { name: ".NET / .NET Core", level: "Advanced", desc: "C#, Web API, Architecture" },
    { name: "PHP", level: "Expert", desc: "Object-Oriented, MVC Frameworks" },
    { name: "REST API Design", level: "Advanced", desc: "JSON APIs, Authentication, Integration" }
  ],
  frontend: [
    { name: "Vue.js", level: "Advanced", desc: "Vue 3, Composition API, Vite" },
    { name: "React JS", level: "Advanced", desc: "JSX, Hooks, Component State, APIs" },
    { name: "Blazor", level: "Advanced", desc: "C# WebAssembly, Enterprise Components" },
    { name: "Angular", level: "Intermediate", desc: "TypeScript, Modules, Enterprise UI" },
    { name: "Bootstrap / Tailwind", level: "Expert", desc: "Responsive Layouts, Utility Styling" },
    { name: "HTML5 / CSS3 / JS", level: "Expert", desc: "Core Web Fundamentals" }
  ],
  mobile: [
    { name: "Flutter", level: "Advanced", desc: "Cross-platform Mobile Development" },
    { name: "Mobile UI", level: "Advanced", desc: "Responsive Mobile Screens, State" }
  ],
  database: [
    { name: "PostgreSQL", level: "Advanced", desc: "Schema Design, Query Optimization" },
    { name: "SQL Server", level: "Advanced", desc: "Stored Procedures, Lock Resolution" },
    { name: "MySQL", level: "Expert", desc: "Transactional Integrity, Relational DB" }
  ],
  toolsAndDeployment: [
    { name: "Git & GitHub", level: "Expert", desc: "Version Control, Repository Workflows" },
    { name: "Remote Server Publishing", level: "Advanced", desc: "VPS Deployment, Server Hosting" },
    { name: "On-site Deployment", level: "Advanced", desc: "Government Agency Handover" }
  ]
};

export const processData = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the business process, user needs, constraints, and expected outcomes before writing any code."
  },
  {
    step: "02",
    title: "Structure",
    description: "Define the user flow, system architecture, database structure, and API requirements."
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the interface, backend logic, integrations, and application features."
  },
  {
    step: "04",
    title: "Validate",
    description: "Test the application, review edge cases, refine usability, and fix issues."
  },
  {
    step: "05",
    title: "Deploy",
    description: "Prepare the production build, configure the server, and make sure it runs reliably."
  }
];

export const valuesData = [
  {
    title: "Structured problem-solving",
    description: "I map the business process before the code. Most software bugs stem from unclear operational rules."
  },
  {
    title: "Attention to data accuracy",
    description: "Numbers that people are paid by, or audited on (like SIMGAJI payroll and government logistics), must be 100% reproducible."
  },
  {
    title: "Maintainable code",
    description: "Written cleanly to be read and maintained months later by any developer."
  },
  {
    title: "Clear communication",
    description: "Plain explanations of technical trade-offs in the language of stakeholders and client agencies."
  },
  {
    title: "Practical product decisions",
    description: "The right scope is the one that ships on time, gets used daily, and survives the next requirement."
  },
  {
    title: "Continuous learning",
    description: "From .NET and Laravel to React and Flutter, I choose whatever stack best fits the problem."
  }
];
