import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, Phone, Mail, BookOpen, Download, ArrowRight } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container py-12">
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold">Support Resources</h1>
        <p className="text-xl text-muted-foreground">
          Access a comprehensive collection of resources to help you understand, prevent, and address cyberbullying.
        </p>
      </div>

      <Tabs defaultValue="resources" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="hotlines">Hotlines</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard
              title="For Students"
              description="Resources to help students identify, prevent, and respond to cyberbullying."
              icon={<BookOpen className="h-8 w-8" />}
              links={[
                { title: "Student Guide to Cyberbullying", href: "/support/guides/students" },
                { title: "How to Report Cyberbullying", href: "/support/guides/reporting" },
                { title: "Digital Safety Tips", href: "/support/guides/digital-safety" },
              ]}
            />

            <ResourceCard
              title="For Parents"
              description="Guidance for parents on monitoring, discussing, and addressing cyberbullying."
              icon={<BookOpen className="h-8 w-8" />}
              links={[
                { title: "Talking to Your Child About Cyberbullying", href: "/support/guides/parents" },
                { title: "Warning Signs of Cyberbullying", href: "/support/guides/warning-signs" },
                { title: "Parental Controls Guide", href: "/support/guides/parental-controls" },
              ]}
            />

            <ResourceCard
              title="For Educators"
              description="Tools and strategies for educators to address cyberbullying in schools."
              icon={<BookOpen className="h-8 w-8" />}
              links={[
                { title: "Classroom Intervention Strategies", href: "/support/guides/educators" },
                { title: "School Policy Development", href: "/support/guides/school-policy" },
                { title: "Educational Materials", href: "/support/guides/educational-materials" },
              ]}
            />

            <ResourceCard
              title="Legal Resources"
              description="Information on laws and legal options related to cyberbullying."
              icon={<BookOpen className="h-8 w-8" />}
              links={[
                { title: "Cyberbullying Laws by State", href: "/support/legal/state-laws" },
                { title: "Legal Options for Victims", href: "/support/legal/victim-options" },
                { title: "Reporting to Law Enforcement", href: "/support/legal/law-enforcement" },
              ]}
            />

            <ResourceCard
              title="Mental Health"
              description="Resources for mental health support for those affected by cyberbullying."
              icon={<BookOpen className="h-8 w-8" />}
              links={[
                { title: "Coping Strategies", href: "/support/mental-health/coping" },
                { title: "Finding a Therapist", href: "/support/mental-health/therapy" },
                { title: "Self-Care Guide", href: "/support/mental-health/self-care" },
              ]}
            />

            <ResourceCard
              title="Downloadable Materials"
              description="Printable guides, posters, and worksheets about cyberbullying."
              icon={<Download className="h-8 w-8" />}
              links={[
                { title: "Cyberbullying Prevention Poster", href: "/support/downloads/poster" },
                { title: "Digital Citizenship Worksheet", href: "/support/downloads/worksheet" },
                { title: "Parent-Child Discussion Guide", href: "/support/downloads/discussion-guide" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="hotlines" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  Crisis Text Line
                </CardTitle>
                <CardDescription>Text HOME to 741741 to connect with a Crisis Counselor</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Free 24/7 support for those in crisis. Text from anywhere in the USA to connect with a trained Crisis
                  Counselor.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://www.crisistextline.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  National Suicide Prevention Lifeline
                </CardTitle>
                <CardDescription>1-800-273-8255</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The Lifeline provides 24/7, free and confidential support for people in distress, prevention and
                  crisis resources.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://suicidepreventionlifeline.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  STOMP Out Bullying HelpChat Line
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A web-based chat program that helps youth who are targets of all forms of bullying including
                  cyberbullying.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://www.stompoutbullying.org/helpchat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  CyberShield Helpline
                </CardTitle>
                <CardDescription>Available 24/7 through our chatbot</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our dedicated helpline provides immediate support and guidance for cyberbullying situations.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/helpline">Access Helpline</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about cyberbullying and how to address it</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is cyberbullying?</AccordionTrigger>
                  <AccordionContent>
                    Cyberbullying is bullying that takes place over digital devices like cell phones, computers, and
                    tablets. It can occur through SMS, text, apps, online in social media, forums, or gaming where
                    people can view, participate in, or share content. Cyberbullying includes sending, posting, or
                    sharing negative, harmful, false, or mean content about someone else.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How is cyberbullying different from traditional bullying?</AccordionTrigger>
                  <AccordionContent>
                    Cyberbullying can happen 24 hours a day, 7 days a week, and can reach a person even when they are
                    alone. It can happen any time of the day or night. Cyberbullying messages and images can be posted
                    anonymously and distributed quickly to a very wide audience. It can be difficult and sometimes
                    impossible to trace the source. Deleting inappropriate or harassing messages, texts, and pictures is
                    extremely difficult after they have been posted or sent.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What should I do if I'm being cyberbullied?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Don't respond to or forward cyberbullying messages.</li>
                      <li>Keep evidence of cyberbullying by taking screenshots or saving messages.</li>
                      <li>Block the person who is cyberbullying you.</li>
                      <li>Report cyberbullying to the social media platform, online service, or cell phone company.</li>
                      <li>Talk to a trusted adult, like a parent, teacher, or school counselor.</li>
                      <li>
                        If the cyberbullying contains threats, hate speech, or sexually explicit content, report it to
                        law enforcement.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How can parents help prevent cyberbullying?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Talk with your children about cyberbullying and other online issues regularly.</li>
                      <li>Establish rules about appropriate technology use.</li>
                      <li>Monitor your child's online activities and be aware of what they're doing online.</li>
                      <li>Model good digital citizenship and respectful online behavior.</li>
                      <li>Use parental controls and privacy settings on devices and accounts.</li>
                      <li>
                        Encourage your children to tell you immediately if they, or someone they know, is being
                        cyberbullied.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Is cyberbullying illegal?</AccordionTrigger>
                  <AccordionContent>
                    Laws vary by state and country, but many places have laws that specifically address cyberbullying or
                    can apply other laws such as those related to harassment, stalking, or hate crimes to cyberbullying
                    cases. Some cyberbullying can be considered criminal activity under laws related to harassment,
                    threats, stalking, or hate crimes. Check our Legal Resources section for more specific information
                    about laws in your area.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 p-6 text-center">
        <h2 className="text-2xl font-bold">Need Immediate Help?</h2>
        <p className="mt-2 text-muted-foreground">
          Our helpline chatbot is available 24/7 to provide immediate support and guidance.
        </p>
        <Button asChild className="mt-4">
          <Link href="/helpline">Access Helpline Now</Link>
        </Button>
      </div>
    </div>
  )
}

function ResourceCard({
  title,
  description,
  icon,
  links,
}: {
  title: string
  description: string
  icon: React.ReactNode
  links: { title: string; href: string }[]
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="flex items-center text-purple-600 hover:underline">
                <ArrowRight className="mr-2 h-4 w-4" />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
