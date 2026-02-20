import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative py-27"
		>
			<RevealOnScroll>
				<div className="text-center z-10 px-4">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent leading-right">
						Hey! I'm Rathan
					</h1>

					<p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore similique fugit delectus molestiae ducimus rem, accusamus suscipit reiciendis corrupti, voluptate repellat. Incidunt, deserunt nam ad qui repudiandae sapiente assumenda esse.
					</p>
					<div className="flex justify-center space-x-4">
						<a
							href="#projects"
							className="bg-orange-500 text-black py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5  hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
						>
							View Projects
						</a>

						<a
							href="#contact"
							className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-orange-500/10"
						>
							Contact Me
						</a>

					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
