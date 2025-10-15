"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <img src="/raising-cubs-logo.png" alt="Raising Cubs Logo" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              Nurturing young minds through play-based learning in a safe, caring environment.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Programs</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/services/preschool"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Preschool (Ages 3-5)
              </Link>
              <Link
                href="/services/playgroup"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Playgroup (Ages 2-3)
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>+91 98765 43210</div>
              <div>hello@raisingcubs.in</div>
              <div>
                123 Garden Street
                <br />
                Mumbai, Maharashtra
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Raising Cubs Kindergarten. All rights reserved.
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
