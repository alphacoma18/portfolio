import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
const Socials = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Connect with Me
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
						Follow me on my social media platforms to stay up-to-date with my
						latest projects, insights, and updates.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader className="flex items-center gap-4">
							<GitHubLogoIcon className="h-6 w-6" />
							<CardTitle>GitHub</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Check out my GitHub profile to see my latest open-source
								contributions, code samples, and project repositories.
							</p>
							<div className="mt-4">
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Visit GitHub
								</Link>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex items-center gap-4">
							<TwitterLogoIcon className="h-6 w-6" />
							<CardTitle>Twitter</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Follow me on Twitter to stay up-to-date with my latest thoughts,
								insights, and discussions on web development and technology.
							</p>
							<div className="mt-4">
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Visit Twitter
								</Link>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex items-center gap-4">
							<LinkedInLogoIcon className="h-6 w-6" />
							<CardTitle>LinkedIn</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Connect with me on LinkedIn to learn more about my professional
								experience, skills, and career journey in the software
								engineering industry.
							</p>
							<div className="mt-4">
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Visit LinkedIn
								</Link>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Socials;
