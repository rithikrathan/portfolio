import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
	const projects = [
		{
			title: "Ra8 MPU",
			description:
				"Custom 8-bit microprocessor architecture with accompanying hardware and software ecosystem for emulation, programming, and practical applications.",
			technologies: ["Verilog", "Golang", "Python", "logisim", "React", "processing5"],
			imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
			projectLink: "https://github.com/rithikrathan/Ra8_prototype",
		},
		{
			title: "RoguePm",
			description:
				"Compliation of various scripts and custom programs that automates my workflow, starting from project creation, file management and scheduled snapshots",
			technologies: ["Python", "typescript", "Golang", "bash"],
			imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
			projectLink: "https://github.com/rithikrathan/RoguePM",
		},
		{
			title: "Mathematical and Procedural arts",
			description:
				"A collection of mathematical and procedural programs for the processing IDE, showcasing the beauty of mathematics and procedural generation through visually stunning art pieces.",
			technologies: ["Javascript", "Python", "Java", "Processing"],
			imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
			projectLink: "https://github.com/rithikrathan/p5_stuff",
		},
		{
			title: "Ra8 Assembler",
			description:
				"Simple assembler for the Ra8 architecture, supporting basic instructions, labels, and macros, with a user-friendly interface for writing and testing assembly code.",
			technologies: ["Rust"],
			imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
			projectLink: "https://github.com/rithikrathan/Ra8_Assembler-rust",
		},
	];

	return (
		<section
			id="projects"
			className="flex items-center justify-center pb-16 pt-8 relative"
		>
			<RevealOnScroll>
				<div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map((project, index) => (
							<div
								key={index}
								className="group rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] transition-all bg-white/5 will-change-transform overflow-hidden"
							>
								<div className="w-full h-48 overflow-hidden">
									<img
										src={project.imageUrl}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech, key) => (
											<span
												key={key}
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
											href={project.projectLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-orange-400 hover:text-orange-300 transition-colors my-4 flex items-center gap-2"
										>
											View Project →
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
