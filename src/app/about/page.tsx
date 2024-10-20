'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {  Instagram, Facebook, Twitter, ChevronRight, Sun, Moon, ArrowUp, Camera as CameraIcon, Users, Award, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Lead Photographer",
    specialty: "Weddings & Portraits",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 15 years of experience, Alice specializes in capturing the intimate moments of weddings and creating stunning portraits that truly reflect the subject's personality."
  },
  {
    name: "David Lee",
    role: "Commercial Photographer",
    specialty: "Product & Architecture",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David's keen eye for detail and composition makes him our go-to photographer for commercial projects, especially in product and architectural photography."
  },
  {
    name: "Emma Rodriguez",
    role: "Event Photographer",
    specialty: "Corporate Events & Parties",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emma's vibrant personality and ability to blend into any crowd allow her to capture the most genuine moments at events, from corporate gatherings to lively parties."
  },
  {
    name: "Michael Chang",
    role: "Nature & Landscape Photographer",
    specialty: "Wildlife & Scenery",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael's passion for the outdoors translates into breathtaking landscape and wildlife photographs that have been featured in national publications."
  }
]

const stats = [
  { icon: CameraIcon, value: "500+", label: "Events Photographed" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Industry Awards" },
  { icon: Clock, value: "10", label: "Years of Experience" }
]

export default function AboutPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
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
        <h1 className="text-4xl font-bold mb-8 text-center">About Capture Studio</h1>
        
        {/* Studio Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Capture Studio was born out of a passion for preserving moments and telling stories through the lens. Founded in 2014 by a group of friends who shared a love for photography, we&apos;ve grown from a small local studio to a team of dedicated professionals serving clients across the country.

                Our vision is to create timeless images that not only capture the visual essence of a moment but also the emotions and atmosphere surrounding it. We believe that every photograph should tell a story and evoke feelings, whether it&apos;s the joy of a wedding day, the pride of a graduate, or the professionalism of a corporate event.

                Over the years, we&apos;ve honed our skills, embraced new technologies, and expanded our services to meet the diverse needs of our clients. From intimate portraits to large-scale events, we approach each project with the same level of passion and dedication that inspired us to start this journey.
              </p>
            </div>
            <div className="relative h-56 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Capture Studio team at work"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                    <h4 className="text-lg font-semibold">{member.role}</h4>
                    <p className="text-sm">{member.specialty}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Why Choose Us Section */}
            <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
            </Card>
            ))}
        </div>
        <div className="mt-8 text-center">
            <p className="mb-4">
            At Capture Studio, we pride ourselves on our commitment to excellence, attention to detail, and personalized service. Our team of experienced photographers brings creativity and technical expertise to every project, ensuring that we exceed your expectations.
            </p>
            <Button size="lg">
            Book a Consultation
            <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
        </section>

      </main>
      <footer className="mt-12 py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Capture Studio Photography. All rights reserved.</p>
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
  )
}