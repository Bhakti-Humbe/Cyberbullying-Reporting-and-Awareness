"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Upload, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ReportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    setFormSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container py-12">
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold">Report Cyberbullying</h1>
        <p className="text-xl text-muted-foreground">
          File a report about cyberbullying incidents to get help and take action.
        </p>
      </div>

      <Tabs defaultValue="report" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="report">File a Report</TabsTrigger>
          <TabsTrigger value="block">Block User Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="report" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              {formSubmitted ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-center">
                      <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </div>
                    <CardTitle className="text-center">Report Submitted Successfully</CardTitle>
                    <CardDescription className="text-center">
                      Thank you for your report. Our team will review it and take appropriate action.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      You will receive a confirmation email with your report details and a reference number. If you need
                      immediate assistance, please contact our helpline.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button asChild>
                      <a href="/helpline">Contact Helpline</a>
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Cyberbullying Report Form</CardTitle>
                    <CardDescription>
                      Please provide as much detail as possible to help us address the situation effectively.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Your Information</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" placeholder="Enter your name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="Enter your email" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="relationship">Your Relationship to the Situation</Label>
                          <Select>
                            <SelectTrigger id="relationship">
                              <SelectValue placeholder="Select your relationship" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="victim">I am experiencing cyberbullying</SelectItem>
                              <SelectItem value="parent">
                                I am a parent/guardian of someone experiencing cyberbullying
                              </SelectItem>
                              <SelectItem value="friend">
                                I am a friend of someone experiencing cyberbullying
                              </SelectItem>
                              <SelectItem value="educator">I am an educator/school staff</SelectItem>
                              <SelectItem value="witness">I witnessed cyberbullying</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Incident Details</h3>
                        <div className="space-y-2">
                          <Label htmlFor="platform">Platform Where Incident Occurred</Label>
                          <Select>
                            <SelectTrigger id="platform">
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="facebook">Facebook</SelectItem>
                              <SelectItem value="instagram">Instagram</SelectItem>
                              <SelectItem value="tiktok">TikTok</SelectItem>
                              <SelectItem value="twitter">Twitter/X</SelectItem>
                              <SelectItem value="snapchat">Snapchat</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                              <SelectItem value="discord">Discord</SelectItem>
                              <SelectItem value="youtube">YouTube</SelectItem>
                              <SelectItem value="gaming">Gaming Platform</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="text">Text/SMS</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="incident-date">When Did This Occur?</Label>
                          <Input id="incident-date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="frequency">How Often Has This Occurred?</Label>
                          <RadioGroup defaultValue="once">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="once" id="once" />
                              <Label htmlFor="once">Once</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="few-times" id="few-times" />
                              <Label htmlFor="few-times">A few times</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="regularly" id="regularly" />
                              <Label htmlFor="regularly">Regularly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="ongoing" id="ongoing" />
                              <Label htmlFor="ongoing">Ongoing situation</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Description of the Incident</Label>
                          <Textarea
                            id="description"
                            placeholder="Please describe what happened in as much detail as possible"
                            rows={5}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Type of Cyberbullying (Select all that apply)</Label>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="harassment" />
                              <Label htmlFor="harassment">Harassment</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="threats" />
                              <Label htmlFor="threats">Threats</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="impersonation" />
                              <Label htmlFor="impersonation">Impersonation</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="exclusion" />
                              <Label htmlFor="exclusion">Exclusion</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="outing" />
                              <Label htmlFor="outing">Outing/Doxing</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="hate-speech" />
                              <Label htmlFor="hate-speech">Hate Speech</Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Evidence</h3>
                        <div className="space-y-2">
                          <Label htmlFor="evidence">Upload Screenshots or Evidence</Label>
                          <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                            <div className="text-center">
                              <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                              <p className="mt-2 text-sm text-muted-foreground">
                                Drag and drop files here, or click to select files
                              </p>
                              <Input id="evidence" type="file" multiple className="mt-4 w-full" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reported">Have You Reported This to the Platform?</Label>
                          <RadioGroup defaultValue="no">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="reported-yes" />
                              <Label htmlFor="reported-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="reported-no" />
                              <Label htmlFor="reported-no">No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent" required />
                        <Label htmlFor="consent" className="text-sm">
                          I consent to the information provided being used to address this cyberbullying incident.
                        </Label>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit Report
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reporting Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">What to Include</h3>
                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                      <li>Specific details about the incident</li>
                      <li>Dates and times when it occurred</li>
                      <li>Names or usernames of those involved</li>
                      <li>Screenshots or other evidence</li>
                      <li>Any actions already taken</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium">What Happens Next</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      After submitting your report, our team will review it within 24-48 hours. You'll receive a
                      confirmation email with a reference number. We may contact you for additional information if
                      needed.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  If you're in immediate danger or facing threats of harm, please contact local law enforcement
                  immediately.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    If you need assistance with filing a report or have questions, our support team is available to
                    help.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/helpline">Contact Support</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="block" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>How to Block Users on Different Platforms</CardTitle>
              <CardDescription>
                Step-by-step guides for blocking users and managing privacy settings on popular platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Facebook</h3>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Go to the profile of the person you want to block</li>
                    <li>Click the three dots (...) in the bottom right of their cover photo</li>
                    <li>Select "Block" from the menu</li>
                    <li>Confirm by clicking "Block [Name]"</li>
                  </ol>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-sm">
                      <strong>Note:</strong> When you block someone on Facebook, they won't be able to see your profile,
                      tag you, invite you to events or groups, start a conversation with you, or add you as a friend.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Instagram</h3>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Go to the profile of the person you want to block</li>
                    <li>Tap the three dots (...) in the top right corner</li>
                    <li>Select "Block" from the menu</li>
                    <li>Confirm by tapping "Block" again</li>
                  </ol>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-sm">
                      <strong>Note:</strong> When you block someone on Instagram, they won't be able to find your
                      profile, posts, or stories. Instagram doesn't notify people when you block them.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Twitter/X</h3>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Go to the profile of the person you want to block</li>
                    <li>Click the three dots (...) icon</li>
                    <li>Select "Block @username" from the menu</li>
                    <li>Confirm by clicking "Block"</li>
                  </ol>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-sm">
                      <strong>Note:</strong> When you block someone on Twitter, they won't be able to follow you or view
                      your tweets when logged in. They won't be notified that you've blocked them.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">TikTok</h3>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Go to the profile of the person you want to block</li>
                    <li>Tap the three dots (...) in the top right corner</li>
                    <li>Select "Block" from the menu</li>
                    <li>Confirm by tapping "Block" again</li>
                  </ol>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-sm">
                      <strong>Note:</strong> When you block someone on TikTok, they won't be able to interact with your
                      videos or message you. They won't be notified that you've blocked them.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Snapchat</h3>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Go to your Friends list</li>
                    <li>Press and hold on the person's name</li>
                    <li>Tap "More"</li>
                    <li>Select "Block"</li>
                  </ol>
                  <div className="rounded-md bg-muted p-4">
                    <p className="text-sm">
                      <strong>Note:</strong> When you block someone on Snapchat, they won't be able to view your Story
                      or send you Snaps and Chats. They won't be notified that you've blocked them.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild variant="outline">
                <a href="/support/guides/privacy-settings" className="flex items-center gap-2">
                  View Complete Privacy Guide
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
