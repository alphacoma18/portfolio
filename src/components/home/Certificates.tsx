import numToMonth from "@/utils/dates/numToMon";
import sortDates from "@/utils/dates/sortDates";
import Image from "next/image";
import Link from "next/link";
interface Certificate {
	name: string;
	image: string;
	link: string;
	issuer: string;
	issuedMonth: number;
	issuedYear: number;
}

const certificates: Certificate[] = [
	{
		name: "CS50x Certificate",
		image: "/harvard_cs50x.png",
		link: "https://certificates.cs50.io/70f8307b-9c42-4fb9-a931-14d5e835a834.pdf?size=letter",
		issuer: "Harvard University",
		issuedMonth: 12,
		issuedYear: 2023,
	},
	{
		name: "CS50x Verified Certificate",
		image: "/edx_cs50x.png",
		link: "https://courses.edx.org/certificates/bb4919bf719f468c833b6e7555c3f337",
		issuer: "edX",
		issuedMonth: 12,
		issuedYear: 2023,
	},
	{
		name: "Software Engineer Certificate",
		image: "/hackerrank_swe.png",
		link: "https://www.hackerrank.com/certificates/ec8744631e7c",
		issuer: "HackerRank",
		issuedMonth: 11,
		issuedYear: 2023,
	},
	{
		name: "Software Engineer Intern",
		image: "/hackerrank_swi.png",
		link: "https://www.hackerrank.com/certificates/ccdb3f0e794b",
		issuer: "HackerRank",
		issuedMonth: 11,
		issuedYear: 2023,
	},
	{
		name: "Front-End Developer",
		image: "/hackerrank_fe.png",
		link: "https://www.hackerrank.com/certificates/ec8744631e7c",
		issuer: "HackerRank",
		issuedMonth: 11,
		issuedYear: 2023,
	},
	{
		name: "Back-End Development & APIs",
		image: "/freecodecamp_be.png",
		link: "https://www.freecodecamp.org/certification/alphacoma18/back-end-development-and-apis",
		issuer: "FreeCodeCamp",
		issuedMonth: 9,
		issuedYear: 2022,
	},
	{
		name: "JavaScript Algorithm & Data Structures",
		image: "/freecodecamp_js.png",
		link: "https://www.freecodecamp.org/certification/alphacoma18/javascript-algorithms-and-data-structures",
		issuer: "FreeCodeCamp",
		issuedMonth: 7,
		issuedYear: 2022,
	},
	{
		name: "Foundational C# with Microsoft",
		image: "/freecodecamp_csharp.png",
		link: "https://www.freecodecamp.org/certification/alpha-coma/foundational-c-sharp-with-microsoft",
		issuer: "FreeCodeCamp",
		issuedMonth: 10,
		issuedYear: 2023,
	},
	{
		name: "Foundations of Git Certification",
		image: "/gitkraken.png",
		link: "https://learn.gitkraken.com/certificates/xdvnhr2qdp",
		issuer: "GitKraken",
		issuedMonth: 8,
		issuedYear: 2023,
	},
	{
		name: "Github Foundations",
		image: "/github_foundations.png",
		link: "https://www.credly.com/badges/59e40eef-9a77-43fd-8aa1-de64bd1b5a37",
		issuer: "GitHub",
		issuedMonth: 1,
		issuedYear: 2024,
	},
	{
		name: "MongoDB Node.js Developer",
		image: "/mongodb.png",
		link: "https://learn.mongodb.com/c/d1o_5fyTT4C6IfuOjJAAnA",
		issuer: "MongoDB",
		issuedMonth: 1,
		issuedYear: 2024,
	},
	{
		name: "Advanced Level of Software Engineering",
		image: "/dict.png",
		link: "https://courses.buri.io/view/user/certificate/ef2bbdcb-52a0-46ca-929b-ae9578de395e/pdf",
		issuer: "DICT Philippines",
		issuedMonth: 4,
		issuedYear: 2024,
	},
];

const sortedCertDesc = sortDates(
	certificates,
	({ issuedYear, issuedMonth }) => ({ year: issuedYear, month: issuedMonth }),
	true,
);

const Certificate: React.FC<Certificate> = ({
	name,
	image,
	link,
	issuer,
	issuedMonth,
	issuedYear,
}) => {
	return (
		<div className="relative group overflow-hidden rounded-lg">
			<Image
				alt="Certificate"
				className="object-cover w-full h-60"
				height={300}
				src={`/media/img/certificates${image}`}
				style={{
					objectFit: "contain",
				}}
				width={400}
			/>
			<div className="bg-white p-4 dark:bg-card">
				<h3 className="font-semibold text-lg md:text-xl">{name}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Issued by {issuer}
				</p>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Issued on {numToMonth(issuedMonth)} {issuedYear}
				</p>

				<div className="mt-4">
					<Link
						className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
						href={link}
						target="_blank"
					>
						View Certificate
					</Link>
				</div>
			</div>
		</div>
	);
};

const Certificates = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
			<div className="space-y-4 text-center">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					My Certificates
				</h2>
				<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
					Explore my certifications and achievements in the field of software
					development.
				</p>
			</div>
			<div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 md:px-6">
				{sortedCertDesc.map((certificate, index) => (
					<Certificate key={index} {...certificate} />
				))}
			</div>
		</section>
	);
};

export default Certificates;
