export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
	// Define the navigation items
	const navItems = ["Home", "About", "Projects", "Contact", "Activity"];

	return (
		<div
			className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${menuOpen
					? "h-screen opacity-100 pointer-events-auto"
					: "h-0 opacity-0 pointer-events-none"
				}`}
		>
			{/* Close Button */}
			<button
				onClick={() => setMenuOpen(false)}
				className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
				aria-label="Close Menu"
			>
				&times;
			</button>

			{/* Navigation Links */}
			{navItems.map((item) => (
				<a
					key={item}
					href={`#${item.toLowerCase()}`}
					onClick={() => setMenuOpen(false)}
					className={`
                        relative text-2xl font-semibold text-white my-4 
                        transform transition-all duration-300
                        
                        /* Animated Underline Styles */
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 
                        after:w-full after:h-0.5 after:bg-orange-500 
                        after:scale-x-0 hover:after:scale-x-100 
                        after:transition-transform after:duration-150 after:origin-center
                        
                        /* Open/Close Fade & Slide Animation */
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}
				>
					{item}
				</a>
			))}
		</div>
	);
};
