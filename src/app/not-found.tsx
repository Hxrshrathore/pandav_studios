'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Camera, Sun, Moon, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 1000) // Simulating loading time

    return () => clearTimeout(timer)
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
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Camera className="h-6 w-6" />
          <span className="sr-only">Capture Studio</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md w-full space-y-8">
          <Image
            src="/images/404.png?height=200&width=200"
            alt="404 Illustration"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold tracking-tight">404 - Page Not Found</h1>
          <p className="text-xl text-muted-foreground">
            Oops! It seems the page you&apos;re looking for has vanished like a fleeting moment in time.
          </p>
          <div className="mt-8 space-y-4">
            <Button asChild className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              If you believe this is an error, please contact our support team.
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t">
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
        </div>
      </footer>
    </div>
  )
}