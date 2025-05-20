import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "About - Alfonso Pangaribuan",
  description: "Learn more about Alfonso Pangaribuan, his background, education, and professional experience.",
  keywords: "Alfonso Pangaribuan, about, education, experience, skills, background",
}

export default function AboutPage() {
  const education = [
    {
      institution: "Del Institute of Technology",
      degree: "Bachelor of Computer Science",
      period: "2020 - 2024",
      description:
        "Focusing on software engineering and web development. Participated in various programming competitions and hackathons.",
    },
    {
      institution: "SMA Negeri 1 Medan",
      degree: "High School Diploma",
      period: "2017 - 2020",
      description: "Science major with focus on mathematics and computer science.",
    },
  ]

  const experience = [
    {
      company: "Tech Company",
      position: "Software Engineer Intern",
      period: "June 2023 - August 2023",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with the design team to implement UI/UX designs.",
    },
    {
      company: "Freelance",
      position: "Web Developer",
      period: "2021 - Present",
      description: "Designed and developed websites for various clients using modern web technologies.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Hello! I'm Alfonso Pangaribuan, a passionate software engineer and web developer based in Jakarta,
              Indonesia. I specialize in creating beautiful and functional web applications using modern technologies.
            </p>
            <p className="text-lg mb-4">
              My journey in web development started during my high school years when I first discovered HTML and CSS.
              Since then, I've been continuously learning and expanding my skills to include JavaScript, React, Node.js,
              and many other technologies.
            </p>
            <p className="text-lg mb-4">
              I'm currently pursuing my degree in Computer Science at Del Institute of Technology, where I'm enhancing
              my knowledge in software development, algorithms, and problem-solving.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me reading tech blogs, playing basketball, or exploring new places.
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Alfonso Pangaribuan"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.institution}</CardTitle>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <Badge>{edu.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid grid-cols-1 gap-6">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.company}</CardTitle>
                    <p className="text-muted-foreground">{exp.position}</p>
                  </div>
                  <Badge>{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Interests & Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I enjoy staying up-to-date with the latest tech trends and experimenting with new programming languages
                and frameworks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Basketball is my favorite sport. I play regularly with friends and follow the NBA closely.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I love exploring new places, experiencing different cultures, and trying local cuisines.</p>
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
                "Alfonso Pangaribuan is a software engineer and web developer specializing in front-end development and UI/UX design.",
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Del Institute of Technology",
                  sameAs: "https://www.del.ac.id/",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "SMA Negeri 1 Medan",
                },
              ],
              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Software Engineer",
                  occupationLocation: {
                    "@type": "Organization",
                    name: "Tech Company",
                  },
                },
                {
                  "@type": "Occupation",
                  name: "Web Developer",
                  occupationLocation: {
                    "@type": "Organization",
                    name: "Freelance",
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
