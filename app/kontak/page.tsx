import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Kontak - Alfonso Pangaribuan",
  description: "Hubungi Alfonso Pangaribuan untuk kolaborasi, kesempatan kerja, atau hanya untuk menyapa.",
  keywords: "Alfonso Pangaribuan, kontak, email, media sosial, hubungi, kolaborasi",
}

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">Hubungi Saya</h1>
        <p className="text-lg mb-8 max-w-3xl">
          Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar obrolan yang bersahabat. Jangan ragu untuk
          menghubungi saya melalui salah satu saluran di bawah ini.
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
              <p>alfonso.122140206@student.itera.ac.id</p>
              <p className="text-sm text-muted-foreground mt-1">Jangan ragu untuk mengirim email kapan saja!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Telepon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+62895-3217-47-837</p>
              <p className="text-sm text-muted-foreground mt-1">Tersedia Senin-Jumat, 9 pagi - 5 sore</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Lokasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Pemda, Lampung Selatan</p>
              <p>Indonesia</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
              <CardDescription>
                Isi formulir di bawah ini dan saya akan menghubungi Anda sesegera mungkin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nama depan</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Nama belakang</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Kesempatan Kerja" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" placeholder="Pesan Anda di sini..." rows={5} />
                </div>

                <Button type="submit" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Terhubung Dengan Saya</CardTitle>
                <CardDescription>Temukan saya di media sosial dan platform lainnya.</CardDescription>
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
                  href="https://instagram.com/alfonsopangaribuan05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span>instagram.com/alfonsopangaribuan05</span>
                </Link>
                <Link
                  href="mailto:alfonso.122140206@student.itera.ac.id"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>alfonso.122140206@student.itera.ac.id</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ketersediaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Saat ini saya tersedia untuk:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Proyek freelance</li>
                  <li>Posisi full-time</li>
                  <li>Kolaborasi</li>
                  <li>Kesempatan berbicara</li>
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
              email: "alfonso.122140206@student.itera.ac.id",
              telephone: "+62895-3217-47-837",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pemda",
                addressRegion: "Lampung Selatan",
                addressCountry: "Indonesia",
              },
              sameAs: ["https://github.com/alfonsopangaribuan", "https://instagram.com/alfonsopangaribuan05"],
            },
          }),
        }}
      />
    </div>
  )
}
