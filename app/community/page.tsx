"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, Calendar, Users, ArrowRight, Search } from "lucide-react"

// Mock data for community members
const communityMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Moderator",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 156,
    joined: "Jan 2022",
  },
  {
    id: 2,
    name: "Jamie Smith",
    role: "Educator",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 89,
    joined: "Mar 2022",
  },
  {
    id: 3,
    name: "Taylor Wilson",
    role: "Student Advocate",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 124,
    joined: "Feb 2022",
  },
  {
    id: 4,
    name: "Morgan Lee",
    role: "Parent",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 67,
    joined: "Apr 2022",
  },
  {
    id: 5,
    name: "Casey Brown",
    role: "Counselor",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 201,
    joined: "Dec 2021",
  },
  {
    id: 6,
    name: "Jordan Rivera",
    role: "Member",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 42,
    joined: "May 2022",
  },
]

// Mock data for forum discussions
const forumDiscussions = [
  {
    id: 1,
    title: "How to approach cyberbullying with teenagers",
    author: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 days ago",
    replies: 24,
    likes: 18,
    category: "Parents",
  },
  {
    id: 2,
    title: "Resources for schools implementing anti-bullying programs",
    author: "Casey Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "5 days ago",
    replies: 31,
    likes: 42,
    category: "Educators",
  },
  {
    id: 3,
    title: "Sharing my experience: How I overcame cyberbullying",
    author: "Jordan Rivera",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "1 week ago",
    replies: 56,
    likes: 87,
    category: "Stories",
  },
  {
    id: 4,
    title: "New legislation on cyberbullying: What you need to know",
    author: "Taylor Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "1 week ago",
    replies: 19,
    likes: 35,
    category: "News",
  },
  {
    id: 5,
    title: "Tips for digital wellbeing and mental health",
    author: "Morgan Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 weeks ago",
    replies: 42,
    likes: 63,
    category: "Wellbeing",
  },
]

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Digital Citizenship Workshop",
    date: "May 15, 2023",
    time: "3:00 PM - 4:30 PM EST",
    location: "Virtual",
    description: "Learn about responsible online behavior and digital citizenship in this interactive workshop.",
  },
  {
    id: 2,
    title: "Parent-Teacher Forum on Cyberbullying",
    date: "May 22, 2023",
    time: "7:00 PM - 8:30 PM EST",
    location: "Virtual",
    description: "Join our discussion on how parents and teachers can work together to address cyberbullying.",
  },
  {
    id: 3,
    title: "Youth Advocacy Training",
    date: "June 5, 2023",
    time: "4:00 PM - 6:00 PM EST",
    location: "Virtual",
    description: "Training session for young people who want to become advocates against cyberbullying.",
  },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("forum")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter discussions based on search query
  const filteredDiscussions = forumDiscussions.filter(
    (discussion) =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-12">
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold">Community</h1>
        <p className="text-xl text-muted-foreground">
          Connect with others, share experiences, and build a supportive network against cyberbullying.
        </p>
      </div>

      <Tabs defaultValue="forum" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
          <TabsTrigger value="members">Community Members</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="forum" className="mt-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search discussions..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>Start New Discussion</Button>
          </div>

          <div className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <Card key={discussion.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={discussion.avatar || "/placeholder.svg"} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{discussion.title}</CardTitle>
                        <CardDescription>
                          Posted by {discussion.author} • {discussion.date}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{discussion.category}</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      {discussion.likes} likes
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/community/discussion/${discussion.id}`}>View Discussion</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredDiscussions.length === 0 && (
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">No discussions found matching your search.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/community/discussions">View All Discussions</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="members" className="mt-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold">Community Members</h2>
            <Button asChild>
              <Link href="/community/join">Join Our Community</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityMembers.map((member) => (
              <Card key={member.id}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mt-1">
                          {member.role}
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Posts</p>
                      <p className="font-medium">{member.posts}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Joined</p>
                      <p className="font-medium">{member.joined}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href={`/community/profile/${member.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/community/members">View All Members</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button asChild>
              <Link href="/community/events/calendar">View Full Calendar</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="mt-1 flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date} • {event.time}
                        </div>
                      </CardDescription>
                    </div>
                    <Badge>{event.location}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    25 attending
                  </div>
                  <Button asChild>
                    <Link href={`/community/events/${event.id}`}>Register</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Suggest an Event</CardTitle>
                <CardDescription>Have an idea for a community event? Let us know!</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="event-title" className="text-sm font-medium">
                      Event Title
                    </label>
                    <Input id="event-title" placeholder="Enter event title" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-description" className="text-sm font-medium">
                      Event Description
                    </label>
                    <Textarea id="event-description" placeholder="Describe your event idea" rows={3} />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Event Idea</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 p-6">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          <div className="md:flex-1">
            <h2 className="text-2xl font-bold">Join Our Community</h2>
            <p className="mt-2 text-muted-foreground">
              Become a part of our supportive community dedicated to combating cyberbullying. Share experiences, access
              resources, and connect with others.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild size="lg">
              <Link href="/community/join">
                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
