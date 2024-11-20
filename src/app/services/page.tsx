'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Instagram, Facebook, Twitter, Sun, Moon, ArrowUp, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Head from 'next/head'

const services = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description: "Capture the magic of your special day with our professional wedding photography services.",
    image: "/placeholder.svg?height=400&width=600",
    packages: [
      { name: "Essential", price: "$1,500", hours: "6 hours", photos: "200+ edited photos" },
      { name: "Premium", price: "$2,500", hours: "10 hours", photos: "400+ edited photos" },
      { name: "Luxury", price: "$3,500", hours: "Full day", photos: "600+ edited photos" },
    ],
    faqs: [
      { question: "Do you offer engagement photo sessions?", answer: "Yes, we offer engagement photo sessions as an add-on to our wedding packages or as a standalone service." },
      { question: "How long does it take to receive the final photos?", answer: "We typically deliver the final edited photos within 4-6 weeks after the wedding date." },
      { question: "Do you provide albums?", answer: "Yes, we offer a variety of high-quality wedding albums that can be customized to your preferences." },
    ],
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    description: "Showcase your personality with our professional portrait photography for individuals and families.",
    image: "/placeholder.svg?height=400&width=600",
    packages: [
      { name: "Individual", price: "$200", hours: "1 hour", photos: "10 edited photos" },
      { name: "Family", price: "$350", hours: "2 hours", photos: "20 edited photos" },
      { name: "Extended", price: "$500", hours: "3 hours", photos: "30 edited photos" },
    ],
    faqs: [
      { question: "What should I wear for my portrait session?", answer: "We recommend wearing solid colors and avoiding busy patterns. We'll provide a detailed guide upon booking." },
      { question: "Can we shoot at multiple locations?", answer: "Yes, depending on the package you choose. Additional locations may incur extra fees." },
      { question: "Do you offer hair and makeup services?", answer: "We can recommend professional hair and makeup artists, but their services are not included in our packages." },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Photography",
    description: "Elevate your brand with our professional commercial and product photography services.",
    image: "/placeholder.svg?height=400&width=600",
    packages: [
      { name: "Starter", price: "$500", hours: "2 hours", photos: "10 product photos" },
      { name: "Business", price: "$1,000", hours: "4 hours", photos: "25 product photos" },
      { name: "Enterprise", price: "Custom", hours: "Flexible", photos: "Tailored to your needs" },
    ],
    faqs: [
      { question: "Do you offer on-location shoots for businesses?", answer: "Yes, we can conduct photoshoots at your business location or in our studio, depending on your needs." },
      { question: "Can you help with styling and props for product photography?", answer: "We have a team of stylists who can help showcase your products in the best light." },
      { question: "What's the turnaround time for commercial projects?", answer: "Turnaround time varies based on the project scope, but we typically deliver within 1-2 weeks for standard projects." },
    ],
  },
]

export default function ServicesPage() {
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
        <title>Our Photography Services | Capture Studio</title>
        <meta name="description" content="Explore our professional photography services including wedding, portrait, and commercial photography. Capture your special moments with Capture Studio." />
        <meta name="keywords" content="photography services, wedding photography, portrait photography, commercial photography" />
      </Head>
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
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
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <Tabs defaultValue={services[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="text-sm sm:text-base">{service.title}</TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Packages</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      {service.packages.map((pkg, index) => (
                        <Card key={index} className="flex flex-col justify-between">
                          <CardHeader>
                            <CardTitle>{pkg.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold mb-2">{pkg.price}</p>
                            <ul className="space-y-1">
                              <li className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {pkg.hours}</li>
                              <li className="flex items-center"><Camera className="mr-2 h-4 w-4" /> {pkg.photos}</li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">Book Now</Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {service.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <footer className="mt-12 py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Studio Pandav Vision. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
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