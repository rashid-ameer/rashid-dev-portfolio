import ableton from "@/assets/ableton.webp";
import digixtra from "@/assets/digixtra.webp";
import wildTravel from "@/assets/wild-travel.webp";
import judic from "@/assets/judic.png";
import mercel from "@/assets/mercel.jpg";
import digitalTenant from "@/assets/digital-tenant.png";

export const PROJECTS = [
  {
    title: "Judic App: Field Tracking App for Legal Actuaries",
    description:
      "A web and mobile (Flutter) platform that helps legal actuaries manage daily field visits efficiently. Track real-time locations with live updates, log visit details including notes and photos, and generate reports for administrators. Includes real-time notifications for task updates and status changes.",
    image: judic,
    tags: ["React", "Tailwind CSS", "Zod", "Axios"],
    href: "https://www.judicapp.com",
    repo: "",
  },
  {
    title: "Digital Tenant",
    description:
      "A web platform for landlords, tenants, and service professionals in the US to manage leases, contracts, and property-related tasks. Landlords can create and manage rental agreements, tenants can track their leases, and service professionals handle task assignments and contract fulfillment efficiently.",
    image: digitalTenant,
    tags: [
      "React",
      "Tailwind CSS",
      "Zod",
      "Axios",
      "React Hook Form",
      "Charts",
    ],
    href: "https://digitalapp.technoholicasprojects.com",
    repo: "",
  },
  {
    title: "DigiXtra",
    description:
      "An interactive landing page for a software company presenting its services, portfolio, and contact information in a structured, easy-to-navigate layout.",
    image: digixtra,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Calendly"],
    href: "https://digixtra.vercel.app/",
    repo: "https://github.com/rashid-ameer/digixtra",
  },
  {
    title: "Wild Travel",
    description:
      "A travel landing page inspired by adventure and nature. It highlights destinations, trip details, and features like offline maps, augmented reality guidance, and adventure scheduling — all in a modern, minimal layout.",
    image: wildTravel,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://wild-travel.vercel.app/",
    repo: "https://github.com/rashid-ameer/travel-website",
  },
  {
    title: "Ableton",
    description:
      "A clean landing page inspired by Ableton's official website, showcasing its music production tools, creative workflow, and product highlights with a modern layout.",
    image: ableton,
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://ableton-tau.vercel.app/",
    repo: "https://github.com/rashid-ameer/ableton",
  },
  {
    title: "Mercel",
    description:
      "A minimal social app for sharing posts, comments, and likes with a clean, responsive UI.",
    image: mercel,
    tags: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
    ],
    href: "https://mercel-beta.vercel.app/",
    repo: "https://github.com/rashid-ameer/mercel",
  },
];
