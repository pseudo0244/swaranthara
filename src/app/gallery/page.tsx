"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlayCircle, ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"

type Media = {
  type: "video" | "image"
  src: string
  thumbnail?: string // Only for video
}

const mediaData: Media[] = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dbewukdt0/video/upload/v1744866184/WhatsApp_Video_2025-04-16_at_15.03.43_ioirbi.mp4",
    thumbnail: "/images/g1.png",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dbewukdt0/video/upload/v1744866172/WhatsApp_Video_2025-04-16_at_15.03.43_1_miiqlg.mp4",
    thumbnail: "/images/g2.png",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dbewukdt0/video/upload/v1744866172/WhatsApp_Video_2025-04-16_at_15.03.43_2_a18476.mp4",
    thumbnail: "/images/g3.png",
  },
  {
    type: "image",
    src: "/images/1.jpeg",
  },
  {
    type: "image",
    src: "/images/2.jpeg",
  },
  {
    type: "image",
    src: "/images/3.jpeg",
  },
  {
    type: "image",
    src: "/images/4.jpeg",
  },
]

export default function GalleryPage() {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null)

  const selectedMedia = selectedMediaIndex !== null ? mediaData[selectedMediaIndex] : null

  const goToPrevious = () => {
    if (selectedMediaIndex !== null && selectedMediaIndex > 0) {
      setSelectedMediaIndex(selectedMediaIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedMediaIndex !== null && selectedMediaIndex < mediaData.length - 1) {
      setSelectedMediaIndex(selectedMediaIndex + 1)
    }
  }

  const closeViewer = () => {
    setSelectedMediaIndex(null)
  }

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our performances, classes, and musical journey
          </p>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          {selectedMedia ? (
            /* Full Screen Media Viewer */
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
              <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeViewer}
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                {selectedMediaIndex !== null && selectedMediaIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {selectedMediaIndex !== null && selectedMediaIndex < mediaData.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}

                {/* Media Content */}
                <div className="w-full h-full flex items-center justify-center">
                  {selectedMedia.type === "video" ? (
                    <video src={selectedMedia.src} controls className="max-w-full max-h-full object-contain" autoPlay />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={selectedMedia.src || "/placeholder.svg"}
                        alt={`Gallery Image ${(selectedMediaIndex || 0) + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  )}
                </div>

                {/* Media Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {(selectedMediaIndex || 0) + 1} of {mediaData.length}
                </div>
              </div>
            </div>
          ) : (
            /* Gallery Grid */
            <>
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold mb-6 md:mb-0">Our Collection</h2>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mediaData.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer group"
                    onClick={() => setSelectedMediaIndex(index)}
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      {item.type === "video" ? (
                        <>
                          <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={`Video ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                            <PlayCircle className="h-12 w-12 text-white transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </>
                      ) : (
                        <Image
                          src={item.src || "/placeholder.svg"}
                          alt={`Image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}

                      {/* Overlay with media type indicator */}
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.type === "video" ? "VIDEO" : "IMAGE"}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!selectedMedia && (
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
      )}
    </main>
  )
}
