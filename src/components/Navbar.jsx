import { useEffect, useState } from "react";
import logo from "../assets/profile.jpg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
	// State to handle the image popup visibility
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);

	// Update body overflow when either the mobile menu or image modal is open
	useEffect(() => {
		document.body.style.overflow = (menuOpen || isImageModalOpen) ? "hidden" : "";

		// Cleanup function just in case the component unmounts
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen, isImageModalOpen]);

	// Define the navigation items
	const navItems = ["Home", "About", "Projects", "Contact", "Activity"];

	// The Tailwind classes for the animated underline effect
	const navLinkClasses =
		"relative text-gray-300 hover:text-white transition-colors " +
		"after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
		"after:w-full after:h-0.5 after:bg-orange-500 " +
		"after:scale-x-0 hover:after:scale-x-100 " +
		"after:transition-transform after:duration-100 after:origin-center";

	return (
		<>
			<nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
				<div className="max-w-5xl mx-auto px-4">
					<div className="flex justify-between items-center h-16">

						{/* Logo Section */}
						<div className="flex items-center gap-3">
							{/* Clickable Image */}
							<button
								onClick={() => setIsImageModalOpen(true)}
								className="focus:outline-none transition-transform hover:scale-105"
								aria-label="View profile picture"
							>
								<img
									src={logo}
									alt="my image"
									className="w-10 h-10 rounded-full object-cover border border-white/10"
								/>
							</button>

							{/* Name / Home Link */}
							<a href="#home" className="font-mono text-xl font-bold text-white">
								Rithik<span className="text-orange-500"> Rathan.C</span>
							</a>
						</div>

						{/* Mobile Menu Toggle */}
						<div
							className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-300"
							onClick={() => setMenuOpen((prev) => !prev)}
						>
							&#9776;
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className={navLinkClasses}
								>
									{item}
								</a>
							))}
						</div>

					</div>
				</div>
			</nav>

			{/* Image Popup Modal */}
			{isImageModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,10,0.85)] backdrop-blur-md p-4"
					onClick={() => setIsImageModalOpen(false)} // Close when clicking the background
				>
					<div
						className="relative flex flex-col items-center"
						onClick={(e) => e.stopPropagation()} // Prevent clicks on the image from closing the modal
					>
						{/* Close Button */}
						<button
							className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors text-4xl"
							onClick={() => setIsImageModalOpen(false)}
						>
							&times;
						</button>

						{/* Enlarged Image */}
						<img
							src={logo}
							alt="Rithik Rathan Profile"
							className="w-full max-w-[300px] md:max-w-[400px] rounded-2xl object-cover shadow-[0_0_40px_rgba(249,115,22,0.2)] border border-white/10"
						/>
					</div>
				</div>
			)}
		</>
	);
};
