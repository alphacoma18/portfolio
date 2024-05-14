"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { socials } from "./Socials";

interface NavLink {
	name: string;
	href: string;
}

const navLinks: NavLink[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Projects",
		href: "/Projects",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "Gallery",
		href: "/gallery",
	},
	{
		name: "Engagement",
		href: "/engagement",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

const NavBar: React.FC = () => {
	const { setTheme, theme } = useTheme();
	return (
		<header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link className="flex items-center gap-2" href="#">
					<MountainIcon className="h-6 w-6" />
					<span className="text-lg font-semibold">Alpha Romer Coma</span>
				</Link>
				<div className="flex items-center gap-4 md:gap-2">
					<div className="flex items-center gap-2 md:gap-4">
						{socials.map((social) => (
							<Link
								key={social.link}
								aria-label={social.name}
								href={social.link}
								target="_blank"
							>
								{social.icon}
							</Link>
						))}
						<span
							aria-label="Toggle dark mode"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						>
							<MoonIcon className="h-6 w-6" />
						</span>
						<Sheet>
							<SheetTrigger asChild>
								<Button className="md:hidden" size="icon" variant="outline">
									<MenuIcon className="h-6 w-6" />
									<span className="sr-only">Toggle navigation menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<div className="grid gap-4 p-4">
									{navLinks.map((link) => (
										<Link
											key={link.href}
											href={link.href}
											className="text-sm font-medium hover:underline"
										>
											{link.name}
										</Link>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
					<nav className="hidden items-center gap-6 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm font-medium hover:underline"
							>
								{link.name}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavBar;

function MenuIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

export function MountainIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
