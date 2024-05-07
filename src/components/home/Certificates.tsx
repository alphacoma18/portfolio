import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const Certificates = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Certificates
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
						Check out my impressive collection of software engineering
						certificates.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 1"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">
									Software Engineering Fundamentals
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme University
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 2"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">Advanced Web Development</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme Tech
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 3"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">Full-Stack Development</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme Institute
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 4"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">Cloud Computing Essentials</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme Cloud
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 1"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">
									Software Engineering Fundamentals
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme University
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 2"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">Advanced Web Development</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme Tech
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 3"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">Full-Stack Development</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme Institute
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-center">
								<Image
									alt="Certificate 4"
									className="rounded-lg"
									height={120}
									src="/placeholder.svg"
									style={{
										aspectRatio: "120/120",
										objectFit: "cover",
									}}
									width={120}
								/>
							</div>
							<div className="text-center">
								<div className="font-semibold">Cloud Computing Essentials</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Issued by Acme Cloud
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Certificates;
