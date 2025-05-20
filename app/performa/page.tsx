"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, AlertTriangle, BarChart, FileText, Zap } from "lucide-react"

export default function PerformaPage() {
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
              title: "Time to First Byte (TTFB) Tinggi",
              description:
                "Pertimbangkan untuk mengoptimalkan waktu respons server atau menggunakan CDN untuk meningkatkan TTFB.",
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
                title: "Waktu Muat Halaman Lambat",
                description:
                  "Pertimbangkan untuk mengoptimalkan sumber daya, mengurangi JavaScript, atau menerapkan lazy loading.",
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
              title: "First Contentful Paint (FCP) Lambat",
              description:
                "Pertimbangkan untuk mengoptimalkan jalur rendering kritis, mengurangi sumber daya yang memblokir rendering.",
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
                title: "Jumlah Permintaan HTTP Tinggi",
                description:
                  "Pertimbangkan untuk menggabungkan file, menggunakan HTTP/2, atau menerapkan petunjuk sumber daya seperti preload.",
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
              title: "Largest Contentful Paint (LCP) Lambat",
              description:
                "Pertimbangkan untuk mengoptimalkan dan mengatur ukuran gambar dengan benar, menggunakan gambar responsif, atau menerapkan lazy loading.",
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
                title: "Gambar Besar Terdeteksi",
                description:
                  "Pertimbangkan untuk mengoptimalkan gambar besar untuk meningkatkan kinerja pemuatan halaman.",
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
    if (ms === null) return "Mengukur..."
    if (ms < 1000) return `${ms.toFixed(0)} ms`
    return `${(ms / 1000).toFixed(2)} detik`
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
        <h1 className="text-4xl font-bold mb-6">Dashboard Performa</h1>
        <p className="text-lg mb-8">
          Pantau metrik performa website ini secara real-time dan dapatkan saran untuk peningkatan.
        </p>
      </section>

      <Tabs defaultValue="metrics">
        <TabsList className="mb-8">
          <TabsTrigger value="metrics">Metrik Performa</TabsTrigger>
          <TabsTrigger value="suggestions">Saran Peningkatan</TabsTrigger>
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
                <p className="text-xs text-muted-foreground mt-2">Waktu hingga byte pertama konten diterima</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Waktu Muat Halaman</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(metrics.pageLoadTime)}</div>
                <Progress value={getPerformanceScore("pageLoadTime", metrics.pageLoadTime)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Total waktu untuk memuat seluruh halaman</p>
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
                <p className="text-xs text-muted-foreground mt-2">Waktu hingga konten pertama dirender</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Permintaan HTTP</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {metrics.httpRequests === null ? "Menghitung..." : metrics.httpRequests}
                </div>
                <Progress value={getPerformanceScore("httpRequests", metrics.httpRequests)} className="h-2 mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Jumlah permintaan HTTP yang dibuat oleh halaman</p>
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
                <p className="text-xs text-muted-foreground mt-2">Waktu hingga elemen konten terbesar dirender</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="suggestions">
          <div className="space-y-4">
            {suggestions.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p>Belum ada saran yang tersedia. Menganalisis performa...</p>
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
            <CardTitle>Tentang Metrik Performa</CardTitle>
            <CardDescription>Memahami indikator kinerja utama untuk website Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-bold">Time to First Byte (TTFB)</h3>
              <p className="text-sm text-muted-foreground">
                Mengukur waktu dari permintaan pengguna hingga byte pertama konten halaman diterima. TTFB yang baik
                adalah di bawah 200ms.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Waktu Muat Halaman</h3>
              <p className="text-sm text-muted-foreground">
                Total waktu yang dibutuhkan untuk halaman dimuat sepenuhnya. Targetkan di bawah 3 detik untuk pengalaman
                pengguna yang optimal.
              </p>
            </div>

            <div>
              <h3 className="font-bold">First Contentful Paint (FCP)</h3>
              <p className="text-sm text-muted-foreground">
                Mengukur kapan browser merender bit pertama konten dari DOM. FCP yang baik adalah di bawah 1 detik.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Permintaan HTTP</h3>
              <p className="text-sm text-muted-foreground">
                Jumlah permintaan HTTP yang dibuat oleh halaman. Semakin sedikit permintaan umumnya mengarah ke waktu
                pemuatan yang lebih cepat.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Largest Contentful Paint (LCP)</h3>
              <p className="text-sm text-muted-foreground">
                Mengukur kapan elemen konten terbesar dirender di layar. LCP yang baik adalah di bawah 2,5 detik.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
