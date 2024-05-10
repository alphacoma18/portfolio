import { CodeIcon } from "@radix-ui/react-icons";
import { FaBriefcase } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
const Competencies = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
					<Card>
						<CardHeader className="flex items-center gap-4">
							<CodeIcon className="h-6 w-6" />
							<CardTitle>Software Engineering</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Proficient in designing and developing scalable, maintainable,
								and efficient software solutions using a variety of programming
								languages and frameworks.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex items-center gap-4">
							<FaBriefcase className="h-6 w-6" />
							<CardTitle>Project Management</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Experienced in leading cross-functional teams, managing project
								timelines, and ensuring successful delivery of complex projects
								within budget and scope.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex items-center gap-4">
							<FiCpu className="h-6 w-6" />
							<CardTitle>Artificial Intelligence</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Knowledgeable in the field of artificial intelligence, including
								machine learning, natural language processing, and computer
								vision, and their applications in various industries.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Competencies;
