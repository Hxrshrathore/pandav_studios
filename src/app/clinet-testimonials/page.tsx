'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Sun, Moon, ArrowUp, Star } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import Head from 'next/head'
import Image from 'next/image'

const featuredReviews = [
  {
    name: "Harsh Rathore",
    eventType: "Wedding Photography",
    rating: 5,
    excerpt: "Pandav Studios made our wedding day unforgettable. The team was professional and the photos turned out better than we could have imagined. Highly recommend!"
  },
  {
    name: "Nitya Taneja",
    eventType: "Corporate Event Photography",
    rating: 5,
    excerpt: "The team at Pandav Studios exceeded our expectations for our corporate event. The photos were stunning and perfectly captured the essence of our brand."
  },
  {
    name: "Utkarsh Anand",
    eventType: "Family Portrait Session",
    rating: 5,
    excerpt: "Our family portrait session was a wonderful experience. The team was patient and captured our family's personality beautifully in the photos."
  }
]

const moreReviews = [
  {
    name: "Vikash Kumar",
    eventType: "Engagement Shoot",
    rating: 5,
    excerpt: "Pandav Studios captured our love story perfectly. The photos are breathtaking!"
  },
  {
    name: "Uday Shankar",
    eventType: "Product Photography",
    rating: 5,
    excerpt: "Professional, creative, and efficient. Our products look amazing in these photos."
  },
  {
    name: "Reena Singh",
    eventType: "Maternity Session",
    rating: 5,
    excerpt: "The team made me feel comfortable and beautiful during my maternity shoot."
  },
  {
    name: "Ayush Bariyar",
    eventType: "Real Estate Photography",
    rating: 5,
    excerpt: "Pandav Studios' photos helped sell our property faster. Excellent work!"
  }
]

export default function ClientTestimonialsPage() {
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
        <title>Client Testimonials | Pandav Studios</title>
        <meta name="description" content="Read what our clients say about Pandav Studios. Discover why we're trusted for wedding, corporate, family, and various other photography services." />
        <meta name="keywords" content="Pandav Studios reviews, client testimonials, photography testimonials, wedding photography reviews, corporate event photography reviews" />
        <link rel="canonical" href="https://www.pandavstudios.com/testimonials" />
        <meta property="og:title" content="Client Testimonials | Pandav Studios" />
        <meta property="og:description" content="Discover what our clients say about their experience with Pandav Studios. Read reviews from weddings, corporate events, family sessions, and more." />
        <meta property="og:image" content="https://www.pandavstudios.com/images/testimonials-og.jpg" />
        <meta property="og:url" content="https://www.pandavstudios.com/testimonials" />
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
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Client Testimonials
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Hear what our clients say about us
                  </p>
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  At Pandav Studios, we strive to exceed expectations with every project. Below are some testimonials from our happy clients who trusted us to capture their special moments.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">Featured Reviews</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredReviews.map((review, index) => (
                  <Card key={index} className="flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle>{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.eventType}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{review.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">More Reviews</h2>
              <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <CarouselContent>
                  {moreReviews.map((review, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardHeader>
                          <CardTitle>{review.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{review.eventType}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{review.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Create Your Own Story?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                Inspired by our clients&apos;s experiences? Book a session with us today and create unforgettable memories!
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Book a Session</Link>
              </Button>
            </div>
          </section>
        </main>
        <footer className="py-6 border-t">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 Pandav Studios. All rights reserved.</p>
            <nav className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
              <Link className="text-sm hover:underline underline-offset-4" href="https://www.wedmegood.com/profile/Studio-Pandav-Vision-3283188/reviews">
                View All Reviews
              </Link>
              <p className="text-sm">
                Questions? Contact us at <a href="mailto:info@pandav.studio" className="hover:underline">info@pandav.studio</a> or call <a href="tel:+919334439313" className="hover:underline">+91-93344-39313</a>
              </p>
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