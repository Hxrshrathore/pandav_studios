/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pandav.studio", // Replace with your domain
  generateRobotsTxt: true, // Enable robots.txt generation
  sitemapSize: 5000, // Split large sitemaps into multiple files if necessary
  changefreq: "daily", // Frequency for sitemap changes
  priority: 0.7, // Default priority for pages
  exclude: ["/admin", "/private"], // Exclude specific pages
  outDir: "./out", // Make sure this matches your build output folder
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
