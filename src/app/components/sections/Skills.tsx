import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";
import { Section } from "@/app/components/ui/Section";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "ReactJS", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "REST API"]
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL","MongoDB",  ]
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS (Lambda, API Gateway, SES)", "CI/CD (GitHub Actions)", "Vercel"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Jira", "Figma", "Postman", "VS Code", "SourceTree"]
  }
];

export function Skills() {
  return (
    <Section id="skills" className="bg-background">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Technical Stack
        </motion.h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          I choose the right tool for the job. My stack is focused on scalability, maintainability, and developer experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground/90 pb-2 border-b border-border/50">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-normal bg-card hover:bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
