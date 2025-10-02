import { EXPERIENCES } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Experience
        </h2>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="group relative grid md:grid-rows-[16px_1fr_16px] md:grid-cols-[200px_1fr] gap-y-4 md:gap-y-0 gap-x-4 md:gap-x-8">
              <div className="text-sm text-muted-foreground row-start-2">
                {exp.period}
              </div>
              <div className="md:p-4 row-span-3 rounded-xl space-y-4 md:hover:bg-muted/35 md:transition-colors md:duration-300">
                <h3 className="text-lg font-medium mb-1">
                  {exp.title} · {exp.company}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
