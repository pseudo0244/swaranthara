"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg1.jpg"
            alt="Contact Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in touch with our team and start your musical journey today
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about our programs or want to schedule a visit? Reach out to us using any of the
                  methods below or fill out the contact form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 8105575750</p>
                    <p className="text-sm text-muted-foreground mt-1">Monday-Friday: 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground">umesha490@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-muted-foreground">No 502, 1st floor, 16th cross
                      Nagasandra post, Bangalore-560073</p>
                    <p className="text-sm text-muted-foreground mt-1">Visit us for a tour of our facilities</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Link href="https://www.instagram.com/swaranthara.22?igsh=bnh3OHhvMm1qYjAz" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Button className="rounded-full">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {isSuccess ? (
                <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : null}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8704938226715!2d77.5024465!3d13.058252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae230a5f8bdef9%3A0x485f45308dfb9e02!2sSwaranthara%20School%20Of%20Music!5e0!3m2!1sen!2sin!4v1711543200000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Swaranthara School Of Music Location"
></iframe>

          </div>
        </div>
      </section>
    </main>
  )
}

