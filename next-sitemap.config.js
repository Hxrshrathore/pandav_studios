/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pandav.studio", // Your domain
  generateRobotsTxt: true, // Enable robots.txt generation
  sitemapSize: 5000, // Split large sitemaps into multiple files
  changefreq: "daily", // Daily updates for frequently changing pages
  priority: 0.7, // Default priority
  exclude: ["/admin", "/private", "/404", "/500"], // Exclude irrelevant pages
  outDir: "./out", // Match your build output folder
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"], // Disallow crawling sensitive areas
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/images", // Allow Google to crawl images
        disallow: "/private", // Block private folders
      },
    ],
    additionalSitemaps: [
      "https://pandav.studio/sitemap.xml", // Main sitemap
      "https://pandav.studio/sitemap-articles.xml", // Sitemap for articles or dynamic content
    ],
  },
  // Custom priorities for important pages
  additionalPaths: async () => [
    {
      loc: "/", // Homepage
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: "/portfolio", // High priority portfolio page
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: "/contact", // Contact page, crucial for SEO
      changefreq: "monthly",
      priority: 0.8,
    },
  ],
};
