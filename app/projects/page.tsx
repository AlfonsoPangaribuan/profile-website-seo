import ProjectCard from "@/components/project-card"

export const metadata = {
  title: "Projects - Alfonso Pangaribuan",
  description: "Explore Alfonso Pangaribuan's portfolio of web development and software engineering projects.",
  keywords: "Alfonso Pangaribuan, projects, portfolio, web development, software engineering, case studies",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Website",
      description: "A personal website built with Next.js and Tailwind CSS",
      tags: ["Next.js", "React", "Tailwind CSS"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/web-pribadi.png",
      link: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/",
    },
    {
      title: "LDOP 5.0",
      description: "A project for LDOP 5.0 event",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/ldop.png",
      link: "https://alfonsopangaribuan.github.io/ldop-5.0/",
    },
    {
      title: "E-Commerce Website",
      description: "An e-commerce website with shopping cart functionality",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://alfonsopangaribuan.github.io/Tugas3PemwebRA/assets/learnfun.png",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A task management application with user authentication",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Weather App",
      description: "A weather application that displays current weather and forecast",
      tags: ["JavaScript", "API", "CSS"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A blog platform with content management system",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg mb-8 max-w-3xl">
          Here's a collection of projects I've worked on. These projects showcase my skills in web development, UI/UX
          design, and software engineering.
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
