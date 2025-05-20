import ProjectCard from "@/components/project-card"

export const metadata = {
  title: "Proyek - Alfonso Pangaribuan",
  description: "Jelajahi portfolio proyek pengembangan web dan rekayasa perangkat lunak Alfonso Pangaribuan.",
  keywords: "Alfonso Pangaribuan, proyek, portfolio, pengembangan web, rekayasa perangkat lunak, studi kasus",
}

export default function ProyekPage() {
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
    {
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi manajemen tugas dengan autentikasi pengguna",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/learnfun.png",
      link: "#",
    },
    {
      title: "Aplikasi Cuaca",
      description: "Aplikasi cuaca yang menampilkan cuaca saat ini dan prakiraan",
      tags: ["JavaScript", "API", "CSS"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/ldop.png",
      link: "#",
    },
    {
      title: "Platform Blog",
      description: "Platform blog dengan sistem manajemen konten",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/web-pribadi.png",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">Proyek Saya</h1>
        <p className="text-lg mb-8 max-w-3xl">
          Berikut adalah kumpulan proyek yang telah saya kerjakan. Proyek-proyek ini menunjukkan keterampilan saya dalam
          pengembangan web, desain UI/UX, dan rekayasa perangkat lunak.
        </p>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "SoftwareApplication",
                  name: project.title,
                  description: project.description,
                  applicationCategory: "WebApplication",
                  author: {
                    "@type": "Person",
                    name: "Alfonso Pangaribuan",
                  },
                },
              })),
            },
          }),
        }}
      />
    </div>
  )
}
