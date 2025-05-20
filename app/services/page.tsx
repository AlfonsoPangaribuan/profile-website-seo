import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Code, Database, LineChart, Smartphone } from "lucide-react"

export const metadata = {
  title: "Our Services",
  description: "Explore the comprehensive range of business solutions and services offered by Acme Inc.",
  keywords: "business solutions, consulting services, software development, digital transformation, IT services",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      details:
        "Our team of expert developers creates custom software solutions that streamline your operations, enhance customer experience, and drive business growth.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure and migration services",
      details:
        "We help businesses leverage the power of cloud computing with our comprehensive cloud solutions, from migration to management and optimization.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Business Intelligence",
      description: "Data analytics and insights to drive informed decision-making",
      details:
        "Transform your data into actionable insights with our business intelligence solutions, helping you make data-driven decisions that drive growth.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      details:
        "We develop high-performance, user-friendly mobile applications that help you engage with your customers and streamline your operations.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg mb-8 max-w-3xl">
          At Acme Inc, we offer a comprehensive range of services designed to help businesses leverage technology to
          achieve their goals. From custom software development to cloud solutions and business intelligence, we have
          the expertise to deliver solutions that drive growth and efficiency.
        </p>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div>
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-4">{service.description}</p>
                <p className="mb-6">{service.details}</p>
                <Button asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[300px] w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`Illustration of ${service.title} service by Acme Inc`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted rounded-lg my-12 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Discovery",
              description: "We start by understanding your business, goals, and challenges.",
            },
            { step: "2", title: "Planning", description: "We develop a detailed plan and roadmap for your project." },
            { step: "3", title: "Execution", description: "Our team implements the solution according to the plan." },
            {
              step: "4",
              title: "Support",
              description: "We provide ongoing support and maintenance for your solution.",
            },
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  {step.step}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: "Acme Inc",
                },
              },
            })),
          }),
        }}
      />
    </div>
  )
}
