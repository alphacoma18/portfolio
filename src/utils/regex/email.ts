import { env } from "@/server/env";

function isAdminEmail(email: string): boolean {
	const adminEmail = env.ADMIN_EMAIL;
	return email === adminEmail;
}

export { isAdminEmail };
