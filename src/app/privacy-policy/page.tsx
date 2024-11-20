'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sun, Moon, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 1000) // Simulating loading time

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = window.scrollY
      setScrollProgress((currentProgress / totalScroll) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-12 rounded-full mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 w-full h-1 bg-primary z-50" style={{ width: `${scrollProgress}%` }} />
      <header className="sticky top-0 px-4 lg:px-6 h-14 flex items-center backdrop-blur-md bg-background/80 z-40">
        <Link className="flex items-center justify-center" href="/">
                <Image
                src="/images/logo.png" // Replace this with the path to your logo file
                alt="Pandav Studios"
                width={90} // This ensures the image matches the previous icon size
                height={24} // Adjust these values to match the size of the Camera icon (h-6 w-6 is 24px)
                />
            <span className="sr-only">Pandav Studios</span>
            </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/all-servicesices">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="ml-4"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
        </Button>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Last Updated: {new Date().toLocaleDateString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At Pandav Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website or services.
            </p>
            <p>
              By using our website or services, you agree to the terms of this Privacy Policy. Please read this policy carefully to understand our practices regarding your personal information.
            </p>
          </CardContent>
        </Card>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Information We Collect</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal information (e.g., name, email address, phone number)</li>
                <li>Contact information for event planning</li>
                <li>Payment information for bookings and purchases</li>
                <li>Images and videos Pandavd during photography sessions</li>
                <li>Website usage data and analytics</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How We Use Your Information</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">We use the collected information for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Providing and improving our photography services</li>
                <li>Communicating with you about bookings and inquiries</li>
                <li>Processing payments and managing accounts</li>
                <li>Delivering products and services you&apos;ve purchased</li>
                <li>Sending promotional materials and updates (with your consent)</li>
                <li>Analyzing website usage to improve user experience</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Data Sharing and Disclosure</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Service providers who assist in our business operations</li>
                <li>Payment processors for secure transactions</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners for joint promotions (with your consent)</li>
              </ul>
              <p className="mt-2">
                We do not sell your personal information to third parties.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Data Security</AccordionTrigger>
            <AccordionContent>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Your Rights and Choices</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict the processing of your data</li>
                <li>Withdraw consent at any time (where applicable)</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Changes to This Policy</AccordionTrigger>
            <AccordionContent>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Contact Us</AccordionTrigger>
            <AccordionContent>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                Pandav Studio<br />
                VIP Market, Ratu Rd, near SBI Bank, Indrapuri Colony<br />
                Ranchi, Jharkhand<br />
                Email: privacy@Pandav.Studio<br />
                Phone: +91 093344 39313
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <footer className="mt-12 py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Pandav Studio Photography. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-2"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  )
}