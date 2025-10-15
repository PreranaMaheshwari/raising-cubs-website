"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  Star,
  Palette,
  Music,
  Globe,
  Brain,
  Heart,
  Target,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PreschoolPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-300 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                Ages 3-5 Years
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Preschool <span className="text-primary">Program</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
                A comprehensive program that prepares children for formal schooling through structured learning
                activities, creative play, and social development in a nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
                >
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform bg-transparent"
                >
                  <Link href="/services">View All Programs</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 lg:p-8 hover:scale-105 transition-transform duration-300 shadow-lg">
                <img
                  src="/happy-preschool-children-learning-in-classroom.jpg"
                  alt="Preschool children learning"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 animate-bounce">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <p className="text-muted-foreground">3-4 hours per day</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Schedule</h3>
                  <p className="text-muted-foreground">Monday to Friday</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Class Size</h3>
                  <p className="text-muted-foreground">1:8 teacher ratio</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Curriculum Areas */}
          <div className="space-y-6 mb-12">
            <div className="text-center space-y-4">
              <Badge variant="outline">Curriculum</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Learning Areas</h2>
              <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Our preschool curriculum covers six key developmental areas to ensure holistic growth.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Language & Literacy</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Phonics and letter recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Vocabulary building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Story comprehension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Pre-writing skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Mathematics</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Number recognition (1-20)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Counting and basic operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Shapes and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Measurement concepts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold">Science & Discovery</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Nature exploration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Simple experiments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Environmental awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Observation skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <Palette className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold">Creative Arts</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Painting and drawing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Craft activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Drama and role-play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Creative expression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <Music className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold">Music & Movement</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Singing and rhymes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Dance and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Musical instruments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Rhythm development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-pink-50 to-pink-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Social & Emotional</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Sharing and cooperation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Emotional regulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Friendship building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span>Conflict resolution</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="outline">Daily Routine</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">A Typical Day</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our structured yet flexible schedule ensures a balanced mix of learning, play, and rest.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-primary">9:00 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Welcome & Circle Time</h3>
                <p className="text-sm text-muted-foreground">Greeting, songs, and daily calendar activities</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-primary">9:30 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Learning Centers</h3>
                <p className="text-sm text-muted-foreground">Literacy, math, and hands-on activities</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-primary">10:30 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Snack & Story Time</h3>
                <p className="text-sm text-muted-foreground">Healthy snack followed by interactive storytelling</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-primary">11:00 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Outdoor Play</h3>
                <p className="text-sm text-muted-foreground">Physical activities and nature exploration</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-primary">11:45 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Creative Arts</h3>
                <p className="text-sm text-muted-foreground">Art, music, or drama activities</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-primary">12:30 PM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Closing Circle & Goodbye</h3>
                <p className="text-sm text-muted-foreground">Review of the day and preparation for home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Readiness */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">School Readiness</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Preparing for Primary School</h2>
              <p className="text-muted-foreground">
                Our preschool program is specifically designed to ensure children are fully prepared for the transition
                to primary school, both academically and emotionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Academic Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      Strong literacy and numeracy skills aligned with primary school expectations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Skills</h3>
                    <p className="text-sm text-muted-foreground">
                      Ability to work in groups, follow instructions, and interact positively with peers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Independence</h3>
                    <p className="text-sm text-muted-foreground">
                      Self-care skills, confidence, and ability to manage classroom routines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 lg:p-8 hover:scale-105 transition-transform duration-300">
                <img
                  src="/children-ready-for-school-with-backpacks.jpg"
                  alt="School readiness"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Give Your Child the Best Start</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty">
              Join our preschool program and watch your child develop the skills, confidence, and love for learning that
              will last a lifetime.
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
                <Link href="/services">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
