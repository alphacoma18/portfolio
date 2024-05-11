import Image from "next/image";
interface Award {
	name: string;
	image: string;
	issuer: string;
	issuedOn: string;
}

const awards: Award[] = [
	{
		name: "Algolympics 2024 Finalist",
		image: "/algolympics.png",
		issuer: "UP Diliman ACM Student Chapter",
		issuedOn: "March 2024",
	},
	{
		name: "Space Apps 2023 Global Nominee",
		image: "/nasa_nominee.png",
		issuer: "FEU Tech ACM",
		issuedOn: "Jan 2024",
	},
	{
		name: "Top 1% of 500K + WakaTime Developers 2023",
		image: "/wakatime.png",
		issuer: "National Aeronautics and Space Administration (NASA) ",
		issuedOn: "Nov 2023",
	},
	{
		name: "Galactic Problem Solver",
		image: "/nasa_solver.png",
		issuer: "National Aeronautics and Space Administration (NASA) ",
		issuedOn: "Nov 2023",
	},
	{
		name: "President's Scholar with High Honors",
		image: "/fit_scholarship.png",
		issuer: "FEU Institute of Technology",
		issuedOn: "Aug 2022",
	},
];

const Award: React.FC<Award> = ({ name, image, issuer, issuedOn }) => {
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
					Issued on {issuedOn}
				</p>
			</div>
		</div>
	);
};

const Awards = () => {
	return (
		<section className="w-full bg-white py-12 dark:bg-gray-950">
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
					{awards.map((award, index) => (
						<Award key={index} {...award} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
