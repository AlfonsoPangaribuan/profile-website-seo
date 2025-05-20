import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Instagram, Mail } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function Home() {
  const projects = [
    {
      title: "Website Personal",
      description: "Website personal yang dibangun dengan Next.js dan Tailwind CSS",
      tags: ["Next.js", "React", "Tailwind CSS"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/web-pribadi.png",
      link: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/",
    },
    {
      title: "LDOP 5.0",
      description: "Proyek untuk acara LDOP 5.0",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/ldop.png",
      link: "https://alfonsopangaribuan.github.io/ldop-5.0/",
    },
    {
      title: "Aplikasi E-Commerce",
      description: "Website e-commerce dengan fungsionalitas keranjang belanja",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/learnfun.png",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Halo, Saya Alfonso Pangaribuan
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Mahasiswa Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan minat dalam pengembangan
              perangkat lunak dan teknologi informasi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/tentang">
                  Tentang Saya <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/kontak">Kontak</Link>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <Link href="https://github.com/alfonsopangaribuan" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://instagram.com/alfonsopangaribuan05" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="mailto:alfonso.122140206@student.itera.ac.id">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
            <Image
              src="https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/profile.jpeg"
              alt="Alfonso Pangaribuan"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
            <p className="mb-4">
              Saya adalah mahasiswa Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan minat dalam
              pengembangan perangkat lunak dan teknologi informasi.
            </p>
            <p className="mb-4">
              Saya memiliki pengalaman sebagai asisten praktikum Pengantar Komputer dan Perangkat Lunak II serta tutor
              Matematika. Saya terampil dalam menggunakan teknologi terkini untuk mengoptimalkan proses dan meningkatkan
              efisiensi secara keseluruhan.
            </p>
            <Button variant="outline" asChild>
              <Link href="/tentang">Pelajari Lebih Lanjut Tentang Saya</Link>
            </Button>
          </div>
          <div className="relative h-[300px] w-full order-1 md:order-2">
            <Image
              src="https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/itera.jpg"
              alt="Alfonso sedang bekerja pada sebuah proyek"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Proyek Unggulan</h2>
          <Button variant="outline" asChild>
            <Link href="/proyek">Lihat Semua Proyek</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Keahlian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Pengembangan Frontend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>TypeScript</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pengembangan Backend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>MongoDB</Badge>
              <Badge>SQL</Badge>
              <Badge>RESTful APIs</Badge>
              <Badge>PHP</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Alat & Teknologi</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Git</Badge>
              <Badge>GitHub</Badge>
              <Badge>VS Code</Badge>
              <Badge>Figma</Badge>
              <Badge>Adobe XD</Badge>
              <Badge>Docker</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Pemecahan Masalah</Badge>
              <Badge>Kolaborasi Tim</Badge>
              <Badge>Komunikasi</Badge>
              <Badge>Manajemen Waktu</Badge>
              <Badge>Manajemen Proyek</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alfonso Pangaribuan",
            url: "https://alfonso-pangaribuan.vercel.app",
            image:
              "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/itera.jpg",
            sameAs: ["https://github.com/alfonsopangaribuan", "https://instagram.com/alfonsopangaribuan05"],
            jobTitle: "Mahasiswa Teknik Informatika",
            worksFor: {
              "@type": "Organization",
              name: "Institut Teknologi Sumatera",
              sameAs: "https://www.itera.ac.id/",
            },
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "SMP Negeri 9 SSN Jakarta",
              },
              {
                "@type": "EducationalOrganization",
                name: "SMA Negeri 39 Jakarta",
              },
              {
                "@type": "EducationalOrganization",
                name: "Institut Teknologi Sumatera",
                sameAs: "https://www.itera.ac.id/",
              },
            ],
            description:
              "Alfonso Pangaribuan adalah mahasiswa Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan minat dalam pengembangan perangkat lunak dan teknologi informasi.",
            email: "alfonso.122140206@student.itera.ac.id",
            telephone: "+62895-3217-47-837",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pemda",
              addressRegion: "Lampung Selatan",
              addressCountry: "Indonesia",
            },
          }),
        }}
      />
    </div>
  )
}
