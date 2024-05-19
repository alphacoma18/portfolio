import NextAuthProvider from "@/components/app/NextAuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { env } from "@/server/env";
import "@/styles/globals.css";
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

import ChildrenProps from "types/ChildrenProps";
const metaData = {
	app_name: "Alpha Romer Coma",
	title: "Alpha Romer Coma",
	url: env.NEXT_PUBLIC_HOST_URL,
	description:
		"Welcome to my portfolio website! I am Alpha Romer Coma, a professional Software Engineer with a passion for building bleeding-edge and innovative applications that solve real world problems. Pleasure to meet you!",
	iconURL: `${env.NEXT_PUBLIC_HOST_URL}/android-chrome-512x512.png`,
	emails: ["alpha.coma.ict@gmail.com"],
};
const { app_name, url, description, title, iconURL, emails } = metaData;

export const viewport: Viewport = {
	themeColor: "#09090b",
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
	category: "personalization",
	classification: "personal",
	creator: "Alpha Romer Coma",
	description,
	formatDetection: {
		telephone: false,
	},
	icons: [
		{ rel: "icon", url: iconURL },
		{ rel: "apple-touch-icon", url: iconURL },
	],
	keywords: [
		"Alpha Romer Coma",
		"software",
		"engineer",
		"software engineer",
		"full-stack",
		"developer",
		"blog",
		"portfolio",
		"personal",
		"website",
	],
	manifest: "/manifest.webmanifest",
	metadataBase: new URL(url),
	openGraph: {
		description,
		images: [
			{
				url: "/media/img/self/google.jpg",
				alt: "Alpha x Google",
				type: "image/jpeg",
				height: 1080,
				width: 1920,
			},
			{
				url: "/media/img/self/microsoft.jpg",
				alt: "Alpha x Microsoft",
				type: "image/jpeg",
				height: 1080,
				width: 1920,
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
		site: "@senodesuzo",
		description,
		creator: "@senodesuzo",
		images: "/media/img/self/google.jpg",
	},
	verification: {
		google: "2in3E6-sO1ECsHoqvnGdo58dv0QAcB_Rm5lNB-FA6R8",
		yandex: "dcd493d013947734",
		yahoo: "E01A119E5EAA9A5963570A31EA4A5058",
		me: "",
	},
};

const RootLayout: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<NextAuthProvider>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable,
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
				<Analytics />
				<SpeedInsights />
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
