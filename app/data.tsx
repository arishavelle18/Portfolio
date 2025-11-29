// src/data.js

export const RESUME_DATA = {
  header: {
    name: "Arishavelle Karl Villanueva",
    title: "Junior Software Developer",
    email: "arishavelle18@gmail.com",
    phone: "+63 9673352955",
    location: "Navotas, Philippines",
    linkedin: "https://www.linkedin.com/in/arishavelle-karl-villanueva-276574241/"
  },
  skills: [
    { name: "C# & .NET", level: "90%" },
    { name: "Minimal API & Blazor", level: "85%" },
    { name: "Apigee", level: "80%" },
    { name: "HTML/CSS/Bootstrap", level: "80%" },
    { name: "JavaScript & jQuery", level: "70%" },
    { name: "Git & CI/CD", level: "50%" },
    { name: "Python & Django", level: "30%" },
  ],
  learning: [
    "Expanding knowledge and practical application of Clean Architecture for building maintainable and testable systems.",
    "Deepening experience with Vertical Slice Architecture to improve feature-focused development and reduce complexity.",
    "Studying and practicing Microservices architecture, including design patterns, service boundaries, and communication strategies.",
    "Engaging in online courses, documentation study, and hands-on projects to strengthen architectural decision-making.",
    "Exploring real-world case studies to understand scalable system design and modern best practices.",
  ],
  projects: [
    {
      id: "ngobia",
      title: "Asset Management System (NGOBIA)",
      subtitle: "Enterprise Project • Sept 2023 - July 2024",
      startDate: "2023-09", // NEW FIELD
      endDate: "2024-07",   // NEW FIELD
      company: "ArcGIS • C# • Blazor • Mobile (Hybrid) • CRUD • Offline Mode",
      summaryPoints: [
        "Developed a full Asset Management system for web and mobile platforms as part of a team, focusing on property database operations.",
        "Conducted Proof of Concept (POC) and studied ArcGIS Geographic Information System, implementing its API for geographical data visualization and management.",
        "Implemented **CRUD operations** for the Property Database across both web and mobile platforms, including crucial **offline mode** functionality for mobile users.",
      ],
      modalData: {
        screenshotText: "ngobia.png", 
        techStack: ["ArcGIS API", "C#", ".NET", "Blazor", "SQL Server", "Mobile/Hybrid App", "Offline Mode"],
        features: [
          "Developed Asset Management system for web and mobile applications",
          "Implemented ArcGIS Geographic Information System (GIS) for geographical data",
          "CRUD operations for Property Database on web and mobile platforms",
          "Offline mode implementation in mobile application",
          "ArcGIS data synchronization based on region ID and layer ID (Frontend & Backend)",
          "Data libraries module development (Backend & Frontend) for web application",
          "Project Monitoring Entry module with property/project details and document upload",
          "Scope of Work form with accordion, 'add more' feature, and elimination method",
        ],
        highlights: [
          "Successfully implemented ArcGIS API after POC and in-depth study",
          "Enabled robust **offline mode** functionality for critical mobile operations",
          "Created reusable data libraries module for frontend and backend consistency",
          "Developed complex UI features like the Scope of Work form with elimination logic",
          "Designed and implemented a generic **Exception Handler** in the frontend, ensuring consistent error management across the system",
          "Managed data synchronization between application layers and the GIS service",
        ],
      },
    },
    {
      id: "solara",
      title: "Solara Hotel Management System",
      subtitle: "Personal Project • Sept 2025 - Oct 2025",
      startDate: "2025-09", // NEW FIELD
      endDate: "2025-10",   // NEW FIELD
      company: "React • ASP.NET Core • PostgreSQL • JWT • Stripe • Cloudinary",
      summaryPoints: [
        "Built a full-stack web application to streamline hotel operations including room management, bookings, and payments",
        "Implemented role-based access control for users and admins with secure JWT authentication",
        "Integrated Stripe payment processing and Cloudinary for media management",
      ],
      modalData: {
        screenshotText: "solara.png",
        techStack: ["React", "ASP.NET Core", "PostgreSQL", "JWT", "Stripe", "Cloudinary"],
        features: [
          "Full-stack web application for streamlined hotel operations",
          "Room management and real-time booking system",
          "Secure payment processing with Stripe integration",
          "Role-based access control (Users & Admins)",
          "JWT authentication for secure user sessions",
          "Media management with Cloudinary",
          "Clean architecture with vertical slice pattern",
          "Dark mode support for enhanced user experience",
          "Geolocation maps for hotel locations",
          "Excel export functionality for reports",
        ],
        highlights: [
          "Applied clean architecture principles for maintainability",
          "Implemented vertical slice pattern for better code organization",
          "PostgreSQL for efficient data storage and management",
          "RESTful API design with ASP.NET Core",
          "Responsive design for all devices",
        ],
      },
    },
    {
      id: "uamp",
      title: "Universal Account Management Portal (UAMP)",
      subtitle: "Enterprise Project • March 2025 - Present",
      startDate: "2025-03", // NEW FIELD
      endDate: "Present",   // NEW FIELD
      company: "C# • Minimal API • Apigee • MongoDB • Navitaire",
      summaryPoints: [
        "Enhanced Cebu Pacific's Universal Account Management Portal for account applications, approvals, and fund operations",
        "Improved modules for Parent–Child Account Management, Fund Management, and Account Type Limits",
        "Integrated backend services using Apigee, Navitaire, and MongoDB with fallback logic for system outages",
      ],
      modalData: {
        screenshotText: "amp.png",
        techStack: ["C#", "Minimal API", "Apigee", "MongoDB", "Navitaire"],
        features: [
          "Account applications and approval workflows",
          "Parent-Child Account Management module",
          "Fund Management and transaction tracking",
          "Account Type Limits configuration",
          "Multi-department approval process (Sales, Treasury, Account Management)",
          "Fallback logic for system outage resilience",
        ],
        highlights: [
          "Integrated Apigee API gateway for microservices architecture",
          "Connected with Navitaire airline booking system",
          "MongoDB for flexible data storage",
          "Optimized API workflows for performance",
          "Implemented robust error handling and fallback mechanisms",
          "Cross-team collaboration for streamlined approval processes",
        ],
      },
    },
    {
      id: "timesheet",
      title: "Timesheet Tracker",
      subtitle: "Internal Project • March 2025 - July 2025",
      startDate: "2025-03", // NEW FIELD
      endDate: "2025-07",   // NEW FIELD
      company: ".NET Aspire • PostgreSQL • Minimal API • Blazor • Azure CI/CD • DbUp",
      summaryPoints: [
        "Developed a web application to manage project costing by accurately tracking employees' working hours for payroll processing and client billing",
        "Implemented CRUD operations and created database migration scripts using DbUp for smooth database versioning and deployment",
        "Calculated monthly salaries based on recorded hours to support payroll processing and overall project expense monitoring",
      ],
      modalData: {
        screenshotText: "tracker.png",
        techStack: [".NET Aspire", "PostgreSQL", "Minimal API", "Blazor", "Azure CI/CD", "DbUp"],
        features: [
          "Employee working hours tracking for accurate project costing",
          "Automated monthly salary calculations based on recorded hours",
          "Support for payroll processing and client billing",
          "Project expense monitoring and reporting",
          "CRUD operations for timesheet management",
          "Database versioning with DbUp migration scripts",
        ],
        highlights: [
          "Built with .NET Aspire for modern cloud-native architecture",
          "Implemented CI/CD pipelines in Azure using YAML",
          "Automated testing and deployment workflows",
          "Release pipelines for Linux environments",
          "Database migration scripts for smooth versioning",
          "Blazor frontend for interactive user experience",
        ],
      },
    },
    {
      id: "edms",
      title: "EDMS (Electronic Document Management System)",
      subtitle: "Enterprise Project • July 2024",
      startDate: "2024-07", // NEW FIELD (Assuming start and end is July 2024)
      endDate: "2024-07",   // NEW FIELD
      company: "ASP.NET • Blazor • Excel Integration",
      summaryPoints: [
        "Developed a comprehensive web application with modules for Record Management, Request Handling, User Management, and Reports & Analytics",
        "Implemented and refactored modules for Personal Record, DPWH Issuance, and Personal Records Data Library",
        "Enabled efficient data handling, request tracking, user access control, and data-driven insights across the system",
      ],
      modalData: {
        screenshotText: "edms.png",
        techStack: ["ASP.NET", "Blazor", "Excel Integration", "C#"],
        features: [
          "Record Management - Personal records and DPWH issuance tracking",
          "Request Handling - Streamlined request tracking and processing",
          "User Management - Role-based access control and permissions",
          "Reports & Analytics - Data-driven insights and reporting",
          "Personal Records Data Library with document management",
        ],
        highlights: [
          "Comprehensive document management with version control",
          "Excel Export Services across all system reports",
          "Update propagation for Purpose, Valid ID, and Authorization Documents",
          "User Report Page with integrated query endpoints",
          "Centralized Exception Handler deployed across all pages",
          "Efficient data handling and request tracking",
          "Refactored multiple modules for improved performance",
          "Implemented data library module with automatic updates",
          "Excel integration for enhanced data portability",
          "Consistent error management across the application",
        ],
      },
    },
    {
      id: "crew",
      title: "Crew Remittance",
      subtitle: "Enterprise Project • Nov 2024 - June 2025",
      startDate: "2024-11", // NEW FIELD
      endDate: "2025-06",   // NEW FIELD
      company: "Apigee • BRE (Business Rules Engine)",
      summaryPoints: [
        "Developed a backend solution using Apigee to handle crew remittance operations",
        "Modified email notification templates in BRE (Business Rules Engine) to improve communication workflows",
      ],
      modalData: {
        screenshotText: "remit.png",
        techStack: ["Apigee", "BRE", "Backend"],
        features: [
          "Backend solution for crew remittance operations",
          "Integration with Business Rules Engine",
          "Email notification template management",
        ],
        highlights: [
          "Streamlined remittance processing",
          "Improved communication workflows via BRE",
          "Robust Apigee backend implementation",
        ],
      },
    },
    {
      id: "uniform",
      title: "Ceb Uniform",
      subtitle: "Enterprise Project • Nov 2024 - May 2025",
      startDate: "2024-11", // NEW FIELD
      endDate: "2025-05",   // NEW FIELD
      company: "ASP.NET • Apigee • SonarQube",
      summaryPoints: [
        "Developed an e-commerce platform for uniform allocation using a points-based system for cabin crew, supervisors, and management",
        "Converted 2 ASP.NET APIs to Apigee, ensuring seamless API gateway integration",
        "Conducted comprehensive endpoint testing in both Apigee and ASP.NET environments to ensure consistency and reliability",
      ],
      modalData: {
        screenshotText: "uniform.png",
        techStack: ["ASP.NET", "Apigee", "SonarQube"],
        features: [
          "E-commerce platform for uniform allocation",
          "Points-based system for staff",
          "API Gateway integration",
        ],
        highlights: [
          "Seamless API gateway integration via Apigee",
          "Comprehensive endpoint testing",
          "Ensured consistency between ASP.NET and Apigee environments",
        ],
      },
    },
    {
      id: "cras",
      title: "CRAS Re-architecture",
      subtitle: "Enterprise Project • Nov 2024 - Dec 2024",
      startDate: "2024-11", // NEW FIELD
      endDate: "2024-12",   // NEW FIELD
      company: "ASP.NET • Apigee • MySQL",
      summaryPoints: [
        "Participated in the re-architecture and revamp of the Cargo Rates Automation System (CRAS), an IT initiative to enable independent access to the CRAS web portal",
        "Migrated backend solution from ASP.NET to Apigee using pass-through architecture to optimize system performance",
        "Ensured the implementation of latest and advanced technologies to maximize efficiency and ease of use for all portal users",
      ],
      modalData: {
        screenshotText: "cras.png",
        techStack: ["ASP.NET", "Apigee", "MySQL"],
        features: [
          "Cargo Rates Automation System",
          "Independent access web portal",
          "Pass-through architecture optimization",
        ],
        highlights: [
          "Backend migration to Apigee",
          "Performance optimization",
          "Implementation of advanced technologies for efficiency",
        ],
      },
    },
  ]
};