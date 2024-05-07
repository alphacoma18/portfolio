import Image from "next/image";
import { Card, CardContent } from "../ui/card";
const Recommendations = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
				<div className="space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						What Others Say
					</h2>
					<p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
						Hear from my professors, colleagues, and clients about their
						experience working with me.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared is an exceptional software engineer. His attention
								to detail and problem-solving skills are truly impressive.”
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="Professor Smith"
									className="rounded-full"
									height={48}
									src="/placeholder.svg"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">Professor Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Computer Science Department
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;I&apos;ve had the pleasure of working with Jared on
								several projects, and I&apos;m always amazed by his ability to
								deliver high-quality work on time.&apos;
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="Jane Doe"
									className="rounded-full"
									height={48}
									src="/placeholder.svg"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">Jane Doe</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Product Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared&apos;s ability to understand complex requirements
								and translate them into elegant solutions is truly
								remarkable.&apos;
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="John Smith"
									className="rounded-full"
									height={48}
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">John Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Engineering Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>{" "}
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared&apos;s ability to understand complex requirements
								and translate them into elegant solutions is truly
								remarkable.&apos;
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="John Smith"
									className="rounded-full"
									height={48}
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">John Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Engineering Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>{" "}
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared&apos;s ability to understand complex requirements
								and translate them into elegant solutions is truly remarkable.”
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="John Smith"
									className="rounded-full"
									height={48}
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">John Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Engineering Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>{" "}
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared&apos;s ability to understand complex requirements
								and translate them into elegant solutions is truly remarkable.”
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="John Smith"
									className="rounded-full"
									height={48}
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">John Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Engineering Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>{" "}
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared&apos;s ability to understand complex requirements
								and translate them into elegant solutions is truly remarkable.”
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="John Smith"
									className="rounded-full"
									height={48}
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">John Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Engineering Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>{" "}
					<Card>
						<CardContent className="space-y-4 p-6">
							<blockquote className="text-lg font-semibold leading-snug">
								&apos;Jared&apos;s ability to understand complex requirements
								and translate them into elegant solutions is truly remarkable.”
							</blockquote>
							<div className="flex items-center gap-4">
								<Image
									alt="John Smith"
									className="rounded-full"
									height={48}
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										aspectRatio: "48/48",
										objectFit: "cover",
									}}
									width={48}
								/>
								<div>
									<div className="font-semibold">John Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Engineering Manager, Acme Inc.
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
		// <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
		//     <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
		//         <div className="space-y-4 text-center">
		//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Others Say</h2>
		//             <p className="max-w-[600px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
		//                 Hear from my professors and workmates about their experience working with me.
		//             </p>
		//         </div>
		//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		//             <Card>
		//                 <CardContent className="space-y-4">
		//                     <blockquote className="text-lg font-semibold leading-snug">
		//                         &apos;Jared is an exceptional software engineer. His attention to detail and problem-solving skills are
		//                         truly impressive.”
		//                     </blockquote>
		//                     <div className="flex items-center gap-4">
		//                         <Image
		//                             alt="Professor Smith"
		//                             className="rounded-full"
		//                             height={48}
		//                             src="/placeholder.svg"
		//                             style={{
		//                                 aspectRatio: "48/48",
		//                                 objectFit: "cover",
		//                             }}
		//                             width={48}
		//                         />
		//                         <div>
		//                             <div className="font-semibold">Professor Smith</div>
		//                             <div className="text-sm text-gray-500 dark:text-gray-400">Computer Science Department</div>
		//                         </div>
		//                     </div>
		//                 </CardContent>
		//             </Card>
		//             <Card>
		//                 <CardContent className="space-y-4">
		//                     <blockquote className="text-lg font-semibold leading-snug">
		//                         &apos;I&apos;ve had the pleasure of working with Jared on several projects, and I&apos;m always amazed by his
		//                         ability to deliver high-quality work on time.”
		//                     </blockquote>
		//                     <div className="flex items-center gap-4">
		//                         <Image
		//                             alt="Jane Doe"
		//                             className="rounded-full"
		//                             height={48}
		//                             src="/placeholder.svg"
		//                             style={{
		//                                 aspectRatio: "48/48",
		//                                 objectFit: "cover",
		//                             }}
		//                             width={48}
		//                         />
		//                         <div>
		//                             <div className="font-semibold">Jane Doe</div>
		//                             <div className="text-sm text-gray-500 dark:text-gray-400">Product Manager, Acme Inc.</div>
		//                         </div>
		//                     </div>
		//                 </CardContent>
		//             </Card>
		//             <Card>
		//                 <CardContent className="space-y-4">
		//                     <blockquote className="text-lg font-semibold leading-snug">
		//                         &apos;Jared&apos;s ability to understand complex requirements and translate them into elegant solutions is
		//                         truly remarkable.”
		//                     </blockquote>
		//                     <div className="flex items-center gap-4">
		//                         <Image
		//                             alt="John Smith"
		//                             className="rounded-full"
		//                             height={48}
		//                             src="/placeholder.svg"
		//                             style={{
		//                                 aspectRatio: "48/48",
		//                                 objectFit: "cover",
		//                             }}
		//                             width={48}
		//                         />
		//                         <div>
		//                             <div className="font-semibold">John Smith</div>
		//                             <div className="text-sm text-gray-500 dark:text-gray-400">Engineering Manager, Acme Inc.</div>
		//                         </div>
		//                     </div>
		//                 </CardContent>
		//             </Card>
		//             <Card>
		//                 <CardContent className="space-y-4">
		//                     <blockquote className="text-lg font-semibold leading-snug" />
		//                 </CardContent>
		//             </Card>
		//         </div>
		//     </div>
		// </section>
	);
};

export default Recommendations;
