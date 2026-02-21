import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		title: "just saying",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(() => {
				alert("Message Sent!");
				setFormData({ name: "", email: "", message: "", title: "just saying" });
			})
			.catch(() => alert("Oops! Something went wrong. Please try again."));
	};

	return (
		<section
			id="contact"
			className="min-h-screen flex items-center justify-center py-13"
		>
			<div className="w-full max-w-4xl px-4 py-4 mx-auto">
				<RevealOnScroll>
					<div className="w-full">
						<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
							Get In Touch
						</h2>
						<div className="flex justify-center space-x-4 sm:space-x-6 mb-10">

							{/* LinkedIn */}
							<a
								href="https://www.linkedin.com/in/rithik-rathan-992100291"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect x="2" y="9" width="4" height="12"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</a>

							{/* GitHub */}
							<a
								href="https://github.com/rithikrathan"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
								</svg>
							</a>

							{/* YouTube */}
							<a

								href="https://youtube.com/@rithikrathan?si=Y8wVygzsAutUwXCa"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
									<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
									<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
								</svg>
							</a>

							{/* Instagram */}
							<a

								href="https://www.instagram.com/rathan_rithik?igsh=MWs3MG05Nms1NnJybA"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
							</a>

						</div>

						{/* Gradient Line Break */}
						<div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-8"></div>

						{/* Contact Form */}
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="relative">
								<input
									type="text"
									id="name"
									name="name"
									required
									value={formData.name}
									className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-orange-500 focus:bg-blue-500/5 focus:shadow-[0_0_12px_rgba(249,115,22,0.2)]"
									placeholder="Name..."
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
								/>
							</div>

							<div className="relative">
								<input
									type="email"
									id="email"
									name="email"
									required
									value={formData.email}
									className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-orange-500 focus:bg-blue-500/5 focus:shadow-[0_0_12px_rgba(249,115,22,0.2)]"
									placeholder="example@gmail.com"
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
								/>
							</div>

							<div className="relative">
								<textarea
									id="message"
									name="message"
									required
									rows={5}
									value={formData.message}
									className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-orange-500 focus:bg-blue-500/5 focus:shadow-[0_0_12px_rgba(249,115,22,0.2)]"
									placeholder="Your Message..."
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
								/>
							</div>

							<button
								type="submit"
								className="
                                    w-max mx-auto flex items-center justify-center gap-2 
                                    bg-white/5 border border-white/10 
                                    px-5 py-2 rounded-xl 
                                    text-sm text-white font-bold 
                                    transition-all duration-300 
                                    hover:bg-orange-500/10 
                                    hover:border-orange-500 
                                    hover:text-orange-500
                                    hover:shadow-[0_0_13px_rgba(249,115,22,0.1)] 
                                    hover:-translate-y-1
                                "
							>
								Send Message
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
								</svg>
							</button>
						</form>
					</div>
				</RevealOnScroll>
			</div>
		</section>
	);
};
