import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Section } from "@/app/components/ui/Section";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  link?: string;
  highlight?: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Expensia",
    category: "Expense Tracker",
    problem: "Existing expense trackers were either too complex for personal use or lacked necessary reporting features for small businesses.",
    solution: "Designed and built a streamlined web app for both mobile and desktop, featuring real-time analytics based on user-inputted expenses.",
    impact: "Users no longer need to manually track expenses in notes or transfer them to Excel; real-time analytics and automated reporting save time and improve accuracy.",
    tech: ["React", "MUI", "Node.js", "Express.js", "MonggoDB", "AWS", "Vercel"],
    link: "https://expensia.lreahk.com",
    highlight: true,
    image: "/expensialogo.png"
  },
  {
    title: "Heroes Relationship Centre",
    category: "Enterprise System",
    problem: "Teams had to juggle multiple spreadsheets, causing lost leads and messy property management.",
    solution: "Develop a centralized platform managing product listings, training modules, booking systems, and real property workflows.",
    impact: "Allowed teams to manage four separate workflows in one system, reducing errors and improving overall efficiency.",
    tech: ["React", "MUI", "Python", "PostgreSQL", "AWS"],
	link: "https://hrc.pofsis.com",
    image: "/hrclogo.png"
  },
  {
    title: "POFShop",
    category: "E-Commerce Solution",
    problem: "Manual order processing for customer availments was causing delays and inventory discrepancies.",
    solution: "Built a custom availment platform with inventory synchronization, automated order status updates, and other services availments.",
    impact: "Streamlined order processing and ensured accurate inventory management, reducing errors and delays.",
    tech: ["React", "MUI", "Python", "PostgreSQL", "AWS"],
	link: "https://shop.pofsis.com",
    image: "/shoplogo.png"
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-secondary/30">
      <div className="mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl"
        >
          A showcase of systems that solve real problems. Each project represents a journey from identifying a bottleneck to deploying a scalable solution.
        </motion.p>
      </div>

      <div className="space-y-20 md:space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 lg:gap-24`}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 aspect-video bg-card rounded-lg border border-border/50 flex items-center justify-center relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
              {project.image ? (
                <ImageWithFallback 
                  src={project.image} 
                  alt={`${project.title} Interface Preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <span className="text-muted-foreground/50 font-medium text-lg relative z-0">
                  {project.title} Interface Preview
                </span>
              )}
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                  {project.category}
                </Badge>
                {project.highlight && (
                  <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {project.title}
              </h3>

              <div className="space-y-6 mb-8 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-semibold mb-2">The Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">The Solution</h4>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">Business Impact</h4>
                  <p className="text-primary/90 font-medium">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.link && (
                <Button variant="outline" className="w-fit gap-2 group border-primary/20 hover:border-primary/50 text-primary hover:text-primary" onClick={() => window.open(project.link, "_blank")}>
                  View Live Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
