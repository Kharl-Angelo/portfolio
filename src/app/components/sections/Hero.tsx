import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(30_41_59_/_0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(30_41_59_/_0.3)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 opacity-20" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium tracking-tight mb-4 block">
              Hi, I'm Kharl Angelo Obong
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            I Build <span className="text-primary">Scalable Web Systems</span> That Solve Real Business Problems.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full-stack web developer specializing in ReactJS, Node.js, SQL, and AWS-powered applications. I transform complex requirements into clean, efficient, and reliable web or software products.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Button size="lg" className="h-12 px-8 text-base group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" onClick={() => window.open('/resume.pdf', '_blank')}>
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
