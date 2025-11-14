import ableton from "@/assets/ableton.webp";
import digixtra from "@/assets/digixtra.webp";
import wildTravel from "@/assets/wild-travel.webp";
import judic from "@/assets/judic.png";

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
    title: "Wild Travel",
    description:
      "A travel landing page inspired by adventure and nature. It highlights destinations, trip details, and features like offline maps, augmented reality guidance, and adventure scheduling — all in a modern, minimal layout.",
    image: wildTravel,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://wild-travel.vercel.app/",
    repo: "https://github.com/rashid-ameer/travel-website",
  },
  {
    title: "DigiXtra",
    description:
      "A simple landing page for a software company presenting its services, portfolio, and contact information in a structured, easy-to-navigate layout.",
    image: digixtra,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://digixtra.vercel.app/",
    repo: "https://github.com/rashid-ameer/digixtra",
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
    image: "/stripe-subscriptions-dashboard-minimal-dark.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
    ],
    href: "https://mercel-beta.vercel.app/",
    repo: "#",
  },
];
