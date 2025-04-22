"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"


export default function StatisticsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-12">
      <div className="mb-10 space-y-4">
        <h1 className="text-4xl font-bold">Cyberbullying Statistics</h1>
        <p className="text-xl text-muted-foreground">
          Explore data and research on cyberbullying to better understand its prevalence, impact, and trends.
        </p>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Prevalence"
              value="37%"
              description="of young people between the ages of 12 and 17 have been bullied online"
              icon={<PieChart className="h-8 w-8 text-purple-600" />}
            />
            <StatCard
              title="Reporting"
              value="Only 1 in 10"
              description="victims will inform a parent or trusted adult of their abuse"
              icon={<BarChart className="h-8 w-8 text-teal-600" />}
            />
            <StatCard
              title="Platforms"
              value="Social Media"
              description="is where 65% of cyberbullying occurs, followed by messaging apps at 24%"
              icon={<PieChart className="h-8 w-8 text-purple-600" />}
            />
            <StatCard
              title="Witnesses"
              value="90%"
              description="of teens who have witnessed cyberbullying have ignored it"
              icon={<BarChart className="h-8 w-8 text-teal-600" />}
            />
            <StatCard
              title="Growth"
              value="24%"
              description="increase in cyberbullying incidents over the past 5 years"
              icon={<LineChart className="h-8 w-8 text-purple-600" />}
            />
            <StatCard
              title="Awareness"
              value="60%"
              description="of parents with children aged 14-18 worry about their child being bullied online"
              icon={<PieChart className="h-8 w-8 text-teal-600" />}
            />
          </div>

          <div className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Cyberbullying Prevalence by Year</CardTitle>
                <CardDescription>Percentage of young people who reported being cyberbullied</CardDescription>
              </CardHeader>
              <CardContent>
                
              <img src="/chart.png" alt="Chart" className="w-full h-auto" />


              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cyberbullying by Age Group</CardTitle>
                <CardDescription>Percentage of individuals who reported being cyberbullied</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="bar" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cyberbullying by Gender</CardTitle>
                <CardDescription>Distribution of cyberbullying victims by gender</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="pie" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cyberbullying by Platform</CardTitle>
                <CardDescription>Where cyberbullying most commonly occurs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="bar" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Cyberbullying rates by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="map" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Mental Health Impact</CardTitle>
                <CardDescription>Reported mental health effects of cyberbullying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="bar" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>Impact of cyberbullying on academic achievement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="line" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Long-term Effects</CardTitle>
                <CardDescription>Reported long-term consequences of cyberbullying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="pie" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intervention Effectiveness</CardTitle>
                <CardDescription>Success rates of different intervention strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ChartPlaceholder type="bar" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 p-6">
        <h2 className="text-2xl font-bold">Research Methodology</h2>
        <p className="mt-2 text-muted-foreground">
          The statistics presented on this page are compiled from various reputable sources, including academic
          research, government surveys, and reports from organizations dedicated to cyberbullying prevention. Data is
          updated annually to reflect the most current information available.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md bg-white p-4 shadow dark:bg-background">
            <h3 className="font-medium">Data Collection</h3>
            <p className="text-sm text-muted-foreground">
              Data is collected through surveys, interviews, and analysis of reported incidents across multiple
              platforms and regions.
            </p>
          </div>
          <div className="rounded-md bg-white p-4 shadow dark:bg-background">
            <h3 className="font-medium">Sample Size</h3>
            <p className="text-sm text-muted-foreground">
              Our statistics are based on samples ranging from 2,000 to 15,000 participants, ensuring statistical
              significance.
            </p>
          </div>
          <div className="rounded-md bg-white p-4 shadow dark:bg-background">
            <h3 className="font-medium">Verification</h3>
            <p className="text-sm text-muted-foreground">
              All data undergoes rigorous verification and is cross-referenced with multiple sources to ensure accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ChartPlaceholder({ type }: { type: "bar" | "line" | "pie" | "map" }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed p-4">
      <div className="text-center">
        {type === "bar" && <BarChart className="mx-auto h-16 w-16 text-muted-foreground" />}
        {type === "line" && <LineChart className="mx-auto h-16 w-16 text-muted-foreground" />}
        {type === "pie" && <PieChart className="mx-auto h-16 w-16 text-muted-foreground" />}
        {type === "map" && (
          <div className="mx-auto h-16 w-16 rounded-md border-2 border-muted-foreground text-muted-foreground">
            <div className="flex h-full items-center justify-center">Map</div>
          </div>
        )}
        <p className="mt-2 text-sm text-muted-foreground">
          {type.charAt(0).toUpperCase() + type.slice(1)} Chart Visualization
        </p>
      </div>
    </div>
  )
}
