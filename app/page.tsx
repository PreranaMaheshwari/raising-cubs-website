"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Heart, Users, BookOpen, Palette, Music, TreePine, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RaisingCubsLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm animate-pulse">
                  Ages 2-6 Years
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Where Little <span className="text-primary">Cubs</span> Grow with Love
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
                  Nurturing young minds through play-based learning in a safe, caring environment. Join our family where
                  every child is treasured like a precious cub.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
                >
                  <Link href="/contact">Schedule a Visit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Happy Families</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 rounded-3xl p-6 lg:p-12 hover:scale-105 transition-transform duration-300">
                <img
                  src="/playful-tiger-and-leopard-cubs-sitting-on-tree-bra.png"
                  alt="Tiger and leopard cubs playing on tree branches"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 animate-bounce">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-full p-3">
                  <TreePine className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline">Our Story</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
                  A Safe Haven for Growing Minds
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground text-pretty">
                  At Raising Cubs, we believe every child is unique and precious. Our experienced educators create a
                  nurturing environment where children develop confidence, creativity, and a love for learning.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-2 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-xl lg:text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="space-y-2 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-xl lg:text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Qualified Teachers</div>
                </div>
                <div className="space-y-2 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-xl lg:text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Happy Children</div>
                </div>
                <div className="space-y-2 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-xl lg:text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Safety Focus</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-4 lg:p-6">
                <img
                  src="/kindergarten-classroom-with-children-playing-and-l.png"
                  alt="Children learning in a bright kindergarten classroom"
                  className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="outline">Our Programs</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Comprehensive Learning Programs</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              We offer age-appropriate programs designed to foster holistic development through play, exploration, and
              structured learning activities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Preschool Program</CardTitle>
                <CardDescription>Ages 3-5 years</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Structured learning activities focusing on literacy, numeracy, and social skills development in a fun,
                  engaging environment.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Early literacy & numeracy</li>
                  <li>• Social skill development</li>
                  <li>• Creative expression</li>
                  <li>• School readiness</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Playgroup</CardTitle>
                <CardDescription>Ages 2-3 years</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Gentle introduction to group activities and social interaction through sensory play and exploration.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Sensory exploration</li>
                  <li>• Motor skill development</li>
                  <li>• Social interaction</li>
                  <li>• Routine building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Creative Arts</CardTitle>
                <CardDescription>All ages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Encouraging creativity through art, music, dance, and dramatic play to develop imagination and
                  self-expression.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Art & craft activities</li>
                  <li>• Music & movement</li>
                  <li>• Drama & storytelling</li>
                  <li>• Creative thinking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-200 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Outdoor Learning</CardTitle>
                <CardDescription>Nature exploration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Connecting with nature through garden activities, outdoor play, and environmental awareness programs.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Garden activities</li>
                  <li>• Nature walks</li>
                  <li>• Environmental awareness</li>
                  <li>• Physical development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Music & Movement</CardTitle>
                <CardDescription>Rhythm & coordination</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Developing rhythm, coordination, and musical appreciation through singing, dancing, and instrument
                  exploration.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Singing & rhymes</li>
                  <li>• Dance & movement</li>
                  <li>• Musical instruments</li>
                  <li>• Rhythm development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Social Skills</CardTitle>
                <CardDescription>Building friendships</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Teaching cooperation, sharing, empathy, and communication skills through group activities and guided
                  interactions.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Cooperation skills</li>
                  <li>• Emotional intelligence</li>
                  <li>• Communication</li>
                  <li>• Conflict resolution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline">Parent Reviews</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Parents Say About Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Raising Cubs has been a blessing for our family. My daughter loves going to school every day and has
                  developed so much confidence. The teachers are incredibly caring."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">P</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Priya Sharma</div>
                    <div className="text-xs text-muted-foreground">Parent of Aarav (4 years)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The outdoor learning program is fantastic! My son has learned so much about nature and has become
                  more curious about the world around him."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">R</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Rajesh Kumar</div>
                    <div className="text-xs text-muted-foreground">Parent of Arjun (5 years)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The creative arts program has brought out my daughter's artistic side. She comes home excited to show
                  us her paintings and tells us stories about her day."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">S</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Sunita Patel</div>
                    <div className="text-xs text-muted-foreground">Parent of Kavya (3 years)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Get in Touch</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
                  Ready to Join Our Cubs Family?
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground text-pretty">
                  We'd love to meet you and your little cub! Schedule a visit to see our facilities and meet our caring
                  teachers.
                </p>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">hello@raisingcubs.in</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-sm text-muted-foreground">
                      123 Garden Street, Green Valley
                      <br />
                      Mumbai, Maharashtra 400001
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="childAge" className="text-sm font-medium">
                    Child's Age
                  </label>
                  <Input id="childAge" placeholder="Enter your child's age" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your child and any questions you have..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
