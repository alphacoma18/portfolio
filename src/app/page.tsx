import Affiliations from "@/components/home/Affiliations";
import Awards from "@/components/home/Awards";
import Certificates from "@/components/home/Certificates";
import Competencies from "@/components/home/Competencies";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar";
import Projects from "@/components/home/Projects";
import Recommendations from "@/components/home/Recommendations";
import Socials from "@/components/home/Socials";
import BackToTop from "@/components/home/BackToTop";
import Skills from "@/components/home/Skills";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<NavBar />
			<main className="pt-16">
				<Hero />
				<Competencies />
				<Projects />
				<Skills />
				<Certificates />
				<Affiliations />
				<Recommendations />
				<Awards />
				<Socials />
				<BackToTop />
			</main>
			<Footer />
		</>
	);
};

export default Home;
