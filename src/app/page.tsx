"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, ArrowRight, Phone, MapPin } from 'lucide-react'
import { SocialProof } from "@/components/social-proof"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg2.jpg"
            alt="Music School Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-6 w-40 h-40 relative">
            <Image
              src="/images/logobg.png"
              width={160}
              height={160}
              alt="Swaranthara Logo"
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Swaranthara School of Music
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Where the rhythms of tradition meet the melodies of modernity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md">
              <Link href="/contact" className="flex items-center">
                Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-serif max-w-4xl mx-auto">
            Founded with a passion for nurturing musical talent and an unwavering commitment to excellence, we strive to
            create a vibrant community of musicians and music lovers of all ages.
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                At Swaranthara, we envision a world where music transcends boundaries and connects hearts. Our mission
                is to provide a nurturing environment that encourages creativity,fosters collaboration, and instills a
                lifelong appreciation for music. We are dedicated to empowering students to express themselves through
                the universal language of music.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re a beginner or looking to refine advanced skills, our comprehensive programs cater to
                all ages and skill levels.
              </p>
              <Button className="bg-navy hover:bg-navy/90 text-white" size="lg" asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/vision.png" alt="Students learning music" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Trailer Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Experience Swaranthara</h2>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls id="trailerVideo">
                <source src="/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 right-4 z-10">
                
              </div>
            </div>
            <p className="text-white/80 text-center mt-4">
              Take a glimpse into the world of music at Swaranthara School of Music
            </p>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our curriculum is designed to cater to a diverse range of musical interests, ensuring that every student
              finds their unique voice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-md">
              <div className="relative h-48">
                <Image src="/images/instrument.jpg" alt="Piano Lessons" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Instrumental Training</h3>
                <p className="text-muted-foreground">
                  Lessons in instruments such as the piano, keyboard, vocals and guitar and more.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md">
              <div className="relative h-48">
                <Image src="/images/vocal.jpeg" alt="Guitar Lessons" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Vocal Coaching</h3>
                <p className="text-muted-foreground">
                  From classical to contemporary styles, our vocal programs cater to all genres.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md">
              <div className="relative h-48">
                <Image src="/images/theory.jpg" alt="Vocal Training" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Music Theory</h3>
                <p className="text-muted-foreground">
                  Understanding the foundations of music enables our students to compose, arrange, and appreciate music
                  at a deeper level.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/explore">
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SocialProof />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#001f3f] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-xl">
                Have questions about our programs? Reach out to us today and start your musical journey.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span className="text-lg">+91 8105575750</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">No 502, 1st floor, 16th crossNagasandra post, Bangalore-560073</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button variant="secondary" size="lg" className="rounded-md">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <Link href="https://wa.me/+918105575750">WhatsApp Us</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-md"
                  asChild
                >
                  <Link href="/contact">Contact Page</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/map.png" alt="Music school building" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
