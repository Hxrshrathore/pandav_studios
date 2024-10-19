import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes"; // Import the ThemeProvider
import "./globals.css";

// Import the ToastProvider
import { ToastProvider } from "@/components/ui/toast";  // Adjust this path as per your setup

// Font setup remains the same
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pandav Studios",
  description: "Capture the moments that matter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the entire app with ThemeProvider and ToastProvider */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
