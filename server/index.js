import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  return /* @__PURE__ */ jsx("nav", { className: `top-nav ${open ? "open" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "nav-inner", children: [
    /* @__PURE__ */ jsx("div", { className: "nav-logo", children: "Karl.Dev" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "nav-toggle",
        "aria-label": "Toggle menu",
        "aria-expanded": open,
        onClick: () => setOpen((s) => !s),
        children: "☰"
      }
    ),
    /* @__PURE__ */ jsxs("ul", { className: "nav-links", onClick: () => setOpen(false), children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#summary", children: "Summary" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#experience", children: "Experience" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#projects", children: "Projects" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#education", children: "Education" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tech", children: "Tech" }) })
    ] })
  ] }) });
};
const RESUME_DATA = {
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
    { name: "Python & Django", level: "30%" }
  ],
  learning: [
    "Expanding knowledge and practical application of Clean Architecture for building maintainable and testable systems.",
    "Deepening experience with Vertical Slice Architecture to improve feature-focused development and reduce complexity.",
    "Studying and practicing Microservices architecture, including design patterns, service boundaries, and communication strategies.",
    "Engaging in online courses, documentation study, and hands-on projects to strengthen architectural decision-making.",
    "Exploring real-world case studies to understand scalable system design and modern best practices."
  ],
  projects: [
    {
      id: "ngobia",
      title: "National Government-Owned Buildings Information Application (NGOBIA)",
      subtitle: "Enterprise Project • Sept 2023 - July 2024",
      startDate: "2023-09",
      // NEW FIELD
      endDate: "2024-07",
      // NEW FIELD
      company: "ArcGIS • C# • Blazor • Mobile (Hybrid) • CRUD • Offline Mode",
      summaryPoints: [
        "Developed a full Asset Management system for web and mobile platforms as part of a team, focusing on property database operations.",
        "Conducted Proof of Concept (POC) and studied ArcGIS Geographic Information System, implementing its API for geographical data visualization and management.",
        "Implemented **CRUD operations** for the Property Database across both web and mobile platforms, including crucial **offline mode** functionality for mobile users."
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
          "Scope of Work form with accordion, 'add more' feature, and elimination method"
        ],
        highlights: [
          "Successfully implemented ArcGIS API after POC and in-depth study",
          "Enabled robust **offline mode** functionality for critical mobile operations",
          "Created reusable data libraries module for frontend and backend consistency",
          "Developed complex UI features like the Scope of Work form with elimination logic",
          "Designed and implemented a generic **Exception Handler** in the frontend, ensuring consistent error management across the system",
          "Managed data synchronization between application layers and the GIS service"
        ]
      }
    },
    {
      id: "solara",
      title: "Solara Hotel Management System",
      subtitle: "Personal Project • Sept 2025 - Oct 2025",
      startDate: "2025-09",
      // NEW FIELD
      endDate: "2025-10",
      // NEW FIELD
      company: "React • ASP.NET Core • PostgreSQL • JWT • Stripe • Cloudinary",
      summaryPoints: [
        "Built a full-stack web application to streamline hotel operations including room management, bookings, and payments",
        "Implemented role-based access control for users and admins with secure JWT authentication",
        "Integrated Stripe payment processing and Cloudinary for media management"
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
          "Excel export functionality for reports"
        ],
        highlights: [
          "Applied clean architecture principles for maintainability",
          "Implemented vertical slice pattern for better code organization",
          "PostgreSQL for efficient data storage and management",
          "RESTful API design with ASP.NET Core",
          "Responsive design for all devices"
        ]
      }
    },
    {
      id: "uamp",
      title: "Universal Account Management Portal (UAMP)",
      subtitle: "Enterprise Project • March 2025 - Present",
      startDate: "2025-03",
      // NEW FIELD
      endDate: "Present",
      // NEW FIELD
      company: "Apigee • MongoDB • Navitaire",
      summaryPoints: [
        "Enhanced Cebu Pacific's Universal Account Management Portal for account applications, approvals, and fund operations",
        "Improved modules for Parent–Child Account Management, Fund Management, and Account Type Limits",
        "Integrated backend services using Apigee, Navitaire, and MongoDB with fallback logic for system outages"
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
          "Fallback logic for system outage resilience"
        ],
        highlights: [
          "Integrated Apigee API gateway for microservices architecture",
          "Connected with Navitaire airline booking system",
          "MongoDB for flexible data storage",
          "Optimized API workflows for performance",
          "Implemented robust error handling and fallback mechanisms",
          "Cross-team collaboration for streamlined approval processes"
        ]
      }
    },
    {
      id: "timesheet",
      title: "Timesheet Tracker",
      subtitle: "Internal Project • March 2025 - July 2025",
      startDate: "2025-03",
      // NEW FIELD
      endDate: "2025-07",
      // NEW FIELD
      company: ".NET Aspire • PostgreSQL • Minimal API • Blazor • Azure CI/CD • DbUp",
      summaryPoints: [
        "Developed a web application to manage project costing by accurately tracking employees' working hours for payroll processing and client billing",
        "Implemented CRUD operations and created database migration scripts using DbUp for smooth database versioning and deployment",
        "Calculated monthly salaries based on recorded hours to support payroll processing and overall project expense monitoring"
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
          "Database versioning with DbUp migration scripts"
        ],
        highlights: [
          "Built with .NET Aspire for modern cloud-native architecture",
          "Implemented CI/CD pipelines in Azure using YAML",
          "Automated testing and deployment workflows",
          "Release pipelines for Linux environments",
          "Database migration scripts for smooth versioning",
          "Blazor frontend for interactive user experience"
        ]
      }
    },
    {
      id: "edms",
      title: "EDMS (Electronic Document Management System)",
      subtitle: "Enterprise Project • July 2024",
      startDate: "2024-07",
      // NEW FIELD (Assuming start and end is July 2024)
      endDate: "2024-07",
      // NEW FIELD
      company: "ASP.NET • Blazor • Excel Integration",
      summaryPoints: [
        "Developed a comprehensive web application with modules for Record Management, Request Handling, User Management, and Reports & Analytics",
        "Implemented and refactored modules for Personal Record, DPWH Issuance, and Personal Records Data Library",
        "Enabled efficient data handling, request tracking, user access control, and data-driven insights across the system"
      ],
      modalData: {
        screenshotText: "edms.png",
        techStack: ["ASP.NET", "Blazor", "Excel Integration", "C#"],
        features: [
          "Record Management - Personal records and DPWH issuance tracking",
          "Request Handling - Streamlined request tracking and processing",
          "User Management - Role-based access control and permissions",
          "Reports & Analytics - Data-driven insights and reporting",
          "Personal Records Data Library with document management"
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
          "Consistent error management across the application"
        ]
      }
    },
    {
      id: "crew",
      title: "Crew Remittance",
      subtitle: "Enterprise Project • Nov 2024 - June 2025",
      startDate: "2024-11",
      // NEW FIELD
      endDate: "2025-06",
      // NEW FIELD
      company: "Apigee • BRE (Business Rules Engine)",
      summaryPoints: [
        "Developed a backend solution using Apigee to handle crew remittance operations",
        "Modified email notification templates in BRE (Business Rules Engine) to improve communication workflows"
      ],
      modalData: {
        screenshotText: "remit.png",
        techStack: ["Apigee", "BRE", "Backend"],
        features: [
          "Backend solution for crew remittance operations",
          "Integration with Business Rules Engine",
          "Email notification template management"
        ],
        highlights: [
          "Streamlined remittance processing",
          "Improved communication workflows via BRE",
          "Robust Apigee backend implementation"
        ]
      }
    },
    {
      id: "uniform",
      title: "Ceb Uniform",
      subtitle: "Enterprise Project • Nov 2024 - May 2025",
      startDate: "2024-11",
      // NEW FIELD
      endDate: "2025-05",
      // NEW FIELD
      company: "ASP.NET • Apigee • SonarQube",
      summaryPoints: [
        "Developed an e-commerce platform for uniform allocation using a points-based system for cabin crew, supervisors, and management",
        "Converted 2 ASP.NET APIs to Apigee, ensuring seamless API gateway integration",
        "Conducted comprehensive endpoint testing in both Apigee and ASP.NET environments to ensure consistency and reliability"
      ],
      modalData: {
        screenshotText: "uniform.png",
        techStack: ["ASP.NET", "Apigee", "SonarQube"],
        features: [
          "E-commerce platform for uniform allocation",
          "Points-based system for staff",
          "API Gateway integration"
        ],
        highlights: [
          "Seamless API gateway integration via Apigee",
          "Comprehensive endpoint testing",
          "Ensured consistency between ASP.NET and Apigee environments"
        ]
      }
    },
    {
      id: "cras",
      title: "CRAS Re-architecture",
      subtitle: "Enterprise Project • Nov 2024 - Dec 2024",
      startDate: "2024-11",
      // NEW FIELD
      endDate: "2024-12",
      // NEW FIELD
      company: "ASP.NET • Apigee • MySQL",
      summaryPoints: [
        "Participated in the re-architecture and revamp of the Cargo Rates Automation System (CRAS), an IT initiative to enable independent access to the CRAS web portal",
        "Migrated backend solution from ASP.NET to Apigee using pass-through architecture to optimize system performance",
        "Ensured the implementation of latest and advanced technologies to maximize efficiency and ease of use for all portal users"
      ],
      modalData: {
        screenshotText: "cras.png",
        techStack: ["ASP.NET", "Apigee", "MySQL"],
        features: [
          "Cargo Rates Automation System",
          "Independent access web portal",
          "Pass-through architecture optimization"
        ],
        highlights: [
          "Backend migration to Apigee",
          "Performance optimization",
          "Implementation of advanced technologies for efficiency"
        ]
      }
    }
  ]
};
const Header = () => {
  const { name, title, email, phone, location, linkedin } = RESUME_DATA.header;
  return /* @__PURE__ */ jsxs("header", { className: "resume-header", children: [
    /* @__PURE__ */ jsx("h1", { className: "resume-name", children: name }),
    /* @__PURE__ */ jsx("p", { className: "resume-title", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "contact-info", children: [
      /* @__PURE__ */ jsx(ContactItem, { iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: email }),
      /* @__PURE__ */ jsx(ContactItem, { iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: phone }),
      /* @__PURE__ */ jsx(ContactItem, { iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: location }),
      /* @__PURE__ */ jsx(
        ContactItem,
        {
          iconPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
          text: linkedin,
          fill: "currentColor"
        }
      )
    ] })
  ] });
};
const ContactItem = ({ iconPath, text, fill = "none" }) => /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
  /* @__PURE__ */ jsx("svg", { className: "icon", viewBox: "0 0 24 24", fill, stroke: fill === "none" ? "currentColor" : "none", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: iconPath }) }),
  /* @__PURE__ */ jsx("span", { children: text })
] });
const Sidebar = () => {
  return /* @__PURE__ */ jsxs("aside", { className: "sidebar", children: [
    /* @__PURE__ */ jsxs("div", { className: "section", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Skills" }),
      RESUME_DATA.skills.map((skill, index) => /* @__PURE__ */ jsxs("div", { className: "skill-item", children: [
        /* @__PURE__ */ jsx("div", { className: "skill-name", children: skill.name }),
        /* @__PURE__ */ jsx("div", { className: "skill-bar", children: /* @__PURE__ */ jsx("div", { className: "skill-progress", style: { width: skill.level } }) })
      ] }, index))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "section", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Continuous Learning" }),
      RESUME_DATA.learning.map((learn, index) => /* @__PURE__ */ jsx("div", { className: "learning-box", children: learn }, index))
    ] })
  ] });
};
const Experience = () => {
  return /* @__PURE__ */ jsxs("section", { className: "section", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Work Experience" }),
    /* @__PURE__ */ jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxs("div", { className: "item-header", children: [
        /* @__PURE__ */ jsx("h3", { className: "item-title", children: "Junior Software Developer" }),
        /* @__PURE__ */ jsx("span", { className: "item-date", children: "Sept 2023 - Present" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "item-company", children: "Blackfort Consulting Inc." }),
      /* @__PURE__ */ jsxs("div", { className: "item-description", children: [
        /* @__PURE__ */ jsx("p", { className: "deployment-note", children: "Deployed to Cebu Pacific Air (July 2024 – Present)" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Led backend enhancements, API gateway transitions, and application optimizations for multiple enterprise software projects" }),
          /* @__PURE__ */ jsx("li", { children: "Converted ASP.NET APIs to Apigee and conducted thorough endpoint testing" }),
          /* @__PURE__ */ jsx("li", { children: "Addressed SonarQube issues through effective code refactoring" }),
          /* @__PURE__ */ jsx("li", { children: "Developed and maintained APIs using C# with Minimal API and Apigee, following clean architecture and vertical slice pattern" }),
          /* @__PURE__ */ jsx("li", { children: "Applied Database-First approach in various projects, ensuring accurate data modeling" }),
          /* @__PURE__ */ jsx("li", { children: "Integrated backend services into mobile and web platforms" }),
          /* @__PURE__ */ jsx("li", { children: "Built and mimicked front-end layouts using Telerik Blazor based on UI/UX design specs" }),
          /* @__PURE__ */ jsx("li", { children: "Performed bug fixing, smoke testing, and collaborated with QA to ensure code quality" })
        ] })
      ] })
    ] })
  ] });
};
const ProjectList = ({ onOpenModal }) => {
  const sortedProjects = RESUME_DATA.projects.slice().sort((a, b) => {
    const isAPresent = a.endDate === "Present";
    const isBPresent = b.endDate === "Present";
    if (isAPresent && isBPresent) {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }
    if (isAPresent) {
      return -1;
    }
    if (isBPresent) {
      return 1;
    }
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  return /* @__PURE__ */ jsxs("section", { className: "section", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Projects" }),
    sortedProjects.map((project) => /* @__PURE__ */ jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsx("div", { className: "item-header", children: /* @__PURE__ */ jsx("h3", { className: "item-title", children: project.title }) }),
      /* @__PURE__ */ jsx("div", { className: "item-header", children: /* @__PURE__ */ jsx("span", { className: "item-date", children: project.subtitle }) }),
      /* @__PURE__ */ jsx("div", { className: "item-company", children: project.company }),
      /* @__PURE__ */ jsxs("div", { className: "item-description", children: [
        /* @__PURE__ */ jsx("ul", { children: project.summaryPoints.map((point, index) => /* @__PURE__ */ jsx("li", { children: point }, index)) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "view-project-btn",
            onClick: () => onOpenModal(project),
            children: [
              /* @__PURE__ */ jsx("span", { className: "view-icon", children: "👁️" }),
              /* @__PURE__ */ jsx("span", { children: "View Project Details" })
            ]
          }
        )
      ] })
    ] }, project.id))
  ] });
};
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);
  if (!project) return null;
  const { title, subtitle, modalData } = project;
  return /* @__PURE__ */ jsx("div", { className: "modal-overlay active", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: "modal-content", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsx("button", { className: "modal-close", onClick: onClose, children: "×" }),
      /* @__PURE__ */ jsx("h2", { className: "modal-title", children: title }),
      /* @__PURE__ */ jsx("p", { className: "modal-subtitle", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "modal-body", children: [
      /* @__PURE__ */ jsx("div", { className: "project-screenshot", children: modalData.screenshotText ? /* @__PURE__ */ jsx(
        "img",
        {
          src: modalData.screenshotText,
          alt: `${title} Screenshot`,
          className: "project-image"
        }
      ) : (
        /* Optional: Fallback kung walang image path */
        /* @__PURE__ */ jsx("div", { className: "image-placeholder", children: "Image Not Found" })
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "tech-stack-container", children: [
        /* @__PURE__ */ jsx("h3", { className: "section-heading", children: "Tech Stack" }),
        modalData.techStack.map((tech, index) => /* @__PURE__ */ jsx("span", { className: "tech-badge", children: tech }, index))
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "section-heading", children: "Key Features" }),
      /* @__PURE__ */ jsx("ul", { className: "project-feature-list", children: modalData.features.map((feature, index) => /* @__PURE__ */ jsx("li", { children: feature }, index)) }),
      /* @__PURE__ */ jsx("h3", { className: "section-heading", children: "Technical Highlights" }),
      /* @__PURE__ */ jsx("ul", { className: "project-feature-list", children: modalData.highlights.map((highlight, index) => /* @__PURE__ */ jsx("li", { children: highlight }, index)) })
    ] })
  ] }) });
};
function App2() {
  const [selectedProject, setSelectedProject] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "resume-container", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Header, {}),
    " ",
    /* @__PURE__ */ jsxs("div", { className: "resume-body", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsxs("main", { className: "main-content", children: [
        /* @__PURE__ */ jsx("div", { id: "summary" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("section", { className: "section", children: [
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Professional Summary" }),
          /* @__PURE__ */ jsx("p", { className: "summary-text", children: "Motivated Junior Software Developer specializing in back-end development, web systems, and API integrations. Skilled in object-oriented programming, data structures, and modern web technologies. Eager to grow in the tech industry by continuously improving both technical skills and best practices." })
        ] }),
        /* @__PURE__ */ jsx("div", { id: "experience" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Experience, {}) }),
        /* @__PURE__ */ jsx("div", { id: "education" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("section", { className: "section", children: [
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Education" }),
          /* @__PURE__ */ jsxs("div", { className: "education-item", children: [
            /* @__PURE__ */ jsxs("div", { className: "item-header", children: [
              /* @__PURE__ */ jsx("h3", { className: "item-title", children: "Bachelor of Science in Computer Science" }),
              /* @__PURE__ */ jsx("span", { className: "item-date", children: "2018 - 2023" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "item-company", children: "Technological University of the Philippines" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { id: "projects" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProjectList, { onOpenModal: setSelectedProject }) }),
        /* @__PURE__ */ jsx("div", { id: "tech" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("section", { className: "section", children: [
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Technical Expertise" }),
          /* @__PURE__ */ jsx("div", { className: "item-description", children: /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Backend:" }),
              " C#, Minimal API, ASP.NET, Clean Architecture, Vertical Slice Pattern"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Frontend:" }),
              " .NET Blazor, .Net Maui, ReactJS, Javascript Telerik, HTML, CSS, Bootstrap, jQuery, AJAX"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "API Management:" }),
              " Apigee for API gateway management and integration"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Database:" }),
              " MySQL, PostgreSQL, SQLite, MongoDb, Navitaire, Database-First approach, data modeling"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "DevOps:" }),
              " Git, GitHub, Azure DevOps, Azure, Heroku, CI/CD pipelines, YAML, Vercel"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Tools:" }),
              " SonarQube for code quality, QA collaboration"
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      ProjectModal,
      {
        project: selectedProject,
        onClose: () => setSelectedProject(null)
      }
    )
  ] });
}
function meta({}) {
  return [{
    title: "Karl.Dev"
  }, {
    name: "description",
    content: "Welcome to my Portfolio"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(App2, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-_PEjTn6l.js", "imports": ["/assets/chunk-4WY6JWTD-CgRXpLqU.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-RKgDlnuw.js", "imports": ["/assets/chunk-4WY6JWTD-CgRXpLqU.js"], "css": ["/assets/app-COGbxCF6.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CYlXMQUd.js", "imports": ["/assets/chunk-4WY6JWTD-CgRXpLqU.js"], "css": ["/assets/app-COGbxCF6.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-cd62573b.js", "version": "cd62573b", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
