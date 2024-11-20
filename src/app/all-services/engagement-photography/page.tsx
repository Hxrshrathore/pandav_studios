'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sun, Moon, ArrowUp, Building, ShoppingBag, Users, DollarSign } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import Head from 'next/head'
import Image from 'next/image'



const faqs = [
  {
    question: "What types of Engagement photography do you offer?",
    answer: "We offer a wide range of Engagement photography services, including product photography, corporate headshots, event coverage, architectural photography, food photography, and lifestyle shots for brands. Our team can tailor our services to meet your specific business needs."
  },
  {
    question: "How long does a typical Engagement photo shoot take?",
    answer: "The duration of a Engagement photo shoot can vary greatly depending on the scope of the project. A basic product shoot might take just a few hours, while a comprehensive brand lifestyle shoot could span several days. During our initial consultation, we'll discuss your needs and provide an estimated timeline."
  },
  {
    question: "Do you provide hair and makeup services for corporate headshots?",
    answer: "Yes, we can arrange professional hair and makeup services for corporate headshots and team photos. This service is not included in our standard packages but can be added for an additional fee. We work with experienced stylists who specialize in camera-ready looks."
  },
  {
    question: "What's included in the Engagement use license?",
    answer: "Our Engagement use license allows you to use the photos for your business marketing materials, website, social media, and advertising campaigns. The specific terms may vary based on the package and intended use. We'll provide a detailed licensing agreement that outlines all permitted uses."
  },
  {
    question: "Can you work with our art director or brand guidelines?",
    answer: "We're accustomed to collaborating with art directors and adhering to brand guidelines. We can work closely with your team to ensure that all images align with your brand's visual identity and marketing objectives."
  }
]

export default function EngagementPhotographyPage() {
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
        <title>Enagemnet Photography Services | Capture Studio</title>
        <meta name="description" content="Elevate your brand with our professional Engagement photography services. From product shots to corporate events, we deliver high-quality images that showcase your business." />
        <meta name="keywords" content="Engagement photography, product photography, corporate headshots, brand photography, business photography" />
        <link rel="canonical" href="https://www.capturestudio.com/all-servicesices/Engagement-photography" />
        <meta property="og:title" content="Engagement Photography Services | Capture Studio" />
        <meta property="og:description" content="Professional Engagement photography services to elevate your brand. From product shots to corporate events, we deliver high-quality images for your business." />
        <meta property="og:image" content="https://www.capturestudio.com/images/Engagement-photography-og.jpg" />
        <meta property="og:url" content="https://www.capturestudio.com/all-servicesices/Engagement-photography" />
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
                    Engagement Photography Services
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Elevate your brand with stunning visuals that capture the essence of your business and products.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="#packages">View Packages</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Expertise</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <ShoppingBag className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Product Photography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Showcase your products with high-quality, detailed images that highlight their best features and appeal to your target audience.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Building className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Corporate & Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Capture the essence of your company culture, team, and corporate events with professional photography that tells your brand&apos;s story.
                </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Users className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Lifestyle & Branding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Create authentic, engaging visuals that resonate with your audience and bring your brand&apos;s personality to life.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="packages" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Engagement Photography Packages</h2>
    <div className="grid gap-6 lg:grid-cols-2">
      {[
        {
          name: "Basic",
          price: "₹15,000",
          features: [
            "100 edited digital images",
            "30-minute video",
            "1 photographer",
            "1 videographer",
          ],
        },
        {
          name: "Custom",
          price: "Contact Us",
          features: [
            "Tailored image count",
            "Custom video length",
            "Flexible photographer/videographer options",
          ],
          custom: true, // Flag to add a contact button
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
              <Button className="w-full">Choose {pkg.name}</Button>
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
              <div className="grid gap-6 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We discuss your brand, objectives, and specific requirements to tailor our services to your needs.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We develop a detailed shot list, schedule, and creative direction to ensure a smooth and efficient shoot.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>3. Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Our team executes the photo shoot, paying attention to every detail to capture the perfect shots.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>4. Post-Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    We carefully select and edit the best images, ensuring they meet your brand standards and project goals.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Elevate Your Brand?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                Let&apos;s create stunning visuals that showcase your products and services in the best light. Contact us today to discuss your Engagement photography needs.
              </p>
              <Button asChild size="lg">
                <Link  href="/contact">Get a Custom Quote</Link>
              </Button>
            </div>
          </section>
        </main>
        <footer className="py-6 border-t">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm  text-muted-foreground">© 2024 Studio Pandav Visionrights reserved.</p>
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