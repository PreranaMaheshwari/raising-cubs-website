"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Heart,
  Palette,
  Music,
  TreePine,
  Users,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
              Our Programs
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Comprehensive <span className="text-primary">Learning Programs</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              Age-appropriate programs designed to foster holistic development through play, exploration, and structured
              learning activities tailored to each child's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Preschool Program */}
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Preschool Program</CardTitle>
                <CardDescription className="text-base">Ages 3-5 years</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Our comprehensive preschool program prepares children for formal schooling through structured learning
                  activities that focus on literacy, numeracy, and essential social skills in a fun, engaging
                  environment.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Early literacy and numeracy development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Social and emotional skill building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Creative expression through art and music</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>School readiness preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Physical development activities</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <div className="font-medium">3-4 hours/day</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Schedule</span>
                    </div>
                    <div className="font-medium">Mon-Fri</div>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
                  <Link href="/services/preschool">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Playgroup Program */}
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Playgroup Program</CardTitle>
                <CardDescription className="text-base">Ages 2-3 years</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  A gentle introduction to group activities and social interaction through sensory play, exploration,
                  and age-appropriate activities designed to build confidence and independence.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Sensory exploration and discovery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Fine and gross motor skill development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Early social interaction skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Routine building and independence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Parent-teacher collaboration</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <div className="font-medium">2-3 hours/day</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Schedule</span>
                    </div>
                    <div className="font-medium">Mon-Fri</div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 hover:scale-105 transition-transform text-accent-foreground"
                >
                  <Link href="/services/playgroup">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Programs */}
          <div className="space-y-6 mb-12">
            <div className="text-center space-y-4">
              <Badge variant="outline">Enrichment Programs</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
                Additional Learning Opportunities
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Complement your child's core program with our specialized enrichment activities.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  Encouraging creativity through art, craft, and hands-on activities.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Painting & drawing</li>
                  <li>• Craft activities</li>
                  <li>• Clay modeling</li>
                  <li>• Creative expression</li>
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
                  Connecting with nature through garden activities and outdoor play.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
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
                  Developing rhythm and coordination through music and dance.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
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
                  Teaching cooperation, sharing, and communication skills.
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
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

      {/* What's Included Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="outline">What's Included</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Every Program Includes</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Nutritious Meals</h3>
                <p className="text-sm text-muted-foreground">Healthy snacks and meals prepared fresh daily</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Learning Materials</h3>
                <p className="text-sm text-muted-foreground">All books, supplies, and educational materials</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Progress Reports</h3>
                <p className="text-sm text-muted-foreground">Regular updates on your child's development</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Parent Workshops</h3>
                <p className="text-sm text-muted-foreground">Monthly sessions on child development topics</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Field Trips</h3>
                <p className="text-sm text-muted-foreground">Educational outings and experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Safety & Security</h3>
                <p className="text-sm text-muted-foreground">CCTV monitoring and secure facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
              Find the Perfect Program for Your Child
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty">
              Not sure which program is right for your little one? Schedule a visit and our team will help you choose
              the best fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
