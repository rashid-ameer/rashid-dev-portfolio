import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
  repo?: string;
};

type Props = {
  project: Project;
  className?: string;
};

function Project({ project, className }: Props) {
  return (
    <Card
      className={cn(
        "py-0 group h-full overflow-hidden border bg-card text-card-foreground transition-colors",
        className
      )}>
      <CardContent className="p-0">
        <Link
          href={project.href || "#"}
          aria-label={`Open ${project.title}`}
          className="block"
          target="_blank">
          <div className="relative">
            {/* Image */}
            <div
              className={cn(
                "aspect-[16/10] w-full overflow-hidden bg-muted relative"
              )}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </Link>
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-pretty text-lg font-semibold leading-tight md:text-xl">
              <Link
                href={project.href || "#"}
                className="hover:underline"
                aria-label={`Open ${project.title}`}>
                {project.title}
              </Link>
            </h3>
            <div className="flex shrink-0 items-center gap-1.5">
              {project.repo ? (
                <Link
                  target="_blank"
                  href={project.repo}
                  aria-label="View source code"
                  className="inline-flex size-8 items-center justify-center rounded-md border bg-secondary/50 text-foreground transition hover:bg-secondary">
                  <Github className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
              {project.href ? (
                <Link
                  href={project.href}
                  target="_blank"
                  aria-label="Visit project"
                  className="inline-flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition hover:opacity-90">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="outline" className="bg-secondary/50">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default Project;
