import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaGooglePlay, FaMicrosoft, FaSlack, FaYoutube } from "react-icons/fa";
interface Social {
	name: string;
	link: string;
	icon: React.ReactNode;
	description: string;
}

export const socials: Social[] = [
	{
		name: "GitHub",
		link: "https://github.com/alphacoma18/",
		icon: <GitHubLogoIcon className="h-6 w-6" />,
		description:
			"Check out my GitHub profile to see my latest open-source contributions, code samples, and project repositories.",
	},
	{
		name: "Slack",
		link: "https://comadevelopmentllc.slack.com/team/U055R478A2G",
		icon: <FaSlack className="h-6 w-6" />,
		description:
			"Send me a message on Slack to chat about potential collaborations, projects, or opportunities... or just to drop by and say hi!",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/alpharomercoma/",
		icon: <LinkedInLogoIcon className="h-6 w-6" />,
		description:
			"Connect with me on LinkedIn to learn more about my professional experience, skills, and career journey in the software engineering industry.",
	},
	{
		name: "Microsoft Store",
		link: "https://apps.microsoft.com/search/publisher?name=Alpha+Romer+Coma",
		icon: <FaMicrosoft className="h-6 w-6" />,
		description:
			"Check out my Microsoft Store profile to see my latest Windows apps and games.",
	},
	{
		name: "Google Play Store",
		link: "https://play.google.com/store/apps/developer?id=Alpha+Romer+Coma",
		icon: <FaGooglePlay className="h-6 w-6" />,
		description:
			"Check out my Google Play Store profile to see my latest Android apps and games.",
	},
	{
		name: "YouTube",
		link: "https://www.youtube.com/@alphacoma18",
		icon: <FaYoutube className="h-6 w-6" />,
		description:
			"Subscribe to my YouTube channel to watch my latest tech tutorials, live streams, career advices, software development content.",
	},
];

const Social: React.FC<Social> = ({ name, link, icon, description }) => {
	return (
		<Card>
			<CardHeader className="flex items-center gap-4">
				{icon}
				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-gray-500 dark:text-gray-400">{description}</p>
				<div className="mt-4">
					<Link
						className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
						href={link}
						target="_blank"
					>
						Visit {name}
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

const Socials = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Let&apos;s Connect!
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
						Follow me on my social media platforms to stay up-to-date with my
						latest projects, insights, and updates.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{socials.map((social, index) => (
						<Social key={index} {...social} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Socials;
