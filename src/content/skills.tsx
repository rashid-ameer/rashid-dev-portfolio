import {
  Code2,
  Database,
  Layers,
  Server,
  Palette,
  GitBranch,
  Cloud,
  Figma,
  Globe,
  Paperclip,
  Workflow,
} from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: Layers },
      { name: "Next.js", icon: Globe },
      { name: "Astro.js", icon: Globe },
      { name: "Solid.js", icon: Layers },
      { name: "Vue.js", icon: Paperclip },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Shadcn UI", icon: Layers },
      { name: "Material UI", icon: Palette },
      { name: "Ant Design", icon: Palette },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "AWS EC2", icon: Cloud },
      { name: "AWS S3", icon: Cloud },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "CI/CD", icon: Workflow },
      { name: "Vercel", icon: Cloud },
      { name: "Netlify", icon: Cloud },
      { name: "Figma", icon: Figma },
      { name: "Prisma", icon: Database },
    ],
  },
];