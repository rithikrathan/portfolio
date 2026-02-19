import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
	const frontendSkills = [
		"React",
		"Vue",
		"TypeScript",
		"TailwindCSS",
		"Svelte",
	];

	const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center py-20 relative"
		>
			<RevealOnScroll>
				<div className="max-w-3xl mx-auto px-4 relative z-10">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						About Me
					</h2>

					<div className="rounded-xl p-8 border-white/10 border bg-white/5 backdrop-blur-3xl hover:-translate-y-1 transition-all">
						<p className="text-gray-300 mb-6">
							Passionate developer with expertise in building scalable web
							applications and creating innovative solutions.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Frontend Skills */}
							<div className="rounded-xl p-6 bg-white/5 border-white/10 border hover:-translate-y-1 transition-all hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]">
								<h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
								<div className="flex flex-wrap gap-2">
									{frontendSkills.map((tech, key) => (
										<span
											key={key}
											className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] transition-all"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Backend Skills */}
							<div className="rounded-xl p-6 bg-white/5 border-white/10 border hover:-translate-y-1 transition-all hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]">
								<h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
								<div className="flex flex-wrap gap-2">
									{backendSkills.map((tech, key) => (
										<span
											key={key}
											className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] transition-all"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
						{/* Education Card - Matching Projects Style */}
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)]">
							<h3 className="text-xl font-bold mb-4 text-white"> 🏫 Education </h3>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>
									<strong> B.S. in Computer Science </strong> - XYZ University
									(2016-2020)
								</li>
								<li>
									Relevant Coursework: Data Structures, Web Development, Cloud
									Computing...
								</li>
							</ul>
						</div>

						{/* Work Experience Card - Matching Projects Style */}
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)]">
							<h3 className="text-xl font-bold mb-4 text-white"> 💼 Work Experience </h3>
							<div className="space-y-4 text-gray-300">
								<div>
									<h4 className="font-semibold text-orange-400">
										Software Engineer at ABC Corp (2020 - Present)
									</h4>
									<p>
										Developed and maintained microservices for cloud-based
										applications.
									</p>
								</div>

								<div>
									<h4 className="font-semibold text-orange-400">
										Intern at DEF Startups (2019)
									</h4>
									<p>
										Assisted in building front-end components and integration
										REST APIs
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
