import NextAuthProvider from "@/components/app/NextAuthProvider";
import { cn } from "@/lib/utils";
import { env } from "@/server/env";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Viewport } from "next";
import { Roboto as FontSans } from "next/font/google";

const fontSans = FontSans({
	weight: ["400", "700"],
	style: "normal",
	variable: "--font-sans",
	preload: true,
	display: "swap",
	subsets: ["latin"],
});

// import "src/styles/globals.css";
import ChildrenProps from "types/ChildrenProps";
const metaData = {
	app_name: "Alpha Romer Coma",
	title: "Alpha Romer Coma",
	url: env.NEXT_PUBLIC_HOST_URL,
	description: "",
	iconURL: `${env.NEXT_PUBLIC_HOST_URL}/android-chrome-512x512.png`,
	emails: ["alpha.coma.ict@gmail.com"],
};
const { app_name, url, description, title, iconURL, emails } = metaData;

export const viewport: Viewport = {
	themeColor: "",
	colorScheme: "dark",
	viewportFit: "cover",
	interactiveWidget: "resizes-visual",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
	userScalable: true,
	width: "device-width",
};

export const metadata: Metadata = {
	appleWebApp: {
		capable: true,
	},
	applicationName: app_name,
	appLinks: {
		android: {
			app_name,
			class: "app",
			package: "",
			url: "",
		},
		ios: {
			app_name,
			app_store_id: "",
			url: "",
		},
		ipad: {
			app_name,
			app_store_id: "",
			url: "",
		},
		iphone: {
			app_name,
			app_store_id: "",
			url: "",
		},
		web: {
			should_fallback: false,
			url,
		},
		windows: {
			app_name,
			app_id: "",
			url: "",
		},
		windows_phone: {
			app_name,
			app_id: "",
			url: "",
		},
		windows_universal: {
			app_name,
			app_id: "",
			url: "",
		},
	},
	// NOTE: Do not enable this. It will display a white screen.
	// assets: "",
	generator: "Alpha Romer Coma",
	authors: {
		name: "Alpha Romer Coma",
		url: "https://www.linkedin.com/in/alpharomercoma/",
	},
	category: "",
	classification: "",
	creator: "Alpha Romer Coma",
	description,
	formatDetection: {
		telephone: false,
	},
	icons: [
		{ rel: "icon", url: iconURL },
		{ rel: "apple-touch-icon", url: iconURL },
	],
	keywords: "",
	manifest: "/manifest.webmanifest",
	metadataBase: new URL(url),
	openGraph: {
		description,
		images: [
			{
				url: "",
			},
		],
		siteName: app_name,
		title,
		type: "website",
		url,
		emails,
	},
	robots: {
		follow: true,
		index: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	title,
	publisher: "Alpha Romer Coma",
	referrer: "no-referrer",
	twitter: {
		card: "summary_large_image",
		site: "@alpharomercoma",
		creator: "@alpharomercoma",
		images: "",
	},
	verification: {
		google: "",
		yandex: "",
		yahoo: "",
		me: "",
	},
};

const RootLayout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<html lang="en">
			<NextAuthProvider>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable,
					)}
				>
					{children}
				</body>
				<Analytics />
				<SpeedInsights />
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
