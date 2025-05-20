import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Tentang - Alfonso Pangaribuan",
  description:
    "Pelajari lebih lanjut tentang Alfonso Pangaribuan, latar belakang, pendidikan, dan pengalaman profesionalnya.",
  keywords: "Alfonso Pangaribuan, tentang, pendidikan, pengalaman, keahlian, latar belakang",
}

export default function TentangPage() {
  const pendidikan = [
    {
      institusi: "Institut Teknologi Sumatera (ITERA)",
      gelar: "Sarjana Teknik Informatika",
      periode: "2023 - Sekarang",
      deskripsi:
        "Saat ini saya sedang menempuh pendidikan di program studi Teknik Informatika. Program ini berfokus pada topik-topik lanjutan dalam Ilmu Komputer dan Teknik, termasuk algoritma, struktur data, pengembangan perangkat lunak, dan kecerdasan buatan.",
    },
    {
      institusi: "SMA Negeri 39 Jakarta",
      gelar: "Diploma Sekolah Menengah Atas",
      periode: "2019 - 2022",
      deskripsi: "Lulus sebagai siswa jurusan IPA dengan fokus pada matematika dan ilmu komputer.",
    },
    {
      institusi: "SMP Negeri 9 SSN Jakarta",
      gelar: "Diploma Sekolah Menengah Pertama",
      periode: "2016 - 2019",
      deskripsi:
        "Selama di SMP Negeri 9 SSN Jakarta, saya terlibat dalam kurikulum yang beragam yang menekankan tidak hanya mata pelajaran akademik inti tetapi juga kegiatan ekstrakurikuler yang menumbuhkan keterampilan kepemimpinan dan kerja tim.",
    },
  ]

  const pengalaman = [
    {
      perusahaan: "Pengantar Komputer dan Perangkat Lunak II",
      posisi: "Asisten Praktikum",
      periode: "Januari 2024 - Juni 2024",
      deskripsi:
        "Dalam peran ini, saya memberikan bantuan ekstensif dalam memecahkan masalah pemrograman C++ yang kompleks untuk mahasiswa, memastikan mereka memahami konsep-konsep kunci dalam pengembangan perangkat lunak. Saya mengkoordinasikan tugas dan prosedur pengujian, memastikan kepatuhan dengan standar modul dan tujuan pembelajaran. Tanggung jawab saya juga termasuk memfasilitasi diskusi untuk meningkatkan pemahaman mahasiswa tentang paradigma pemrograman dan teknik debugging.",
    },
    {
      perusahaan: "Tutorial Matematika",
      posisi: "Tutor",
      periode: "Januari 2023 - Juni 2024",
      deskripsi:
        "Dalam peran saya sebagai Tutor Matematika, saya memimpin pengembangan kursus komprehensif yang mengikuti silabus dan modul pembelajaran ITERA. Ini melibatkan merancang pelajaran yang menarik dan interaktif yang memenuhi berbagai gaya belajar, memastikan semua siswa memiliki kesempatan untuk unggul. Saya fokus pada menciptakan lingkungan belajar yang mendukung di mana siswa merasa nyaman mengajukan pertanyaan dan mencari klarifikasi tentang konsep-konsep yang menantang.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">Tentang Saya</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Halo! Saya Alfonso Pangaribuan, mahasiswa Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan
              minat dalam pengembangan perangkat lunak dan teknologi informasi.
            </p>
            <p className="text-lg mb-4">
              Saya adalah mahasiswa Informatika dengan hasrat untuk teknologi dan fokus pada pencapaian hasil
              melalui solusi inovatif. Perjalanan saya di bidang ini didorong oleh keinginan untuk memecahkan masalah
              kompleks dan berkontribusi pada kemajuan teknologi.
            </p>
            <p className="text-lg mb-4">
              Salah satu kekuatan inti saya adalah kemampuan saya untuk mengoptimalkan sistem untuk efisiensi maksimal.
              Saya memiliki pemahaman mendalam tentang prinsip-prinsip pengembangan perangkat lunak dan praktik terbaik,
              yang memungkinkan saya untuk merancang dan mengimplementasikan aplikasi yang kuat dan dapat diskalakan.
            </p>
            <p className="text-lg">
              Ketika saya tidak sedang coding, Anda dapat menemukan saya membaca blog teknologi, bermain basket, atau
              menjelajahi tempat-tempat baru.
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/profile.jpeg"
              alt="Alfonso Pangaribuan"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Pendidikan</h2>
        <div className="grid grid-cols-1 gap-6">
          {pendidikan.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.institusi}</CardTitle>
                    <p className="text-muted-foreground">{edu.gelar}</p>
                  </div>
                  <Badge>{edu.periode}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.deskripsi}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Pengalaman</h2>
        <div className="grid grid-cols-1 gap-6">
          {pengalaman.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.perusahaan}</CardTitle>
                    <p className="text-muted-foreground">{exp.posisi}</p>
                  </div>
                  <Badge>{exp.periode}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.deskripsi}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Minat & Hobi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Teknologi</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Saya senang mengikuti perkembangan tren teknologi terbaru dan bereksperimen dengan bahasa pemrograman
                dan framework baru.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Olahraga</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Basket adalah olahraga favorit saya. Saya bermain secara teratur dengan teman-teman.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Traveling</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Saya suka menjelajahi tempat-tempat baru, mengalami budaya yang berbeda, dan mencoba masakan lokal.</p>
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
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Person",
              name: "Alfonso Pangaribuan",
              description:
                "Alfonso Pangaribuan adalah mahasiswa Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan minat dalam pengembangan perangkat lunak dan teknologi informasi.",
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Institut Teknologi Sumatera",
                  sameAs: "https://www.itera.ac.id/",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "SMA Negeri 39 Jakarta",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "SMP Negeri 9 SSN Jakarta",
                },
              ],
              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Asisten Praktikum",
                  occupationLocation: {
                    "@type": "Organization",
                    name: "Pengantar Komputer dan Perangkat Lunak II",
                  },
                },
                {
                  "@type": "Occupation",
                  name: "Tutor Matematika",
                  occupationLocation: {
                    "@type": "Organization",
                    name: "Institut Teknologi Sumatera",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
