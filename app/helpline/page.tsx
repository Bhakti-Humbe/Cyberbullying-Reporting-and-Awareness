"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Info, Phone, ArrowRight } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

// Mock responses for the chatbot
const botResponses: Record<string, string> = {
  default: "I'm here to help you with cyberbullying concerns. How can I assist you today?",
  help: "If you're experiencing cyberbullying, remember: 1) Don't respond to the bully, 2) Save evidence, 3) Block the person, 4) Report to the platform, and 5) Talk to someone you trust. Would you like more specific guidance?",
  report:
    "To report cyberbullying, first document the evidence by taking screenshots. Then report it to the platform where it occurred. If it's happening at school, inform a teacher or counselor. For serious cases involving threats or illegal content, contact local law enforcement.",
  resources:
    "We have several resources available. You can visit our Support page for guides and materials, check our Statistics page for research data, or join our Community for peer support. Would you like me to direct you to any of these?",
  emergency:
    "If you're in immediate danger or having thoughts of harming yourself, please contact emergency services immediately by calling 911 (US) or your local emergency number. You can also text HOME to 741741 to reach the Crisis Text Line.",
}

export default function HelplinePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hello, I'm the CyberShield Helpline Assistant. I'm here to provide support and information about cyberbullying. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      let responseContent = botResponses.default

      // Simple keyword matching for demo purposes
      const lowerInput = input.toLowerCase()
      if (lowerInput.includes("help") || lowerInput.includes("what should i do")) {
        responseContent = botResponses.help
      } else if (lowerInput.includes("report") || lowerInput.includes("how to report")) {
        responseContent = botResponses.report
      } else if (lowerInput.includes("resource") || lowerInput.includes("information")) {
        responseContent = botResponses.resources
      } else if (lowerInput.includes("emergency") || lowerInput.includes("crisis") || lowerInput.includes("suicide")) {
        responseContent = botResponses.emergency
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 space-y-2">
            <h1 className="text-3xl font-bold">Helpline Chatbot</h1>
            <p className="text-muted-foreground">
              Our AI-powered helpline is available 24/7 to provide support, guidance, and resources for cyberbullying
              situations.
            </p>
          </div>

          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot Avatar" />
                  <AvatarFallback className="bg-purple-600 text-white">CS</AvatarFallback>
                </Avatar>
                CyberShield Assistant
              </CardTitle>
              <CardDescription>Available 24/7 for support</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-purple-600 text-white" : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`mt-1 text-xs ${
                          message.sender === "user" ? "text-purple-100" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex w-full items-center gap-2"
              >
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-purple-600" />
                About Our Helpline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our helpline chatbot provides immediate support and guidance for cyberbullying situations. While it
                offers helpful information, please remember that in emergency situations, you should contact
                professional help.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Crisis Text Line</h3>
                <p className="text-sm text-muted-foreground">Text HOME to 741741</p>
              </div>
              <div>
                <h3 className="font-medium">National Suicide Prevention Lifeline</h3>
                <p className="text-sm text-muted-foreground">1-800-273-8255</p>
              </div>
              <div>
                <h3 className="font-medium">Emergency Services</h3>
                <p className="text-sm text-muted-foreground">Call 911 (US) or your local emergency number</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="/support">
                  Support Resources <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="/report">
                  Report Cyberbullying <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-between" asChild>
                <a href="/community">
                  Join Community <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
