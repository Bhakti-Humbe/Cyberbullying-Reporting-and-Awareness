import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageCircle, BarChart2, Video, FileText, Users, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-background py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Stand Against <span className="text-purple-600">Cyberbullying</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Join our community dedicated to raising awareness, providing support, and taking action against online
            harassment and cyberbullying.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/helpline">Get Help Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/awareness">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive resources to combat cyberbullying</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<MessageCircle className="h-10 w-10 text-purple-600" />}
              title="Helpline Chatbot"
              description="Get immediate assistance and guidance through our AI-powered helpline chatbot."
              link="/helpline"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-teal-600" />}
              title="Support Resources"
              description="Access a wide range of support materials, guides, and professional resources."
              link="/support"
            />
            <FeatureCard
              icon={<BarChart2 className="h-10 w-10 text-purple-600" />}
              title="Statistics & Research"
              description="Explore data and research on cyberbullying to better understand the issue."
              link="/statistics"
            />
            <FeatureCard
              icon={<Video className="h-10 w-10 text-teal-600" />}
              title="Awareness Sessions"
              description="Watch educational videos and participate in awareness sessions."
              link="/awareness"
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-purple-600" />}
              title="Report System"
              description="File complaints and report cyberbullying incidents through our secure system."
              link="/report"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-teal-600" />}
              title="Community Forum"
              description="Connect with others, share experiences, and build a supportive community."
              link="/community"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-100 dark:bg-purple-900/20 py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Make a Difference?</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Join our community today and help create a safer online environment for everyone.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/community/join">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={link}>
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
