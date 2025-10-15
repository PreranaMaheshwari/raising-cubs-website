"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Shield, BookOpen, Sparkles, Target, TreePine, GraduationCap, Clock } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
              About Raising Cubs
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              Where Every Child is <span className="text-primary">Treasured</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              We're more than just a kindergarten. We're a family dedicated to nurturing young minds through love, play,
              and discovery in a safe, enriching environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 rounded-3xl p-6 lg:p-8 hover:scale-105 transition-transform duration-300">
                <img
                  src="/happy-children-learning-in-colorful-kindergarten-c.jpg"
                  alt="Children learning together"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 animate-bounce">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Badge variant="outline">Our Story</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Founded on Love and Learning</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Raising Cubs was born from a simple belief: every child deserves a nurturing environment where they
                  can grow, explore, and discover their unique potential. Founded in 2019, we've created a space where
                  children feel safe, loved, and excited to learn.
                </p>
                <p>
                  Our name reflects our philosophy - just as cubs in nature are carefully nurtured and protected while
                  they learn essential life skills, we provide the same loving care and guidance to help your little
                  ones thrive.
                </p>
                <p>
                  With a team of passionate educators and a curriculum designed around play-based learning, we've helped
                  over 200 children develop confidence, creativity, and a lifelong love for learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="outline">Our Values</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">What We Stand For</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our core values guide everything we do, from curriculum design to daily interactions with children.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Love & Care</h3>
                <p className="text-sm text-muted-foreground">
                  Every child is treated with warmth, respect, and individual attention, creating a home away from home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest safety standards with secure facilities, trained staff, and comprehensive
                  safety protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Creativity</h3>
                <p className="text-sm text-muted-foreground">
                  We encourage imagination and creative expression through art, music, drama, and open-ended play.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Holistic Development</h3>
                <p className="text-sm text-muted-foreground">
                  We focus on cognitive, physical, social, and emotional growth to develop well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold">Nature Connection</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in connecting children with nature through outdoor learning and environmental awareness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  We build strong partnerships with families and create a supportive community for children to thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="outline">Why Choose Us</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">What Makes Us Special</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold">Qualified Teachers</h3>
              <p className="text-sm text-muted-foreground">
                All our educators are certified in early childhood education with years of experience.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold">Small Class Sizes</h3>
              <p className="text-sm text-muted-foreground">
                We maintain a 1:8 teacher-to-student ratio for personalized attention.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold">Award-Winning Curriculum</h3>
              <p className="text-sm text-muted-foreground">
                Our play-based curriculum is recognized for excellence in early childhood education.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold">Flexible Timings</h3>
              <p className="text-sm text-muted-foreground">
                We offer morning and afternoon sessions to accommodate working parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center space-y-2 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-bold text-accent">200+</div>
              <div className="text-sm text-muted-foreground">Happy Children</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-muted-foreground">Qualified Teachers</div>
            </div>
            <div className="text-center space-y-2 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:scale-105 transition-transform">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Ready to Join Our Cubs Family?</h2>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty">
              Schedule a visit to see our facilities, meet our teachers, and discover why parents trust us with their
              little ones.
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
                <Link href="/services">View Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
