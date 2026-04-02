import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import { Section } from "@/app/components/ui/Section";
import { Mail, Linkedin, FileText } from "lucide-react";

export function Contact() {
	const [snackbarVisible, setSnackbarVisible] = useState(false);
	const copyEmail = () => {
		navigator.clipboard.writeText("kharlangelo2001@gmail.com")
		.then(() => {
			setSnackbarVisible(true);
			setTimeout(() => setSnackbarVisible(false), 3000); // hide after 3 seconds
		})
		.catch(() => {
			alert("Failed to copy email.");
		});
	};

	return (
		<Section id="contact" className="bg-background py-24 md:py-32">
			<div className="max-w-3xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
					>
					Let’s Build Something <span className="text-primary">Meaningful.</span>
				</motion.h2>
				
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="text-xl text-muted-foreground mb-12 leading-relaxed"
					>
					I'm currently available for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
				</motion.p>
				
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
					<Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto gap-3" onClick={copyEmail}>
						<Mail className="h-5 w-5" />
						Say Hello
					</Button>
					<Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto gap-3" onClick={() => window.open('https://www.linkedin.com/in/kharlangelobong/', '_blank')}>
						<Linkedin className="h-5 w-5" />
						LinkedIn Profile
					</Button>
					<Button size="lg" variant="secondary" className="h-14 px-8 text-lg w-full sm:w-auto gap-3" onClick={() => window.open('/resume.pdf', '_blank')}>
						<FileText className="h-5 w-5" />
						Download CV
					</Button>
				</motion.div>
			</div>
			{/* Snackbar */}
			{snackbarVisible && (
				<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg transition-all">
				Email copied to clipboard!
				</div>
      		)}
		</Section>
	);
}
