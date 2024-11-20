'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Instagram, Facebook, Youtube, Sun, Moon, ArrowUp, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast";
import Image from 'next/image'


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const faqs = [
  {
    question: "What are your pricing packages?",
    answer: "Our pricing varies depending on the type of photography service you need. We offer packages for weddings starting at $2000, portrait sessions from $300, and commercial photography with custom quotes. Please contact us for a detailed price list."
  },
  {
    question: "How far in advance should I book?",
    answer: "For weddings, we recommend booking 6-12 months in advance. For other events or portrait sessions, 2-4 weeks notice is usually sufficient. However, during peak seasons, earlier bookings are advised to ensure availability."
  },
  {
    question: "Do you travel for photoshoots?",
    answer: "Yes, we are available for travel both domestically and internationally. Travel fees may apply depending on the location. Please inquire for specific details."
  },
  {
    question: "How long does it take to receive the final photos?",
    answer: "Turnaround time varies by project. For weddings, you can expect your photos within 6-8 weeks. Portrait sessions are typically ready within 2-3 weeks, and commercial projects are delivered as per the agreed timeline in the contract."
  },
  {
    question: "Do you offer photo printing services?",
    answer: "Yes, we offer high-quality printing services for all our photography packages. We work with professional labs to ensure the best quality prints, canvases, and albums."
  }
]

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    if (result.success) {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: `Failed to send: ${result.error}`,
      });
    }
  } catch {
    toast({
      title: "Error",
      description: "Failed to send message. Try again later.",
    });
  }
}

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 1000)

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
        <nav className="ml-auto flex gap-2 sm:gap-6">
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
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message" {...field} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>


          {/* Map and Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-0">
                {/* Placeholder for Google Maps */}
                <div className="aspect-video relative">
                  <iframe
                    width="725"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Studio%20Pandav%20Vision%20(%20Photography%20Studio%20in%20Ranchi%20)%20VIP%20Market%2C%20Ratu%20Rd%2C%20near%20SBI%20Bank%2C%20Indrapuri%20Colony%2C%20Ranchi%2C%20Jharkhand%20834001&zoom=10&maptype=roadmap">
                  </iframe>
                  <div className="mapswrapper">
                  
                </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>contact@capturestudio.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>123 Photography Lane, Shutter City, PC 12345</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Link href="https://www.instagram.com/studio_pandav_vision/" className="text-muted-foreground hover:text-foreground">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61550744053524" className="text-muted-foreground hover:text-foreground">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.youtube.com/@studiopandavvision" className="text-muted-foreground hover:text-foreground">
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
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
