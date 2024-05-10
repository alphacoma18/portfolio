import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="w-full bg-gray-100 py-24 dark:bg-gray-800">
			<div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
						Alpha Romer Coma
					</h1>
					<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
						I&apos;m a professional software engineer with a passion for
						building bleeding-edge and innovative applications that solve real
						world problems.
					</p>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="#"
						>
							View Resume
						</Link>
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							href="#"
						>
							Let&apos;s Chat!
						</Link>
					</div>
				</div>
				<div className="flex rounded-lg justify-center w-full items-center relative h-[400px]">
					<Image
						alt="Jared Palmer"
						style={{
							objectFit: "contain",
						}}
						className="rounded-sm"
						fill
						src="/media/img/self/google.jpg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
