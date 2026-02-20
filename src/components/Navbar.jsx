import { useEffect } from "react";
import logo from "../assets/react.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
	}, [menuOpen]);

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
		<nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">

					{/* Logo Section */}
					<a href="#home" className="flex items-center gap-3 font-mono text-xl font-bold text-white">
						<img
							src={logo}
							alt="my image"
							className="w-10 h-10 rounded-full object-cover"
						/>
						<span>
							Rithik<span className="text-orange-500"> Rathan.C</span>
						</span>
					</a>

					{/* Mobile Menu Toggle */}
					<div
						className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
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
	);
};
