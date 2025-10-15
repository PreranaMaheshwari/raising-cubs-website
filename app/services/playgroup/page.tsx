"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, Calendar, Users, CheckCircle, Baby, Sparkles, Hand, Smile, Music, Blocks } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PlaygroupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-200 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-300 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                Ages 2-3 Years
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Playgroup <span className="text-accent">Program</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
                A gentle introduction to group learning through sensory play, exploration, and age-appropriate
                activities designed to build confidence and independence in your little one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 hover:scale-105 transition-transform text-accent-foreground"
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
              <div className="relative bg-gradient-to-br from-white to-green-50 rounded-3xl p-6 lg:p-8 hover:scale-105 transition-transform duration-300 shadow-lg">
                <img
                  src="/toddlers-playing-together-in-playgroup.jpg"
                  alt="Playgroup children playing"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 animate-bounce">
                  <Heart className="h-6 w-6" />
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
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <p className="text-muted-foreground">2-3 hours per day</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-green-600" />
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
                  <p className="text-muted-foreground">1:6 teacher ratio</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Development Areas */}
          <div className="space-y-6 mb-12">
            <div className="text-center space-y-4">
              <Badge variant="outline">Development Focus</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Key Development Areas</h2>
              <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Our playgroup program focuses on essential developmental milestones for toddlers.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-pink-50 to-pink-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center">
                  <Baby className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold">Sensory Exploration</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Tactile play activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Water and sand play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Texture exploration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Sensory bins</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <Hand className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Motor Skills</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Fine motor activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Gross motor play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Hand-eye coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Balance and movement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                  <Smile className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold">Social Interaction</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Parallel play introduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sharing and turn-taking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Group activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Friendship building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <Music className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold">Language Development</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Songs and rhymes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Simple storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Vocabulary building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Communication skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Creative Play</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Imaginative play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Simple art activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Role-play scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Creative expression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <Blocks className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold">Routine Building</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Daily structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Independence skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Self-care basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Transition support</span>
                  </li>
                </ul>
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
              Our gentle, predictable routine helps toddlers feel secure and confident.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-accent">9:00 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Welcome & Free Play</h3>
                <p className="text-sm text-muted-foreground">Gentle arrival and settling in with toys</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-accent">9:30 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Circle Time</h3>
                <p className="text-sm text-muted-foreground">Songs, rhymes, and simple group activities</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-accent">10:00 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Sensory Play</h3>
                <p className="text-sm text-muted-foreground">Hands-on exploration with various materials</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-accent">10:30 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Snack Time</h3>
                <p className="text-sm text-muted-foreground">Healthy snack and social interaction</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-accent">11:00 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Outdoor Play</h3>
                <p className="text-sm text-muted-foreground">Physical activities and nature exploration</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-semibold text-accent">11:30 AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Story & Goodbye</h3>
                <p className="text-sm text-muted-foreground">Calming story time and preparation for home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative bg-gradient-to-br from-accent/10 to-green-100 rounded-3xl p-6 lg:p-8 hover:scale-105 transition-transform duration-300">
                <img
                  src="/parent-and-teacher-talking-about-toddler.jpg"
                  alt="Parent partnership"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <Badge variant="outline">Parent Partnership</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Working Together</h2>
              <p className="text-muted-foreground">
                We believe in strong parent-teacher collaboration, especially during these formative years. We keep you
                informed and involved every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Daily Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive daily reports on your child's activities, meals, and milestones
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Open Communication</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular parent-teacher meetings and open-door policy for concerns
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Gradual Settling</h3>
                    <p className="text-sm text-muted-foreground">
                      Flexible settling-in period to ensure your child feels comfortable and secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-accent/10 to-green-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
              Start Your Child's Learning Journey
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty">
              Give your toddler the perfect introduction to group learning in a caring, nurturing environment designed
              just for them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 hover:scale-105 transition-transform text-accent-foreground"
              >
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
