import Link from "next/link";
import { MountainIcon } from "./NavBar";
const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
			<div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="flex items-center">
					<MountainIcon className="h-8 w-8 mr-2" />
					<span className="text-lg font-bold">Alpha Romer Coma</span>
				</div>
				<nav className="flex items-center space-x-6 mt-4 md:mt-0">
					<Link className="hover:underline" href="/sitemap.xml">
						Site Map
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
