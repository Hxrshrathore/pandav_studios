'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Sun, Moon, ArrowUp, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import Head from 'next/head'

// Example service categories and services
const serviceCategories = [
  {
    name: "Wedding & Events",
    services: [
      { name: "Wedding Photography", image: "/images/services/Wedding Photography.webp" },
      { name: "Pre-Wedding Photoshoot", image: "/images/services/without.jpg" },
      { name: "Bengal Wedding Photography", image: "/images/services/Bengal Wedding Photography.webp" },
      { name: "Birthday Photoshoot", image: "/images/services/Birthday Photoshoot.webp" },
      { name: "Destination Wedding Photography", image: "/images/services/Destination Wedding Photography.webp" },
      { name: "Wedding Ceremony Photography", image: "/images/services/Wedding Ceremony Photography.webp" },
      { name: "Wedding Preparation Photography", image: "/images/services/Wedding Preparation Photography.webp" },
      { name: "Wedding Albums", image: "/images/services/Wedding Albums.webp" },
      { name: "Aerial Wedding Photography", image: "/images/services/Arial Wedding Photography.webp" },
    ],
  },
  {
    name: "Portrait Photography",
    services: [
      { name: "Headshot Photography", image: "/images/services/Headshot Photography.webp" },
      { name: "Couple Photoshoot", image: "/images/services/Couple Photoshoot.webp" },
      { name: "Family Photoshoot", image: "/images/services/Family Photoshoot.webp" },
      { name: "Baby Photoshoot", image: "/images/services/Baby Photoshoot.webp" },
      { name: "Bridal Photography", image: "/images/services/Bridal Photography.webp" },
      { name: "Black-and-White Photography", image: "/images/services/Black and white photoshoot.webp" },
      { name: "Maternity Shoots", image: "/images/services/Maternity Shoots.webp" },
    ],
  },
  {
    name: "Commercial & Corporate",
    services: [
      { name: "Model Photoshoot", image: "/images/services/Model Photoshoot.webp" }, // Added Model Photoshoot
      { name: "Commercial & Corporate Photoshoot", image: "/images/services/without.jpg" },
    ],
  },
  {
    name: "Film & Video Services",
    services: [
      { name: "Wedding Videographer", image: "/images/services/without.jpg" },
      { name: "Pre-Wedding Video Editing", image: "/images/services/without.jpg" },
      { name: "Wedding Video Editing", image: "/images/services/without.jpg" },
      { name: "Wedding Video", image: "/images/services/without.jpg" },
      { name: "Editing Services", image: "/images/services/without.jpg" },
    ],
  },
  {
    name: "Other Services",
    services: [
      { name: "Photo Albums", image: "/images/services/Photo Albums.webp" },
      { name: "Photo Editing", image: "/images/services/without.jpg" },
      { name: "Passport Photography", image: "/images/services/without.jpg" },
      { name: "Photo Framing", image: "/images/services/without.jpg" },
      { name: "Home Service", image: "/images/services/without.jpg" },
    ],
  },
];


export default function AllServicesPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredServices, setFilteredServices] = useState<{ name: string; image: string }[]>([])

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

  useEffect(() => {
    const filtered = serviceCategories.flatMap(category => 
      category.services.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    setFilteredServices(filtered)
  }, [searchTerm])

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
        <title>Our Photography Services | Pandav Studio</title>
        <meta name="description" content="Explore our comprehensive range of professional photography services. From weddings to commercial shoots, we offer expert photography for every occasion." />
        <meta name="keywords" content="photography services, wedding photography, portrait photography, commercial photography, event photography, lifestyle photography" />
        <link rel="canonical" href="https://www.pandavstudio.com/all-services" />
        <meta property="og:title" content="Our Photography Services | Pandav Studio" />
        <meta property="og:description" content="Discover our wide range of professional photography services. From weddings to commercial shoots, we capture life's moments with creativity and expertise." />
        <meta property="og:image" content="https://www.pandavstudio.com/images/all-services-og.jpg" />
        <meta property="og:url" content="https://www.pandavstudio.com/all-services" />
        <meta name="twitter:card" content="summary_large_image" />
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
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Our Photography Services
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore our comprehensive range of professional photography services for every occasion.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search services"
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <CardHeader>
                          <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{service.name}</DialogTitle>
                        <DialogDescription>
                          Detailed information about {service.name} would go here. This could include a brief description, pricing information, and any special offers or packages.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button asChild>
                          <Link href="/contact">Book Now</Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Capture Your Moments?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                Let&apos;s create beautiful memories together. Contact us to discuss your photography needs and book a session.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </section>
        </main>
        <footer className="py-6 border-t">
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
    </>
  )
}
