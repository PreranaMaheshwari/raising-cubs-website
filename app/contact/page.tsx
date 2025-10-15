"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Users } from "lucide-react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    childAge: "",
    program: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              We'd love to meet you and your little cub! Reach out to schedule a visit, ask questions, or learn more
              about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                  <a href="tel:+919876543210" className="text-primary hover:underline font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  <a href="mailto:hello@raisingcubs.in" className="text-accent hover:underline font-medium">
                    hello@raisingcubs.in
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Garden Street
                    <br />
                    Mumbai, Maharashtra
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat-Sun: Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours. We look forward to hearing from
                    you!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="childAge" className="text-sm font-medium">
                          Child's Age
                        </label>
                        <Input
                          id="childAge"
                          name="childAge"
                          placeholder="e.g., 3 years"
                          value={formData.childAge}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="program" className="text-sm font-medium">
                          Program Interest
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a program</option>
                          <option value="playgroup">Playgroup (Ages 2-3)</option>
                          <option value="preschool">Preschool (Ages 3-5)</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your child and any questions you have..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-2 overflow-hidden">
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-green-100 to-blue-100">
                  <img src="/kindergarten-location-map.jpg" alt="Location map" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-center">123 Garden Street, Mumbai</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Visit Information */}
              <Card className="border-2 bg-gradient-to-br from-orange-50 to-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Schedule a Visit
                  </CardTitle>
                  <CardDescription>Come see our facilities and meet our team!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We encourage all prospective families to visit our kindergarten. During your visit, you'll:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tour our safe, child-friendly facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Meet our qualified teachers and staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Learn about our curriculum and daily activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ask questions and discuss your child's needs</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Tour
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border-2 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    Quick Questions?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What are your fees?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our fees vary by program. Contact us for detailed pricing information.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Do you offer trial days?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We offer a settling-in period to help your child adjust comfortably.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What is your teacher-to-child ratio?</h4>
                    <p className="text-sm text-muted-foreground">
                      We maintain 1:6 for playgroup and 1:8 for preschool to ensure personalized attention.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="outline">Why Visit Us</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">See the Difference Yourself</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              A visit to Raising Cubs will help you understand why parents trust us with their little ones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold">Meet Our Team</h3>
              <p className="text-sm text-muted-foreground">
                Get to know our caring, qualified teachers who will nurture your child's growth.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold">Tour Our Facilities</h3>
              <p className="text-sm text-muted-foreground">
                See our safe, clean, and stimulating learning environments designed for young children.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold">Ask Questions</h3>
              <p className="text-sm text-muted-foreground">
                Get all your questions answered and discuss your child's specific needs with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Ready to Get Started?</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty">
              Take the first step in your child's learning journey. We're here to answer all your questions and help you
              find the perfect program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
