import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";
import { Section } from "@/app/components/ui/Section";
import { Calendar, Building2, ChevronRight } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech?: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "POFSIS",
    period: "2023 - Present",
    description: [
      "Developed and maintained web applications focused on the HRC and POFShop platforms.",
      "Designed wireframes and system flows for Real Property features to support development and implementation.",
      "Implemented front-end and back-end functionality, contributing to end-to-end feature development and system enhancements.",
    ],
    tech: ["React", "MUI", "Python", "PostgreSQL", "AWS"],
  },
  {
    role: "IT Associate",
    company: "Nauts and Vectors",
    period: "2022 - 2023",
    description: [
      "Managed and maintained the company’s IT asset database, ensuring accurate updates and new entries using Google Sheets and Microsoft Excel.",
      "Provided on-site and remote technical support, troubleshooting hardware, software, and basic network issues.",
      "Assisted in optimizing network performance by diagnosing and resolving connectivity problems."
    ],
    tech: ["Google Suites", "Networking", "Troubleshooting"]
  },
  {
    role: "Software Developer (Intern)",
    company: "Work Immersion",
    period: "2022",
    description: [
      "Developed a desktop-based database system using Visual Studio, .NET Framework, and Windows Forms.",
      "Implemented real-time database connectivity with MySQL.",
	  "Built data synchronization between MySQL and Excel using ODBC for dynamic data reporting and presentation.",
    ],
    tech: ["Visual Studio", "C++", "MySQL", "Excel"]
  }
];

export function Experience() {
  return (
    <Section id="experience" className="bg-secondary/20">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Career History
        </motion.h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A timeline of my professional growth and the value I've delivered to organizations.
        </p>
      </div>

      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{item.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{item.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                <Calendar className="h-3.5 w-3.5" />
                <span>{item.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {item.tech && (
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs text-muted-foreground border-border/50">
                    {t}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
