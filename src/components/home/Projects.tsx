import Image from "next/image";
import Link from "next/link";

interface Project {
	title: string;
	description: string;
	image: string;
	link: string;
}

const projects: Project[] = [
	{
		title: "Project ACM-X",
		description:
			"The FEU Tech ACM's official cross-platform application for the iTamaraw computer science community.",
		image: "/acmx.png",
		link: "https://acmx.vercel.app/",
	},
	{
		title: "Markdown Studio",
		description:
			"Your feature-rich modern note-taking & blogging cross-platform application.",
		image: "/mdstudio.png",
		link: "https://markdownstudio.tech/",
	},
	{
		title: "Fireguard",
		description:
			"NASA Hackathon's award-winning data-driven, community-based global fire management system.",
		image: "/fireguard.png",
		link: "https://www.spaceappschallenge.org/2023/find-a-team/feu-tech-acm/?tab=project",
	},
	{
		title: "MyMNHS Platform",
		description:
			"The unofficial school platform for Meycauayan National High School students and faculty.",
		image: "/mymnhs.png",
		link: "https://github.com/alphacoma18/mymnhs",
	},
	{
		title: "MyERL URL Encryption",
		description:
			"The URL shortener that has your privacy's back: Fast and secure URL encryption and shortening service.",
		image: "/myerl.png",
		link: "https://myerl.vercel.app/",
	},
	{
		title: "C++ Minesweeper",
		description:
			"A simple console-based Minesweeper game written in C++ with 4 difficulty levels and timer.",
		image: "/minesweeper.png",
		link: "https://github.com/alphacoma18/cpp_console_minesweeper/",
	},
];

const Project: React.FC<Project> = ({ title, description, image, link }) => {
	return (
		<div className="group relative overflow-hidden rounded-lg">
			<Link className="absolute inset-0 z-10" href={link} target="_blank">
				<span className="sr-only">View Project</span>
			</Link>
			<Image
				alt={title}
				className="aspect-video w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
				height={365}
				src={`/media/img/projects${image}`}
				width={650}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
			<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
				<h3 className="text-2xl font-bold">{title}</h3>
				<p className="mt-2 text-gray-300">{description}</p>
			</div>
		</div>
	);
};

const Projects: React.FC = () => {
	return (
		<section className="w-full py-12 grid gap-8 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="space-y-4 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					My Treasured Projects
				</h2>
				<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
					Discover my beloved projects I&apos;ve worked and contributed to
					throughout the years
				</p>
			</div>
			<div className="container grid gap-4 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
