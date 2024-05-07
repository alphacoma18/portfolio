import Link from "next/link";
import Image from "next/image";
const Projects = () => {
	return (
		<section className="w-full py-12 grid gap-8 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="space-y-4 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Projects
				</h2>
				<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
					Explore my key areas of expertise and how I can contribute to your
					projects.
				</p>
			</div>
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
				<div className="group relative overflow-hidden rounded-lg">
					<Link className="absolute inset-0 z-10" href="#">
						<span className="sr-only">View Project</span>
					</Link>
					<Image
						alt="Project 1"
						className="aspect-video w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
						height={365}
						src="/placeholder.svg"
						width={650}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
						<h3 className="text-2xl font-bold">Project 1</h3>
						<p className="mt-2 text-gray-300">
							A modern and responsive web application built with the latest
							technologies.
						</p>
					</div>
				</div>
				<div className="group relative overflow-hidden rounded-lg">
					<Link className="absolute inset-0 z-10" href="#">
						<span className="sr-only">View Project</span>
					</Link>
					<Image
						alt="Project 2"
						className="aspect-video w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
						height={365}
						src="/placeholder.svg"
						width={650}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
						<h3 className="text-2xl font-bold">Project 2</h3>
						<p className="mt-2 text-gray-300">
							A feature-rich web application with a focus on user experience.
						</p>
					</div>
				</div>
				<div className="group relative overflow-hidden rounded-lg">
					<Link className="absolute inset-0 z-10" href="#">
						<span className="sr-only">View Project</span>
					</Link>
					<Image
						alt="Project 3"
						className="aspect-video w-full overflow-hidden object-cover transition-all duration-300 group-hover:scale-105"
						height={365}
						src="/placeholder.svg"
						width={650}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
						<h3 className="text-2xl font-bold">Project 3</h3>
						<p className="mt-2 text-gray-300">
							A scalable and performant web application built with best
							practices.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
