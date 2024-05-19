import { CodeIcon } from "@radix-ui/react-icons";
import { FaBriefcase } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Competency {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const competencies: Competency[] = [
	{
		icon: <CodeIcon className="h-6 w-6" />,
		title: "Software Engineering",
		description:
			"Proficient in designing and developing scalable, maintainable, and industry standard software solutions using bleeding-edge technologies.",
	},
	{
		icon: <FaBriefcase className="h-6 w-6" />,
		title: "Project Management",
		description:
			"Experienced in leading cross-functional teams, managing project timelines, and ensuring successful delivery of complex projects within budget and scope.",
	},
	{
		icon: <FiCpu className="h-6 w-6" />,
		title: "Artificial Intelligence",
		description:
			"Knowledgeable in the field of artificial intelligence, including machine learning, natural language processing, and computer vision, and their applications in various industries.",
	},
];

const Competency: React.FC<Competency> = ({ icon, title, description }) => {
	return (
		<Card>
			<CardHeader className="flex items-center gap-4">
				{icon}
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-gray-500 dark:text-gray-400">{description}</p>
			</CardContent>
		</Card>
	);
};

const Competencies: React.FC = () => {
	return (
		<section className="w-full grid gap-8 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						My Core Competencies
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
						Explore my key areas of expertise and how I can contribute to your
						projects.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{competencies.map((competency, index) => (
						<Competency key={index} {...competency} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Competencies;
