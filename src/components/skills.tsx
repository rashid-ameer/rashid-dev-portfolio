import { SKILLS } from "@/content/skills";

export function Skills() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto transition-all duration-1000 delay-100">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {SKILLS.map((category, index) => (
            <div
              key={index}
              className="space-y-4.5 md:grid md:grid-cols-[12px_1fr_12px] md:content-start">
              <h3 className="text-lg font-medium md:col-start-2">
                {category.category}
              </h3>
              <ul className="space-y-0.5 md:col-span-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/35 transition-colors group">
                      <Icon className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
