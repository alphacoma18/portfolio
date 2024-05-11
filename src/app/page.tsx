import Hero from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar";
import Projects from "@/components/home/Projects";
import Recommendations from "@/components/home/Recommendations";
import Certificates from "@/components/home/Certificates";
import Socials from "@/components/home/Socials";
import Competencies from "@/components/home/Competencies";
import Footer from "@/components/home/Footer";
import Affiliations from "@/components/home/Affiliations";
import Awards from "@/components/home/Awards";
export default function Home() {
	return (
		<>
			<NavBar />
			<main className="pt-16">
				<Hero />
				<Competencies />
				<Projects />
				<Certificates />
				<Affiliations />
				<Recommendations />
				<Awards />
				<Socials />
			</main>
			<Footer />
		</>
	);
}
