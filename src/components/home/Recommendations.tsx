import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface Recommendation {
	name: string;
	position: string;
	content: React.ReactNode;
	path: string;
	receiveMonth: number;
	receivedYear: number;
}

const recommendations: Recommendation[] = [
	{
		name: "Justine Jude Pura, MBA",
		position: "CS Department @FEU Tech",
		content: (
			<span>
				What distinguishes Alpha further is his{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					remarkable humility and positive attitude
				</span>
				. Despite his impressive credentials and achievements, he remains
				grounded and approachable, always willing to learn and grow. His blend
				of intellectual curiosity, leadership qualities, and character make him
				a standout individual.
			</span>
		),
		path: "/sir_pura.jpg",
		receiveMonth: 3,
		receivedYear: 2024,
	},
	{
		name: "Jeneffer Sabonsolin",
		position: "CS Department @FEU Tech",
		content: (
			<span>
				Alpha Romer Coma, my student in design thinking, exhibits a{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					profound passion for academic excellence
				</span>
				, evident in the outstanding quality of his work. I eagerly anticipate
				witnessing his continued growth and achievements.
			</span>
		),
		path: "/sir_sabonsolin.jpg",
		receiveMonth: 3,
		receivedYear: 2024,
	},
	{
		name: "Michelle Anne Constantino",
		position: "CS Department @FEU Tech",
		content: (
			<span>
				I was Alpha&apos;s Computer Systems Architecture professor, but I
				didn&apos;t see him just as a student of CSA, he has always given an
				effort towards class work and{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					goes beyond what is being asked
				</span>
				. I had always admired how you go beyond what classes are always.
			</span>
		),
		path: "/maam_constantino.jpg",
		receiveMonth: 12,
		receivedYear: 2023,
	},
	{
		name: "Beau Gray Habal",
		position: "CS Department @FEU Tech",
		content: (
			<span>
				Alpha consistently performs well academically. His work reflects a deep
				understanding of the material, and he consistently produces quality
				assignment. Alpha is{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					exceptionally curious and displays a genuine eagerness to learn
				</span>
				. He works well with his fellow classmates and is evident that he is a
				team player
			</span>
		),
		path: "/default.jpg",
		receiveMonth: 1,
		receivedYear: 2024,
	},
	{
		name: "John Kenneth Andales",
		position: "Software Engineer @Samsung",
		content: (
			<span>
				Mr. Coma is a development-oriented person, as{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					his passion for the field is unparalleled
				</span>
				. His enthusiasm for sharing ideas and collaborating with colleagues
				fosters a dynamic and engaging work environment.
			</span>
		),
		path: "/sir_andales.jpg",
		receiveMonth: 3,
		receivedYear: 2023,
	},
	{
		name: "Angelo Arguson, DIT",
		position: "CS Department @FEU Tech",
		content: (
			<span>
				Mr. Alpha Romer is my data structure student. He is industrious and
				knowledgeable in computer programming. He is a multilingual person and a{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					very competitive when it comes to project submissions
				</span>
				. He can be a candidate for intern software development in the future of
				this school.
			</span>
		),
		path: "/default.jpg",
		receiveMonth: 7,
		receivedYear: 2023,
	},
	{
		name: "Xynil Jhed Lacap",
		position: "BSCSSE Student @FEU Tech",
		content: (
			<span>
				Alpha is an amazing team player, who always steps up his game especially
				in developing a program. He is{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					really adept at adapting in unfavorable situations
				</span>
				, and his skills to turn the tide in our team&apos;s favor is
				incredible.
			</span>
		),
		path: "/lacap.jpg",
		receiveMonth: 3,
		receivedYear: 2024,
	},
	{
		name: "John Rey Basilio",
		position: "After Sales Support @Concentrix",
		content: (
			<span>
				Mr. Coma is an{" "}
				<span className="bg-blue-300 dark:bg-[#3584e4]">
					excellent teammate you can rely on
				</span>
				. We both honed our skills through simultaneous exchange of ideas or
				solutions whether it may be design-related or code-related. Learning
				with Mr. Coma is such a pleasure.
			</span>
		),
		path: "/basilio.jpg",
		receivedYear: 2023,
		receiveMonth: 2,
	},
];

import numToMonth from "@/utils/dates/numToMon";
import sortDates from "@/utils/dates/sortDates";

const Recommendation: React.FC<Recommendation> = ({
	name,
	position,
	content,
	path,
	receiveMonth,
	receivedYear,
}) => {
	return (
		<Card>
			<CardContent className="space-y-4 p-6">
				<blockquote className="text-lg font-semibold leading-snug">
					&ldquo;
					{content}
					&rdquo;
				</blockquote>
				<div className="flex items-center gap-4">
					<Image
						alt={name}
						className="rounded-full"
						height={48}
						src={`/media/img/recommendation${path}`}
						style={{
							aspectRatio: "48/48",
							objectFit: "cover",
						}}
						width={48}
					/>
					<div>
						<div className="font-semibold">{name}</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							{position}
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Received on {numToMonth(receiveMonth)} {receivedYear}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const sortedRecDesc = sortDates(
	recommendations,
	({ receivedYear, receiveMonth }) => ({
		year: receivedYear,
		month: receiveMonth,
	}),
	true,
);

const Recommendations: React.FC = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						What Others Say
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
						Hear from my professors, colleagues, and clients about their
						experience working with me.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
					{sortedRecDesc.map((recommendation, index) => (
						<Recommendation key={index} {...recommendation} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Recommendations;
