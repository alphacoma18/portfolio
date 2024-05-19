import { env } from "@/server/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisman";
import { isAdminEmail } from "./regex/email";

export const authOptions: NextAuthOptions = {
	// https://stackoverflow.com/a/76585568
	adapter: PrismaAdapter(prisma) as Adapter,
	pages: {
		signIn: "/auth/signin",
		error: "/auth/error",
		signOut: "/auth/signout",
	},
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_ID,
			clientSecret: env.GOOGLE_SECRET,
		}),
	],
	theme: {
		colorScheme: "dark",
		brandColor: "#09090b",
		logo: `${env.HOST_URL}/android-chrome-256x256.png`,
		buttonText: "",
	},
	callbacks: {
		async signIn({ user }) {
			const email = user.email;
			if (!email) return false;
			if (!isAdminEmail(email)) return false;
			return true;
		},
	},
	session: { strategy: "jwt" },
	debug: process.env.NODE_ENV === "development",
	secret: env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */

export const getServerAuthSession = () => getServerSession(authOptions);
