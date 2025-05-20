import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact - Alfonso Pangaribuan",
  description: "Get in touch with Alfonso Pangaribuan for collaboration, job opportunities, or just to say hello.",
  keywords: "Alfonso Pangaribuan, contact, email, social media, get in touch, collaboration",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-8 max-w-3xl">
          I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me
          through any of the channels below.
        </p>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>alfonso.pangaribuan@example.com</p>
              <p className="text-sm text-muted-foreground mt-1">Feel free to email me anytime!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+62 812 3456 7890</p>
              <p className="text-sm text-muted-foreground mt-1">Available Monday-Friday, 9am-5pm</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Medan, North Sumatra</p>
              <p>Indonesia</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Job Opportunity" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." rows={5} />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>Find me on social media and other platforms.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://github.com/alfonsopangaribuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  <span>github.com/alfonsopangaribuan</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/alfonso-pangaribuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span>linkedin.com/in/alfonso-pangaribuan</span>
                </Link>
                <Link
                  href="mailto:alfonso.pangaribuan@example.com"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>alfonso.pangaribuan@example.com</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>I'm currently available for:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Freelance projects</li>
                  <li>Full-time positions</li>
                  <li>Collaborations</li>
                  <li>Speaking engagements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Person",
              name: "Alfonso Pangaribuan",
              email: "alfonso.pangaribuan@example.com",
              telephone: "+62-812-3456-7890",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medan",
                addressRegion: "North Sumatra",
                addressCountry: "Indonesia",
              },
              sameAs: ["https://github.com/alfonsopangaribuan", "https://linkedin.com/in/alfonso-pangaribuan"],
            },
          }),
        }}
      />
    </div>
  )
}
