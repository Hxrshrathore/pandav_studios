'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Sun, Moon, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from 'next/image'

export default function TermsOfServicePage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/all-services">
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
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Last Updated: {new Date().toLocaleDateString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Welcome to Pandav Studio. These Terms of Service (&quot;Terms&quot;) govern your use of our website and photography services. By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our website or use our services.
            </p>
            <p>
              Please read these Terms carefully before using our services. If you have any questions, please contact us using the information provided at the end of this document.
            </p>
          </CardContent>
        </Card>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
            <AccordionContent>
              <p>
                By accessing this website or using our photography services, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2. Use License</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Permission is granted to temporarily access the materials (information or software) on Pandav Studio&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Pandav Studio&apos;s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3. Photography Services</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Our photography services are subject to the following terms:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Bookings are confirmed upon receipt of a deposit or full payment, as specified in the booking agreement.</li>
                <li>Cancellations must be made at least 48 hours in advance for a full refund. Late cancellations may be subject to fees.</li>
                <li>We retain copyright of all images taken during a session. A license for personal use is granted to the client upon full payment.</li>
                <li>Commercial use of images requires separate licensing agreements.</li>
                <li>Editing and delivery timelines will be specified in the booking agreement.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>4. Disclaimer</AccordionTrigger>
            <AccordionContent>
              <p>
                The materials on Pandav Studio&apos;s website and our photography services are provided on an &apos;as is&apos; basis. Pandav Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>5. Limitations</AccordionTrigger>
            <AccordionContent>
              <p>
                In no event shall Pandav Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pandav Studio&apos;s website or our photography services, even if Pandav Studio or a Pandav Studio authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>6. Accuracy of Materials</AccordionTrigger>
            <AccordionContent>
              <p>
                The materials appearing on Pandav Studio&apos;s website could include technical, typographical, or photographic errors. Pandav Studio does not warrant that any of the materials on its website are accurate, complete or current. Pandav Studio may make changes to the materials contained on its website at any time without notice.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>7. Links</AccordionTrigger>
            <AccordionContent>
              <p>
                Pandav Studio has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Pandav Studio of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>8. Modifications</AccordionTrigger>
            <AccordionContent>
              <p>
                Pandav Studio may revise these terms of service for its website and photography services at any time without notice. By using this website or our services, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>9. Governing Law</AccordionTrigger>
            <AccordionContent>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>10. Contact Information</AccordionTrigger>
            <AccordionContent>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                Pandav Studio<br />
                123 Photography Lane<br />
                City, State 12345<br />
                Email: info@Pandavstudio.com<br />
                Phone: (123) 456-7890
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <footer className="mt-12 py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Pandav Studio Photography. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
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