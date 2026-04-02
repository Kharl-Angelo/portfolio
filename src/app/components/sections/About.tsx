import { motion } from "motion/react";
import { Server, Layout, Database, Cloud } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Section } from "@/app/components/ui/Section";

const strengths = [
  {
    icon: Layout,
    title: "Full-Stack Development",
    description: "Creating seamless end-to-end experiences from intuitive UIs to robust server-side logic."
  },
  {
    icon: Server,
    title: "REST API Architecture",
    description: "Designing scalable, secure, and well-documented APIs that power modern applications."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting efficient data models and optimized queries for performance at scale."
  },
  {
    icon: Cloud,
    title: "Cloud Deployment (AWS)",
    description: "Deploying and managing production-ready infrastructure using industry-standard cloud services."
  }
];

export function About() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            More Than Just Code. <br />
            <span className="text-primary">I Build Web Systems.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm also a inspiring software engineer who looks at the big picture. Instead of just writing functions, I focus on how components interact, how data flows, and how the system scales.
            </p>
            <p>
              My approach combines technical depth with business awareness. I don't just solve coding problems; I solve business problems through technology. From initial architecture to final deployment, I take ownership of the entire development lifecycle.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <strength.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{strength.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {strength.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
