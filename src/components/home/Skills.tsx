/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3ih1dbA2dcF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	FaCloud,
	FaCode,
	FaCogs,
	FaDatabase,
	FaJava,
	FaNodeJs,
	FaNpm,
	FaPenNib,
	FaServer,
} from "react-icons/fa";
import { GiOrange } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import {
	SiAlibabacloud,
	SiAlpinelinux,
	SiAmazonaws,
	SiAndroid,
	SiArchlinux,
	SiAssemblyscript,
	SiBitbucket,
	SiBootstrap,
	SiCisco,
	SiConventionalcommits,
	SiCplusplus,
	SiCsharp,
	SiCss3,
	SiDebian,
	SiDjango,
	SiDocker,
	SiElectron,
	SiExpress,
	SiFedora,
	SiGentoo,
	SiGithub,
	SiGithubactions,
	SiGithubpages,
	SiGitlab,
	SiGnubash,
	SiGooglecloud,
	SiHeroku,
	SiHtml5,
	SiIbm,
	SiInsomnia,
	SiJavascript,
	SiJson,
	SiJsonwebtokens,
	SiKubernetes,
	SiLaravel,
	SiLinux,
	SiLinuxmint,
	SiMariadb,
	SiMicrosoftazure,
	SiMongodb,
	SiMongoose,
	SiMysql,
	SiNetlify,
	SiNextdotjs,
	SiNextui,
	SiOpensuse,
	SiOracle,
	SiPhp,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiPug,
	SiPwa,
	SiPython,
	SiQt,
	SiReact,
	SiRedis,
	SiRust,
	SiSemanticrelease,
	SiShadcnui,
	SiSocketdotio,
	SiSqlite,
	SiTails,
	SiTailwindcss,
	SiTypescript,
	SiUbuntu,
	SiUnity,
	SiUnrealengine,
	SiVercel,
	SiWindows11,
	SiWireguard,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
interface Skill {
	name: string;
	icon: IconType;
}

const setIconDims = (Icon: IconType) => {
	return <Icon className="w-4 h-4" />;
};

interface Category {
	name: string;
	skills: Skill[];
	icon: IconType;
}

const programmingLanguages: Category = {
	name: "Programming Languages",
	icon: FaCode,
	skills: [
		{
			name: "JavaScript",
			icon: SiJavascript,
		},
		{
			name: "TypeScript",
			icon: SiTypescript,
		},
		{
			name: "C/C++",
			icon: SiCplusplus,
		},
		{
			name: "C#",
			icon: SiCsharp,
		},
		{
			name: "Java",
			icon: FaJava,
		},
		{
			name: "PHP",
			icon: SiPhp,
		},
		{
			name: "Python",
			icon: SiPython,
		},
		{
			name: "Assembly",
			icon: SiAssemblyscript,
		},
		{
			name: "Rust",
			icon: SiRust,
		},
		{
			name: "Bash",
			icon: SiGnubash,
		},
	],
};

const frontEndDevelopment: Category = {
	name: "Front-End Development",
	icon: MdMonitor,
	skills: [
		{
			name: "HTML",
			icon: SiHtml5,
		},
		{
			name: "CSS",
			icon: SiCss3,
		},
		{
			name: "React",
			icon: SiReact,
		},
		{
			name: "Next.js",
			icon: SiNextdotjs,
		},
		{
			name: "React Native",
			icon: TbBrandReactNative,
		},
		{
			name: "Electron",
			icon: SiElectron,
		},
		{
			name: "Bootstrap",
			icon: SiBootstrap,
		},
		{
			name: "Tailwind CSS",
			icon: SiTailwindcss,
		},
		{
			name: "Next UI",
			icon: SiNextui,
		},
		{
			name: "Shadcn UI",
			icon: SiShadcnui,
		},
	],
};

const backEndDevelopment: Category = {
	name: "Back-End Development",
	icon: FaServer,
	skills: [
		{
			name: "Node.js",
			icon: FaNodeJs,
		},
		{
			name: "Express",
			icon: SiExpress,
		},
		{
			name: "Django",
			icon: SiDjango,
		},
		{
			name: "Laravel",
			icon: SiLaravel,
		},
		{
			name: "Pug",
			icon: SiPug,
		},
		{
			name: "Socket.io",
			icon: SiSocketdotio,
		},
		{
			name: "Postman",
			icon: SiPostman,
		},
		{
			name: "Insomnia",
			icon: SiInsomnia,
		},
		{
			name: "JSON",
			icon: SiJson,
		},
	],
};

const databases: Category = {
	name: "Databases & ORM",
	icon: FaDatabase,
	skills: [
		{
			name: "MySQL",
			icon: SiMysql,
		},
		{
			name: "PostgreSQL",
			icon: SiPostgresql,
		},
		{
			name: "PL/SQL",
			icon: SiOracle,
		},
		{
			name: "MariaDB",
			icon: SiMariadb,
		},
		{
			name: "SQLite",
			icon: SiSqlite,
		},
		{
			name: "Redis",
			icon: SiRedis,
		},
		{
			name: "MongoDB",
			icon: SiMongodb,
		},
		{
			name: "Prisma",
			icon: SiPrisma,
		},
		{
			name: "Mongoose",
			icon: SiMongoose,
		},
	],
};
const devOps: Category = {
	name: "DevOps & Automation",
	icon: FaCogs,
	skills: [
		{
			name: "Linux",
			icon: SiLinux,
		},
		{
			name: "Git/GitHub",
			icon: SiGithub,
		},
		{
			name: "GitLab",
			icon: SiGitlab,
		},
		{
			name: "Bitbucket",
			icon: SiBitbucket,
		},
		{
			name: "GitHub Actions",
			icon: SiGithubactions,
		},
		{
			name: "Docker",
			icon: SiDocker,
		},
		{
			name: "Kubernetes",
			icon: SiKubernetes,
		},
		{
			name: "NPM/Yarn/PNPM",
			icon: FaNpm,
		},
		{
			name: "Conventional Commits",
			icon: SiConventionalcommits,
		},
		{
			name: "Semantic Release",
			icon: SiSemanticrelease,
		},
	],
};

import { FiCpu } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import {
	SiAdobephotoshop,
	SiCanva,
	SiFigma,
	SiFramer,
	SiGimp,
	SiGithubcopilot,
	SiGooglegemini,
	SiOpenai,
} from "react-icons/si";
import { TbSquareLetterPFilled } from "react-icons/tb";
const design: Category = {
	name: "Design & Prototyping",
	icon: FaPenNib,
	skills: [
		{
			name: "Figma",
			icon: SiFigma,
		},
		{
			name: "Canva",
			icon: SiCanva,
		},
		{
			name: "Adobe Photoshop",
			icon: SiAdobephotoshop,
		},
		{
			name: "GIMP",
			icon: SiGimp,
		},
		{
			name: "Framer Motion",
			icon: SiFramer,
		},
	],
};
const artificialIntelligence: Category = {
	name: "Artificial Intelligence",
	icon: FiCpu,
	skills: [
		{
			name: "ChatGPT",
			icon: SiOpenai,
		},
		{
			name: "Gemini",
			icon: SiGooglegemini,
		},
		{
			name: "Phind",
			icon: TbSquareLetterPFilled,
		},
		{
			name: "Github Copilot",
			icon: SiGithubcopilot,
		},
		{
			name: "Vercel V0",
			icon: SiVercel,
		},
	],
};
const cloudComputing: Category = {
	name: "Cloud Computing & Serverless",
	icon: FaCloud,
	skills: [
		{
			name: "AWS",
			icon: SiAmazonaws,
		},
		{
			name: "GCP",
			icon: SiGooglecloud,
		},
		{
			name: "Azure",
			icon: SiMicrosoftazure,
		},
		{
			name: "Vercel",
			icon: SiVercel,
		},
		{
			name: "Netlify",
			icon: SiNetlify,
		},
		{
			name: "Heroku",
			icon: SiHeroku,
		},
		{
			name: "Alibaba Cloud",
			icon: SiAlibabacloud,
		},
		{
			name: "IBM Cloud",
			icon: SiIbm,
		},
		{
			name: "Oracle Cloud",
			icon: SiOracle,
		},
		{
			name: "GitHub Pages",
			icon: SiGithubpages,
		},
	],
};

const osAndDistros: Category = {
	name: "Operating Systems & Distributions",
	icon: SiLinux,
	skills: [
		{
			name: "Debian",
			icon: SiDebian,
		},
		{
			name: "Ubuntu",
			icon: SiUbuntu,
		},
		{
			name: "Linux Mint",
			icon: SiLinuxmint,
		},
		{
			name: "Fedora",
			icon: SiFedora,
		},
		{
			name: "openSUSE",
			icon: SiOpensuse,
		},
		{
			name: "Arch Linux",
			icon: SiArchlinux,
		},
		{
			name: "Gentoo",
			icon: SiGentoo,
		},
		{
			name: "Alpine Linux",
			icon: SiAlpinelinux,
		},
		{
			name: "Tails OS",
			icon: SiTails,
		},
		{
			name: "Windows",
			icon: SiWindows11,
		},
	],
};

const miscellanous: Category = {
	name: "Miscellaneous",
	icon: PiDotsThreeCircleLight,
	skills: [
		{
			name: "Orange Pi",
			icon: GiOrange,
		},
		{
			name: "Android",
			icon: SiAndroid,
		},
		{
			name: "Unreal Engine",
			icon: SiUnrealengine,
		},
		{
			name: "Unity",
			icon: SiUnity,
		},
		{
			name: "Qt",
			icon: SiQt,
		},
		{
			name: "JWT",
			icon: SiJsonwebtokens,
		},
		{
			name: "WireGuard",
			icon: SiWireguard,
		},
		{
			name: "Packet Tracer",
			icon: SiCisco,
		},
		{
			name: "PWA/TWA",
			icon: SiPwa,
		},
		{
			name: "VS Code",
			icon: VscVscode,
		},
	],
};

const skills: Category[] = [
	programmingLanguages,
	frontEndDevelopment,
	backEndDevelopment,
	databases,
	devOps,
	cloudComputing,
	artificialIntelligence,
	design,
	osAndDistros,
	miscellanous,
];

const Skill = ({ name, icon }: Skill) => {
	const Icon = setIconDims(icon);
	return (
		<Badge
			className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 p-2 flex gap-1"
			variant="secondary"
		>
			{Icon}
			{name}
		</Badge>
	);
};

const Category = ({ name, skills, icon }: Category) => {
	const Icon = setIconDims(icon);
	return (
		<Collapsible className="rounded-lg border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 hover:shadow-lg transition-shadow duration-300">
			<CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
				<div className="flex items-center gap-4">
					{Icon}
					<h3 className="text-lg font-semibold">{name}</h3>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="grid grid-cols-2 gap-4 px-6 py-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white dark:bg-gray-950 shadow-lg">
				{skills.map((skill) => (
					<Skill key={skill.name} {...skill} />
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};

const Skills = () => {
	return (
		<>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
				<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
					<div className="space-y-4 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Skills & Technologies
						</h2>
						<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
							I have experience working with a range of technologies and tools.
							Here are some of the key skills I have developed over the years.
						</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{skills.map((category) => (
							<Category key={category.name} {...category} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
