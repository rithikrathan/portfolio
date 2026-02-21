import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
	const Technical = [
		"React",
		"Processing 5",
		"Digital electronics",
		"Embedded systems",
		"Robotics",
		"Human Computer Interactions",
		"opeating systems",
		"Ethical hacking",
	];

	const nonTechnical = ["blender", "Physics", "Content Creation", "Biology", "Communication"];
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center pb-4 pt-4 relative"
		>
			<RevealOnScroll>
				<div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						About Me
					</h2>

					<div className="rounded-xl p-8 border-white/10 border bg-white/5 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] hover:-translate-y-1 transition-all">
						<p className="text-gray-300 mb-6">
							Computer Science Engineering student with a passion for applying mathematical concepts through code. I enjoy exploring the intersection of technology and creativity
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Technical Skills */}
							<div className="rounded-xl p-6 bg-white/5 border-white/10 border hover:-translate-y-1 transition-all hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]">
								<h3 className="text-xl font-bold mb-4 text-white">Technical skills</h3>
								<div className="flex flex-wrap gap-2">
									{Technical.map((tech, key) => (
										<span
											key={key}
											className="bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] transition-all"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Non-technical Skills */}
							<div className="rounded-xl p-6 bg-white/5 border-white/10 border hover:-translate-y-1 transition-all hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]">
								<h3 className="text-xl font-bold mb-4 text-white">Non-Technical skills</h3>
								<div className="flex flex-wrap gap-2">
									{nonTechnical.map((tech, key) => (
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
						{/* Education Card */}
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)]">
							<h3 className="text-xl font-bold mb-4 text-white"> 🏫 Education </h3>
							<ul className="list-disc list-inside text-gray-300 space-y-2">
								<li>
									<strong> B.Tech. in Computer Science Engineering</strong> - Rajiv Gandhi College of Engineering and Technology, Puducherry
									(2023 - 2027)
								</li>
								<li>
									<strong>Relevant Coursework: </strong> Data Structures, Web Development, Cloud
									Computing, operating systems, computer architecture, machine learning,
									Mathematics for computer science, Cybersecurity ...
								</li>
							</ul>
						</div>

						{/* Work Experience Card */}
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 hover:border-orange-500/30 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)]">
							<h3 className="text-xl font-bold mb-4 text-white"> 💼 Work Experience </h3>
							<div className="space-y-4 text-gray-300">
								<div>
									<h4 className="font-semibold text-orange-400">
										Fresher!
									</h4>
									<p>
										<strong>Open to work fulltime and part time jobs and internships </strong>
										-- I may not be able to create a Webpage but i sure can learn mathematical concepts and apply them for problem solving and algorithm design
									</p>
								</div>

								{/* <div> */}
								{/* 	<h4 className="font-semibold text-orange-400"> */}
								{/* 		Intern at DEF Startups (2019) */}
								{/* 	</h4> */}
								{/* 	<p> */}
								{/* 		Assisted in building front-end components and integration */}
								{/* 		REST APIs */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
