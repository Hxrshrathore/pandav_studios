'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Youtube, Sun, Moon, ArrowUp, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

// Dynamic categories and image counts
const categoryData = {
  'Wedding photography': 20,
  'Props': 11,
  'Prewedding': 12,
  'Portrait': 18,
  'Engagement': 8,
  'Haldi': 3,
  'Candid': 3,
  'Birthday': 7,
};

// Dynamically generate portfolio items
const portfolioItems = Object.entries(categoryData).flatMap(([category, count]) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${category}-${i + 1}`,
    title: category, // Display only the category name as the title
    category,
    image: `/images/portfolio/${category}/${i + 1}.jpg`,
  }))
);

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

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

  const categories = ['All', ...Object.keys(categoryData)]

  const filteredItems = portfolioItems.filter(item =>
    (filter === 'All' || item.category === filter) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

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
            src="/images/logo.png"
            alt="Pandav Studios"
            width={90}
            height={24}
          />
          <span className="sr-only">Pandav Studios</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">Home</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/portfolio">Portfolio</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/all-services">Services</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">About</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">Contact</Link>
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
        <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={item.image}
                        alt={item.category}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{item.category}</h3>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>{item.category}</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh]">
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.category}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>
      <footer className="mt-12 py-6 border-t">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Studio Pandav Vision. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
<Link className="text-sm hover:underline underline-offset-4" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="https://www.instagram.com/studio_pandav_vision/" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61550744053524" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.youtube.com/@studiopandavvision" className="text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
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
