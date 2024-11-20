import { generateSitemap } from "next-sitemap";

generateSitemap({
  siteUrl: "https://pandav.studio",
  outDir: "./out",
})
  .then(() => {
    console.log("Sitemap generated successfully.");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
import { generateSitemap } from "next-sitemap";

generateSitemap({
  siteUrl: "https://pandav.studio",
  outDir: "./out",
})
  .then(() => {
    console.log("Sitemap generated successfully.");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
