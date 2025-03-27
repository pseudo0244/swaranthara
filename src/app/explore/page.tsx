import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle, ArrowRight } from "lucide-react"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function ExplorePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/explorebg.jpg"
            alt="Explore Music Content"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Explore Our Music Content</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover masterclasses, performances, and tutorials from our talented students and faculty
          </p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Videos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our most popular content showcasing exceptional talent and educational resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-video rounded-xl overflow-hidden">
    <YouTubeEmbed videoId="b6VuOLAtFYM" title="V1" />
  </div>
  <div className="aspect-video rounded-xl overflow-hidden">
    <YouTubeEmbed videoId="fU1_1uPLUNk" title="V2" />
  </div>
  <div className="aspect-video rounded-xl overflow-hidden">
    <YouTubeEmbed videoId="7CWz6lzFEpw" title="V3" />
  </div>
  <div className="aspect-video rounded-xl overflow-hidden">
    <YouTubeEmbed videoId="vnbjXPmqPBs" title="V4" />
  </div>
            
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Music Community?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Enroll today and start your journey towards musical excellence with our expert instructors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/gallery">View Our Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

