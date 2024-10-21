import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes"; // Import the ThemeProvider
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast"; // Adjust this path as per your setup
import { Toaster } from "@/components/ui/toaster"; // Import the Toaster component
import { SpeedInsights } from '@vercel/speed-insights/next';


// Font setup remains the same
const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO meta tags
export const siteMetadata = {
  title: "Best Photography Studio in Ranchi - Pandav Studios | Wedding & Event Photography in Jharkhand",
  description: "Pandav Studios offers professional wedding, portrait, and event photography services in Ranchi, Jharkhand. Contact us for premium photography services.",
  keywords: "photography in Ranchi, Jharkhand wedding photographer, professional photography services Ranchi, event photography Ranchi, portrait photography Jharkhand",
  openGraph: {
    title: "Pandav Studios - Photography Studio in Ranchi",
    description: "Capture your moments with the best wedding and event photographers in Ranchi, Jharkhand.",
    url: "https://www.pandav.studio",
    image: "/images/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pandavstudios",
    title: "Pandav Studios - Photography in Ranchi",
    description: "Expert wedding, portrait, and event photography services in Ranchi, Jharkhand.",
    image: "/images/logo.png",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": "Pandav Studios",
    "image": "/images/logo.png",
    "description": "Pandav Studios provides professional photography services in Ranchi, Jharkhand. Specializing in weddings, portraits, and events.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "VIP Market, Ratu Rd, Ranchi",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN",
    },
    "telephone": "+91-9334439313",
    "sameAs": [
      "https://www.facebook.com/pandavstudios",
      "https://www.instagram.com/pandavstudios",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* General SEO */}
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href={siteMetadata.openGraph.url} />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph SEO */}
        <meta property="og:title" content={siteMetadata.openGraph.title} />
        <meta property="og:description" content={siteMetadata.openGraph.description} />
        <meta property="og:image" content={siteMetadata.openGraph.image} />
        <meta property="og:url" content={siteMetadata.openGraph.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pandav Studios" />

        {/* Twitter Card SEO */}
        <meta name="twitter:card" content={siteMetadata.twitter.card} />
        <meta name="twitter:title" content={siteMetadata.twitter.title} />
        <meta name="twitter:description" content={siteMetadata.twitter.description} />
        <meta name="twitter:image" content={siteMetadata.twitter.image} />
        <meta name="twitter:site" content={siteMetadata.twitter.site} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteMetadata.structuredData) }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preload important resources */}
        <link rel="preload" href="/fonts/GeistVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GeistMonoVF.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ToastProvider>
            {children}
            <SpeedInsights />
            <Toaster /> {/* Add the Toaster component here */}
          </ToastProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
