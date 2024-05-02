import CenterComponent from "@/components/wrapper/CenterComponent";
import { NextPage } from "next";
const Error404: NextPage = () => {
	return (
		<CenterComponent>
			<h1 className="text-balance">Error 404: Not Found</h1>
			<p className="text-balance">🚧 The website is under development 🚧</p>
			<p className="text-balance">
				For site inquiries, contact
				<a
					href="mailto:alpha.coma.ict@gmail.com"
					className="underline"
					target="_blank"
				>
					me directly
				</a>
			</p>
		</CenterComponent>
	);
};

export default Error404;
