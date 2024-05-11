import Image from "next/image";
const Affiliations = () => {
	return (
		<section className="w-full bg-white py-12 dark:bg-gray-950">
			<div className="container px-4 md:px-6">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Affiliations
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl text-balance">
						I&apos;m proud to be affiliated with these amazing companies and
						organizations.
					</p>
				</div>
				<div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/fit.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">
									FEU Institute of Technology
								</h3>
								<p className="text-sm">
									President&apos;s Scholar w/ High Honors
								</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/fit_acm.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">FEU Tech ACM</h3>
								<p className="text-sm">Webmaster</p>
								<p className="text-sm">Former Director for Academics</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/fit_gdsc.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">FEU Tech GDSC</h3>
								<p className="text-sm">Former Front-End Lead Developer</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/ieee.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">
									Institute of Electrical and Electronics Engineers
								</h3>
								<p className="text-sm">Member</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/ieee_cs.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">IEEE Computer Society</h3>
								<p className="text-sm">Member</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/logrocket.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">Logrocket</h3>
								<p className="text-sm">Content Advisory Board Member</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/skilio.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">Skilio</h3>
								<p className="text-sm">Scholar Member</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/github.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">GitHub</h3>
								<p className="text-sm">FOSS Contributor</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/google_play.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">Google Play</h3>
								<p className="text-sm">App Developer</p>
							</div>
						</div>
					</div>
					<div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
						<Image
							alt="Logo"
							className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
							height={140}
							src="/media/img/affilitions/ms_store.png"
							style={{
								aspectRatio: "280/140",
								objectFit: "contain",
							}}
							width={280}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
							<div className="text-center text-gray-50">
								<h3 className="text-lg font-semibold">Microsoft Store</h3>
								<p className="text-sm">App Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Affiliations;
