"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/raising-cubs-logo.png" alt="Raising Cubs Logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/") && pathname === "/" ? "text-primary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/services") ? "text-primary" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/contact") ? "text-primary" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90">
            <Link href="/contact">Enroll Now</Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive("/") && pathname === "/" ? "text-primary" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive("/services") ? "text-primary" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
