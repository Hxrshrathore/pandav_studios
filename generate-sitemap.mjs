<<<<<<< HEAD
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
=======
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
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
