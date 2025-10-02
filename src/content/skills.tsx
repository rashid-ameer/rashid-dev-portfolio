import {
  Code2,
  Database,
  Layers,
  Server,
  Palette,
  GitBranch,
  Cloud,
  Box,
  TestTube,
  Figma,
  Globe,
} from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML/CSS", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Figma", icon: Figma },
    ],
  },
];
