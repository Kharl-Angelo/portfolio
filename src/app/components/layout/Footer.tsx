import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {currentYear} Kharl Angelo Obong. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:kharl@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
