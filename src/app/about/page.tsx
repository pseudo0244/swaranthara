import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/abouthero.jpg"
            alt="About Our Music School"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Story & Legacy</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover the journey that made us one of the most respected music schools in the country
          </p>
        </div>
      </section>

      {/* School History & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/vision.png"
                alt="Music school history"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
              <p className="text-lg text-muted-foreground">
              Welcome to Swaranthara School of Music,
where the rhythms of tradition meet the
melodies of modernity. Founded with a
passion for nurturing musical talent and an
unwavering commitment to excellence, we
strive to create a vibrant community of
musicians and music lovers of all ages.
              </p>
              <p className="text-lg text-muted-foreground">
              At Swaranthara, we envision a world where
music transcends boundaries and connects
hearts. Our mission is to provide a nurturing

environment that encourages creativity,
fosters collaboration, and instills a lifelong
appreciation for music. We are dedicated to
empowering students to express themselves
through the universal language of music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at our music school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from instruction to performances, constantly pushing the
                boundaries of what's possible.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We believe in the power of community to inspire and support musical growth, creating an environment
                where everyone belongs.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new teaching methods, technologies, and musical styles, ensuring our students receive a
                relevant and forward-thinking education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Our Founder</h2>
              <p className="text-lg text-muted-foreground">
              I am Umesh R, a keyboard and piano instructor teaching for the last 13 years. I have worked in various institutions like Indian Music Experience, Brigade Millennium JP Nagar, Reynolds Music Rajajinagar, Art of Music, and Solomon School of Music as a keyboard and piano teacher.
              </p>
              <p className="text-lg text-muted-foreground">
              I have also worked as an assistant music programmer and composer for Shri Shadrach Solomon and Dr. Hamsalekha.

I collaborate with the Kannada Kalalaya dance team as a music composer and programmer for Mysore Dasara Event 2024, Hampi Utsava 2025, Sri Kshetra Sigandhur, Kamalashile Temple, Kundhapur, etc.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/founder2.jpeg"
                alt="Maria Johnson, Founder"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Musical Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our community of passionate musicians and discover the joy of learning music in a supportive
            environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/explore">
                Explore Our Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

