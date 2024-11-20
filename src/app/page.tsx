'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Instagram, Facebook, Youtube, Sun, Moon, ArrowUp, ChevronLeft, MapPin, Phone, Mail } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast" // Import the toast hook

// Sample hero slides using WebP format for optimization
const heroSlides = [
  { image: '/images/homepage/1.webp', alt: 'Landscape photography in Ranchi' },
  { image: '/images/homepage/2.webp', alt: 'Portrait photography in Jharkhand' },
  { image: '/images/homepage/3.webp', alt: 'Event photography for Ranchi weddings' },
]

const testimonials = [
  { name: "Reeya Majhi", role: "Client", quote: "The way you capture the beautiful moments of couple's special day is really mesmerizing, everything is perfect and as a viewer I Love your work ." },
  { name: "Ritu Raj ", role: "Client", quote: "I hired them for my Sister's wedding and they did an exceptional service. The photography, production quality, people all were amazing. " },
  { name: "Shivani pawar", role: "Client", quote: "Photograph are very impressive and attractive quality are very clear as photos I am really happy for that ♥️" },
]

const services = [
  { 
    title: "Wedding Photography", 
    description: "Capture your special day with our professional wedding photography services in Ranchi and Jharkhand.", 
    path: "/all-services/wedding-photography" 
  },
  { 
    title: "Portrait Photography", 
    description: "Showcase your personality with our expert portrait photography sessions.", 
    path: "/all-services/portrait-photography" 
  },
  { 
    title: "Engagement Photography", 
    description: "Elevate your brand with high-quality Engagement photography services.", 
    path: "/all-services/engagement-photography" 
  },
]

const faqs = [
  { question: "What areas do you serve?", answer: "We primarily serve Ranchi and nearby areas, but we’re available for destination shoots across India." },
  { question: "How far in advance should I book?", answer: "For weddings, we recommend booking 6-12 months in advance. For other sessions, 2-4 weeks is usually sufficient." },
  { question: "Do you offer prints and albums?", answer: "Yes, we offer high-quality prints and custom-designed albums for all our photography services." },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast(); // Get the toast function from the hook

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 2000)

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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Request sent!",
          description: "We will get back to you soon.",
        });
      } else {
        toast({
          title: "Error",
          description: `Error: ${result.error}`,
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send email.",
      });
    }
  };

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
                alt="Pandav Studios LOGO"
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
        <section className="relative w-full h-[calc(100vh-3.5rem)] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                  Capture Every Moment
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Professional wedding, portrait, and event photography services in Ranchi.
                </p>
                <div className="space-x-4">
                  <Button size="lg">
                    <a href="/portfolio">Explore Portfolio</a>
                  </Button>
                  <Button size="lg" variant="outline">
                    <a href="/contact">Book a Session</a>
                  </Button>
                </div>

              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 space-x-2">
            <Button size="icon" variant="outline" onClick={handlePrevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={handleNextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/crew.webp?height=400&width=600"
                  alt="Our photography team in Ranchi"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">
                  At Pandav Studio, we&apos;re passionate about preserving your most precious moments through the art of photography. With over a decade of experience, our team of skilled photographers brings creativity and technical expertise to every shoot.
                </p>
                <Button>Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={service.path}>
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/all-services">
                <Button>View All Services</Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Portfolio Showcase</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/images/portfolio/${i}.JPG`}
                  alt={`Portfolio image ${i} from our Ranchi photoshoots`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/portfolio">
                <Button>Explore Full Portfolio</Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <p className="text-lg text-center mb-4">&quot;{testimonial.quote}&quot;</p>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-center mt-8">
              <a href="clinet-testimonials" className="no-underline">
                <Button variant="outline">Read More Reviews</Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Pricing and Packages</h2>
    <div className="grid gap-8 md:grid-cols-4">
      {[
        { name: "Essential", price: 4000, hours: 2, photos: 50 },
        { name: "Premium", price: 7000, hours: 4, photos: 100 },
        { name: "Luxury", price: 9000, hours: 6, photos: 150 },
      ].map((pkg, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{pkg.name} Package</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-4">Starting at ₹{pkg.price}</p>
            <ul className="list-disc list-inside">
              <li>{pkg.hours} hours of coverage</li>
              <li>{pkg.photos}+ edited photos</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full"><a href="/contact">Get a Quote</a></Button>
          </CardFooter>
        </Card>
      ))}
      <Card>
        <CardHeader>
          <CardTitle>Custom Package</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-4">Tailored to Your Needs</p>
          <ul className="list-disc list-inside">
            <li>Custom hours of coverage</li>
            <li>Custom number of edited photos</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>


        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Capture Your Moments?</h2>
            <p className="text-xl mb-8">Let&apos;s create beautiful memories together.</p>
            <Button size="lg" variant="secondary"><a href="/contact">Book a Session</a></Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Your Name" required onChange={handleChange} />
                <Input name="email" placeholder="Your Email" type="email" required onChange={handleChange} />
                <Textarea name="message" placeholder="Your Message" required onChange={handleChange} />
                <Button type="submit">Send Message</Button>
              </form>
            </div>

              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center p-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <p>VIP Market, Ratu Rd, near SBI Bank, Indrapuri Colony, Ranchi</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Phone className="h-5 w-5 mr-2" />
                    <p><a href="tel:+919334439313">+91 93344 39313</a></p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Mail className="h-5 w-5 mr-2" />
                    <p><a href="mailto:info@pandav.studio">info@pandav.studio</a></p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <Link href="https://www.instagram.com/studio_pandav_vision/" className="text-foreground hover:text-primary">
                <Instagram className="h-8 w-8" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61550744053524" className="text-foreground hover:text-primary">
                <Facebook className="h-8 w-8" />
              </Link>
              <Link href="https://www.youtube.com/@studiopandavvision" className="text-foreground hover:text-primary">
                <Youtube className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </section>

        
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                <li><Link href="/all-services" className="hover:underline">Services</Link></li>
                <li><Link href="/about-us" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/all-services/wedding-photography" className="hover:underline">Wedding Photography</Link></li>
                <li><Link href="/all-services/portrait-photography" className="hover:underline">Portrait Photography</Link></li>
                <li><Link href="/all-services/Engagement-photography" className="hover:underline">Engagement Photography</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="terms-of-service" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/studio_pandav_vision/" className="text-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61550744053524" className="text-foreground hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://www.youtube.com/@studiopandavvision" className="text-foreground hover:text-primary">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 Pandav Studios Photography. All rights reserved.
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
