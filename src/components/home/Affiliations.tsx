import Image from "next/image";

interface Affiliation {
	company: string;
	image: string;
	role: string[];
}

const affiliations: Affiliation[] = [
	{
		company: "FEU Institute of Technology",
		image: "/fit.png",
		role: ["President's Scholar w/ High Honors"],
	},
	{
		company: "FEU Tech ACM",
		image: "/fit_acm.png",
		role: ["Webmaster", "Former Director for Academics"],
	},
	{
		company: "FEU Tech GDSC",
		image: "/fit_gdsc.png",
		role: ["Former Front-End Lead Developer"],
	},
	{
		company: "Institute of Electrical and Electronics Engineers",
		image: "/ieee.png",
		role: ["Volunteer"],
	},
	{
		company: "IEEE Computer Society",
		image: "/ieee_cs.png",
		role: ["Member"],
	},
	{
		company: "Logrocket",
		image: "/logrocket.png",
		role: ["Content Advisory Board Member"],
	},
	{
		company: "Skilio",
		image: "/skilio.png",
		role: ["Scholar Fellow"],
	},
	{
		company: "GitHub",
		image: "/github.png",
		role: ["FOSS Contributor"],
	},
	{
		company: "Google Play",
		image: "/google_play.png",
		role: ["App Developer"],
	},
	{
		company: "Microsoft Store",
		image: "/ms_store.png",
		role: ["App Developer"],
	},
];

const Affiliation: React.FC<Affiliation> = ({ company, image, role }) => {
	return (
		<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
			<Image
				alt="Logo"
				className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
				height={140}
				src={`/media/img/affilitions${image}`}
				style={{
					aspectRatio: "280/140",
					objectFit: "contain",
				}}
				width={280}
			/>
			<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
				<div className="text-center text-gray-50">
					<h3 className="text-lg font-semibold">{company}</h3>
					{role.map((r) => (
						<p key={r} className="text-sm">
							{r}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

const Affiliations: React.FC = () => {
	return (
		<section className="w-full bg-gray-100 py-12 dark:bg-gray-800">
			<div className="container px-4 md:px-6">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Professional Affiliations
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
						I&apos;m proud to be affiliated with these amazing companies and
						organizations.
					</p>
				</div>
				<div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{affiliations.map((affiliation, index) => (
						<Affiliation key={index} {...affiliation} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Affiliations;
