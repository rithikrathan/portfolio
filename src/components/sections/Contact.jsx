import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
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
			.then((result) => {
				alert("Message Sent!");
				setFormData({ name: "", email: "", message: "" });
			})
			.catch(() => alert("Oops! Something went wrong. Please try again."));
	};

	return (
		<section
			id="contact"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="px-4 w-150">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent text-center">
						Get In Touch
					</h2>
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

						{/* SEND BUTTON - Left Aligned, Hover text matches Border color */}
						<button
							type="submit"
							className="
                                w-max mx-auto flex items-center justify-center gap-2 
                                bg-white/5 border border-white/10 
                                px-6 py-3 rounded-xl 
                                text-white font-bold 
                                transition-all duration-230 
                                hover:bg-orange-500/10 
                                hover:border-orange-500 
                                hover:text-orange-500
                                hover:shadow-[0_0_13px_rgba(249,115,22,0.1)] 
                                hover:-translate-y-1
                            "
						>
							Send Message
							{/* SVG Send Icon - Inherits color from parent (currentColor) */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
							</svg>
						</button>
					</form>
				</div>
			</RevealOnScroll>
		</section>
	);
};
