import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
	const projects = [
		{
			title: "Cloud Platform",
			description:
				"Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
			technologies: ["React", "Node.js", "AWS", "Docker"],
		},
		{
			title: "AI Analytics Dashboard",
			description:
				"ML-powered data visualization platform with predictive analytics and interactive reports.",
			technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
		},
		{
			title: "E-Commerce Web App",
			description:
				"Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
			technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
		},
		{
			title: "Real-Time Chat App",
			description:
				"Scalable chat platform supporting real-time messaging, presence, and group chat features.",
			technologies: ["Socket.IO", "Express", "React", "Redis"],
		},
	];

	return (
		<section
			id="projects"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map((project, index) => (
							<div
								key={index}
								// 1. Added 'will-change-transform' here to prevent blurry text on hover
								className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] transition-all bg-white/5 backdrop-blur-3xl will-change-transform"
							>
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, key) => (
										<span
											key={key}
											// 2. Added 'border border-orange-500/20' and a darker hover border
											className="
                                            bg-orange-500/10 text-orange-500 py-1 px-3 
                                            rounded-full text-sm 
                                            border border-orange-500/20
                                            hover:bg-orange-500/20 hover:border-orange-500/50 
                                            hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] 
                                            transition-all
                                            "
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center">
									<a
										href="#"
										className="text-orange-400 hover:text-orange-300 transition-colors my-4"
									>
										View Project →
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
