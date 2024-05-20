import numToMonth from "@/utils/dates/numToMon";
import sortDates from "@/utils/dates/sortDates";
import Image from "next/image";
interface Award {
	name: string;
	image: string;
	issuer: string;
	issuedMonth: number;
	issuedYear: number;
}

const awards: Award[] = [
	{
		name: "Algolympics 2024 Finalist",
		image: "/algolympics.png",
		issuer: "UP Diliman ACM Student Chapter",
		issuedMonth: 2,
		issuedYear: 2024,
	},
	{
		name: "Top 1% of 500K + WakaTime Developers 2023",
		image: "/wakatime.png",
		issuer: "WakaTime",
		issuedYear: 2024,
		issuedMonth: 1,
	},
	{
		name: "Space Apps 2023 Global Nominee",
		image: "/nasa_nominee.png",
		issuer: "National Aeronautics and Space Administration (NASA)",
		issuedMonth: 11,
		issuedYear: 2023,
	},
	{
		name: "Galactic Problem Solver",
		image: "/nasa_solver.png",
		issuer: "National Aeronautics and Space Administration (NASA) ",
		issuedMonth: 11,
		issuedYear: 2023,
	},
	{
		name: "Nihongojin Essay Open Call Winner",
		image: "/nihongojin.png",
		issuer: "Japan Foundation",
		issuedMonth: 11,
		issuedYear: 2023,
	},
	{
		name: "Nihongo Stories Featured Story",
		image: "/nihongo_stories.png",
		issuer: "Japan Foundation",
		issuedMonth: 8,
		issuedYear: 2023,
	},
	{
		name: "日本語能力試験 N3",
		image: "/jlpt_n3.png",
		issuer: "Japan Foundation",
		issuedMonth: 1,
		issuedYear: 2023,
	},
	{
		name: "President's Scholar w/ High Honors",
		image: "/fit_scholarship.png",
		issuer: "FEU Institute of Technology",
		issuedMonth: 8,
		issuedYear: 2022,
	},
];

const Award: React.FC<Award> = ({
	name,
	image,
	issuer,
	issuedMonth,
	issuedYear,
}) => {
	return (
		<div className="group relative flex flex-col items-start overflow-hidden rounded-lg bg-gray-100 p-4 transition-all hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div className="relative h-32 w-full overflow-hidden rounded-lg">
				<Image
					alt="Award"
					className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
					height={300}
					src={`/media/img/awards${image}`}
					style={{
						aspectRatio: "400/300",
						objectFit: "cover",
					}}
					width={400}
				/>
			</div>
			<div className="mt-4 space-y-1">
				<h3 className="text-lg font-semibold">{name}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Issued by {issuer}
				</p>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Issued on {numToMonth(issuedMonth)} {issuedYear}
				</p>
			</div>
		</div>
	);
};

const sortedAwardsDesc = sortDates(
	awards,
	({ issuedYear, issuedMonth }) => ({ year: issuedYear, month: issuedMonth }),
	true,
);

const Awards: React.FC = () => {
	return (
		<section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
			<div className="container px-4 md:px-6">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Honors & Awards
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
						I&apos;m proud to have received these prestigious awards and
						recognitions.
					</p>
				</div>
				<div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{sortedAwardsDesc.map((award, index) => (
						<Award key={index} {...award} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
