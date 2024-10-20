'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Camera, ChevronRight, Instagram, Facebook, Youtube, Sun, Moon, ArrowUp, ChevronLeft, MapPin, Phone, Mail, Award } from "lucide-react"
<<<<<<< HEAD
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast" // Import the toast hook

// Sample hero slides using WebP format for optimization
const heroSlides = [
  { image: 'https://cdn.apnaventure.in/Images/1.webp', alt: 'Landscape photography in Ranchi' },
  { image: 'https://cdn.apnaventure.in/Images/2.webp', alt: 'Portrait photography in Jharkhand' },
  { image: 'https://cdn.apnaventure.in/Images/3.webp', alt: 'Event photography for Ranchi weddings' },
]

const testimonials = [
  { name: "Alice Johnson", role: "Bride", quote: "Pandav Studio made our wedding day unforgettable. The photos are breathtaking!" },
  { name: "John Smith", role: "Business Owner", quote: "Their commercial photography significantly improved our brand image." },
=======
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"

const heroSlides = [
  { image: 'https://cdn.apnaventure.in/Images/1.jpg?height=600&width=1200', alt: 'Stunning landscape photography' },
  { image: 'https://cdn.apnaventure.in/Images/2.jpg', alt: 'Beautiful portrait photography' },
  { image: 'https://cdn.apnaventure.in/Images/3.jpg', alt: 'Captivating event photography' },
]

const testimonials = [
  { name: "Alice Johnson", role: "Bride", quote: "Capture Studio made our wedding day unforgettable. The photos are breathtaking!" },
  { name: "John Smith", role: "Business Owner", quote: "Their commercial photography has significantly improved our brand image." },
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
  { name: "Emily Davis", role: "Model", quote: "The portrait session was fun and the results exceeded my expectations." },
]

const services = [
  { 
    title: "Wedding Photography", 
<<<<<<< HEAD
    description: "Capture your special day with our professional wedding photography services in Ranchi and Jharkhand.", 
=======
    description: "Capture your special day with our professional wedding photography services.", 
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
    path: "/services/wedding-photography" 
  },
  { 
    title: "Portrait Photography", 
<<<<<<< HEAD
    description: "Showcase your personality with our expert portrait photography sessions.", 
=======
    description: "Showcase your personality with our expert portrait photography.", 
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
    path: "/services/portrait-photography" 
  },
  { 
    title: "Commercial Photography", 
<<<<<<< HEAD
    description: "Elevate your brand with high-quality commercial photography services.", 
=======
    description: "Elevate your brand with our high-quality commercial photography.", 
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
    path: "/services/commercial-photography" 
  },
]

<<<<<<< HEAD
const faqs = [
  { question: "What areas do you serve?", answer: "We primarily serve Ranchi and nearby areas, but we’re available for destination shoots across India." },
  { question: "How far in advance should I book?", answer: "For weddings, we recommend booking 6-12 months in advance. For other sessions, 2-4 weeks is usually sufficient." },
  { question: "Do you offer prints and albums?", answer: "Yes, we offer high-quality prints and custom-designed albums for all our photography services." },
=======

const faqs = [
  { question: "What areas do you serve?", answer: "We primarily serve the greater metropolitan area, but we're available for destination shoots as well." },
  { question: "How far in advance should I book?", answer: "For weddings, we recommend booking 6-12 months in advance. For other sessions, 2-4 weeks is usually sufficient." },
  { question: "Do you offer prints and albums?", answer: "Yes, we offer a variety of high-quality prints and custom-designed albums for all our photography services." },
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
<<<<<<< HEAD
  const { toast } = useToast(); // Get the toast function from the hook
=======
  const [status, setStatus] = useState('');
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d

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
<<<<<<< HEAD
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
=======
      const response = await fetch('/sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
      });

      const result = await response.json();
      if (result.success) {
<<<<<<< HEAD
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

=======
        setStatus("Email sent successfully!");
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch {
      setStatus('Failed to send email.');
    }
  };


>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
<<<<<<< HEAD
        <Link className="flex items-center justify-center" href="/">
                <Image
                src="/images/logo.png" // Replace this with the path to your logo file
                alt="Pandav Studios"
                width={90} // This ensures the image matches the previous icon size
                height={24} // Adjust these values to match the size of the Camera icon (h-6 w-6 is 24px)
                />
            <span className="sr-only">Pandav Studios</span>
            </Link>
=======
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6" />
          <span className="sr-only">Capture Studio</span>
        </Link>
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/portfolio">
            Portfolio
          </Link>
<<<<<<< HEAD
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
=======
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="contact">
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
<<<<<<< HEAD
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
=======
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
<<<<<<< HEAD
                loading={index === 0 ? 'eager' : 'lazy'}
=======
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
<<<<<<< HEAD
                  Professional wedding, portrait, and event photography services in Ranchi.
=======
                  Professional wedding, portrait, and commercial photography services.
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
                </p>
                <div className="space-x-4">
                  <Button size="lg">
                    <a href="/portfolio">Explore Portfolio</a>
                  </Button>
                  <Button size="lg" variant="outline">
                    <a href="/book-session">Book a Session</a>
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

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
<<<<<<< HEAD
                  src="https://cdn.apnaventure.in/Images/crew.webp?height=400&width=600"
                  alt="Our photography team in Ranchi"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  loading="lazy"
=======
                  src="https://cdn.apnaventure.in/Images/crew.jpg?height=400&width=600"
                  alt="Our team"
                  width={600}
                  height={400}
                  className="rounded-lg"
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
        </section>

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
<<<<<<< HEAD
                  src={`https://cdn.apnaventure.in/Images/${i}.webp`}
                  alt={`Portfolio image ${i} from our Ranchi photoshoots`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                  loading="lazy"
=======
                  src={`https://cdn.apnaventure.in/Images/${i}.jpg`}
                  alt={`Portfolio image ${i}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                  style={{ width: '100%', height: '100%' }}
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
<<<<<<< HEAD
              <a href="clinet-testimonials" className="no-underline">
                <Button variant="outline">Read More Reviews</Button>
              </a>
=======
              <Button variant="outline">Read More Reviews</Button>
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing and Packages</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {['Essential', 'Premium', 'Luxury'].map((pkg, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{pkg} Package</CardTitle>
                  </CardHeader>
                  <CardContent>
<<<<<<< HEAD
                    <p className="text-2xl font-bold mb-4">Starting at ₹{(index + 1) * 5000}</p>
=======
                    <p className="text-2xl font-bold mb-4">Starting at ${(index + 1) * 500}</p>
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
                    <ul className="list-disc list-inside">
                      <li>{(index + 1) * 2} hours of coverage</li>
                      <li>{(index + 1) * 50}+ edited photos</li>
                      <li>Online gallery</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get a Quote</Button>
                  </CardFooter>
                </Card>
              ))}
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
            <Button size="lg" variant="secondary">Book Now</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
<<<<<<< HEAD
                <form onSubmit={handleSubmit} className="space-y-4">
=======
                <form onSubmit={handleSubmit}>
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
                  <Input name="name" placeholder="Your Name" required onChange={handleChange} />
                  <Input name="email" placeholder="Your Email" type="email" required onChange={handleChange} />
                  <Textarea name="message" placeholder="Your Message" required onChange={handleChange} />
                  <Button type="submit">Send Message</Button>
                </form>
<<<<<<< HEAD
=======

                {status && <p className="mt-4 text-center">{status}</p>}
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
              <Link href="#" className="text-foreground hover:text-primary">
                <Instagram className="h-8 w-8" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary">
                <Facebook className="h-8 w-8" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary">
                <Youtube className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Awards and Recognition</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <Award className="h-8 w-8 mr-2 text-primary" />
                  <span>Best Photography Studio {2020 + i}</span>
                </div>
              ))}
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
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Portfolio</Link></li>
                <li><Link href="#" className="hover:underline">Services</Link></li>
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Wedding Photography</Link></li>
                <li><Link href="#" className="hover:underline">Portrait Photography</Link></li>
                <li><Link href="#" className="hover:underline">Commercial Photography</Link></li>
                <li><Link href="#" className="hover:underline">Event Photography</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
<<<<<<< HEAD
            © 2024 Pandav Studios Photography. All rights reserved.
=======
            © 2024 Capture Studio Photography. All rights reserved.
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
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
