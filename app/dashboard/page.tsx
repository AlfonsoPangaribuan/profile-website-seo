"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, AlertTriangle, BarChart, FileText, Zap } from "lucide-react"

export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    ttfb: null,
    pageLoadTime: null,
    fcp: null,
    httpRequests: null,
    lcp: null,
  })

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      if (performance && performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart
        setMetrics((prev) => ({ ...prev, ttfb }))

        // Add suggestion if TTFB is high
        if (ttfb > 200) {
          setSuggestions((prev) => [
            ...prev,
            {
              type: "warning",
              title: "High Time to First Byte",
              description: "Consider optimizing server response time or using a CDN to improve TTFB.",
            },
          ])
        }
      }
    }

    // Measure Page Load Time
    const measurePageLoadTime = () => {
      window.addEventListener("load", () => {
        if (performance && performance.timing) {
          const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
          setMetrics((prev) => ({ ...prev, pageLoadTime }))

          // Add suggestion if page load time is high
          if (pageLoadTime > 3000) {
            setSuggestions((prev) => [
              ...prev,
              {
                type: "warning",
                title: "Slow Page Load Time",
                description: "Consider optimizing resources, reducing JavaScript, or implementing lazy loading.",
              },
            ])
          }
        }
      })
    }

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const fcp = entries[0]?.startTime
        setMetrics((prev) => ({ ...prev, fcp }))

        // Add suggestion if FCP is high
        if (fcp > 1000) {
          setSuggestions((prev) => [
            ...prev,
            {
              type: "warning",
              title: "Slow First Contentful Paint",
              description: "Consider optimizing critical rendering path, reducing render-blocking resources.",
            },
          ])
        }

        fcpObserver.disconnect()
      })

      fcpObserver.observe({ type: "paint", buffered: true })
    }

    // Count HTTP Requests
    const countHTTPRequests = () => {
      window.addEventListener("load", () => {
        if (performance) {
          const resources = performance.getEntriesByType("resource")
          const httpRequests = resources.length
          setMetrics((prev) => ({ ...prev, httpRequests }))

          // Add suggestion if too many HTTP requests
          if (httpRequests > 50) {
            setSuggestions((prev) => [
              ...prev,
              {
                type: "warning",
                title: "High Number of HTTP Requests",
                description: "Consider bundling files, using HTTP/2, or implementing resource hints like preload.",
              },
            ])
          }
        }
      })
    }

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lcp = entries[entries.length - 1]?.startTime
        setMetrics((prev) => ({ ...prev, lcp }))

        // Add suggestion if LCP is high
        if (lcp > 2500) {
          setSuggestions((prev) => [
            ...prev,
            {
              type: "warning",
              title: "Slow Largest Contentful Paint",
              description:
                "Consider optimizing and properly sizing images, using responsive images, or implementing lazy loading.",
            },
          ])
        }

        lcpObserver.disconnect()
      })

      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })
    }

    // Check for image optimization
    const checkImageOptimization = () => {
      window.addEventListener("load", () => {
        if (performance) {
          const resources = performance.getEntriesByType("resource")
          const images = resources.filter(
            (resource) => resource.initiatorType === "img" && resource.decodedBodySize > 100000,
          )

          if (images.length > 0) {
            setSuggestions((prev) => [
              ...prev,
              {
                type: "warning",
                title: "Large Images Detected",
                description: "Consider optimizing large images to improve page load performance.",
              },
            ])
          }
        }
      })
    }

    // Run all measurements
    measureTTFB()
    measurePageLoadTime()
    measureFCP()
    countHTTPRequests()
    measureLCP()
    checkImageOptimization()

    // Cleanup
    return () => {
      window.removeEventListener("load", measurePageLoadTime)
      window.removeEventListener("load", countHTTPRequests)
      window.removeEventListener("load", checkImageOptimization)
    }
  }, [])

  // Format milliseconds to a readable format
  const formatTime = (ms) => {
    if (ms === null) return "Measuring..."
    if (ms < 1000) return `${ms.toFixed(0)} ms`
    return `${(ms / 1000).toFixed(2)} s`
  }

  // Get performance score based on metric value
  const getPerformanceScore = (metric, value) => {
    if (value === null) return 0

    switch (metric) {
      case "ttfb":
        return value < 100 ? 100 : value < 200 ? 80 : value < 500 ? 60 : value < 1000 ? 40 : 20
      case "pageLoadTime":
        return value < 1000 ? 100 : value < 2000 ? 80 : value < 3000 ? 60 : value < 5000 ? 40 : 20
      case "fcp":
        return value < 500 ? 100 : value < 1000 ? 80 : value < 2000 ? 60 : value < 3000 ? 40 : 20
      case "lcp":
        return value < 1000 ? 100 : value < 2500 ? 80 : value < 4000 ? 60 : value < 6000 ? 40 : 20
      case "httpRequests":
        return value < 20 ? 100 : value < 40 ? 80 : value < 60 ? 60 : value < 80 ? 40 : 20
      default:
        return 0
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-6">Performance Dashboard</h1>
        <p className="text-lg mb-8">
          Monitor your website's performance metrics in real-time and get suggestions for improvement.
        </p>
      </section>

      <Tabs defaultValue="metrics">
        <TabsList className="mb-8">
          <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
          <TabsTrigger value="suggestions">Improvement Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Time to First Byte (TTFB)</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(metrics.ttfb)}</div>
                <Progress value={getPerformanceScore("ttfb", metrics.ttfb)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Time until the first byte of content is received</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Load Time</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(metrics.pageLoadTime)}</div>
                <Progress value={getPerformanceScore("pageLoadTime", metrics.pageLoadTime)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Total time to load the entire page</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">First Contentful Paint (FCP)</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(metrics.fcp)}</div>
                <Progress value={getPerformanceScore("fcp", metrics.fcp)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Time until the first content is painted</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">HTTP Requests</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {metrics.httpRequests === null ? "Counting..." : metrics.httpRequests}
                </div>
                <Progress value={getPerformanceScore("httpRequests", metrics.httpRequests)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Number of HTTP requests made by the page</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Largest Contentful Paint (LCP)</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(metrics.lcp)}</div>
                <Progress value={getPerformanceScore("lcp", metrics.lcp)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Time until the largest content element is painted</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="suggestions">
          <div className="space-y-4">
            {suggestions.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p>No suggestions available yet. Analyzing performance...</p>
                </CardContent>
              </Card>
            ) : (
              suggestions.map((suggestion, index) => (
                <Alert key={index} variant={suggestion.type === "warning" ? "destructive" : "default"}>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>{suggestion.title}</AlertTitle>
                  <AlertDescription>{suggestion.description}</AlertDescription>
                </Alert>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>

      <section className="py-12 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>About Performance Metrics</CardTitle>
            <CardDescription>Understanding the key performance indicators for your website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold">Time to First Byte (TTFB)</h3>
              <p className="text-sm text-muted-foreground">
                Measures the time from the user's request to the first byte of page content being received. Good TTFB is
                under 200ms.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Page Load Time</h3>
              <p className="text-sm text-muted-foreground">
                The total time it takes for the page to fully load. Aim for under 3 seconds for optimal user experience.
              </p>
            </div>

            <div>
              <h3 className="font-bold">First Contentful Paint (FCP)</h3>
              <p className="text-sm text-muted-foreground">
                Measures when the browser renders the first bit of content from the DOM. Good FCP is under 1 second.
              </p>
            </div>

            <div>
              <h3 className="font-bold">HTTP Requests</h3>
              <p className="text-sm text-muted-foreground">
                The number of HTTP requests made by the page. Fewer requests generally lead to faster loading times.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Largest Contentful Paint (LCP)</h3>
              <p className="text-sm text-muted-foreground">
                Measures when the largest content element is rendered on the screen. Good LCP is under 2.5 seconds.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
