# Profile Website SEO

## Deskripsi Proyek

`profile-website-seo` adalah situs profil personal yang dibangun menggunakan Next.js 13+, TypeScript, Tailwind CSS, dan shadcn/ui. Situs ini mengimplementasikan praktik SEO on‑page dan memantau metrik performa Web Vitals secara real‑time.

## Fitur Utama

* **On‑Page SEO**

  * Title, meta description, dan keywords diatur di setiap halaman
  * Struktur URL bersih (clean URLs)
  * Heading semantik (H1–H6)
  * Atribut `alt` deskriptif pada semua gambar
  * JSON‑LD Schema.org (Person, WebSite, BreadcrumbList)

* **Optimasi Gambar & Aksesibilitas**

  * Format gambar modern (WebP/AVIF)
  * Lazy‑loading dan placeholder blur
  * Preload hero image untuk LCP lebih cepat

* **Pengukuran Kinerja**

  * Integrasi library `web-vitals` (TTFB, FCP, LCP, CLS, INP)
  * Endpoint API untuk menerima metrik
  * Data lokal (DevTools) & data lapangan (Chrome UX Report)

* **Strategi Improvement**

  * Code‑splitting dengan `next/dynamic`
  * Tree‑shaking Tailwind CSS
  * SSG/ISR untuk caching edge
  * Critical CSS inlining
  * Real‑User Monitoring (RUM)

## Teknologi

* [Next.js 13+](https://nextjs.org/) (App Router)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [web-vitals](https://github.com/GoogleChrome/web-vitals)
* Vercel (hosting & CI/CD)

## Persiapan & Instalasi

1. **Clone repo**

   ```bash
   git clone https://github.com/username/profile-website-seo.git
   cd profile-website-seo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # atau npm install
   ```

3. **Jalankan development server**

   ```bash
   pnpm dev
   ```

   Buka `http://localhost:3000` di browser.

4. **Build & preview produksi**

   ```bash
   pnpm build
   pnpm start
   ```

## Struktur Folder

```
/
├─ app/
│   ├─ layout.tsx
│   ├─ head.tsx
│   ├─ page.tsx
│   ├─ tentang/page.tsx
│   ├─ proyek/page.tsx
│   ├─ kontak/page.tsx
│   └─ performa/page.tsx
├─ components/
│   ├─ Navbar.tsx
│   ├─ Footer.tsx
│   └─ PerformanceTracker.tsx
├─ lib/
│   └─ analytics.ts
├─ public/
│   └─ images/
├─ tailwind.config.ts
├─ next.config.mjs
└─ package.json
```

## Implementasi SEO

* **Metadata** diatur via export `metadata` di setiap `layout.tsx` atau `page.tsx`.
* **JSON‑LD** ditempatkan di `app/head.tsx`:

  ```jsx
  <script type="application/ld+json">{JSON.stringify({ /* schema */ })}</script>
  ```

## Pengukuran & Analisis

1. **Web Vitals**

   * `getTTFB`, `getFCP`, `getLCP`, `getCLS`, `getFID` dari `web-vitals`
   * Kirim metrik ke `app/api/analytics/route.ts`

2. **Analisis Lokal**

   * Chrome DevTools → Performance → Live Metrics

3. **Analisis Lapangan**

   * Chrome UX Report (CrUX) p75 via PageSpeed Insights API

4. **Identifikasi Bottleneck**

   * Bundle JS besar, TTFB, load images

## Strategi Improvement

* **Code‑Splitting**: `dynamic()` untuk komponen berat
* **Tree‑Shaking**: konfigurasi purge Tailwind
* **Caching**: gunakan SSG/ISR (`export const revalidate`)
* **Critical CSS**: inline pada head
* **Preload Images**
* **RUM & Synthetic Monitoring**

## Rekomendasi Lanjutan

* Integrasi Grafana/Data Studio untuk monitoring
* Setup alert dengan Sentry/Prometheus
* Update konten SEO‑driven secara berkala
* Migrasi heavy compute ke edge functions/Web Workers

## Lisensi

© Alfonso Pangaribuan
