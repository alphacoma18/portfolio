"use client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const BackToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 500) setIsVisible(true);
			else setIsVisible(false);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		isVisible && (
			<div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
				<Button
					aria-label="Back to top"
					onClick={scrollToTop}
					className="rounded-full bg-gray-900 p-2 text-gray-50 shadow-lg transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
					size="icon"
					variant="outline"
				>
					<ArrowUpIcon className="h-5 w-5" />
				</Button>
			</div>
		)
	);
};

export default BackToTop;
