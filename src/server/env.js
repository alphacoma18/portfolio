// @ts-check
/**
 * This file is included in `/next.config.js` which ensures the app isn't built with invalid env vars.
 * It has to be a `.js`-file to be imported there.
 */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/*eslint sort-keys: "error"*/

function validateString(min = 1, max = 50) {
	return z.string().trim().min(min).max(max);
}

export const env = createEnv({
	client: {
		NEXT_PUBLIC_HOST_URL: validateString(1, 50).url(),
	},
	emptyStringAsUndefined: true,
	runtimeEnv: {
		ADMIN_EMAIL: process.env.ADMIN_EMAIL,
		AUTH_URL: process.env.AUTH_URL,
		DATABASE_URL: process.env.DATABASE_URL,
		GOOGLE_ID: process.env.GOOGLE_ID,
		GOOGLE_SECRET: process.env.GOOGLE_SECRET,
		HOST_URL: process.env.HOST_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL,
		NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
		NODE_ENV: process.env.NODE_ENV,
		POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
		POSTGRES_HOST: process.env.POSTGRES_HOST,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
		POSTGRES_URL: process.env.POSTGRES_URL,
		POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
		POSTGRES_USER: process.env.POSTGRES_USER,
	},
	server: {
		ADMIN_EMAIL: validateString(1, 50).email(),
		AUTH_URL: validateString(1, 50).url(),
		DATABASE_URL: validateString(1, 400),
		GOOGLE_ID: validateString(1, 100),
		GOOGLE_SECRET: validateString(1, 100),
		HOST_URL: validateString(1, 50).url(),
		NEXTAUTH_SECRET: validateString(1, 150),
		NEXTAUTH_URL: z.preprocess(
			// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
			// Since NextAuth.js automatically uses the VERCEL_URL if present.
			(str) => process.env.VERCEL_URL ?? str,
			// VERCEL_URL doesn't include `https` so it cant be validated as a URL
			process.env.VERCEL ? z.string() : z.string().url(),
		),
		NODE_ENV: z.enum(["development", "test", "production"]),
		POSTGRES_DATABASE: validateString(1, 50),
		POSTGRES_HOST: validateString(1, 100),
		POSTGRES_PASSWORD: validateString(1, 50),
		POSTGRES_PRISMA_URL: validateString(1, 200),
		POSTGRES_URL: validateString(1, 200),
		POSTGRES_URL_NON_POOLING: validateString(1, 200),
		POSTGRES_USER: validateString(1, 50),
	},
});
