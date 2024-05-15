/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.HOST_URL || "https://alpharomer.vercel.app",
	generateRobotsTxt: true,
};
