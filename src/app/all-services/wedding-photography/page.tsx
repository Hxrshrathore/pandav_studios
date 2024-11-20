'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Camera, Sun, Moon, ArrowUp, Heart, Clock, Image as ImageIcon, DollarSign } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import Head from 'next/head'



const faqs = [
  {
    question: "How far in advance should I book your wedding photography services?",
    answer: "We recommend booking our wedding photography services as soon as you have your date and venue secured. Popular dates can fill up quickly, especially during peak wedding season. Ideally, booking 9-12 months in advance ensures you have the best chance of securing your preferred date."
  },
  {
    question: "Do you offer engagement photo sessions?",
    answer: "Yes, we offer engagement photo sessions! These sessions are a great way to get comfortable in front of the camera and work with your photographer before the big day. Our Classic and Luxury packages include an engagement session, but it can also be added to the Essential package for an additional fee."
  },
  {
    question: "How long does it take to receive our wedding photos?",
    answer: "We understand how excited you are to see your wedding photos! Typically, we deliver a sneak peek of 20-30 images within a week of your wedding. The full gallery of edited images is usually ready within 6-8 weeks after your wedding date. We take great care in editing each image to ensure the highest quality."
  },
  {
    question: "Can we request specific shots or poses?",
    answer: "We encourage our couples to share their ideas and preferences. Before the wedding, we'll have a detailed discussion about your vision, must-have shots, and any specific poses or moments you want to capture. We blend these requests with our professional expertise to create a comprehensive shot list."
  },
  {
    question: "What happens if it rains on our wedding day?",
    answer: "Don't worry! We're experienced in handling various weather conditions. We always have a backup plan for rainy days, which may include using beautiful indoor locations, incorporating umbrellas as props, or even embracing the rain for some unique and romantic shots. We'll discuss weather contingencies during our planning sessions."
  }
]

export default function WeddingPhotographyPage() {
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
    <>
      <Head>
        <title>Wedding Photography Services | Capture Studio</title>
        <meta name="description" content="Capture your special day with our professional wedding photography services. Packages for every budget, experienced photographers, and stunning results." />
        <meta name="keywords" content="wedding photography, wedding photographer, wedding photos, bridal photography, marriage ceremony pictures" />
        <link rel="canonical" href="https://www.capturestudio.com/all-servicesices/wedding-photography" />
        <meta property="og:title" content="Wedding Photography Services | Capture Studio" />
        <meta property="og:description" content="Professional wedding photography services to capture your special day. Packages for every budget, experienced photographers, and stunning results." />
        <meta property="og:image" content="https://www.capturestudio.com/images/wedding-photography-og.jpg" />
        <meta property="og:url" content="https://www.capturestudio.com/all-servicesices/wedding-photography" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <div className="fixed top-0 left-0 w-full h-1 bg-primary z-50" style={{ width: `${scrollProgress}%` }} />
        <header className="sticky top-0 px-4 lg:px-6 h-14 flex items-center backdrop-blur-md bg-background/80 z-40">
          <Link className="flex items-center justify-center" href="/">
            <Camera className="h-6 w-6" />
            <span className="sr-only">Capture Studio</span>
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
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Wedding Photography Services
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Capture the magic of your special day with our professional wedding photography services.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="#packages">View Packages</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Approach</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Heart className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Capturing Emotions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We focus on capturing the genuine emotions and intimate moments that make your wedding day special.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Timeless Style</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Our photography style is timeless, ensuring your wedding photos will be cherished for generations to come.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <ImageIcon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Attention to Detail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We pay close attention to every detail, from the grand moments to the subtle nuances that make your day unique.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="packages" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Packages</h2>
    <div className="grid gap-6 lg:grid-cols-4">
      {[
        {
          name: "Essential",
          price: "₹31,000",
          features: [
            "1 day coverage",
            "1 photographer, 1 videographer",
            "250+ edited digital images + cinematic video",
            "Album with 35 sheets",
          ],
        },
        {
          name: "Classic",
          price: "₹45,000",
          features: [
            "2 day coverage",
            "1 photographer, 1 videographer",
            "300+ edited digital images + cinematic video",
            "Album with 40 sheets",
          ],
        },
        {
          name: "Luxury",
          price: "₹55,000",
          features: [
            "3 day coverage",
            "1 photographer, 1 videographer",
            "350+ edited digital images + cinematic video",
            "Album with 45 sheets",
          ],
        },
        {
          name: "Custom",
          price: "Contact Us",
          features: [
            "Tailored to your needs",
            "Flexible coverage options",
            "Custom number of photos and videos",
            "Customized albums and add-ons",
          ],
          custom: true, // Flag to render a contact button instead of default action
        },
      ].map((pkg, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{pkg.name}</CardTitle>
            <CardDescription>
              <span className="text-3xl font-bold">{pkg.price}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            {pkg.custom ? (
              <Button asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            ) : (
              <Button className="w-full">
                <a href='/contact'>Choose {pkg.name}</a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
</section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Process</h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We start with a detailed consultation to understand your vision, preferences, and wedding details.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We create a customized shot list and timeline to ensure we capture all the important moments.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>3. Your Wedding Day</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We blend into the background, capturing both candid moments and staged shots as planned.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Capture Your Special Day?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                Let&apos;s create beautiful memories together. Contact us to check availability and discuss your wedding photography needs.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </section>
        </main>
        <footer className="py-6 border-t">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm  text-muted-foreground">© 2024 Studio Pandav Vision. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link className="text-sm hover:underline underline-offset-4" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="/privacy">
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
    </>
  )
}