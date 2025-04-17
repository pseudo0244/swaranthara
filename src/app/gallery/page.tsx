"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlayCircle, ArrowLeft } from "lucide-react"

// Define type for video object
type Video = {
  src: string
  thumbnail: string
}

// Sample video data with sources and thumbnails
const videoData: Video[] = [
  {
    src: "https://res.cloudinary.com/dbewukdt0/video/upload/v1744866184/WhatsApp_Video_2025-04-16_at_15.03.43_ioirbi.mp4",
    thumbnail: "/images/g1.png",
  },
  {
    src: "https://res.cloudinary.com/dbewukdt0/video/upload/v1744866172/WhatsApp_Video_2025-04-16_at_15.03.43_1_miiqlg.mp4",
    thumbnail: "/images/g2.png",
  },
  {
    src: "https://res.cloudinary.com/dbewukdt0/video/upload/v1744866172/WhatsApp_Video_2025-04-16_at_15.03.43_2_a18476.mp4",
    thumbnail: "/images/g3.png",
  },
]

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg2.jpg"
            alt="Music School Gallery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
          <div className="mb-6 w-24 h-24 relative">
            <Image
              src="/images/logobg.png"
              width={96}
              height={96}
              alt="Swaranthara Logo"
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our performances, classes, and musical journey
          </p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          {selectedVideo ? (
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" onClick={() => setSelectedVideo(null)} className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Gallery
              </Button>

              <div className="bg-black rounded-xl overflow-hidden shadow-xl">
                <video src={selectedVideo} controls className="w-full aspect-video" autoPlay>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold mb-6 md:mb-0">Our Collection</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoData.map((video, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-0 shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                    onClick={() => setSelectedVideo(video.src)}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={`Video ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <PlayCircle className="h-16 w-16 text-white" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#001f3f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Musical Community</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Experience the joy of music education at Swaranthara School of Music. Begin your musical journey with us
            today.
          </p>
          <Button size="lg" className="bg-white text-[#001f3f] hover:bg-white/90" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
