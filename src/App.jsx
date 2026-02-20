import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Activity } from "./components/sections/Activity";
import img from "./assets/hot-mandelbrot.png";

const Background = () => (
	<>
		{/* Background Image: Blurred and slightly scaled up to hide fuzzy edges */}
		<div
			className="fixed inset-0 -z-20 scale-110"
			style={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}
		/>

		{/* Dark Overlay: Helps your foreground text pop */}
		<div className="fixed inset-0 -z-10 bg-black/96" />
	</>
);

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Background />
			{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
			<div
				className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
					} text-gray-100`}
			>
				<div className="relative z-10">
					<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					<Home />
					<About />
					<Projects />
					<Contact />
					<Activity />
				</div>
			</div>
		</>
	);
}

export default App;
