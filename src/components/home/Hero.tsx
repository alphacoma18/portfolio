import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
const Hero: React.FC = () => {
	return (
		<section className="w-full py-24 dark:bg-gray-800 relative">
			<Image
				src={"/media/img/bg/manila.png"}
				style={{ objectFit: "cover" }}
				fill
				alt="Manila, Philippines"
				className="absolute inset-0 w-full h-full object-cover object-center -z-10 blur-sm brightness-50"
			/>
			<div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 z-50">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
						Hey, I&apos;m Alpha! 👋
					</h1>
					<p className="max-w-[600px] text-white dark:text-gray-400 md:text-xl">
						I&apos;m a professional{" "}
						<span className="font-black">Software Engineer</span> with a passion
						for building bleeding-edge and innovative applications that solve
						real world problems. Pleasure to meet you! 🚀
					</p>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<a
							className="inline-flex gap-1 h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="https://flowcv.com/resume/p5r0itrtfm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFileAlt className="h-4 w-4" />
							View Resume
						</a>
						<a
							className="inline-flex h-10 gap-1 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							href="mailto:alpha.coma.ict@gmail.com?subject=Hello%20Alpha!&body=Hi%20Alpha%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0AKind%20regards%2C%0A%5BYour%20Name%5D"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdMessage className="h-5 w-5" />
							Let&apos;s Chat!
						</a>
					</div>
				</div>
				<div className="flex rounded-lg justify-center w-full items-center relative aspect-video">
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
